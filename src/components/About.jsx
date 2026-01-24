import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="display-6 fw-bold mb-4">About Me</h2>
            <p className="lead">
              I'm a passionate Full-Stack Developer specializing in MERN stack and Flutter mobile development. 
              Currently pursuing my Bachelor's in Software Engineering at COMSATS University.
            </p>
            <p>
              I combine academic knowledge with practical skills to build scalable, responsive applications 
              that solve real-world problems. My focus is on clean code, modern design, and optimal performance.
            </p>
            <div className="mt-4">
              <h5 className="fw-bold mb-3">Education</h5>
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h6 className="card-title fw-bold">COMSATS University Islamabad</h6>
                  <p className="card-text mb-1">Bachelor of Science in Software Engineering</p>
                  <small className="text-muted">2023 - 2027 (Expected)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-4">Development Approach</h5>
                <div className="d-flex align-items-start mb-4">
                  <div className="bg-primary text-white rounded-circle p-3 me-3">
                    <i className="bi bi-code-slash fs-4"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold">Clean Code</h6>
                    <p className="mb-0">Writing maintainable, well-documented code following best practices.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <div className="bg-success text-white rounded-circle p-3 me-3">
                    <i className="bi bi-phone fs-4"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold">Responsive Design</h6>
                    <p className="mb-0">Creating applications that work seamlessly across all devices.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="bg-warning text-dark rounded-circle p-3 me-3">
                    <i className="bi bi-lightning-charge fs-4"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold">Performance Focus</h6>
                    <p className="mb-0">Optimizing for speed, efficiency, and smooth user experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;