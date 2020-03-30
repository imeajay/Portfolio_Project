import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img className="avatar-img" src="/img/mypic.jpg" alt="my pic " />

            <div className="banner-text">
              <h1>Data Scientist And Full Stack Developer </h1>

            <hr/>

          <p>HTML/CSS | JavaScript | Python | Machine Learning | React | NodeJS | Express | MongoDB</p>

        
      </div>
          </Cell>
        </Grid>
        
      </div>
    )
  }
}

export default Landing;
