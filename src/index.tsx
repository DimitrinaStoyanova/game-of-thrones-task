import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import './resources/styles/customStyles.scss';
import './resources/styles/bootstrap.css';
import './i18n';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { App } from './components/main/App';
import { store } from './store';
import { SpinnerModal } from './components/SpinnerModal';
import 'spinners-react/lib/index.css';

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ToastContainer />
    <SpinnerModal />
    <App />
  </Provider>
);
