import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Footer from './components/footer';



class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color link1" title={<Link  style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>} scroll>
            <Navigation >
              <Link  to="/resume">Resume </Link>
              <Link  to="/aboutme">About Me </Link>
              <Link  to="/projects">Projects </Link>
              <Link  to="/contact">Blogs </Link>
                
            </Navigation>
        </Header>
        <Drawer className="link1" title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link>}>
            <Navigation>
              <Link  to="/resume">Resume</Link>
              <Link  to="/aboutme">About Me</Link>
              <Link  to="/projects">Projects</Link>
              <Link  to="/contact">Blogs</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
        <div className="footer">
        <hr style={{ border: '0.3px solid black'}} />
        <Footer/>
        </div>
    </Layout>
    
</div>


    );
  }
}

export default App;
