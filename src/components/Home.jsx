import React from 'react'
import './Home.css'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div id='home-container' className=''>
        <Navbar/>
        <div id='detail' className='flex'>
          <div id='hd-1'>
            <h2>SO, YOU WANT TO TRAVEL TO </h2>
            <h1>SPACE</h1>
            <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
          </div>
          
          <div id='hd-2' className='flex'>Explore</div>
        </div>
    </div>
  )
}
