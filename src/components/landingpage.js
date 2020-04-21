import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Particles from 'react-particles-js'; 
import Typed from 'react-typed';
// import Typical from 'react-typical';


class Landing extends Component {
  render() {
    return(
      <div> 
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text" style={{width: '100%', height: '100%'}}>
            <Particles className='particle-js' style={{width: '100%', height: '100%',}} params={{ particles: { number: { value: 200, density: { enable: true, value_area: 1000, } }, }, }}/> 
            <img className="avatar-img" src="/img/mypic3.jpg" alt="my pic " />

            <h4> 
            Hi, This is Ajay Singh
            </h4>
            <h5>
              I am a {' '}
              <Typed
                strings={['Data Scientist ','Programer ', 'Mern Developer ', 'Full Stack Developer ']}
                typeSpeed={50}
                backSpeed={60}
                loop={Infinity}
              /> 
            </h5>
            <h2>   Data Scientist and Full Stack Developer  </h2>
            <hr/>
            <p><Typed strings={['HTML/CSS | JavaScript | Python | Machine Learning | React | NodeJS | Express | MongoDB']} typeSpeed={40} loop={Infinity}/></p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
