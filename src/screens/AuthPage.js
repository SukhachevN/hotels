import { Redirect } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { AuthenticatedScreen } from './AuthenticatedScreen';

function AuthPage({ isLoggedIn, isInitialized }) {
  if (!isInitialized) {
    return <Spinner />;
  }
  if (isLoggedIn === 'false') {
    return <Redirect to='/auth' />;
  }

  return <AuthenticatedScreen />;
}

export { AuthPage };
