import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import { withRouter } from 'react-router-dom';

// route component 的 props 中已经绑定了路由信息，不用加 @withRouter
// @withRouter
@observer
class Menu extends Component {

  render() {

    // route 提供的属性：match, location, history
    const { match, location, history } = this.props;
    console.log('menu', match, location, history);
    return (
      <div>
        <span>Current pathname: {location.pathname}</span>		
        <button onClick={() => history.push('/basic')}>Change url</button>		
        <button onClick={() => history.goBack()}>Go Back</button>
      </div>
    )
  }
}

export default Menu;