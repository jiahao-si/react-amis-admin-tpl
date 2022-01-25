import * as React from 'react';
import axios from 'axios';

interface UserInfoState {
  open?: boolean;
  userInfo?: {
    name: string;
    avatar: string;
  } | null;
}
export default class UserInfo extends React.Component<any, UserInfoState> {
  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
      userInfo: null,
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    axios
      .request({
        method: 'get',
        url: '/api/user_info',
      })
      .then((res) => {
        console.log('res:', res);
        this.setState({
          userInfo: res.data,
        });
      });
  }

  static defaultProps = {};
  open() {
    this.setState({
      open: true,
    });
  }
  close() {
    this.setState({
      open: false,
    });
  }
  handleClickOutside() {
    this.close();
  }

  logout() {}

  render() {
    const open = this.state.open;

    return (
      <div className='dropdown'>
        <span onClick={this.open}>
          <span className='pull-right m-b-n-sm m-l-sm'>
            <span>
              <i className='iconfont icon-admin' />
            </span>
            <i className='on md b-white bottom' />
          </span>
          <span className='hidden-sm'>
            {this.state.userInfo?.name || 'unknown'}
          </span>
          <b className='caret' />
        </span>
      </div>
    );
  }
}
