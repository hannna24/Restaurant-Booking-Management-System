import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiBowlOfRice } from "react-icons/gi";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="custom-navbar">
      {/* Top Bar */}
      <div className="navbar-top d-flex justify-content-between align-items-center bg-dark text-white" style={{ height: '35px', padding: '0 15rem' }}>
  <div className="d-flex gap-5 small">
             <span class="bi bi-telephone"> (+20) 123 456 789</span>
             <span class="bi bi-envelope-at"> info@bistrobliss.com</span>
        </div>
        <div className="d-flex gap-3 small">
    <a href="https://instagram.com" className="text-white text-decoration-none bi bi-instagram" title="Instagram"></a>
    <a href="https://twitter.com" className="text-white text-decoration-none bi bi-twitter" title="Twitter"></a>
    <a href="https://facebook.com" className="text-white text-decoration-none bi bi-facebook" title="Facebook"></a>
  </div>
      </div>


      {/* Bottom Main Navbar */}
     <nav className="navbar navbar-expand-lg bg-light ">

        <div className="container">
            <GiBowlOfRice size={70} color="#dc3545" style={{ paddingRight: '6px' , paddingBottom: '10px'}} />
            <a
  className="navbar-brand fw-bold text-dark "
  href="#"
  style={{ fontFamily: 'Pacifico, cursive' , fontSize: '1.7rem' }}
>
   Bistro Bliss
</a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav me-3">
              <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/menu">Menu</a></li>
              <li className="nav-item"><a className="nav-link" href="/blog">Pages</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
            </ul>
            <a className="btn btn-outline-dark rounded-pill" href="/book">Book A Table</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
