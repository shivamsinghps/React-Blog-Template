import React ,{ Fragment }from 'react';
import './App.css';
import Layout from './containers/Layout/Layout'
import ToolBar from './containers/ToolBar/ToolBar'
import ReadingProgress from './containers/ReadProgress/ReadProgress'


const target = React.createRef();

function App() {
  return (
    <Fragment>
    <ReadingProgress target={target} />
    <div className="App" ref={target}>
        <ToolBar />
      <Layout />
    </div>
    </Fragment>
  );
}

export default App;
