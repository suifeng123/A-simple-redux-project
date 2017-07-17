import React,{ Component } from 'react';
import { Layout,Menu,Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;




//创建一个左侧导航栏的组件

class SiderCustom extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '',
        selectedKey:''
    };
    componentDidMount() {
        const _path = this.props.path;
        this.setState({
            openKey: _path.substr(0,_path.lastIndexOf('/')),
            selectedKey: _path
        });
    }

  componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      this.setState({
            collapsed:this.state.collapsed,
          mode:this.state.collapsed ? 'vertical' : 'inline',
      });
  }

   MenuClick = e => {
       this.setState({
           selectedKey: e.key,
       });
       console.log(this.state);
   };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
          collapsed:collapsed,
          mode:collapsed?'vertical':'inline',
        });
    };

  openMenu = v => {
    console.log(v);
    this.setState({
      openKey: v[v.length - 1]
    })
  };

  render() {
    return (
     <Sider trigger={null} breakpoint='lg' collapsed={this.props.collapsed} style={{overflow:'auto'}}>

     <div className='logo' />
     <Menu onClick={this.menuClick} theme="dark" mode={this.state.mode} selectedKey={[this.state.selectedKey]}
     openKeys = {[this.state.openKey]}
     onOpenChange={this.openMenu} >
     <Menu.Item key="/app/dashboard/index">
        <Link to={'/app/dashboard/index'}><Icon type="mobile" /><span className="nav-text">首页</span></Link>
     </Menu.Item>
     </Menu>
     </Sider>
    )
  }



};

export default SiderCustom;
