import React from 'react'
import classes from './Footer.module.css'
import sizeMe from 'react-sizeme'

const footer = (props)=>{
  let style = null

    if(props.scrolly !== null && props.footer !== null)
    {
      if(props.scrolly >= props.footer)
  {
      style={bottom:'0px'}
  }
  else
  {
      style = {
          bottom : '-' + props.footer + 'px'
      }
  }

    }
  return(

    <footer className={classes.Footer} style={style}>
      <h1 >Footer</h1>
      <h3>&copy; Shivam Singh</h3>
    </footer>
  )
}
export default sizeMe({ monitorHeight: true })(footer)
