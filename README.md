# React Pivot Table
Configurable pivot table as a React component.

## Install
```Shell
npm login --registry https://npm.pkg.github.com

npm config set @codestothestars:registry https://npm.pkg.github.com

npm install @codestothestars/react-pivot-table
```

## Usage
```JSX
import PivotTable, { aggregators } from '@codestothestars/react-pivot-table';
import React from 'react';

export default function MyComponent() {
  const data = [
    {category: 'Furniture', sales: 261.96, state: 'Kentucky', subCategory: 'Bookcases'},
    {category: 'Furniture', sales: 731.94, state: 'Kentucky', subCategory: 'Chairs'},
    {category: 'Office Supplies', sales: 14.62, state: 'California', subCategory: 'Labels'}
  ];

  const columnDimensions = [
    { name: 'State', property: 'state' }
  ];

  const rowDimensionss = [
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
      data={data}
      metric='sales'
      rowDimensions={rowDimensionss}
      title={title}
    />
  );
}
```

## Development
### Dependencies
* [Node.js](https://nodejs.org) 14.7

### Install
Once you've installed the above dependencies and cloned this repository, install NPM dependencies.
```Shell
npm install
```

### Build
Use the provided build script to build a distributable version of the component.
```Shell
npm run build
```

### Demo App
This repository includes a bare-bones demo app using [react-scripts](https://www.npmjs.com/package/react-scripts), which you can use to preview and develop the component.

```Shell
npm start
```

### Architectural Overview
The following attributes of the table are determined upfront.
* The column dimension values.
* All possible combinations of row dimension values.
* The pivoted data for the individual primary table cells (i.e. all cells except those in the "total" rows).

The pivoted data rows are then passed and filtered down to nested subsections, which are created recursively until all of the row dimension values are represented. This nesting facilitates the potential implementation of collapsible sections beyond the first row dimension. The dataset is similarly filtered and provided to the "total" rows, which calculate their values separately.

This library currently provides a default "sum" aggregator. Aggregation is implemented generically, so the user may also specify their own aggregator, and more default functions can easily be added. The independent operation of "total" rows facilitates more complex aggregations requiring the entire dataset for accuracy, such as averages. Aggregators specify a default value (e.g. `0` for sum), and the pivot table will not render rows containing only the default.

When expand/collapse buttons are clicked, callbacks provided by ancestor components are fired, and the open/closed state of the section is managed exclusively by the top-level section component.

### Assumptions and Simplifications
1. Only one column dimension is initially supported.
1. Row dimensions are collapsible only at top level.
1. Dimension value order is undefined.
1. "Total" rows are supported. Total columns are not.
1. Only the first row dimension gets a total row.
1. Numbers are rounded to the nearest whole number.
1. Column dimension title is left-aligned.
1. No chevrons in column dimension title.
1. Internet Explorer is not supported.

### Next Steps
* Fully unit test
* Ensure component displays well when embedded within an existing app.
* Implement sticky row dimensions.
* Enable "total rows" for all row dimensions.
* Implement "total columns".

### Contributing
Before committing changes, make sure that you...
1. Write/edit [JSDoc](https://jsdoc.app) documentation for all new/modified members.
1. Write/edit [Jest](https://jestjs.io) unit tests for all new/modified functionality.
1. Run [ESLint](https://eslint.org) with `npm run lint` and correct all errors.
1. Run all unit tests with `npm test` and correct all failures.

### Branching Model
This project uses the following branching rules.
* `master` contains the current production state. Development does not occur here.
* `develop` contains the current development state planned for the next release. Feature branches are created from here and merged back in when the feature is complete.
* Use a named feature branch for each feature in development. This is where all main development should occur.
* `release-*` branches are created from `develop` to prepare the next release. Perform final testing and version checking here, then merge into `master` to perform a production release and back into `develop` to update development.
