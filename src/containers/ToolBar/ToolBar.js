import React ,{ Component } from 'react'
import classes from './ToolBar.module.css'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import logo from '../../assets/logo-anonymous-png-file-logo-anonymous-png-1024.png'
import menu from '../../assets/icons8-menu-64.png'


class ToolBar extends Component {
  state={
    showside:false
  }

  showHandler =()=>{
    this.setState(prevState=>{
      return {showside:!prevState.showside}
    })
  }
  render()
  {
    let sideDrawer = null
    if(this.state.showside)
    sideDrawer =(
    <SideDrawer
      show={this.state.showside}
      close={this.showHandler}/>
    )
    return(
      <div className={classes.ToolBar}>
      <div style={{display:'inline',position: 'fixed',left:'10px',top:'10px',height:'20px',width:'20px'}}><img src={logo} alt='logo' style={{margin:'5px',widht:'200%',height:'200%'}}/></div>
      <h1> Team Anonymous </h1>
      <h2 onClick={this.showHandler}><img src={menu} alt='logo' style={{margin:'5px',widht:'50px',height:'50px'}}/></h2>
      {sideDrawer}
      </div>
    )
  }
}

export default ToolBar
