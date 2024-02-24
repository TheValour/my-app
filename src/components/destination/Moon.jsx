import './Moon.css'
import moonImg from '../../accest/Moon.png'

export default function Moon() {
  return (
    <div className='moon-container flex-box'>
        <div className='m1'><img src={moonImg} alt="Moon Img" /></div>
        <div className='m1'>
            <h1>WHY THE MOON?</h1>
            <p>The Moon is one of Earth&apos;s closest habitable neighbors and provides an opportunity to gain valuable experience for missions to Mars and beyond.</p>
            <div id="diameter" className='detail'>DIAMETER <div  className='val'>3475Km / 2159 mil</div></div>
            <div id="day" className='detail'>DAY LENGTH <div  className='val'>29.5 Earth Day</div></div>
            <div id="gravity" className='detail'>GRAVITY <div  className='val'>16.6% Earth</div></div>
            <div id="dist" className='detail'>AVG DISTANCE FROM EARTH <div  className='val'>384,400 km / 238,855 mi</div></div>
            <div id="age" className='detail'>AGE <div  className='val'>4.51 billion years</div></div>
        </div>
    </div>
  )
}
