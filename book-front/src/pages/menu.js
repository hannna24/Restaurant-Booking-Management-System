import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import icecream from "../assets/icecream.png";
import lemonade from "../assets/lemonade.png";
import cocktail from "../assets/cocktail.png";
import cheeseburger from "../assets/cheeseburger.png";
import cake from "../assets/cake.png";
import pizza from "../assets/Pizza.jpg";
import egg from "../assets/egg.png";
import waffles from "../assets/waffle.png";
import uber from "../assets/uber.png";
import grubhub from "../assets/grubhub.png";
import foodpanda from "../assets/foodpanda.png";
import doordash from "../assets/doordash.png";
import didi from "../assets/didi.png";
import instacart from "../assets/instacart.png";
import justeat from "../assets/justeat.png";
import deliveroo from "../assets/deliveroo.png";
import postmates from "../assets/postmates.png";



const menuItems = [
  { title: "Fried Eggs", price: "$9.99", image: egg },
  { title: "Hawaiian Pizza", price: "$16.99", image: pizza },
  { title: "Martini Cocktail", price: "$7.25", image: cocktail },
  { title: "Butterscotch Cake", price: "$20.09", image: cake },
  { title: "Mint Lemonade", price: "$5.89", image: lemonade },
  { title: "Chocolate Icecream", price: "$10.65", image: icecream },
  { title: "Cheese Burger", price: "$12.55", image: cheeseburger },
  { title: "Classic Waffles", price: "$12.99", image: waffles },
];


const deliveryApps = [
  uber, grubhub, doordash, foodpanda, deliveroo, instacart, justeat, didi,postmates
];


function Menu() {
  return (
    <>
    <Navbar/>
    <div className="bg-light">
     <div className="container  py-2">
      {/* Menu Header */}
      <div className="text-center mb-4">
        <h2       style={{
                  fontFamily: '"EB Garamond", serif',
                  fontOpticalSizing: "auto",
                  // fontWeight: "700", // or 700 or 'bold'
                  fontStyle: "normal",
                  fontSize: "6rem",
                }} >Our Menu</h2>
        <p className = "mb-4" >We consider all the drivers of change gives you the components you need to change to create a truly happens</p>
        <div className="d-flex justify-content-center gap-2 mt-5  mb-5 flex-wrap">
          <button className="btn btn-dark btn-sm rounded-pill px-3">All</button>
          <button className="btn btn-outline-dark btn-sm rounded-pill px-3">Breakfast</button>
          <button className="btn btn-outline-dark btn-sm rounded-pill px-3">Main Dishes</button>
          <button className="btn btn-outline-dark btn-sm rounded-pill px-3">Drinks</button>
          <button className="btn btn-outline-dark btn-sm rounded-pill px-3">Desserts</button>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="row g-4">
        {menuItems.map((item, index) => (
          <div className="col-md-3" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={item.image} className="card-img-top" alt={item.title} style={{ height: "160px", objectFit: "cover" }} />
              <div className="card-body text-center">
                <h5 className="text-danger fw-bold">{item.price}</h5>
                <h6>{item.title}</h6>
                <p className="text-muted small">Made with eggs, lettuce, salt, oil and other ingredients</p>
              </div>
            </div>
          </div>
        ))}
      </div>

{/* Order through Apps Section */}
<div className="container my-5 py-5" style={{ backgroundColor: "#f9f9f9" }}>
  <div className="row align-items-center">
    {/* Left Text Section */}
    <div className="col-md-6">
      <h5 className="fw-bold" style={{
                  fontFamily: '"EB Garamond", serif',
                  fontOpticalSizing: "auto",
                  // fontWeight: "700", // or 700 or 'bold'
                  fontStyle: "normal",
                  fontSize: "5rem",
                }}>
        You can order through apps
      </h5>
      <p className="text-muted" style={{ maxWidth: "500px", fontSize: "1.2rem" }}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet
        aliquet risus tempor semper.
      </p>
    </div>

    {/* Right Logos Section */}
    <div className="col-md-6">
      <div className="row d-flex justify-content-center">
        {deliveryApps.map((logo, i) => (
          <div key={i} className="col-4 mb-" style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={logo} alt="app-logo" style={{ height: "120px" }} />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </div>
    </div>
    <Footer/>
    </>
    
  );
}

export default Menu;
