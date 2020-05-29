import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' exact>ALL</NavigationItem>
      <NavigationItem link='/'>ARTS</NavigationItem>
	    <NavigationItem link='/'>ETC</NavigationItem> 
    </ul>
  )
}

export default navigationItems
