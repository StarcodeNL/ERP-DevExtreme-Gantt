import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductionOrderResponse } from './models/production-order-response';
import { Task } from './models/task';
import { firstValueFrom } from 'rxjs';
import { ProductionOrder } from './models/production-order';

@Injectable()
export class Service {
  constructor(private http: HttpClient) {}

  /**
   * Get ProductionOrderTasks from Indicium server
   * @returns After the conversion from ProductionOrder to Task array is done it will return a Task array, if no results then a empty array is expected
   */
  public async getProductionOrderTasks(url: string): Promise<Task[]> {
    let res: Task[] = [];

    const jsonData = await firstValueFrom(this.http.get(url));

    //Cast the response to fit into the task object
    // Process the response
    const productionOrderResponse = ProductionOrderResponse.fromJSON(jsonData);
    productionOrderResponse.value.map((response) => {
      let task: Task = new Task();
      task.id = response.production_order_id;
      task.end = new Date(response.end_date);
      task.start = new Date(response.start_date);
      task.title = this.getTitle(response);
      task.parentId = response.parent_id!;
      task.progress = response.progress;
      res.push(task);
    });

    return res;
  }

  /**
   * Get tile from request object
   * Check if the object has a planning or a order title
   * @param response API response
   * @returns A string representing the title
   */
  getTitle(response: any): any {
    if (response.order_title) return response.order_title;
    else response.planning_description;
  }

  updateTaskInDb(apiUrl: string, initialObject: Task) {
    let url: string;
    url = `${apiUrl}(production_order_id=${initialObject.id})`;

    if (this.usePlanningProperty(apiUrl))
      url = `${apiUrl}(planning_id=${initialObject.id})`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.patch(url, this.convertFromTaskToBdObject(initialObject), {
      headers,
    });
  }

  createTaskInDB(apiUrl: string, initialObject: Task) {
    const url = `${apiUrl}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, this.createNewDBObject(initialObject), {
      headers,
    });
  }

  deleteTask(apiUrl: string, key: any) {
    const url = `${apiUrl}/${key}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete(url, { headers });
  }

  private convertFromTaskToBdObject(initialObject: Task): ProductionOrder {
    let dbOrder: ProductionOrder = {
      end_date: initialObject.end.toISOString(),
      start_date: initialObject.start.toISOString(),
      order_title: initialObject.title,
      progress: initialObject.progress,
      parent_id: initialObject.parentId,
      production_order_id: initialObject.id,
    };
    return dbOrder;
  }

  private createNewDBObject(initialObject: Task): Partial<ProductionOrder> {
    let dbOrder: Partial<ProductionOrder> = {
      end_date: initialObject.end.toISOString(),
      start_date: initialObject.start.toISOString(),
      order_title: initialObject.title,
      progress: initialObject.progress,
    };
    return dbOrder;
  }

  private usePlanningProperty(url: string): boolean {
    return url.indexOf('planning') > -1;
  }
}
