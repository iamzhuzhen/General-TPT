import './App.scss';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createHashHistory } from "history";
// store
import store from '@/store/store.js'

// compoments
import Login from '@pages/Login';
import LandingPage from '@pages/LandingPage'
import Loading from '@components/Loading'

//
const hashHistory = createHashHistory();




function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Loading />
        <Router history={hashHistory}>
          <Route exact path="/" >
            <Redirect to='/login' />
          </Route>
          <Route path="/login" component={Login} />
          <Route path='/pages' component={LandingPage} />
        </Router>
      </div>
    </Provider>

  );
}

export default App;
