import * as React from 'react';
import { ToastComponent, AlertComponent } from 'amis';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import { IMainStore } from '../stores/mainStore';
import AdminRoute from '../pages';

export default observer(function ({ store }: { store: IMainStore }) {
  return (
    <BrowserRouter>
      <div className='routes-wrapper'>
        <ToastComponent
          key='toast'
          position={'top-right'}
          theme={store.theme}
        />
        <AlertComponent key='alert' theme={store.theme} />
        <Switch>
          <Route path={''} component={AdminRoute} />
        </Switch>
      </div>
    </BrowserRouter>
  );
});
