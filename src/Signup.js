import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signin from './Signin';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const  navigate = useNavigate()
  function validateEmail(email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  }
  function handleSubmit(e) {
    e.preventDefault();

    function validateName(name) {
      return /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
    }
    if (!validateName(name)) {
      setError('Invalid User name');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email');
      return;
    }
    function validatePassword(password) {
      return /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.])).{8,}$/.test(
        password
      );
    }
    
    if (!validatePassword(password)) {
      setError('Invalid password');
      return;
    }
    setError(error);
    window.alert('Registration Complete !!');
       navigate('/Signin')
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <button onClick={handleSubmit} type="submit">
        Create Account
      </button>
    </form>
  );
}

export default Signup;
