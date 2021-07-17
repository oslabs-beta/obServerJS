import React from 'react';
import Layout from '../components/Layout'
import Intro from '../components/Intro';
import Description from '../components/Description';
import Feature from '../components/Feature';
import Team from '../components/Team';
import Closing from '../components/Closing';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {

  return (
    <Layout>
      <Intro/>
      <Description/>
      <Feature/>
      <Team/>
      <Closing/>
    </Layout>
  )
}
