import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductionOrderResponse } from './models/production-order-response';
import { Task } from './models/task';
import { firstValueFrom } from 'rxjs';

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
      task.title = response.order_title;
      task.parentId = response.parent_id!;
      task.progress = response.progress;
      res.push(task);
    });

    return res;
  }
}
