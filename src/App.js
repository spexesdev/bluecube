import './assets/css/App.css';
import './assets/icofont/icofont.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <div>Error 404 occured!</div>
        </Route>
      </Switch>
    </Router>

  )
}
