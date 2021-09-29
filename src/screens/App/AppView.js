import { memo } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { comparator } from '../../utils/comparator';
import { AuthPage } from '../AuthPage';
import { UnauthenticatedScreen } from '../UnauthenticatedScreen';
import noFound from '../../img/icons/not-found.svg';

const AppView = memo(
  ({ isAuthenticated, isInitialized }) => (
    <div className='container'>
      <Router>
        <Switch>
          <Route
            exact
            path='/hotels'
            render={(props) => (
              <AuthPage
                {...props}
                isLoggedIn={isAuthenticated}
                isInitialized={isInitialized}
              />
            )}
          />
          <Route exact path='/auth' component={UnauthenticatedScreen} />
          <Route path='*'>
            <div className='BrokenRoutePage'>
              <Link to='/hotels' className='homeLink'>
                На главную
              </Link>
              <img src={noFound} alt='Nothing found' />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  ),
  comparator
);

export { AppView };
