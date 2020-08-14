import { SalesOrder } from './SalesOrder';
import salesOrders from './salesOrders.json';

/**
 * Retrieves the sales orders to aggregate in the pivot table.
 *
 * @returns A promise that resolves with the orders.
 */
export async function getOrders(): Promise<SalesOrder[]> {
  return Promise.resolve(salesOrders);
}
