import React from 'react'
import { NavLink } from "react-router-dom"

import './Crew.css'

export default function Pilot() {
  return (
    <div id='crew-container' className='flex'>
      <div id='cd-1'>
        <h2>PILOT</h2>
        <h1>Victor Glover</h1>
        <div>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </div>

        <div id='box' >
              <NavLink to='/crew'>
                <p className='circle'></p>
              </NavLink>
              <NavLink to='/crypto'>
                <p className='circle'></p>
              </NavLink>
              <NavLink to='/pilot'>
                <p className='circle'></p>
              </NavLink>
            </div>
      </div>
        <div id='cd-2' ><img src='./photos/pilot.png' alt="img" /></div>
    </div>
  )
}
