import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="fade-in">GokulKrishna Raju</h1>
          <h2 className="fade-in">Product Developer – Mobile App & SDK</h2>
          <p className="hero-tagline fade-in">
            Building seamless mobile experiences & empowering dev ecosystems
          </p>
          <div className="hero-buttons fade-in">
            <a 
              href="/GokulKrishna Raju.pdf" 
              download 
              className="btn btn-primary"
            >
              Download Resume
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="hero-image fade-in">
          <img 
            src="/E0438-removebg-preview.png" 
            alt="GokulKrishna Raju" 
            width="500"
            height="499"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 