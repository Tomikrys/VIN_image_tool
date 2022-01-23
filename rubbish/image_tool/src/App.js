import React from "react";
import Sidebar from "react-sidebar";
import './App.css';
import Canvas from './components/Canvas.js';
import Script from './components/Script.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div className="App">
      {/* <div className="nav">
        <button onClick={() => setSidebarOpen(true)}>
          <FontAwesomeIcon icon={faHamburger} />
          </button>
      </div> */}
      {/* <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        styles={{ sidebar: { background: "grey" } }}
      >
      </Sidebar> */}
      <Script></Script>
      <Canvas></Canvas>
    </div>
  );
}

export default App;
