import React, { Component, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

const Intro = () => {

  const names = ['Tweeting', 'Studying', 'Napping', 'Slacking', 'Tindering', 'Chatting', 'Coding', 'Snacking']

  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
      const index = Math.floor(Math.random() * names.length);
      setnewName(names[index]);
  }, []);
  useEffect(() => {
      const intervalID = setInterval(shuffle, 2000);
      return () => clearInterval(intervalID);
  }, [shuffle])

  return (
    <div className='intro-container'>
    <div className='intro-box1'>
        <motion.h1 whileHover = {{
          scale: 1.2,
          transition: {
            duration: .2
          }
        }} id ='header-intro' style={{fontSize:'4vw', color:'#333333',  display:'inline-block', whiteSpace:'nowrap' }}>Less Time Debugging</motion.h1>
        <motion.h1 id ='header-intro' whileHover ={{
          scale: 1.2,
          transition: {
            duration: .2
          }
        }} style={{fontSize:'4vw', color:'#333333', display:'inline-block', whiteSpace:'nowrap' }}>More Time<motion.span>{` ${newName}`}</motion.span>
        </motion.h1>
  
      <h2 id='p-intro' style={{fontSize:'1.9vw', letterSpacing: '.04rem'}}>obServerJS saves developers time and headaches by providing transparent express routing.</h2>
      <div style={{display:'flex', justifyContent:'center'}}>
      <Button id= 'button-mobile' className='btn-md' variant='dark' style={{display: 'flex', justifyContent:'center', width:'16vw', fontSize:'2.3vw', height:'auto', marginTop:'3vh', border:'none', backgroundColor:'#50b26c'}}>Download</Button>
      </div>
      <motion.div initial='hidden' animate='visible' variants={{
        hidden: {
          scale: 0.8,
          opacity: 0
        },
        visible: {
          scale: 1.2,
          opacity: 1,
          transition: {
            delay: .8
          }
        }
      }}>
       </motion.div> 
       </div>
       <div className='intro-box2'>
     <Image src='/macbook-main.png' alt='computer image' height='390vh' width='390vw' />
     </div>
     </div>
  )
}

export default Intro
