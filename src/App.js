import React from 'react';
import { BrowserRouter, StaticRouter, Route } from 'react-router-dom';
import loadData from './loadData';
import Home from './Home';
import Categories from './Categories';
import Courses from './Courses';
import Nav from './Nav';
import { Container } from 'rebass';
import ThemeProvider from './ThemeProvider';

// universal router component
const Router = typeof document !== 'undefined' ? BrowserRouter : StaticRouter;

const App = props => (
  <ThemeProvider>
    <Router location={props.pathname} context={{}}>
      <Container>
        <nav>
          <Nav exact to="/">
            Home
          </Nav>
          <Nav exact to="/categories">
            Categories from Contentful
          </Nav>
          <Nav exact to="/courses">
            Courses from Contentful
          </Nav>
        </nav>
        <Route exact path="/" render={() => <Home {...props} />} />
        <Route path="/categories" render={() => <Categories {...props} />} />
        <Route path="/courses" render={() => <Courses {...props} />} />
      </Container>
    </Router>
  </ThemeProvider>
);

App.getInitialProps = async ({ Component, pathname }) => {
  const { courses, categories } = await loadData();
  return { courses, categories };
};

export default App;
