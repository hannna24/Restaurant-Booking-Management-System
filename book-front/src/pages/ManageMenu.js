import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminPanel from "../components/AdminPanel";

function ManageMenu() {
  const [menuItems, setMenuItems] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "",
    price: "",
    imageUrl: "", // URL string
  });
  const [editId, setEditId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/menu");
      setMenuItems(res.data);
    } catch (err) {
      console.error("Failed to fetch menu items:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOrUpdate = async () => {
    const { title, category, price, imageUrl } = form;
    if (!title || !category || !price || (!imageUrl && !editId)) {
      return alert("Please fill all fields");
    }

    try {
      const newItem = {
        title,
        category,
        price: parseFloat(price),
        imageUrl,
      };

      let res;
      if (editId) {
        res = await axios.put(`http://localhost:5000/api/menu/${editId}`, newItem);
        setMenuItems((prev) =>
          prev.map((item) => (item._id === editId ? res.data : item))
        );
      } else {
        res = await axios.post("http://localhost:5000/api/menu", newItem);
        setMenuItems((prev) => [...prev, res.data]);
      }

      setForm({ title: "", category: "", price: "", imageUrl: "" });
      setEditId(null);
    } catch (err) {
      console.error("Failed to add/update menu item:", err);
    }
  };

  const handleEdit = (item) => {
    setForm({
      title: item.title,
      category: item.category,
      price: item.price,
      imageUrl: item.image, // reuse stored image URL
    });
    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/menu/${id}`);
      setMenuItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Failed to delete item:", err);
    }
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = menuItems.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  return (
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
                name="title"
                className="form-control"
                placeholder="Item Title"
                value={form.title}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3">
              <select
                name="category"
                className="form-control"
                value={form.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Main">Main</option>
                <option value="Drinks">Drinks</option>
                <option value="Desserts">Desserts</option>
              </select>
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
            <div className="col-md-4">
              <input
                type="text"
                name="imageUrl"
                className="form-control"
                placeholder="Image URL (https://...)"
                value={form.imageUrl}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-12">
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
                <th>Title</th>
                <th>Category</th>
                <th>Price ($)</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item._id}>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{parseFloat(item.price).toFixed(2)}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(item._id)}
                    >
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
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ManageMenu;
