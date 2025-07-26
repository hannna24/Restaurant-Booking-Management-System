// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Maskgroup1 from "../assets/Maskgroup1.png";
// import Maskgroup2 from "../assets/Maskgroup2.png";
// import Maskgroup3 from "../assets/Maskgroup3.png";
// import Maskgroup4 from "../assets/Maskgroup4.png";
// import Maskgroup5 from "../assets/Maskgroup5.png";
// import Maskgroup6 from "../assets/Maskgroup6.png";
// import Maskgroup7 from "../assets/Maskgroup7.png";
// import Maskgroup8 from "../assets/Maskgroup8.png";
// import Maskgroup9 from "../assets/Maskgroup9.png";
// import Maskgroup10 from "../assets/Maskgroup10.png";
// import Maskgroup11 from "../assets/Maskgroup11.png";
// import Maskgroup12 from "../assets/Maskgroup12.png";
// import { Link } from "react-router-dom";

// const blogPosts = [
//   {
//     img: Maskgroup1,
//     title: "How to prepare a delicious gluten free sushi",
//     date: "January 3, 2023",
//   },
//   {
//     img: Maskgroup2,
//     title: "Exclusive baking lessons from the pastry king",
//     date: "January 3, 2023",
//   },
//   {
//     img: Maskgroup3,
//     title: "How to prepare the perfect fries in an air fryer",
//     date: "January 3, 2023",
//   },
//   {
//     img: Maskgroup4,
//     title: "How to prepare delicious chicken tenders",
//     date: "January 3, 2023",
//   },
//   {
//     img: Maskgroup5,
//     title: "5 great cooking gadgets you can buy to save time",
//     date: "January 3, 2023",
//   },
//   {
//     img: Maskgroup6,
//     title: "The secret tips & tricks to prepare a perfect burger",
//     date: "January 3, 2023",
//   },
//   {
//     img: Maskgroup7,
//     title: "7 delicious cheesecake recipes you can prepare",
//     date: "January 3, 2023",
//   },
//   {
//     img: Maskgroup8,
//     title: "5 great pizza restaurants you should visit this city",
//     date: "January 3, 2023",
//   },
//   {
//     img: Maskgroup9,
//     title: "5 great cooking gadgets you can buy to save time",
//     date: "January 3, 2023",
//   },
//   {
//     img: Maskgroup10,
//     title: "How to prepare a delicious gluten free sushi",
//     date: "January 3, 2023",
//   },
//   {
//     img: Maskgroup11,
//     title: "Top 20 simple and quick desserts for kids",
//     date: "January 3, 2023",
//   },
//   {
//     img: Maskgroup12,
//     title: "Top 20 simple and quick desserts for kids",
//     date: "January 3, 2023",
//   },
// ];

// export default function Blog() {
//   return (
//     <>
//       <Navbar />
//       <div className="container py-5">
//         <div className="text-center mb-5">
//           <h1
//             className="fw-bold"
//             style={{
//               fontFamily: '"Playfair Display.", serif',
//               fontOpticalSizing: "auto",
//               // fontWeight: "700", // or 700 or 'bold'
//               fontStyle: "normal",
//               fontSize: "6rem",
//             }}
//           >
//             Our Blog & Articles
//           </h1>
//           <p className="text-muted">
//             We consider all the drivers of change gives you the components you
//             need to change to create a truly happens.
//           </p>
//         </div>

//         <div className="row justify-content-center">
//           {blogPosts.map((post, index) => (
//             <div
//               className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
//               key={index}
//             >
//               <Link
//                 to={`/blog/${index}`}
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 <div
//                   className="card"
//                   style={{
//                     width: "306px",
//                     height: "340px",
//                     borderRadius: "10px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   <img
//                     src={post.img}
//                     className="card-img-top"
//                     alt={post.title}
//                     style={{
//                       width: "306px",
//                       height: "200px",
//                       objectFit: "cover",
//                       borderTopLeftRadius: "10px",
//                       borderTopRightRadius: "10px",
//                     }}
//                   />
//                   <div className="card-body">
//                     <small className="text-muted">{post.date}</small>
//                     <h6
//                       className="card-title mt-2"
//                       style={{ fontSize: "15px" }}
//                     >
//                       {post.title}
//                     </h6>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Images
import Maskgroup1 from "../assets/Maskgroup1.png";
import Maskgroup2 from "../assets/Maskgroup2.png";
import Maskgroup3 from "../assets/Maskgroup3.png";
import Maskgroup4 from "../assets/Maskgroup4.png";
import Maskgroup5 from "../assets/Maskgroup5.png";
import Maskgroup6 from "../assets/Maskgroup6.png";
import Maskgroup7 from "../assets/Maskgroup7.png";
import Maskgroup8 from "../assets/Maskgroup8.png";
import Maskgroup9 from "../assets/Maskgroup9.png";
import Maskgroup10 from "../assets/Maskgroup10.png";
import Maskgroup11 from "../assets/Maskgroup11.png";
import Maskgroup12 from "../assets/Maskgroup12.png";

const blogPosts = [
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
  {
    img: Maskgroup5,
    title: "5 great cooking gadgets you can buy to save time",
    date: "January 3, 2023",
  },
  {
    img: Maskgroup6,
    title: "The secret tips & tricks to prepare a perfect burger",
    date: "January 3, 2023",
  },
  {
    img: Maskgroup7,
    title: "7 delicious cheesecake recipes you can prepare",
    date: "January 3, 2023",
  },
  {
    img: Maskgroup8,
    title: "5 great pizza restaurants you should visit this city",
    date: "January 3, 2023",
  },
  {
    img: Maskgroup9,
    title: "5 great cooking gadgets you can buy to save time",
    date: "January 3, 2023",
  },
  {
    img: Maskgroup10,
    title: "How to prepare a delicious gluten free sushi",
    date: "January 3, 2023",
  },
  {
    img: Maskgroup11,
    title: "Top 20 simple and quick desserts for kids",
    date: "January 3, 2023",
  },
  {
    img: Maskgroup12,
    title: "Top 20 simple and quick desserts for kids",
    date: "January 3, 2023",
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1
            className="fw-bold"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontOpticalSizing: "auto",
              fontStyle: "normal",
              fontSize: "6rem",
            }}
          >
            Our Blog & Articles
          </h1>
          <p className="text-muted">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        <div className="row justify-content-center">
          {blogPosts.map((post, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
              key={index}
            >
              <Link
                to={`/pages`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="card"
                  style={{
                    width: "306px",
                    height: "340px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={post.img}
                    className="card-img-top"
                    alt={post.title}
                    style={{
                      width: "306px",
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                  <div className="card-body">
                    <small className="text-muted">{post.date}</small>
                    <h6
                      className="card-title mt-2"
                      style={{ fontSize: "15px" }}
                    >
                      {post.title}
                    </h6>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
