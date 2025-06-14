// src/components/LoginForm.jsx
import { useState } from 'react';
import axios from 'axios';

function LoginForm({ setIsAdmin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:5000/login',
        { username, password },
        { withCredentials: true } // ✅ Send session cookie
      );

      if (res.status === 200) {
        setIsAdmin(true);
        localStorage.setItem("isAdmin", "true");
        setMessage('Logged in ✅');
      }
    } catch {
      setMessage('Login failed ❌');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto p-6 bg-white rounded shadow mt-10"
    >
      <h2 className="text-xl font-bold mb-4 text-seed-dark">Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
        className="w-full border p-2 mb-3 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        className="w-full border p-2 mb-4 rounded"
      />
      <button className="bg-seed-accent text-white py-2 px-4 rounded hover:bg-seed-dark">
        Log In
      </button>
      {message && (
        <p className="mt-3 text-sm text-center text-seed-dark">{message}</p>
      )}
    </form>
  );
}

export default LoginForm;
