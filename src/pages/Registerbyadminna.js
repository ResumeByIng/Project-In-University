import React, { useState } from 'react';
import axios from 'axios';

function Registerbyadmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      // ส่งข้อมูลไปที่เซิร์ฟเวอร์
      await axios.post('https://project-in-back.vercel.app/api/registerbyadminna', {
        email,
        password,
      });
  
      alert('User registered successfully');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user');
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Registerbyadmin;