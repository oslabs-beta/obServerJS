import React from 'react'
import Layout from '../../components/Layout';
import Team from '../../components/Team';
import Contact from '../../components/Contact';
const TeamPage = () => {
  return (
    <Layout>
    <div style={{marginTop:'10vh'}}>
     <Team/> 
     </div>
     <Contact/>
    </Layout>
  )
}

export default TeamPage
