import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 
import About from './pages/about'; 
import Menu from './pages/menu'; 
import BookingPage from './pages/BookingPage'; 
import Blog from './pages/Blog'; 
import Pages from './pages/pages'; 
import Contact from './pages/contact'; 
import Register from './pages/register'; 
import Login from './pages/login'; 
import ViewUsers from './pages/ViewUsers';
import ViewBookings from './pages/ViewBookings';
import ManageMenu from './pages/ManageMenu';
import ViewMessages from './pages/ViewMessages';
import MyBookings from "./pages/Mybookingspage";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route path="/users" element={<ViewUsers />} />
        <Route path="/bookings" element={<ViewBookings />} />
        <Route path="/managemenu" element={<ManageMenu />} />
        <Route path="/viewmessage" element={<ViewMessages />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
