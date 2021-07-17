import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

const Description = () => {
  return (
    <div className='desc-grid' >
    <div className='desc-box1'>
      <Image src={'/code-block.png'} width='600vw' height='360vh'/>
    </div>
    <div className='desc-box2'>
      <h2 className= 'desc-h2' style={{fontSize:'2.6vw'}}> This is <span style={{color:'#50b26c'}}>obServerJS</span></h2>
      <p className= 'desc-p' style={{fontSize:'2vw'}}>
        obServerJS is the first backend debugging tool that allows developers to view the entire request and response lifecycle, along every routing and middleware function. 
        Download our intuitively designed desktop application to have access to the expected response, a visual represention of the entire application stack (every possible route the response object can take in the server), 
        and a testing suite to run multiple endpoints to check for errors.
        </p>
        <Button id= 'button-mobile' className='btn-md' variant='dark' style={{ width:'25vw', fontSize:'2vw', height:'auto', marginTop:'3vh', border:'none', backgroundColor:'#50b26c'}}>Read The Docs</Button>
    </div>
      </div>
  )
}

export default Description

