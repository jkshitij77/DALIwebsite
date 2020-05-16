import React from 'react';
import './App.css';
import SideComponent from './SideCoponent.js';
import './index.css';

export default class App extends React.Component{
  // This is how you make funcitons in App.js
  // constructor(props){
  //   super(props);
  // }

  // callComponent1 = () => {
  //   alert("Hi");
  // }

  easter = () => {
    // Easter egg for no reason at all
    alert("Bruhhh");
  }
  render(){
    return (
      <div className="App">
          <div class="parent">
            <div class="maindisplay container">
            <div id="menu">
            <div>
              <img onClick={this.easter} src={require('./attachments/Berk.png')} alt="personal" id="myimage"></img>

              <div id="textdiv">
                Kshitij Jain
                <hr />
              </div>
              <div class="needPadding"> 
                <p class="alignCentre">
                Hi, I am Kshitij, a Dart '23 from India. I am thinking of double majoring in math and CS owing to my passion for coding and love(read fear) of probability.
                This website was coded to some sick lo-fi hip hop beats, like every other thing I have ever coded, things you can check out on my github by clicking below.
                I absolutely love travelling and am going to live in a monastery for 2 weeks this summer (SO HYPED!).
                If you are interested in seeing how it goes, keep up with this website cause this will soon be turning into a travel blog
                </p>
              </div>
              
              <div id="logodiv">
                <a href="mailto:jkshitij77@gmail.com"><img src={require('./attachments/gmail.png')} class="logos" alt="gmail logo"/></a>
                <a href="https://www.facebook.com/kshitij.jain.359" target='_blank' rel="noopener noreferrer"><img src={require('./attachments/facebook.jpg')} class="logos" alt="facebook logo"/></a>
                <a href="https://www.linkedin.com/in/kshitij-jain-1a57b5165" target='_blank' rel="noopener noreferrer"><img src={require('./attachments/linkedin.png')} class="logos" alt="linkedin logo"/></a>
                <a href="https://github.com/jkshitij77?tab=repositories" target='_blank' rel="noopener noreferrer"><img src={require('./attachments/github.png')} class="logos" alt="github logo"/> </a>
              </div>
            </div>
          </div>
        </div>

        {/* What if I put all the different side components in route links so clicking on them gets me to a diff router link */}
        {/* Do something on click? Something like routing or modals? */}
        {/* Color scheme and content */}
        {/* <SideComponent name="Anime"   url={"https://pm1.narvii.com/5797/d4564c452c878e60e2470b24b7a0d1dbcccccaad_hq.jpg"} divclass="odddiv flip-box" imageclass="oddimages" /> */}
        <div id="main">
          <SideComponent name="WEBDEV"  url={require("./attachments/kshitijcertificate.png")} divclass="odddiv flip-box" imageclass="oddimages" />
          <SideComponent name="Unity"   url={"https://img-a.udemycdn.com/course/750x422/1210008_6859.jpg"} divclass="evendiv flip-box" imageclass="evenimages"/>
          <SideComponent name="Frisbee" url={"https://www.dartmouth.edu/~ultimate/img/WholeTeam.jpg"} divclass="odddiv flip-box" imageclass="oddimages"/>
          <SideComponent name="Travel"  url={require("./attachments/AmerFort.jpeg")} divclass="evendiv flip-box" imageclass="evenimages"/>
        </div>
      </div>
      </div>
    );
  }
}