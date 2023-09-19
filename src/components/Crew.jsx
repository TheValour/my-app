import React from 'react'
import './Crew.css'
import crewImg from '../accest/astro.png';

export default function Crew() {
  return (
    <div id='crew-container' className='flex'>
      <div id='cd-1'>
        <h2>DEVELOPER</h2>
        <h1>PROGRAMMER PRAD</h1>
        <div>My name is Hello World (he/him). I'm a self-taught front-end developer who is passionate about learning new technologies & building things.
        I'm an art and design enthusiast, so I truly love bringing ideas to life in the form of beautiful and responsive websites.</div>
      
      </div>
        <div id='cd-2' ><img src={crewImg} alt="img" /></div>
    </div>
  )
}
