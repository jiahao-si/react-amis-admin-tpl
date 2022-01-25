import * as React from 'react';
import { Route } from 'react-router-dom';
import { Spinner } from 'amis';

import path2components from '@/configs/path2Component';
import NotFound from '@/pages/404';

export default class RouterGuard extends React.Component<any, any> {
  state = {
    pathname: '',
    component: Spinner,
  };

  componentDidMount() {
    this.refreshPage();
  }

  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<any>,
    snapshot?: any
  ) {
    this.refreshPage();
  }

  refreshPage() {
    const pathname = this.props.location.pathname;
    if (this.state.pathname != pathname) {
      this.setState({ pathname: pathname });
      let path2ComponentItem = path2components.find((v) => {
        let path = v.path;
        if (path != null && !path.startsWith('/')) {
          path = '/' + path;
        }
        return path === pathname;
      });

      if (path2ComponentItem != null && path2ComponentItem.component != null) {
        this.setState({ component: path2ComponentItem.component });
      } else {
        this.setState({ component: NotFound });
      }
    }
  }

  render() {
    return (
      <Route
        path={this.state.pathname}
        component={this.state.component}
        exact
      />
    );
  }
}
