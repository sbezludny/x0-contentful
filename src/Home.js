import React from 'react';
import readme from '../README.md';
import Markdown from 'react-markdown';
import { Heading, Code } from 'rebass';

const Home = props => (
  <React.Fragment>
    <title>I ❤️ x0</title>
    <Markdown 
      source={readme}
      renderers={{
        code: props => <Code>{props.children}</Code>
      }}
    />
  </React.Fragment>
);

export default Home;
