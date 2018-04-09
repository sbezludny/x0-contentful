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
