import React,{ Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Content from '../../components/Content/Content'
import classes from './Layout.module.css'

class Layout extends Component {
state={
  windowheight:null,
  top:null,
  back:null,
  footerheight:null,
  footheight:null,
  scrollY:null,
  heightDocument:null,
  loaded:false
}

componentDidMount(){

  this.setState({scrollY:window.scrollY})
  const windowScrollTop =  window.innerHeight
  this.setState({windowheight:windowScrollTop})
  window.addEventListener('scroll', this.handleScroll);

}

onSizefooter = size => {
  this.setState({footerheight:size.height,footheight:size.height})
}

onSizeContent = size => {
  const docheight = this.state.windowheight + this.state.footheight + size.height - 100
  this.setState({heightDocument:docheight})

}

handleScroll =()=>{
let scroll = window.scrollY
this.setState({top:scroll})
if(this.state.heightDocument)
{
  let back = 50 - (scroll * 100 / this.state.heightDocument)
  this.setState({back:back})
}
this.setState({scrollY:scroll})
}


  render(){
console.log(this.state);
    let top = this.state.top?'-'+this.state.top+'px':null

    return(
      <div style={{overflow: 'hidden',height:this.state.heightDocument?this.state.heightDocument + 'px':null}}>
        <div className={classes.Layout} style={{height:this.state.heightDocument?this.state.heightDocument + 'px':null,top:top}}>
          <div className={classes.Parallax} style={{marginTop:this.state.windowheight?this.state.windowheight+'px':null}}>
                 <Header  height={this.state.windowheight} back={this.state.back}/>
                 <Content onSize={this.onSizeContent}/>
                 <Footer onSize={this.onSizefooter} scrolly={this.state.scrollY} footer={this.state.footerheight}/>
        </div>
      </div>
    </div>
    )
  }
}

export default Layout
