import React from 'react'
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import LinkTo from '../components/LinkTo';
import { Link } from '../routes';

const Header = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', color:'white'}}>
    <Navbar style={{opacity:'.97', backgroundColor:'#333333', zIndex:'1'}} className="navbar navbar-expand-md navbar-dark fixed-top" variant="white" expand="lg" collapseOnSelect id ='navbar' >
    <LinkTo href='/'> <motion.img whileHover ={{
      scale: [1, 1.4, 1.2],
      rotate: [0, 360],
      transition: {
        duration: .8
      }
    }} src={'/logo-eye.png'} width='160vw' height='90vh'/>
    </LinkTo>
    <LinkTo href='/'><Navbar.Brand className='d-none d-md-block' id='logo' style={{fontSize:'2.1vw'}}>obServerJS</Navbar.Brand></LinkTo>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Nav className="ml-auto">
    <Navbar.Collapse id="responsive-navbar-nav">
      <Link route={'/feature'}><Nav.Item style={{color:'white', marginRight:'1.6vw', cursor:'pointer'}}>Features</Nav.Item></Link>
     <Link style={{color:'white'}} route={'/team'}><Nav.Item style={{color:'white', marginRight:'.6vw', cursor:'pointer'}}>Meet The Team</Nav.Item></Link>
      <Link style={{color:'white'}} href="#pricing"><Nav.Item style={{color:'white', marginRight:'.6vw', cursor:'pointer'}}>Documentation</Nav.Item></Link>
      </Navbar.Collapse>  
      </Nav>
      <Nav.Link className='d-none d-md-block' target="_blank" href='https://www.linkedin.com/company/observerjs'><FontAwesomeIcon style={{marginLeft:'3vw', color:'white', height:'3vh', width:'auto'}} icon={faLinkedin}/></Nav.Link>
      <Nav.Link className='d-none d-md-block' target="_blank" href='https://github.com/oslabs-beta/obServerJS'><FontAwesomeIcon style={{height:'3vh', color:'white', width:'auto'}} icon={faGithub}/></Nav.Link>
      </Navbar>
    </div>
  )
}

export default Header
