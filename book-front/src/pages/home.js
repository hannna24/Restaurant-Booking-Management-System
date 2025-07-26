import React from "react";
import Navbar from "../components/Navbar";
import bgImage from "../assets/image110.png";
import bgImage2 from "../assets/Image2.png";
import Caterings from "../assets/Caterings.jpg";
import birthday from "../assets/Birthday.jpg";
import wedding from "../assets/Wedding.jpg";
import events from "../assets/Event.jpg";
import Chef from "../assets/Chef.png";
import Pizza from "../assets/Pizza.jpg";
import steak from "../assets/Steak.png";
import P1 from "../assets/P1.png";
import P2 from "../assets/P2.png";
import P3 from "../assets/P3.png";
import Burger from "../assets/Burger.png";
import fries from "../assets/Fries.png";
import Fried from "../assets/Fried.png";
import Cupcakes from "../assets/Cupcakes.png";
import Pizza1 from "../assets/Pizza1.png";
import Footer from "../components/Footer";

function Home() {
  const services = [
    {
      title: "Caterings",
      image: Caterings,
    },
    {
      title: "Birthdays",
      image: birthday,
    },
    {
      title: "Weddings",
      image: wedding,
    },
    {
      title: "Events",
      image: events,
    },
  ];
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero-section d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          color: "#000",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold " style={{ fontSize: "5rem" }}>
            Best food for your taste
          </h1>
          <p className="lead mt-3">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
          <div className="mt-4 d-flex justify-content-center gap-3">
            <a href="#" className="btn btn-danger px-4 py-2 rounded-pill">
              Book A Table
            </a>
            <a href="#" className="btn btn-outline-dark px-4 py-2 rounded-pill">
              Explore Menu
            </a>
          </div>
        </div>
      </section>

      {/* Browse Our Menu Section */}
      <section className="menu-section py-5  text-center">
        <div className="container">
          <h2
            className="fw-bold mb-5"
            style={{ fontFamily: "Pacifico, cursive", fontSize: "3rem" }}
          >
            Browse Our Menu
          </h2>
          <div className="row g-4">
            {[
              { title: "Breakfast", icon: "croissant" },
              { title: "Main Dishes", icon: "meal" },
              { title: "Drinks", icon: "cocktail" },
              { title: "Desserts", icon: "cake" },
            ].map((item, index) => (
              <div className="col-md-3" key={index}>
                <div className="card h-100 shadow-sm menu-card p-4">
                  <img
                    src={`https://img.icons8.com/ios-filled/50/000000/${item.icon}.png`}
                    alt={item.title}
                    className="card-img-top w-25 mx-auto mt-2"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">{item.title}</h5>
                    <p className="card-text text-muted small">
                      In the new era of technology we look in the future with
                      certainty and pride for our life.
                    </p>
                    <a
                      href="#"
                      className="btn btn-link text-danger fw-semibold"
                    >
                      Explore Menu
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-light">
        <div className="container py-4 bg-light">
          <div className="row align-items-center">
            {/* Left: Image with contact box */}
            <div className="col-lg-6 position-relative mb-4 mb-lg-0">
              <img
                src={bgImage2}
                alt="Healthy Food"
                className="rounded shadow"
                // style={{ height: "500px", width: "00px" }}
              />
              <div
                className="bg-dark text-white p-3 rounded position-absolute"
                style={{ bottom: "-20px", left: "20px" }}
              >
                <h6 className="mb-2">Come and visit us</h6>
                <p className="mb-1 bi bi-telephone "> (443) 857 - 0107</p>
                <p className="mb-1 bi bi-envelope-at">
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
              <p className="text-muted">
                Our story began with a vision to create a unique dining
                experience that merges fine dining, exceptional service, and a
                vibrant ambiance.
              </p>
              <p className="text-muted">
                Rooted in city’s rich culinary culture, we aim to honor our
                local roots while infusing a global palate.
              </p>
              <button
                className="btn btn-outline-dark border-2 mt-2 rounded-pill"
                style={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
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
          We also offer unique services for your events
        </h2>
        <div className="row py-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={service.image}
                  className="card-img-top"
                  alt={service.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text text-muted">
                    In the new era of technology we look in the future with
                    certainty for life.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="d-flex align-items-center">
            {/* Left Side - 70% */}
            <div style={{ width: "70%" }} className="d-flex">
              {/* Chef on the Left */}
              <div>
                <img
                  src={Chef}
                  alt="Chef"
                  className="img-fluid rounded"
                  style={{ width: "60vh", height: "80vh", objectFit: "cover" }}
                />
              </div>

              {/* Pizza + Steak stacked */}
              <div className="d-flex flex-column justify-content-between ms-3">
                <img
                  src={Pizza}
                  alt="Pizza"
                  className="img-fluid rounded mb-3"
                  style={{ width: "45vh", height: "38vh", objectFit: "cover" }}
                />
                <img
                  src={steak}
                  alt="Steak"
                  className="img-fluid rounded"
                  style={{ width: "45vh", height: "38vh", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Right Side - 30% */}
            <div style={{ width: "40%" }} className="ps-5">
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
                Fastest Food Delivery in City
              </h2>
              <p className="text-muted">
                Our visual designer lets you quickly and easily create a clean
                UI to showcase your restaurant services.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="mb-2">
                  <i className="bi bi-clock-fill text-danger me-2"></i>
                  Delivery within 30 minutes
                </li>
                <li className="mb-2">
                  <i className="bi bi-tag-fill text-danger me-2"></i>
                  Best Offer & Prices
                </li>
                <li>
                  <i className="bi bi-laptop-fill text-danger me-2"></i>
                  Online Services Available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5  text-center">
        <div className="container">
          <h3
            className="fw-bold"
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
      <section className="bg-light py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">Our Blog & Articles</h2>
            <button className="btn btn-danger rounded-pill px-4">
              Read All Articles
            </button>
          </div>

          <div className="row g-4">
            {/* Large Left Blog Card */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src={Burger}
                  className="card-img-top rounded-top"
                  alt="Burger"
                />
                <div className="card-body">
                  <small className="text-muted">January 3, 2023</small>
                  <h5 className="mt-2 fw-bold">
                    The secret tips & tricks to prepare a perfect burger & pizza
                    for our customers
                  </h5>
                  <p className="text-muted small mt-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit...
                  </p>
                </div>
              </div>
            </div>

            {/* Right Grid (2x2) */}
            <div className="col-lg-6">
              <div className="row g-3">
                {[
                  {
                    image: fries,
                    title:
                      "How to prepare the perfect french fries in an air fryer",
                  },
                  {
                    image: Fried,
                    title: "How to prepare delicious chicken tenders",
                  },
                  {
                    image: Cupcakes,
                    title: "7 delicious cheesecake recipes you can prepare",
                  },
                  {
                    image: Pizza1,
                    title:
                      "5 great pizza restaurants you should visit this city",
                  },
                ].map((item, index) => (
                  <div className="col-6" key={index}>
                    <div className="card border-0 shadow-sm h-100">
                      <img
                        src={item.image}
                        className="card-img-top rounded-top"
                        alt="blog"
                      />
                      <div className="card-body">
                        <small className="text-muted">January 3, 2023</small>
                        <h6 className="mt-1 fw-bold">{item.title}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
 <Footer />
    
    </>
  );
}

export default Home;
