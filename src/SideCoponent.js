import React, {Component} from 'react';
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class SideComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    
    // When I add the different sections to the website, I can add the components with routing here
    // callComponent1 = () => {
    //     if (this.props.name==="WEBDEV"){
    //         alert("Hi");
    // 
    //         // SideComponent.contextType = {
    //         //     router: React.PropTypes.func.isRequired
    //         // }
    //         // this.context.router.push('/comp1');
    //         // this.props.history.push('/webdevpage');
    //         // This history routing thing is not working
    //         // Depending on the name on which we click, route it to some place
    //     }
    //     else{
    //         console.log("Do nothing on click");
    //     }
    // }

    render(){
        let heading = null;
        if (this.props.name==="WEBDEV"){
            // heading=<div>
            //     <Router>
            //             <h2>Web Development</h2>
            //             <Link to="/comp1"> <p>Big paragraph guy</p> </Link>
            //             <Route exact path="/comp1" component={Component1}/>
            //             <Link to="/"> <p>Big paragraph guy</p> </Link>
            //             <Route exact path="/" component={App}/>
            //             </Router>
            //         </div>
            // This kind of routing might also work. Where to route depends on what I click
            heading=<div>
                        <h2>WebDev</h2>
                        <p>This May 2020, I completed the WebDev Mini Course, the first of its kind offered by DALI Lab at Dartmouth <br />
                        As a part of HTMLMAO, we found the need for a calendar that would make it easy to manage and find events held 
                        by the Dartmouth Clubs<br />
                        Have you checked it out yet? <br /><a href="https://dalicalendar-936c1.web.app" target="_blank" id="kegLink" rel="noopener noreferrer"><img class="kegPic" src={require('./attachments/wine.png')} alt="The Keg"/></a></p>
                    </div>
        }
        else if(this.props.name==="Unity"){
            heading=<div>
                        <h2>Unity</h2>
                        <p>I am extremely interested in Game development, especially AR and VR. <br /> 
                            This summer, I am learning C# and Unity and working with a Dartmouth Professor and the ITC department <br />
                            to find ways to implement VR experiences and make remote learning easier and more interactive for students</p>
                    </div>
        }
        else if(this.props.name==="Frisbee"){
            heading=
            <div>
                <h2>Frisbee</h2>
                <p>I tried frisbee for the first time in Dartmouth and absolutely fell in LOVE<br />
                I have been a part of the disco trolls since fall and have found a solid communtiy out there
                </p>
            </div>
        }
        else if(this.props.name==="Travel"){
            heading=
            <div>
                <h2>Travel</h2>
                <p>Can not get enough of of it. Like every other cliched teenager, How can I leave out Wanderlust<br />
                Plans to visit Kenya, Ethiopia, Zanzibar and South Africa in the winter. Catch it all on my blog</p>
            </div>
        }
        // else if(this.props.name==="Anime"){
        //     heading=<div>
        //                 <h2>Anime</h2>
        //                 <p></p>
        //             </div>
        // }

        return(
            <div>
                <div class={this.props.divclass}> 
                    <div class="flip-box-inner">
                        {/* Give the onlick property to the upper div. Then route it to some other page */}
                        <div class="flip-box-front">
                            <img src={this.props.url} class={this.props.imageclass} alt="flipBoxImg"/>
                        </div>
                        <div class="flip-box-back">
                            {/* <h2>My heading</h2> */}
                            {heading}
                            {/* <img src={this.props.url} width={"100vw"} height={"100vh"}/> */}
                            {/* If I want, I can have another image right here */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SideComponent;