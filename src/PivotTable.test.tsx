import { render } from '@testing-library/react';
import React from 'react';
import { aggregators } from './aggregation';
import PivotTable from './PivotTable';

test('renders', () => {
  const { baseElement } = render(
    <PivotTable
      aggregator={aggregators.sum}
      columnDimensions={[{ name: 'Foo', property: 'foo' }]}
      data={[] as Array<{ foo: number; bar: string }>}
      metric='foo'
      rowDimensions={[{ name: 'Bar', property: 'bar' }]}
    />
  );

  expect(baseElement).toBeInTheDocument();
});
