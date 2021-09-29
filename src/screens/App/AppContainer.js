import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Spinner } from '../../components/Spinner';
import { loadApp } from '../../redux/app';
import { initializeAuth } from '../../redux/auth';
import { initializeFavourite } from '../../redux/favourite';
import { useAuth, useGlobalState } from '../../redux/selectors';
import { AppView } from './AppView';

function AppContainer() {
  const data = useGlobalState();
  const { initialized } = data.app;
  const dispatch = useDispatch();
  const { auth, initialized: authInitialized } = useAuth();

  useEffect(() => {
    dispatch(loadApp());
  }, []);

  useEffect(() => {
    if (initialized) {
      dispatch(initializeAuth(data.app.auth));
      dispatch(initializeFavourite(data.app.favourite));
    }
  }, [initialized]);

  if (!initialized) {
    return <Spinner />;
  }

  return (
    <AppView
      isAuthenticated={auth}
      isInitialized={initialized && authInitialized}
    />
  );
}

export { AppContainer };
