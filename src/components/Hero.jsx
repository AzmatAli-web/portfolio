import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section bg-dark text-white py-5" style={{paddingTop: '80px'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
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
            <div className="d-flex gap-3">
              <a href="#projects" className="btn btn-primary btn-lg">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg">
                Contact Me
              </a>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="hero-image text-center">
              <div className="profile-placeholder rounded-circle bg-primary d-inline-flex align-items-center justify-content-center" 
                   style={{width: '300px', height: '300px'}}>
                <span className="display-1 text-white">AA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;