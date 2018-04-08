import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'antd';


// route component 的 props 中已经绑定了路由信息，不用加 @withRouter
@withRouter
@inject('demo')
@observer
class Demo extends Component {
  
  componentDidMount() {
    const { demo } = this.props;
    demo.fetchPerson();
  }

  handleChangeName = (e) => {
    const { demo } = this.props;
    demo.setPersonName(e.target.value);
  }

  render() {

    // route 提供的属性：match, location, history
    const { location, history, demo } = this.props;
    // console.log('demo', match, location, history);
    return (
      <div>
        <div>demo页面</div>

        {/* 路由演示 */}
        <span>路由演示：Current pathname: {location.pathname}</span><br/>
        <Link to={'/basic/system-management/menu'}>Change url</Link>	
        <button onClick={() => history.push('/basic/system-management/menu')}>Change url</button>		
        <button onClick={() => history.goBack()}>Go Back</button>

        <br/>
        <br/>

        {/* 人员模块 */}
        {
          demo.person && 
          <div>
            <div>姓名：{demo.person.name}</div>
            <div>年龄：{demo.person.age}</div>
            <button onClick={() => demo.addPersonAge()}>+</button><br/>
            <input type="text" value={demo.person.name} onChange={this.handleChangeName}/>
          </div>
        }
        
        <br/>
     
        {/* antd UI组件 */}
        <Button>antd按钮</Button>
      </div>
    )
  }
}

export default Demo;