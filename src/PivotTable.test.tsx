import { render } from '@testing-library/react';
import React from 'react';
import PivotTable from './PivotTable';

test('renders', () => {
  const { baseElement } = render(<PivotTable />);

  expect(baseElement).toBeInTheDocument();
});
