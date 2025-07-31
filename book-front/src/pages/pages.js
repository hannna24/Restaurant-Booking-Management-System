import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import Maskgroup1 from "../assets/Maskgroup1.png";
import Maskgroup2 from "../assets/Maskgroup2.png";
import Maskgroup3 from "../assets/Maskgroup3.png";
import Maskgroup4 from "../assets/Maskgroup4.png";


export default function BlogArticlePage() {
  const moreArticles = [
    {
        img: Maskgroup1,
        title: "How to prepare a delicious gluten free sushi",
        date: "January 3, 2023",
      },
      {
        img: Maskgroup2,
        title: "Exclusive baking lessons from the pastry king",
        date: "January 3, 2023",
      },
      {
        img: Maskgroup3,
        title: "How to prepare the perfect fries in an air fryer",
        date: "January 3, 2023",
      },
      {
        img: Maskgroup4,
        title: "How to prepare delicious chicken tenders",
        date: "January 3, 2023",
      },
  ];

  return (
    <>
    <Navbar/>
    <div className="container " style={{padding: '40px 150px' }}>
      {/* Header */}
      <div className="text-center mb-5">
        <h4 className="fw-bold" style={{
                  fontFamily: '"EB Garamond", serif',
                  fontOpticalSizing: "auto",
                  
                  fontStyle: "normal",
                  fontSize: "4.2rem",
                }}>
          The secret tips & tricks to prepare a perfect burger & pizza for our customers
        </h4>
      </div>

      {/* First Section */}
      <div className="mb-5">
        <img
          src={img1}
          alt="Dish"
          className="img-fluid rounded mb-4"
          style={{ maxHeight: "600px", width: "100%", objectFit: "full" }}
        />

        <h6 className="fw-bold">What do you need to prepare a home-made burger?</h6>
        <p className="text-muted">
          Discover the essential ingredients for a delicious homemade burger. Every ingredient plays
          a role in creating the perfect taste.
        </p>
        <ul className="text-muted">
          <li>Fresh ground beef with 80/20 meat-to-fat ratio.</li>
          <li>Soft, toasted buns to hold everything together.</li>
          <li>Your favorite toppings: lettuce, tomatoes, onions, cheese, and pickles.</li>
          <li>Special sauce or classic ketchup and mustard.</li>
        </ul>
      </div>

      {/* Second Section */}
      <div className="mb-5">
        <h6 className="fw-bold">What are the right ingredients to make it delicious?</h6>
        <ul className="text-muted">
          <li>Season the beef generously with salt and pepper before cooking.</li>
          <li>Use a cast-iron skillet for better searing and flavor.</li>
          <li>Let the patties rest for a minute before assembling the burger.</li>
        </ul>

        <img
          src={img2}
          alt="Fries"
          className="img-fluid rounded mt-4"
          style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
        />

        <h6 className="fw-bold mt-4">What are the right ingredients to make it delicious?</h6>
        <p className="text-muted">
          Alongside your burger, pair it with homemade crispy fries seasoned to perfection. Simple
          techniques can elevate your entire meal.
        </p>
      </div>

      {/* Read More Articles */}
      <div className="row gx-4 gy-4 justify-content-center">
  {moreArticles.map((post, index) => (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
      key={index}
    >
      <div
        className="card"
        style={{ width: "300px", height: "340px", borderRadius: "10px", overflow: 'hidden' }}
      >
        <img
          src={post.img}
          className="card-img-top"
          alt={post.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover"
          }}
        />
        <div className="card-body">
          <small className="text-muted">{post.date}</small>
          <h6 className="card-title mt-2" style={{ fontSize: "15px" }}>
            {post.title}
          </h6>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
    <Footer/>
    </>
  );
}
