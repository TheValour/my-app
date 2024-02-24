import { NavLink } from "react-router-dom"
import './Crew.css'

export default function Crypto() {
  return (
      <div id='crew-container' className='flex-box'>
        <div id='cd-1'>
            <h2>DEVELOPER</h2>
            <h1>PROGRAMMER PRAD</h1>
            <div>My name is Hello World (he/him). I&apos;m a self-taught front-end developer who is passionate about learning new technologies & building things.
            I&apos;m an art and design enthusiast, so I truly love bringing ideas to life in the form of beautiful and responsive websites.</div>

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
        <div id='cd-2' ><img src='photos/astro.png' alt="img" /></div>
    </div>
  )
}
