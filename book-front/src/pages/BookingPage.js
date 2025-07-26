import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BookingPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      date: e.target.date.value,
      time: e.target.time.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
      persons: e.target.persons.value,
    };

    console.log("Booking Data:", bookingData);
    alert("Booking submitted successfully!");
  };

  return (
    <>
      <Navbar />
      <div
        className="container-fluid"
        style={{ fontFamily: "Arial, sans-serif", color: "#333" }}
      >
        <main className="text-center py-2">
          <h2
            className="mb-2"
            style={{
              fontFamily: '"EB Garamond", serif',
              fontOpticalSizing: "auto",
              fontStyle: "normal",
              fontSize: "6rem",
            }}
          >
            Book A Table
          </h2>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>

          <div className="position-relative" style={{ height: "100vh" }}>
            <div
              className="d-flex justify-content-center align-items-start"
              style={{ height: "100%", zIndex: 2 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white p-4 rounded shadow mt-5"
                style={{ maxWidth: "500px", width: "90%" }}
              >
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="date">Date</label>
                    <input
                      type="date"
                      id="date"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="time">Time</label>
                    <input
                      type="time"
                      id="time"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="form-control"
                      placeholder="x-xxx-xxx-xxxx"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="persons">Total Persons</label>
                  <input
                    type="number"
                    id="persons"
                    className="form-control"
                    min="1"
                    max="100"
                    placeholder="Enter number of persons"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-danger btn-block rounded-pill w-100"
                >
                  Book A Table
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default BookingPage;
