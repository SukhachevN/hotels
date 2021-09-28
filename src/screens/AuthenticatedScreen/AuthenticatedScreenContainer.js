import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { unauthenticate } from '../../redux/auth';
import { AuthenticatedScreenView } from './AuthenticatedScreenView';

function AuthenticatedScreenContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  function onClick() {
    history.push('/auth');
    dispatch(unauthenticate());
  }
  return <AuthenticatedScreenView onClick={onClick} />;
}

export { AuthenticatedScreenContainer };
