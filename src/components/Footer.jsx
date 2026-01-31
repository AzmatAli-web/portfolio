import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 border-top border-secondary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="fw-bold mb-2">Azmat Ali</h5>
            <p className="mb-0 text-muted">Full-Stack Developer | MERN Stack & Flutter Specialist</p>
          </div>
          
          <div className="col-md-6">
            <div className="d-flex justify-content-md-end gap-3">
              <a href="https://github.com/AzmatAli-web/" className="text-white fs-5">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/azmat-ali-8698473a1/" className="text-white fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
               
               
            </div>
          </div>
        </div>
        
        <hr className="border-secondary my-4" />
        
        <div className="text-center text-muted">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Azmat Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;