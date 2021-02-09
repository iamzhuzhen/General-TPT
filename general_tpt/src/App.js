import './App.scss';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHashHistory } from "history";

// compoments
import Login from './pages/Login';
import LandingPage from './pages/LandingPage'

//
const hashHistory = createHashHistory();


function App() {
  return (
    <div className="App">
      <Router history={hashHistory}>
        <Route exact path="/" >
          <Redirect to='/login' />
        </Route>
        <Route path="/login" component={Login} />
        <Route path='/pages' component={LandingPage} />
      </Router>
    </div>
  );
}

export default App;
