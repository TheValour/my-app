import './About.css'; 
import Footer from './Footer';

function About() {
  return (
    <>
      <div className="about-us">
        <h2>About Our Space Website</h2>
        <p>
          Welcome to our space-themed website! We are a passionate group of space
          enthusiasts who aim to share the wonders of the cosmos with the world.
          Our mission is to educate, inspire, and foster a greater appreciation
          for space exploration and discovery.
        </p>
        <p>
          Whether you&apos;re a seasoned astronomer or a curious beginner, our website
          provides a wealth of information about the universe, including
          articles, images, videos, and interactive tools to help you explore and
          understand the cosmos.
        </p>
        <p>
          Join us on this exciting journey through the stars as we delve into
          topics such as astronomy, space exploration, planetary science, and much
          more. We hope you find our website both informative and captivating.
        </p>
      </div>
      <Footer/>
    </>
  );
}

export default About;
