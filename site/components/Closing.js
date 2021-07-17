import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'

const Closing = () => {
  return (
    <div style={{marginTop:'20vh', textAlign:'center'}}>
      <h2 style={{marginBottom:'10vh', fontWeight:'lighter', textDecoration:'underline'}}>Featured In Tech Accelerator</h2>
        <Image src={'/os-labs.png'} width={'280vw'} height={'90vh'}/>
    <div style={{margin:'8vh', display:'flex', justifyContent:'center'}}>
      <a target="_blank" href={'https://www.linkedin.com/company/observerjs'}><FontAwesomeIcon style={{height:'6vh', width:'auto', margin:'0 2vw', color:'#333333'}} icon={faLinkedin}/></a>
      <a target="_blank" href={'https://github.com/oslabs-beta/obServerJS'}><FontAwesomeIcon style={{height:'6vh', width:'auto', margin:'0 2vw', color:'#333333'}} icon={faGithub}/></a>
      <FontAwesomeIcon style={{height:'6vh', width:'auto', margin:'0 2vw'}} icon={faMedium}/>
    </div>
  </div>
  )
}

export default Closing
