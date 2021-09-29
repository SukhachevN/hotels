import { Redirect } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { AuthenticatedScreen } from './AuthenticatedScreen';

function AuthPage({ isLoggedIn, isInitialized }) {
  if (!isInitialized) {
    return <Spinner />;
  }
  if (!JSON.parse(isLoggedIn)) {
    return <Redirect to='/auth' />;
  }

  return <AuthenticatedScreen />;
}

export { AuthPage };
