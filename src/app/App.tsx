import React from 'react';
import PivotTable, { aggregators, Dimension } from '../lib';
import './App.css';
import { getOrders } from './getOrders';
import { SalesOrder } from './SalesOrder';

/**
 * The root application element.
 *
 * @returns The root element of the application.
 */
export default class App extends React.Component {
  /**
   * Loads the sales order data after the component is loaded.
   *
   * @returns A promise that resolves when the sales orders have been loaded.
   */
  public async componentDidMount(): Promise<void> {
    this.orders = await getOrders();

    this.setState({}); // eslint-disable-line react/no-did-mount-set-state
  }

  /**
   * The sales orders to aggregate in the pivot table.
   */
  private orders: SalesOrder[] = [];

  /**
   * Renders the app.
   *
   * @returns The rendered app.
   */
  public render(): JSX.Element {
    const columnDimensions: [Dimension<SalesOrder>] = [
      { name: 'State', property: 'state' }
    ];

    const rowDimensions: Array<Dimension<SalesOrder>> = [
      { name: 'Category', property: 'category' },
      { name: 'Sub-Category', property: 'subCategory' }
    ];

    const title = {
      column: 'States',
      row: 'Products'
    };

    return (
      <PivotTable
        aggregator={aggregators.sum}
        columnDimensions={columnDimensions}
        data={this.orders}
        metric='sales'
        rowDimensions={rowDimensions}
        title={title}
      />
    );
  }
}
