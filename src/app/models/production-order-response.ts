import { ProductionOrder } from './production-order';

export class ProductionOrderResponse {
  '@odata.context': string;
  value: ProductionOrder[];

  constructor(odataContext: string, value: ProductionOrder[]) {
    this['@odata.context'] = odataContext;
    this.value = value;
  }

  static fromJSON(json: any): ProductionOrderResponse {
    json.value.forEach((element: any) => {
      if ('planning_id' in element == true) {
        element.production_order_id = element.planning_id;
        delete element.planning_id;
      }
    });
    return new ProductionOrderResponse(json['@odata.context'], json.value);
  }
}
