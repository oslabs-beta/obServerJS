import React from 'react'
import {Container, Button, Row, Col } from 'react-bootstrap'; 
import Image from 'next/image';

const Feature = () => {
  return (
<div className='feature-div'>
    <h1 className='headers' id='feature-header' style={{marginBottom:'10vh', textAlign:'center'}}>Features</h1>
    <div className='feature-container'>
    <div className='feature-box1'>
        <Image src={'/app-tree.png'} width='680vw' height='440vh'/>
          </div>
          <div className='feature-box2'>
          <h3 className= 'desc-h2' style={{fontSize:'2.4vw', marginBottom:'2vh'}}>Simplify Backend Routing Architecture</h3>
          <p className= 'desc-p' style={{fontSize:'2vw'}}>obServerJS enables developers to simplify complex server-side architecture by visually displaying the exact path the response object takes given a specific url end point. Our desktop application enables full backend transparancy by displaying all of the routing, middleware, and dispatch functions that were passed in order to get the expected response.</p>
          <Button id= 'button-mobile' className="btn-md" style={{width:'18vw', height:'auto', border:'none', fontSize:'2vw', backgroundColor:'#50b26c'}}>Download Now</Button>
        </div> 
        <div className='feature-box' style={{marginTop:'8vh'}}>
          <Image src={'/dashboard1.png'} width='680vw' height='440vh'/>
       </div>
        <div className='feature-box4'>
          <h3 className= 'desc-h2' style={{fontSize:'2.4vw', marginBottom:'2vh'}}>Visualize The Entire App Stack</h3>
          <p className= 'desc-p' style={{fontSize:'2vw'}}>In addition to having access to the route specific stack, obServerJS offers a visual representation of the entire application stack in a tree of nodes, reducing complexity and enabling for a quicker understanding of all potential routes the response object can take through routing and controller files.</p>

          <Button id= 'button-mobile' className="btn-md" style={{width:'16vw', height:'auto', fontSize:'2vw', border:'none', backgroundColor:'#50b26c'}}>Try It Out</Button>
      
        </div>
        <div className='feature-box5' style={{marginTop:'8vh'}}>
            <Image src={'/app-tree.png'} width='680vw' height='440vh'/>
          </div> 
          <div className='feature-box6'>
              <h3 className= 'desc-h2' style={{fontSize:'2.4vw', marginBottom:'2vh'}}>Test Multiple Endpoints</h3>
              <p className= 'desc-p' style={{fontSize:'2vw'}}>To make the debugging process even more efficient, obServerJS has a testing suite that offers the options of adding multiple endpoints and and to gain information on whether or not errors are thrown.</p>
              <Button id= 'button-mobile' className="btn-md" style={{width:'18vw', fontSize:'2vw', height:'auto', border:'none', backgroundColor:'#50b26c'}}>Read The Docs</Button>
              </div>
               </div>
              </div>
  
  )
}

export default Feature
