import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Dashboard from './Page/Dashboard';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function validateEmail(email) {
    // return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
    //   email
    // );
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  }

  function handleSubmit(event) {
    event.preventDefault();

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
    // else if (validateEmail(email))(validatePassword(password)){
    //   setError('you are not registered!')
    // }

    setError(error);
    window.alert('dhyan Registered yet!');
    Navigate('/Dashboard')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button onClick={handleSubmit} type="submit">
          Log in
        </button>
      </form>
      <p Style={{ color: 'blue' }}>
        Don't have an account ?
        <Link className="nav-link active" aria-current="page" to="/register">
          Register
        </Link>
      </p>
    </>
  );
}
export default Signin;

