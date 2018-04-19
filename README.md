# x0-Contentful

This project was created as an example of usage x0 - a Zero-config React development environment and static site generator.

The website shows various examples of the default integration and extension capabilities of x0:

* Theming with styled-components
* Multi pages with react-router
* TypeScript support
* Integration with Contentful
* Custom webpack config

##Getting Started

###Installation

Clone the repository:

```
$ git clone https://github.com/sbezludny/x0-contentful.git
```

Install the dependencies:

```bash
$ npm i
```

Start development mode on http://localhost:8000 :

```
$ npm run dev
```

Render static HTML:

```
$ npm run build
```

### Styling

x0 supports styled-components; therefore any framework that uses styled-components will be integrated seamlessly.

```jsx
import React from 'react';
import { Provider } from 'rebass';

const ThemeProvider = ({ children }) => (
  <Provider
    theme={{
      fonts: {
        sans: '"Avenir Next", Helvetica, sans-serif'
      },
      fontSizes: [12, 16, 24, 36, 48, 72]
    }}
  >
    {children}
  </Provider>
);

export default ThemeProvider;
```

## Data fetching and management

x0 supports async data fetching using `getInitialProps` hook. It's inspired by next.js with one limitation: for now, it's only supported on the top level and cannot be used in child components.
In this given example, Contentful is used as a data provider. 
