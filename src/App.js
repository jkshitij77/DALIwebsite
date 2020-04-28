import React from 'react';
import './App.css';
import SideComponent from './SideCoponent.js';
import './index.css';

function App() {
  return (
    <div className="App">
        <div class="parent">
          <div class="maindisplay container">
          <div id="menu">
          <div>
            <img src={require('./attachments/Berk.png')} id="myimage"></img>
            
            <div id="textdiv">
              Kshitij Jain
              <hr />
            </div>
            
            <div id="logodiv">
              <a href="mailto:jkshitij77@gmail.com"><img src={require('./attachments/gmail.png')} class="logos" alt="gmail logo"/></a>
              <a href="https://www.facebook.com/kshitij.jain.359" target='_blank'><img src={require('./attachments/facebook.jpg')} class="logos" alt="facebook logo"/></a>
              <a href="https://www.linkedin.com/in/kshitij-jain-1a57b5165" target='_blank'><img src={require('./attachments/linkedin.png')} class="logos" /></a>
              <a href="https://github.com/jkshitij77?tab=repositories" target='_blank'><img src={require('./attachments/github.png')} class="logos" /></a>
            </div>
          </div>
        </div>
      </div>
      <div id="main">
        <SideComponent url={require("./attachments/webdev.jpg")} divclass="odddiv flip-box" imageclass="oddimages"/>
        <SideComponent url={require("./attachments/webdev.jpg")} divclass="evendiv flip-box" imageclass="evenimages"/>
        <SideComponent url={require("./attachments/webdev.jpg")} divclass="odddiv flip-box" imageclass="oddimages"/>
        <SideComponent url={require("./attachments/webdev.jpg")} divclass="evendiv flip-box" imageclass="evenimages"/>
      </div>
    </div>
    </div>
  );
}

export default App;
