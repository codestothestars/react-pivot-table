import React from 'react';
import { aggregate, AggregatorProps } from '../aggregation';
import columnCellStyles from '../styles/columnCell.module.scss';
import headingStyles from './rowDimensionHeading.module.scss';
import styles from './TotalRow.module.scss';

/**
 * The final total row of the pivot table, which summarizes the dataset along
 * only the column dimensions.
 *
 * @param props The total row properties.
 *
 * @returns The rendered total row.
 */
export default function TotalRow<T, M extends keyof T>(
  props: AggregatorProps<T, M>
): JSX.Element {
  const {
    aggregator,
    columnDimensions,
    data,
    metric,
    rowDimensions
  } = props;

  const [column] = columnDimensions;

  const columnProperty = column.dimension.property;

  const columnCells = column.values.map(val => {
    const columnData = data.filter(record => record[columnProperty] === val);

    const value = aggregate(columnData, metric, aggregator);

    return (
      <td className={columnCellStyles.columnCell} key={String(val)}>
        {value}
      </td>
    );
  });

  return (
    <tr className={styles.totalRow}>
      <th
        className={headingStyles.rowDimensionHeading}
        colSpan={rowDimensions.length}
      >
        Grand total
      </th>

      <td />

      {columnCells}
    </tr >
  );
}
