import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import myImage1 from './ce.png';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

   // Disable scrolling when the component mounts
   useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling
    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://project-in-back.vercel.app/login', {
        email: email,
        password: password
      });
      const userData = response.data[0];
      const user = response.data[0].role;

      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('user', JSON.stringify(user));

      console.log('user : ', user);
      console.log('userData : ', userData);


      switch (user) {
        case 1:
      case 2:
      case 3:
        navigate('/home');
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
