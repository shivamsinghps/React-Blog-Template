import React from 'react'
import classes from './Content.module.css'
import sizeMe from 'react-sizeme'

const content = (props)=>{
  return(
    <section className={classes.Content}>
      <h1>Contents to be loaded</h1>
    </section>
  )
}
export default sizeMe({ monitorHeight: true })(content)
