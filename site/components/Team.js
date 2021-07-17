import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Team = () => {
  return (
    <div className="container">
    <h1 className='headers' style={{marginTop:'20vh', textAlign:'center', marginBottom:'19vh'}}>Contributers</h1>
    <div className='team-container'>
<div className='team-box1'>
      <h3 className='header-team'>Julia Collins</h3>
      <Image style= {{borderRadius: '50px'}} src={'/julia.png'} width='180vw' height='180vh' />
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <a style={{color:'#333333', margin:'2vh 1vw'}} target="_blank" href={'https://www.linkedin.com/in/julia-collins-0658a6141/'}><FontAwesomeIcon style={{height:'4vh', width:'auto'}} icon={faLinkedinIn}/></a>
        <a style={{color:'#333333', margin:'2vh 1vw'}}  target="_blank" href={'https://github.com/alderAcres'}><FontAwesomeIcon style={{height:'4vh', width:'auto'}} icon={faGithub}/></a>
    </div>
        </div>
        <div className='team-box2'>
      <h3 className='header-team' >Ashley Pean</h3>
      <Image style= {{borderRadius: '50px'}} src={'/ashley.png'} width='180vw' height='180vh' />
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
     <a style={{color:'#333333', margin:'2vh 1vw'}}  target="_blank" href={'https://www.linkedin.com/in/ashley-pean/'}><FontAwesomeIcon style={{height:'4vh', width:'auto'}} icon={faLinkedinIn}/></a>
     <a style={{color:'#333333', margin:'2vh 1vw'}}  target="_blank" href={'https://github.com/ashleypean'}><FontAwesomeIcon style={{height:'4vh', width:'auto'}} icon={faGithub}/></a>
  </div>
     </div>
  <div className='team-box3'>
      <h3 className='header-team' >Eric Wilding</h3>
      <Image style={{borderRadius: '50px'}} src={'/eric.png'} width='180vw' height='180vh' />
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <a style={{color:'#333333', margin:'2vh 1vw'}}  target="_blank" href={'https://www.linkedin.com/in/eric-wilding/'}><FontAwesomeIcon style={{height:'4vh', width:'auto'}} icon={faLinkedinIn}/></a>
      <a style={{color:'#333333', margin:'2vh 1vw'}}  target="_blank" href={'https://github.com/e-wilding'}><FontAwesomeIcon style={{height:'4vh', width:'auto'}} icon={faGithub}/></a>
    </div>
      </div>
    <div className='team-box4'>
      <h3 className='header-team' >Josh Roberts</h3>
      <Image style= {{borderRadius: '50px'}} src={'/josh.png'} width='180vw' height='180vh' />
     <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <a style={{color:'#333333', margin:'2vh 1vw'}}  target="_blank" href={'https://www.linkedin.com/in/joshrobertsv2/'}><FontAwesomeIcon style={{height:'4vh', width:'auto'}} icon={faLinkedinIn}/></a>
      <a style={{color:'#333333', margin:'2vh 1vw'}}  target="_blank" href={'https://github.com/quantumspot'}><FontAwesomeIcon style={{height:'4vh', width:'auto'}} icon={faGithub}/></a>
      </div>
      </div>
      </div>
    </div>

  )
}

export default Team
