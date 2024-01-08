import React, { useState, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaExclamationCircle } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import './Login.css'; 
import myImage1 from './ce.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const toast = useRef(null);

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
          // Show success Toast when login is successful
          showSuccessMessage();
          setTimeout(() => navigate('/home'), 3000);
        break;
        default:
          // Show error Toast when login fails
          showErrorMessage();
          console.error('Invalid role:', user);
      }
    } catch (error) {
      console.error('Login failed', error);
      // Show error Toast when login fails
      showErrorMessage();
    }
  };

  const showErrorMessage = () => {
    toast.current.show({
      severity: 'error',
      summary: 'เกิดข้อผิดพลาด',
      detail: 'ท่านใส่ Email หรือ Password ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
      life: 3000,
      position: 'top-center',
      className: 'custom-toast-error',
    });
  };

  const showSuccessMessage = () => {
    toast.current.show({
      severity: 'success',
      summary: 'ล็อคอินสำเร็จ',
      detail: 'ยินดีต้อนรับ! คุณได้ทำการล็อคอินสำเร็จ',
      life: 3000,
      position: 'top-center',
      className: 'custom-toast-success',
    });
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first ">
          <img src={myImage1} alt="รูปภาพ" className="image" />
          <h5>ล็อคอิน</h5>
        </div>
        <form>
          <label className="fadeIn second">Email:</label>
          <input className="fadeIn second" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="fadeIn third">Password:</label>
          <input className="password fadeIn third" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </form>
        <button className="fadeIn fourth center-button" type="button" onClick={handleLogin}>
          Login
        </button>
      </div>
      <Toast ref={toast} position="top-center" />
    </div>
  );
};

export default Login;
