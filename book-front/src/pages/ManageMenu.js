// src/pages/ManageMenu.js
import React, { useState } from "react";
import AdminPanel from "../components/AdminPanel";

function ManageMenu() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Pizza", description: "Cheesy goodness", price: 8.99 },
    { id: 2, name: "Burger", description: "Beef patty with fries", price: 6.49 },
    { id: 3, name: "Pasta", description: "Tomato basil pasta", price: 7.25 },
    { id: 4, name: "Salad", description: "Fresh greens", price: 4.99 },
    { id: 5, name: "Steak", description: "Grilled to perfection", price: 14.5 },
    { id: 6, name: "Sushi", description: "Mixed rolls", price: 12.75 },
  ]);

  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [editId, setEditId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOrUpdate = () => {
    if (!form.name || !form.description || !form.price) return;

    if (editId) {
      setMenuItems((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...form, price: parseFloat(form.price) } : item
        )
      );
    } else {
      const newItem = {
        id: Date.now(),
        ...form,
        price: parseFloat(form.price),
      };
      setMenuItems((prev) => [...prev, newItem]);
    }

    setForm({ name: "", description: "", price: "" });
    setEditId(null);
  };

  const handleEdit = (item) => {
    setForm({ name: item.name, description: item.description, price: item.price });
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = menuItems.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  return (
    <>
    
 <div className="d-flex">
      <AdminPanel />
      <div className="flex-grow-1 ms-5 p-4">
        <h2>Manage Menu</h2>

        {/* Form */}
        <div className="mb-4">
          <div className="row g-3">
            <div className="col-md-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Item Name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2">
              <input
                type="number"
                name="price"
                className="form-control"
                placeholder="Price"
                value={form.price}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3">
              <button className="btn btn-primary w-100" onClick={handleAddOrUpdate}>
                {editId ? "Update" : "Add"} Item
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price ($)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price.toFixed(2)}</td>
                  <td>
                    <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(item)}>
                      Edit
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <nav>
          <ul className="pagination justify-content-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
       </div>
   
    </>
  );
}

export default ManageMenu;
