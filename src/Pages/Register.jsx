import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert for custom alerts

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // default role is user
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === '' || password === '' || email === '') {
      alert('Please fill in all fields');
    } else {
      
      console.log('Register form submitted:', username, password, role, email);

     
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: `Welcome ${username}! You have been successfully registered.`,
      }).then(() => {
       
        navigate('/login');
      });
    }
  };

  return (
    <div className="register-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="row" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
       
        <div className="col-md-6 register-image" style={{ paddingRight: '15px' }}>
          <img
            src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/posts-3.jpg?raw=true"
            alt="Register"
            className="img-fluid"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

       
        <div className="col-md-6">
          <div className="register-form" style={{ padding: '20px', background: '#f4f4f4', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Register</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label>Username:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label>Role:</label>
                <select
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                  <option value="user">User</option>
                  <option value="trainer">Trainer</option>
                  <option value="admin">Admin</option>
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
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;



