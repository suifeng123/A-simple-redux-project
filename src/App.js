import React, { Component } from 'react';
import './style/index.less';
import { Layout } from 'antd';
import SiderCustom from './components/SiderCustom';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    collapsed: false,
    location:{
      pathname:''
    }
  };

  toggle = () => {
      this.setState({
    collapsed: !this.state.collapsed,
    })
   };

  render() {
    return (
        <Layout className="ant-layout-has-sider">
           <SiderCustom path={this.state.location.pathname}  collapsed={this.state.collapsed} />
        </Layout>
    );
  }
}

export default App;
