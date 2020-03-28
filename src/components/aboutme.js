import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class About extends Component {
  render() {
    return(
    <div>
    <div >
      <img src="/img/mypic.jpg" alt="ajay logo" className='aboutimage'/>      
    </div>
    <h1>
      About Ajay kumar Singh 
    </h1>
    <br/>
    <p>I’m a student at IIT Kharagpur, pursuing a dual degree (B. Tech + M. Tech) in Engineering. I am a Machine Learning and Data science enthusiast. I am also very interested  in developing applications.</p>


    <div>
    <hr/>
      <h1>
        Contact Me
      </h1>
    </div>
    </div>
    

    )
  }
}

export default About;
