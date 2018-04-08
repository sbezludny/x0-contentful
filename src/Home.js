import React from 'react';
import readme from '../README.md';
import Markdown from 'react-markdown';

const Home = props => (
  <React.Fragment>
    <title>I ❤️ x0</title>
    <Markdown 
      source={readme}
    />
  </React.Fragment>
);

export default Home;
