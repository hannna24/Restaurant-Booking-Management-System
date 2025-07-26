import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage22 from "../assets/image111.png";
import video from "../assets/video.mp4";
import cooking from "../assets/cooking.png";
import P1 from "../assets/P1.png";
import P2 from "../assets/P2.png";
import P3 from "../assets/P3.png";

function about() {
  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div
          className="container  bg-light"
          style={{ paddingTop: "60px", paddingBottom: "120px" }}
        >
          <div className="row align-items-center">
            {/* Left: Image with contact box */}
            <div className="col-lg-6 position-relative mb-4 mb-lg-0">
              <img
                src={bgImage22}
                alt="Healthy Food"
                className="rounded shadow"
                style={{ height: "500px", width: "520px" }}
              />
              <div
                className="bg-secondary text-white p-3 rounded position-absolute"
                style={{
                  bottom: "-40px",
                  left: "310px",
                  height: "240px",
                  width: "300px",
                }}
              >
                <h6 className="ml-5 mb-4 mt-2" style={{ fontSize: "1.3rem" }}>
                  Come and visit us
                </h6>
                <p className="mb-4 bi bi-telephone "> (443) 857 - 0107</p>
                <p className="mb-4 bi bi-envelope-at">
                  {" "}
                  happy.tummy@restaurant.com
                </p>
                <p className="mb-0 bi bi-geo-alt-fill">
                  {" "}
                  837 W. Marshall Lane, Los Angeles
                </p>
              </div>
            </div>
            {/* Right: Text */}
            <div className="col-lg-6">
              <h2
                className="fw-bold"
                style={{
                  fontFamily: '"EB Garamond", serif',
                  fontOpticalSizing: "auto",
                  fontWeight: "bold", // or 700 or 'bold'
                  fontStyle: "normal",
                  fontSize: "3.5rem",
                }}
              >
                We provide healthy food for your family.
              </h2>
              <p className="mt-2">
                Our story began with a vision to create a unique dining
                experience that merges fine dining, exceptional service, and a
                vibrant ambiance.Rooted in city’s rich culinary culture, we aim
                to honor our local roots while infusing a global palate.Rooted
                in city’s rich culinary culture, we aim to honor our
                <br />
                local roots while infusing a global palate.Rooted in city’s rich
                culinary culture, we aim to honor our local roots while infusing
                a global palate.Rooted in city’s rich culinary culture, we aim
                to honor our local roots while infusing a global palate.
              </p>
              <p className="text-muted"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        {/* Top 70%: Video Section */}
        <div
          className="position-relative"
          style={{ height: "70vh", overflow: "hidden" }}
        >
          <video
            className="w-100 object-fit-cover"
            style={{ height: "90vh" }} // or adjust to "90vh", "100vh", etc.
            src={video}
            autoPlay
            muted
            loop
          ></video>

          <div className="position-absolute top-50 start-50 translate-middle text-white text-center px-3">
            <h2 className="display-5 fw-bold">
              Feel the authentic & original taste from us
            </h2>
          </div>
        </div>

        {/* Bottom 30%: Icons + Text */}
        <div className="row text-center bg-white py-5">
          <div className="col-md-4 mb-4 mb-md-0">
            <i className="bi bi-cup-hot-fill display-4 text-danger"></i>
            <h5 className="mt-3">Fresh Ingredients</h5>
            <p>Only premium and fresh ingredients in our meals.</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <i className="bi bi-truck display-4 text-primary"></i>
            <h5 className="mt-3">Fast Delivery</h5>
            <p>Lightning-fast delivery right to your doorstep.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-emoji-smile-fill display-4 text-success"></i>
            <h5 className="mt-3">Happy Customers</h5>
            <p>Your satisfaction is our top priority.</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="fw-bold display-6">
            A little information<br />
            for our valuable guest
          </h2>
          <p className="text-muted mt-3">
            At place, we believe that dining is not just about food, but also about the overall experience.
            Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
          </p>

          {/* Info Cards */}
          <div className="row mt-4 g-3">
            <div className="col-6">
              <div className="border rounded text-center p-4 h-100">
                <h3 className="fw-bold" style={{ fontFamily: 'Playfair Display'}}>3</h3>
                <small className="text-muted">Locations</small>
              </div>
            </div>
            <div className="col-6">
              <div className="border rounded text-center p-4 h-100">
                <h3 className="fw-bold" style={{ fontFamily: 'Playfair Display'}}>1995</h3>
                <small className="text-muted">Founded</small>
              </div>
            </div>
            <div className="col-6">
              <div className="border rounded text-center p-4 h-100">
                <h3 className="fw-bold"style={{ fontFamily: 'Playfair Display'}} >65+</h3>
                <small className="text-muted">Staff Members</small>
              </div>
            </div>
            <div className="col-6">
              <div className="border rounded text-center p-4 h-100">
                <h3 className="fw-bold" style={{ fontFamily: 'Playfair Display'}} >100%</h3>
                <small className="text-muted">Satisfied Customers</small>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="col-md-6">
          <img
            src={cooking}
            alt="Cooking"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>

      {/* Testimonials Section */}
          <section className="py-5  text-center">
            <div className="container mb-3">
              <h3
                className="fw-bold mb-5"
                style={{
                  fontFamily: '"EB Garamond", serif',
                  fontOpticalSizing: "auto",
                  fontWeight: "bold", // or 700 or 'bold'
                  fontStyle: "normal",
                  fontSize: "3.5rem",
                }}
              >
                What Our Customers Say
              </h3>
              <div className="row g-4  ">
                {[
                  {
                    quote: "“The best restaurant”",
                    desc: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were greeted with warm smiles.Last night, we dined at place and were simply blown away. From the moment we stepped in, we were greeted with warm smiles.",
                    name: "Sophie Robson",
                    location: "Los Angeles, CA",
                    img: P1,
                  },
                  {
                    quote: "“Simply delicious”",
                    desc: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were greeted with warm smiles. The ambiance was cozy and relaxed, and every dish was beautifully presented. Perfect for our anniversary dinner.",
                    name: "Matt Carmen",
                    location: "San Diego, CA",
                    img: P2,
                  },
                  {
                    quote: "“One of a kind restaurant”",
                    desc: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were greeted with warm smiles. The food was the highlight of our evening. The experience was truly unforgettable. Highly recommended.",
                    name: "Andy Smith",
                    location: "San Francisco, CA",
                    img: P3,
                  },
                ].map((item, index) => (
                  <div className="col-md-4  " key={index}>
                    <div className="p-4 border rounded bg-light h-100 shadow-sm d-flex">
                      {/* Left - Comment (80%) */}
                      <div className="pe-3" style={{ flex: 8 }}>
                        <h5 className="text-danger fw-semibold">{item.quote}</h5>
                        <p className="text-muted">{item.desc}</p>
                      </div>
    
                      {/* Vertical Divider */}
                      <div
                        style={{
                          width: "1px",
                          backgroundColor: "#ccc",
                          margin: "0 1rem",
                        }}
                      ></div>
    
                      {/* Right - Image and Name (20%) */}
                      <div
                        className="d-flex flex-column align-items-center justify-content-center text-center"
                        style={{ flex: 2 }}
                      >
                        <img
                          src={item.img}
                          alt={item.name}
                          className="rounded-circle mb-2"
                          width="50"
                          height="50"
                        />
                        <strong>{item.name}</strong>
                        <small className="text-muted">{item.location}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
         
    

      <Footer />
    </>
  );
}

export default about;
