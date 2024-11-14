// Define the interface for a single production order
export interface ProductionOrder {
  production_order_id: number;
  parent_id?: number; // Optional, since not all production orders have a parent_id
  order_title: string;
  start_date: string;
  end_date: string;
  progress: number;
}
