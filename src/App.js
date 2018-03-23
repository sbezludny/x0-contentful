import React from 'react';
import { BrowserRouter, StaticRouter, Route, Link } from 'react-router-dom';
import { createClient } from 'contentful';
import Home from './Home';
import Categories from './Categories';
import Courses from './Courses';

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
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/courses">Courses</Link>
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
