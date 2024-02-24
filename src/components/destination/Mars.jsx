import './Moon.css'
import marsImg from '../../accest/mars.png'

export default function Mars() {
  return (
    <div id='MARS' className='moon-container flex-box'>
      <div className='m1'><img src={marsImg} alt="Moon Img" /></div>
      <div className='m1'>
          <a href='#MARS'><h1>WHY MARS?</h1></a>
          <p>Mars, Earth&apos;s nearby neighbor, is about 140 million miles away. It gets decent sunlight, despite being around 50% farther from the Sun than Earth. While Mars is cold, we can warm it up. Its atmosphere is mostly CO2 with some nitrogen and argon, making it possible to grow plants by compressing the atmosphere. Mars has about 38% of Earth&apos;s gravity, allowing for easier heavy lifting and more agile movement.</p>
          <div id="diameter" className='detail'>DIAMETER <div  className='val'>6,791 km / 4,220 mi</div></div>
          <div id="day" className='detail'>DAY LENGTH <div  className='val'>24 hrs 37 min</div></div>
          <div id="gravity" className='detail'>GRAVITY <div  className='val'>38% of Earth</div></div>
          <div id="dist" className='detail'>AVG DISTANCE FROM EARTH <div  className='val'>225Mkm / 140Mmi</div></div>
          <div id="age" className='detail'>AGE <div  className='val'>4.51 billion years</div></div>
      </div>
    </div>
  )
}
