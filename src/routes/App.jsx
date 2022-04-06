import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../assets/styles/App.scss';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import Characters from '../containers/Characters';

const Favorites = lazy(() => import('../containers/Favorites'));

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/" component={Characters} />
        </Suspense>
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default App;
