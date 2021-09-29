import classNames from 'classnames';

function DialogView({ state, handleChange, onClick }) {
  const isLoginInalid = state.initialized && !state.loginValid;
  const isPasswordInValid = state.initialized && !state.passwordValid;
  return (
    <form className='authForm' onSubmit={onClick}>
      <h1 className='authFormH1'>Simple Hotel Check</h1>
      <div
        className={classNames('inputField', {
          isError: isLoginInalid,
        })}
      >
        <label
          htmlFor='login'
          aria-required='true'
          className={classNames({ isError: isLoginInalid })}
        >
          Логин
        </label>
        <input
          id='login'
          value={state.login}
          onChange={handleChange}
          className={classNames({ isError: isLoginInalid })}
        />
        <div className='errorBlock' role='alert'>
          {isLoginInalid && state.formErrors.login}
        </div>
      </div>
      <div
        className={classNames('inputField', {
          isError: isPasswordInValid,
        })}
      >
        <label
          htmlFor='password'
          aria-required='true'
          className={classNames({ isError: isPasswordInValid })}
        >
          Пароль
        </label>
        <input
          id='password'
          type='password'
          value={state.password}
          onChange={handleChange}
          className={classNames({ isError: isPasswordInValid })}
        />
        <div className='errorBlock' role='alert'>
          {isPasswordInValid && state.formErrors.password}
        </div>
      </div>
      <button
        type='submit'
        className='signInButton'
        disabled={!state.formValid}
      >
        Войти
      </button>
    </form>
  );
}

export { DialogView };
