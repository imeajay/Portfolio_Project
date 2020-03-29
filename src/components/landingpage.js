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

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ajay-kumar-singh-7a583a139" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/imeajay?tab=repositories" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/ajayk6804" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="https://www.youtube.com/watch?v=7h2SsusfQmE&list=RD7h2SsusfQmE&start_radio=1" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
        
      </div>
    )
  }
}

export default Landing;
