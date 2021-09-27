import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Spinner } from '../../components/Spinner';
import { loadApp } from '../../redux/app';
import { initializeAuth } from '../../redux/auth';
import { useGlobalState } from '../../redux/selectors';
import { AppView } from './AppView';

function AppContainer() {
  const data = useGlobalState();
  const { initialized } = data.app;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadApp());
  }, []);

  useEffect(() => {
    if (initialized) {
      dispatch(initializeAuth(data.app.auth));
    }
  }, [initialized]);

  if (!initialized) {
    return <Spinner />;
  }

  return <AppView />;
}

export { AppContainer };
