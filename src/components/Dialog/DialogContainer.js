import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authenticate } from '../../redux/auth';
import { useAuth } from '../../redux/selectors';
import { DialogView } from './DialogView';

function DialogContainer() {
  const history = useHistory();
  const { auth } = useAuth();
  console.log(auth);
  if (auth) {
    history.push('/hotels');
  }

  const [state, setState] = useState({
    login: '',
    password: '',
    formErrors: { login: '', password: '' },
    loginValid: false,
    passwordValid: false,
    formValid: false,
    initialized: false,
  });
  const dispatch = useDispatch();

  function handleChange(e) {
    const { id, value } = e.target;
    let { login, password } = state.formErrors;
    let { loginValid, passwordValid } = state;
    switch (id) {
      case 'login':
        loginValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        login = loginValid ? '' : 'login is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 8;
        password = passwordValid ? '' : 'password is too short';
        break;
      default:
        break;
    }
    setState({
      ...state,
      [id]: value,
      formErrors: { login, password },
      loginValid: loginValid,
      passwordValid: passwordValid,
      formValid: loginValid && passwordValid,
      initialized: true,
    });
  }

  function onClick() {
    history.push('/hotels');
    dispatch(authenticate());
  }

  return (
    <DialogView state={state} handleChange={handleChange} onClick={onClick} />
  );
}

export { DialogContainer };
