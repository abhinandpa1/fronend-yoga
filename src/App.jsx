import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import UserDashboard from './Pages/UserDashboard';
import AdminDashboard from './Pages/AdminDasherboard'; 
import TrainerDashboard from './Pages/TrainerDashboard';
import PaymentPage from './Pages/PaymentPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');

 
  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
      setRole(storedRole);
    }
  }, []);

  
  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setRole(role);

    // Store login state and role in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('role', role);
  };

  // Handle logout and clear localStorage
  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole('');

    // Clear login state and role from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='/login'
          element={<Login handleLogin={handleLogin} />}
        />
        <Route path='/register' element={<Register />} />
        <Route
          path="/user-dashboard"
          element={
            isLoggedIn ? (
              <UserDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            isLoggedIn && role === 'admin' ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/trainer-dashboard"
          element={
            isLoggedIn && (role === 'trainer' || role === 'admin') ? (
              <TrainerDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path='/paymentpage' element={<PaymentPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


