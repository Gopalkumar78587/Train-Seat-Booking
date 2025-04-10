import React, { useState } from 'react';
import { login, setCurrentUser } from './auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(user.username, user.password)) {
      setCurrentUser(user.username);
      navigate('./booking');
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setUser({ ...user, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}