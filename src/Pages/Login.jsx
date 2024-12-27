import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert for custom alerts

function Login({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  // Function to validate the form
  const validateForm = () => {
    if (!username || !password || !role) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all the fields!',
      });
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    if (!validateForm()) {
      return; // Stop the submission if validation fails
    }

    // Mock API authentication (this should be replaced with an actual API call)
    console.log('Login form submitted:', username, password, role);
    handleLogin(role);

    // Show success alert
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: `Welcome ${role}! Redirecting to your dashboard...`,
    }).then(() => {
      // After the success alert is closed, redirect user to the appropriate dashboard based on their role
      navigate(`/${role}-dashboard`);
    });
  };

  return (
    <div className="login-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="row" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        {/* Left Column: Image */}
        <div className="col-md-6 login-image" style={{ paddingRight: '15px' }}>
          <img
            height={400}
            src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/header.jpg?raw=true"
            alt="Login"
            className="img-fluid"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

        {/* Right Column: Login Form */}
        <div className="col-md-6">
          <div className="login-form" style={{ padding: '30px', background: '#f4f4f4', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontWeight: 'bold' }}>Username:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontWeight: 'bold' }}>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontWeight: 'bold' }}>Role:</label>
                <select
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                  <option value="">Select Role</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="trainer">Trainer</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-dark"
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#d291bc',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Login
              </button>
            </form>

            <p style={{ textAlign: 'center', marginTop: '20px' }}>
              Not registered?{' '}
              <span>
                <Link to={'/register'} style={{ color: '#007bff', textDecoration: 'none' }}>
                  <p style={{ marginBottom: '0' }}>Register Now</p>
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;







