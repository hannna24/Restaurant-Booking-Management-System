import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import uber from "../assets/uber.png";
import grubhub from "../assets/grubhub.png";
import foodpanda from "../assets/foodpanda.png";
import doordash from "../assets/doordash.png";
import didi from "../assets/didi.png";
import instacart from "../assets/instacart.png";
import justeat from "../assets/justeat.png";
import deliveroo from "../assets/deliveroo.png";
import postmates from "../assets/postmates.png";

const deliveryApps = [
  uber,
  grubhub,
  doordash,
  foodpanda,
  deliveroo,
  instacart,
  justeat,
  didi,
  postmates,
];

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/menu");
      setMenuItems(res.data);
    } catch (err) {
      console.error("Error fetching menu items:", err);
    }
  };

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const categories = ["All", "Breakfast", "Main", "Drinks", "Desserts"];

  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div className="container py-2">
          <div className="text-center mb-4">
            <h2
              style={{ fontFamily: '"EB Garamond", serif', fontSize: "6rem" }}
            >
              Our Menu
            </h2>
            <p className="mb-4">
              We consider all the drivers of change gives you the components you
              need to create a truly great meal.
            </p>
            <div className="d-flex justify-content-center gap-2 mt-5 mb-5 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn btn-sm rounded-pill px-3 ${
                    selectedCategory === cat
                      ? "btn-dark"
                      : "btn-outline-dark"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="row g-4">
            {filteredItems.map((item) => (
              <div className="col-md-3" key={item._id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: "160px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="text-danger fw-bold">
                      ${item.price.toFixed(2)}
                    </h5>
                    <h6>{item.title}</h6>
                    <p className="text-muted small">
                      Delicious {item.category.toLowerCase()} item made with
                      love.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="container my-5 py-5"
            style={{ backgroundColor: "#f9f9f9" }}
          >
            <div className="row align-items-center">
              <div className="col-md-6">
                <h5
                  className="fw-bold"
                  style={{
                    fontFamily: '"EB Garamond", serif',
                    fontSize: "5rem",
                  }}
                >
                  You can order through apps
                </h5>
                <p
                  className="text-muted"
                  style={{ maxWidth: "500px", fontSize: "1.2rem" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipiscing elit enim
                  bibendum sed et aliquet.
                </p>
              </div>
              <div className="col-md-6">
                <div className="row d-flex justify-content-center">
                  {deliveryApps.map((logo, i) => (
                    <div
                      key={i}
                      className="col-4 mb-3 d-flex justify-content-center"
                    >
                      <img
                        src={logo}
                        alt="app-logo"
                        style={{ height: "120px" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
