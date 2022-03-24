import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../assets/styles/App.scss';
import Layout from '../components/Layout';
import Characters from '../containers/Characters';
import Favorites from '../containers/Favorites';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/" component={Characters} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default App;
