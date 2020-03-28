import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ajay Kumar Singh</h2>
            <img
              src="/img/mypic.jpg"
              alt="mypic"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I’m a student at IIT Kharagpur, pursuing a dual degree (B. Tech + M. Tech) in Engineering. I am a Machine Learning and Data science enthusiast. I am also very interested  in developing applications.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
              <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    <p3 align="right">ajayk6804@gmail.com </p3>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    <p3 align="right"> +919800240777 </p3>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',marginleft:'2'}}>
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                    <p3 align="right">  <a href="https://www.linkedin.com/in/ajay-kumar-singh-7a583a139/">LinkedIn</a></p3>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',marginleft:'2'}}>
                    <i className="fa fa-facebook" aria-hidden="true"/>
                    <p3 align="right"><a href="https://www.facebook.com/ajayk6804">Facebook</a></p3>
                  </ListItemContent>
                </ListItem>



              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
