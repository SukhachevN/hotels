import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthPage } from '../AuthPage';
import { UnauthenticatedScreen } from '../UnauthenticatedScreen';

function AppView({ isAuthenticated, isInitialized }) {
  return (
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
        </Switch>
      </Router>
    </div>
  );
}

export { AppView };
