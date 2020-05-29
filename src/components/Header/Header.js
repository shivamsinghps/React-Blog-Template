import React from 'react'
import classes from './Header.module.css'

const header = (props)=>{
let height = props.height?props.height+'px':null
let back = props.back? props.back + '%' : null

  return(
    <header className={classes.Header} style={{height:height,lineHeight:height, backgroundPositionY:back}}>
      <h1 className={classes.HeaderTitle}>Heading</h1>
    </header>
  )
}
export default header
