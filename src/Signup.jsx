import React, { useState } from 'react';
import { signup } from './auth';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [user, setUser] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = () => {
    if (signup(user.username, user.password)) {
      alert("Signup successful!");
      navigate('/');
    } else {
      alert("User already exists.");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Username" onChange={e => setUser({ ...user, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}