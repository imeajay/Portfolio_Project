import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      
<div className="footer-element">
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
    )
  }
}

export default Footer;
