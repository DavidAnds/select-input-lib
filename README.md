# Select-input-lib

This Select input library is a simple and easy to use library that allows you to create a select input in React. The library is written in TypeScript and uses React.

## Installation and Usage

To install the library, run the following command:

```bash
npm install select-input-lib
```

To use the library, import the `SelectInput` component and use it in your code:

```jsx
import React from 'react';
import { SelectInput } from 'select-input-lib';

const [selectedValue, setSelectedValue] = React.useState(null);

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];



const App = () => {
  return (
    <SelectInput
      options={options}
      onChange={setSelectedValue}
      value={selectedValue}
    />
  );
};

## Expanding the ESLint configuration


```
