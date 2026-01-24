import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Get In Touch</h2>
          <p className="lead">Have a project in mind? Let's work together!</p>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 bg-secondary">
              <div className="card-body p-4 p-lg-5">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control bg-dark text-white border-dark"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control bg-dark text-white border-dark"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-dark"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control bg-dark text-white border-dark"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-lg px-5">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 text-center mb-4">
            <div className="bg-primary rounded-circle p-3 d-inline-flex mb-3">
              <i className="bi bi-envelope fs-3"></i>
            </div>
            <h5 className="fw-bold">Email</h5>
            <p className="mb-0">your.email@example.com</p>
          </div>
          
          <div className="col-md-4 text-center mb-4">
            <div className="bg-success rounded-circle p-3 d-inline-flex mb-3">
              <i className="bi bi-telephone fs-3"></i>
            </div>
            <h5 className="fw-bold">Phone</h5>
            <p className="mb-0">+92 300 0000000</p>
          </div>
          
          <div className="col-md-4 text-center mb-4">
            <div className="bg-warning rounded-circle p-3 d-inline-flex mb-3">
              <i className="bi bi-geo-alt fs-3"></i>
            </div>
            <h5 className="fw-bold">Location</h5>
            <p className="mb-0">Islamabad, Pakistan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;