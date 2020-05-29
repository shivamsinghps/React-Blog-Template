import React,{Fragment} from 'react'
import classes from './SideDrawer.module.css'
import Backdrop from '../Backdrop/Backdrop'
import NavigationItems from '../NavigationItems/NavigationItems'

const sideDrawer = (props)=> {
  let sidemotion = [classes.SideDrawer,classes.Close]
  if(props.show)
  {
    sidemotion = [classes.SideDrawer,classes.Open]
  }
  return (
    <Fragment>
      <Backdrop show={props.show} modalclosed={props.close} />
      <div className={sidemotion.join(' ')} onClick={props.close}  >
      <NavigationItems />
    </div>
    </Fragment>
  )
}

export default sideDrawer
