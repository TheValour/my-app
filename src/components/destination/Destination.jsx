import Moon from './Moon'
import Mars from './Mars';
import Footer from '../about/Footer';

export default function Destination() {
  return (
    <div className='dest-container' >
      <Moon />
      <Mars />
      <Footer/>
    </div>
  )
}
