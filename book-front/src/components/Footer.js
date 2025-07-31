import { GiBowlOfRice } from "react-icons/gi";
import insta1 from "../assets/insta1.png";

import insta2 from "../assets/insta2.png";
import insta3 from "../assets/insta3.png";
import insta4 from "../assets/insta4.png";

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container py-5">
        {/* 3 Horizontal Sections */}
        <div className="d-flex flex-column flex-md-row justify-content-between mb-4 text-center text-md-start">
          {/* Section 1: Brand + Social Icons */}
          <div className="container">
                      <GiBowlOfRice size={100} color="#dc3545" style={{ paddingRight: '6px' , paddingBottom: '30px'}} />
                      <a
            className="navbar-brand  text-white "
            href="#"
            style={{ fontFamily: 'Pacifico, cursive' , fontSize: '2.7rem' }}
          >
             Bistro Bliss
          </a>
            <p className="text-white mb-5">
              Delivering delicious moments right to your door.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-2">
              <i className="bi bi-facebook fs-5"></i>
              <i className="bi bi-instagram fs-5"></i>
              <i className="bi bi-twitter fs-5"></i>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="mb-4 mb-md-0 w-100">
  <div className="d-flex flex-wrap gap-5 justify-content-center justify-content-md-start">
    
    {/* Pages */}
    <div>
      <h5 className="fw-bold mb-5" >Pages</h5>
      <ul className="list-unstyled">
        <li className="mb-5"><a href="/" className="text-white text-decoration-none">Home</a></li>
        <li className="mb-5"><a href="/menu" className="text-white text-decoration-none">Menu</a></li>
        <li className="mb-5"><a href="/about" className="text-white text-decoration-none">About Us</a></li>
        <li className="mb-5"><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
        <li className="mb-5"><a href="/blog" className="text-white text-decoration-none">Blog</a></li>
        <li className="mb-5"><a href="#" className="text-white text-decoration-none">FAQs</a></li>
      </ul>
    </div>

    {/* Utility Pages */}
    <div className="col-6">
      <h5 className="fw-bold mb-5">Utility Pages</h5>
      <ul className="list-unstyled col-6">
        <li className="mb-5"><a href="/login" className="text-white text-decoration-none">Login</a></li>
        <li className="mb-5"><a href="/register" className="text-white text-decoration-none">Register</a></li>
        <li className="mb-5"><a href="#" className="text-white text-decoration-none">Forgot Password</a></li>
        <li className="mb-5"><a href="#" className="text-white text-decoration-none"> Not Found</a></li>
        <li className="mb-5"><a href="#" className="text-white text-decoration-none">Terms of Use</a></li>
      </ul>
    </div>
  </div>  
</div>

          {/* Section 3: Follow Us + 4 images */}
          <div className="w-100">
            <h6 className="fw-bold mb-4 " style={{fontSize:"1.5rem" }}>Follow Us on Instagram</h6>
            <div className="row row-cols-2 g-2">
              <div className="col">
                <img src={insta1} alt="insta" className="img-fluid rounded" />
              </div>
              <div className="col">
                <img src={insta2} alt="insta" className="img-fluid rounded" />
              </div>
              <div className="col">
                <img src={insta3} alt="insta" className="img-fluid rounded" />
              </div>
              <div className="col">
                <img src={insta4} alt="insta" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <hr className="text-secondary" />
        <p className="text-center text-muted small mb-0">
          &copy; 2025 Foodie. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
