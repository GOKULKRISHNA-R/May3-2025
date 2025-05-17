import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>GokulKrishna Raju</h1>
            <h2>Product Developer – Mobile App & SDK</h2>
            <p className="tagline">Building seamless mobile experiences & empowering dev ecosystems</p>
            <div className="hero-buttons">
              <a href="/GokulKrishna Raju.pdf" download className="btn btn-primary">
                Download Resume
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="hero-image">
            {/* Placeholder for profile image */}
            <div className="profile-placeholder">
              <span>Profile Image</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 