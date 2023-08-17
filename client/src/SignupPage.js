import React, { useState } from 'react';
import axios from 'axios';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        username,
        password,
        email,
        phone
      }, {headers:{'Content-Type': 'application/json'}});

      if (response.data.message === 'Signup successful') {
        localStorage.setItem('username', username);
        window.location.href = '/Homepage';
      } else {
        setErrorMessage('Encountered Error');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setErrorMessage('An error occurred while logging in');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button onClick={handleSignup}>Signup</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default SignupPage;
