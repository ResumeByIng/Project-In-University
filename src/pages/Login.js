import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import myImage1 from './ce.png';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://project-in-back.vercel.app/login', {
        email: email,
        password: password
      });

      const user = response.data[0].role;
      localStorage.setItem('isLoggedin', 'false');
      localStorage.setItem('user', JSON.stringify(user));

      onLogin(user);

      switch (user) {
        case 1:
        case 2:
          navigate('/home');
          break;
        case 3:
          navigate('/tqf.7_1');
          break;
        default:
          console.error('Invalid role:', user);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="wrapper fadeInDown">
    <div id="formContent">
    <div className="fadeIn first ">
          <img src={myImage1} alt="รูปภาพ" className="image" />
          <h5>ล็อคอิน</h5>
        </div>
    <form>
      <label className="fadeIn second" >Email:</label>
      <input className="fadeIn second" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label className="fadeIn third" >Password:</label>
      <input className="password fadeIn third" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </form>
      <button className="fadeIn fourth" type="button" onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
};

export default Login;
