import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img className="avatar-img" src="data:image/jpeg;base64,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" alt="my pic " />

            <div className="banner-text">
              <h1>Data Scientist And Full Stack Developer </h1>

            <hr/>

          <p>HTML/CSS | JavaScript | Python | Machine Learning | React | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
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
