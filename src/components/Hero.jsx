import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="hero-section bg-dark text-white py-5" style={{paddingTop: '80px'}}>
      <div className="container">
        <div className="row align-items-center">
          {/* PROFILE PICTURE - LEFT SIDE */}
          <div className="col-lg-5">
            <div className="hero-image text-center">
              {imageError ? (
                <div className="profile-placeholder rounded-circle bg-primary d-inline-flex align-items-center justify-content-center shadow-lg" 
                     style={{
                       width: '320px',
                       height: '320px',
                       background: 'linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)'
                     }}>
                  <div className="text-center">
                    <span className="display-1 text-white fw-bold">A</span>
                    <span className="display-1 text-white fw-bold opacity-75">A</span>
                    <p className="text-white mt-2 fw-light">Full-Stack Developer</p>
                  </div>
                </div>
              ) : (
                <img 
                  src="/images/azmat.jpeg"  // Updated to your actual image
                  alt="Azmat Ali - Full-Stack Developer"
                  className="img-fluid rounded-circle shadow-lg border border-4 border-primary"
                  style={{
                    width: '320px',
                    height: '320px',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </div>

          {/* TEXT CONTENT - RIGHT SIDE */}
          <div className="col-lg-7 mt-5 mt-lg-0">
            <h6 className="text-primary mb-3">Hello, I'm</h6>
            <h1 className="display-4 fw-bold mb-3">Azmat Ali</h1>
            <h2 className="h3 mb-4">
              <span className="text-primary">Full-Stack Developer</span>
              <br />
              <span className="text-light">MERN Stack & Flutter Specialist</span>
            </h2>
            <p className="lead mb-4">
              Building modern web applications and mobile apps with cutting-edge technologies.
              Software Engineering student passionate about creating digital solutions.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary btn-lg">
                <i className="bi bi-code-slash me-2"></i> View Projects
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg">
                <i className="bi bi-envelope me-2"></i> Contact Me
              </a>
              <a 
                href="/Azmat_Ali_Resume.pdf"  // Updated to correct resume path
                className="btn btn-outline-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-download me-2"></i> Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-5">
              <h6 className="mb-3">Connect with me:</h6>
              <div className="d-flex gap-3">
                <a 
                  href="https://github.com/AzmatAli-web" 
                  className="text-white fs-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/azmat-ali-software-engineer/" 
                  className="text-white fs-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a 
                  href="https://twitter.com/AzmatAliDev" 
                  className="text-white fs-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a 
                  href="mailto:azmat@example.com" 
                  className="text-white fs-4"
                >
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;