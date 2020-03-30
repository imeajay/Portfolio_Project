import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class About extends Component {
  render() {
    return(
    <div>
    <div className="aboutimg">
      <img src="/img/mypic.jpg" alt="ajay logo" className='aboutimage'/>      
    </div>
    <h3 style={{fontSize:'8'}}> &nbsp;About Ajay kumar Singh </h3>
    <br/>
    <p>&nbsp;&nbsp;&nbsp;  I’m a student at <strong>IIT Kharagpur</strong>, pursuing a dual degree (B. Tech + M. Tech) in Engineering. I am a Machine Learning and Data science enthusiast. I am also very interested  in developing applications.</p>

    </div>
    

    )
  }
}

export default About;
