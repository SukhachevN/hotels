import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { Dialog } from '../../components/Dialog';
import { UnauthenticatedScreen } from '../UnauthenticatedScreen';

function AppView() {
  return (
    <main>
      <div className='container'>
        <Router>
          <Switch>
            <Route exact path='/auth'>
              <UnauthenticatedScreen />
            </Route>
            <Route path='/hotels'>
              <div className='hotelContainer'>Hotel Screen</div>
            </Route>
          </Switch>
        </Router>
      </div>
    </main>
  );
}

export { AppView };
