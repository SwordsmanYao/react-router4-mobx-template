import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
// import { withRouter } from 'react-router-dom';

// route component 的 props 中已经绑定了路由信息，不用加 @withRouter
// @withRouter
@inject('global')
@inject('demo')
@observer
class Menu extends Component {
  
  componentDidMount() {
    this.props.demo.fetchData();
  }

  render() {

    // route 提供的属性：match, location, history
    const { global, match, location, history, demo } = this.props;
    console.log('menu', global, match, location, history);
    return (
      <div>
        <span>Current pathname: {location.pathname}</span>		
        <button onClick={() => history.push('/basic')}>Change url</button>		
        <button onClick={() => history.goBack()}>Go Back</button>
        <div>{global.number}</div>
        <button onClick={() => global.inc()}>+</button>
        {
          demo.data && <div>{demo.data.name}</div>
        }
        {
          demo.data && <div>{demo.message}</div>
        }
      </div>
    )
  }
}

export default Menu;