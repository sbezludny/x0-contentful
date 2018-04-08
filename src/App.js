import React from 'react';
import { BrowserRouter, StaticRouter, Route } from 'react-router-dom';
import glamorous from "glamorous";
import { createClient } from 'contentful';
import Home from './Home';
import Categories from './Categories';
import Courses from './Courses';
import Nav from './Nav';

const client = createClient({
  accessToken: '6f7ec47bfe1a38705c7f5b8852e2df4ff9d772ea42cfe06348ea4d6f4b6764c7',
  space: 'iegfjg6q47xl'
});

// universal router component
const Router = typeof document !== 'undefined' ? BrowserRouter : StaticRouter;

const App = props => (
  <Router location={props.pathname} context={{}}>
    <React.Fragment>
      <nav>
        <Nav exact to="/">Home</Nav>
        <Nav exact to="/categories">Categories from Contentful</Nav>
        <Nav exact to="/courses">Courses from Contentful</Nav>
      </nav>
      <Route exact path="/" render={() => <Home {...props} />} />
      <Route
        path="/categories"
        render={() => <Categories {...props} />}
      />
      <Route
        path="/courses"
        render={() => <Courses {...props} />}
      />
    </React.Fragment>
  </Router>
);

App.getInitialProps = async ({ Component, pathname }) => {
  const { items: entries } = await client.getEntries();

  const courses = entries.filter(entry => entry.sys.contentType.sys.id === 'course');
  const categories = entries.filter(entry => entry.sys.contentType.sys.id === 'category');

  return { courses, categories };
};

export default App;
