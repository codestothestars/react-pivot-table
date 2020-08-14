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
Architectural overview goes here.

### Assumptions
Assumptions go here.

### Next Steps
Next steps go here.

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
