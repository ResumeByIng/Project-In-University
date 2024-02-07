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
    <div className= "my-custom" style={{ width: '50%',height:'20px',marginLeft: '20px'}}>
      <h1>สมัครสมาชิกสำหรับอาจารย์</h1>
      <label>Email:</label>
      <input style={{ width: '200px',height:'20px',marginLeft: '10px'}} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input style={{ width: '200px',height:'20px',marginLeft: '10px'}} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button style={{ width: '100px',marginLeft: '20px',marginTop:'20px'}} onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Registerbyadmin;