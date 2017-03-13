/**
 * src/routes.js
 *
 * File for including routes.
 *
 * If it's necessary to add new page just:
 * 1. Create Component related to that page (best to do this in src/components/pages folder)
 * 2. Import Component related to newely created page;
 * 3. Create here (in routes.js) Route responsible for created page (be sure you include 'path' prop, e.g. <Route path="/whateveryouneed")
 *
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/layout/Layout';
import FirstPage from './components/pages/first/FirstPage';
import SecondPage from './components/pages/second/SecondPage';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={FirstPage} />
    <Route path="/second" component={SecondPage} />
  </Route>
);
