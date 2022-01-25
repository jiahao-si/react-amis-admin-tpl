import * as React from 'react';
import { Provider } from 'mobx-react';
import { store } from '@/stores/index';
import RootRoute from './routes';
import './utils/polyfill';
import './utils/editor';

// css
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'amis/lib/themes/cxd.css';
import './scss/style.scss';

export default function (): JSX.Element {
  return (
    <Provider store={store}>
      <RootRoute store={store} />
    </Provider>
  );
}
