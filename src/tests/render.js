import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../redux/store';

const AllTheProviders = ({ children }) => (
  <Provider store={store}>
    <Router>{children}</Router>
  </Provider>
);
function customRender(ui, options) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}
export * from '@testing-library/react';
export { customRender as render };
