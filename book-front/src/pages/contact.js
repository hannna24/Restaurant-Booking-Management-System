import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Server error.");
    }
  };

  return (
    <>
      <div className='bg-light'>
        <Navbar />
        <div className="container text-center my-5" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          <h1 className="display-4 mb-3" style={{
            fontFamily: '"EB Garamond", serif',
            fontOpticalSizing: "auto",
            fontStyle: "normal",
            fontSize: "6rem",
          }}>Contact Us</h1>
          <p>We consider all the drivers of change gives you the components <br />you need to change to create a truly happens.</p>

          <div className="d-flex justify-content-center my-5 mb-4">
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow" style={{ maxWidth: '600px', width: '100%' }}>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="name" className="form-label text-start fw-bold w-100">Name</label>
                  <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                </div>
                <div className="col">
                  <label htmlFor="email" className="form-label text-start fw-bold w-100">Email Address</label>
                  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email address" />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label text-start fw-bold w-100">Subject</label>
                <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Write a subject" />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label text-start fw-bold w-100">Message</label>
                <textarea className="form-control" rows="4" id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Write your message"></textarea>
              </div>

              <button type="submit" className="btn btn-danger w-100 rounded-pill">Send</button>
              {status && <p className="mt-3 text-center">{status}</p>}
            </form>
          </div>

          <div className="d-flex justify-content-center mt-5" style={{ gap: '120px' }}>
            <div style={{ textAlign: 'center' }}>
              <h5 className='fw-bold'>Call Us:</h5>
              <p><a href="tel:+1234567890" style={{ color: '#a00', textDecoration: 'none' }}>+1-234-567-8900</a></p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h5 className='fw-bold'>Hours:</h5>
              <p style={{ margin: 0 }}>Mon-Fri: 11am - 8pm<br />Sat, Sun: 9am - 10pm</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h5 className='fw-bold'>Our Location:</h5>
              <p style={{ margin: 0 }}>123 Bridge Street<br />Nowhere Land, LA 12345<br />United States</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
