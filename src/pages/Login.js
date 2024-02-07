import React, { useState, useRef, useEffect } from 'react';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaExclamationCircle, FaUserAlt, FaLock } from 'react-icons/fa';
import './Login.css';
import myImage1 from './ce.png';
import RegisterDialog from './RegisterDialog';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [registerDialogVisible, setRegisterDialogVisible] = useState(false);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [otp, setOTP] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);
  const navigate = useNavigate();
  const toast = useRef(null);
  const MySwal = withReactContent(Swal);
  const generateOTP = async (email) => {
    try {
      await axios.post('https://project-in-back.vercel.app/generate-otp', { email });
      console.log(`OTP generated successfully for email: ${email}`);
    } catch (error) {
      console.error(`Error generating OTP for email ${email}:`, error);
    }
  };

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
        // Generate OTP after successful login
        generateOTP(email);
        setShowOTPForm(true);
        startCountdown();
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

  const startCountdown = () => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        }
        clearInterval(countdownInterval);
        setIsCountdownComplete(true);
        return 0;
      });
    }, 1000);
  };

  const handleVerifyOTP = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://project-in-back.vercel.app/verify', { otp, email });
      console.log('Data sent to backend:', { otp, email }); // ตรวจสอบว่าข้อมูลถูกส่งไปยังเซิร์ฟเวอร์อย่างถูกต้องหรือไม่
  
      if (response.data.message === 'OTP ถูกต้อง') {
        console.log('Data sent to backend:', { otp, email }); // ตรวจสอบว่าข้อมูลถูกส่งไปยังเซิร์ฟเวอร์อย่างถูกต้องหรือไม่
        MySwal.fire({
          title: <strong>ล็อคอินสำเร็จ!</strong>,
          icon: 'success',
          timer: 2000
        }).then(() => {
          axios.delete(`https://project-in-back.vercel.app/delete-secret/${email}`)
            .then((deleteResponse) => {
              console.log('Deleted:', deleteResponse.data);
              const islogPass = "pass";
              localStorage.setItem('pass', islogPass);
              navigate("/home");
            })
            .catch((deleteError) => {
              console.error('Error deleting secret:', deleteError);
            });
        });
      }
    } catch (error) {
      console.log('Data sent to backend:', { otp, email }); // ตรวจสอบว่าข้อมูลถูกส่งไปยังเซิร์ฟเวอร์อย่างถูกต้องหรือไม่
      MySwal.fire({
        title: <strong>OTP ไม่ถูกต้อง</strong>,
        icon: 'error',
        timer: 2000
      });
    }
  };

  const showErrorMessage = (detail) => {
    toast.current.show({
      severity: 'error',
      summary: 'เกิดข้อผิดพลาด',
      detail: detail || 'ท่านใส่ Email หรือ Password ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
      life: 3000,
      position: 'top-center',
      className: 'custom-toast-error',
    });
  };

  const showSuccessMessage = (detail) => {
    toast.current.show({
      severity: 'success',
      summary: 'ล็อคอินสำเร็จ',
      detail: detail || 'ยินดีต้อนรับ! คุณได้ทำการล็อคอินสำเร็จ',
      life: 3000,
      position: 'top-center',
      className: 'custom-toast-success',
    });
  };

  const openRegisterDialog = () => {
    setRegisterDialogVisible(true);
  };

  const handleRegister = () => {
    // Open Register Dialog
    openRegisterDialog();
  };

  const handleRegisterSuccess = () => {
    // Additional logic after successful registration
    // ...
  };

  const resetOTP = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`https://project-in-back.vercel.app/delete-secret/${email}`);
      showSuccessMessage('ตรวจสอบรหัส OTP ใน email');
      startCountdown();
      // Additional logic after OTP reset
      // ...
    } catch (error) {
      showErrorMessage('เกิดข้อผิดพลาดในการรีเซ็ต OTP');
      console.error('Error resetting OTP:', error);
    }
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img src={myImage1} alt="รูปภาพ" className="image" />
          <h5>ล็อคอิน</h5>
        </div>
        {showOTPForm ? (
          <form onSubmit={handleVerifyOTP} style={{ alignItems:'center'}} className="form-container">
            <div className="form-group">
              <FaLock className="fadeIn fifth" />
              <input
                type="text"
                required
                id="otp"
                className="form-control fadeIn fifth"
                name="otp"
                placeholder="รหัส OTP"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
              />
            </div>
            <input type="submit" className=" fadeIn sixth " value="ยืนยัน OTP" />
            <p>
              รับรหัส OTP ใหม่ในอีก: {countdown} วินาที
              {isCountdownComplete && (
                <Link
                  style={{ marginLeft: '10px'}}
                  onClick={resetOTP}
                  className="fadeIn seventh"
                >
                  ส่ง OTP ใหม่
                </Link>
              )}
            </p>
          </form>
        ) : (
          <form>
            <label className="fadeIn second">Email:</label>
            <input className="fadeIn second" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className="fadeIn third">Password:</label>
            <input className="password fadeIn third" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="fadeIn fourth center-button login-button" type="button" onClick={handleLogin}>
              Login
            </button>
            <span className="register-text" onClick={openRegisterDialog}>Register</span>
          </form>
        )}
        <RegisterDialog
          visible={registerDialogVisible}
          onHide={() => setRegisterDialogVisible(false)}
          onRegister={handleRegisterSuccess}
        />
      </div>
      <Toast ref={toast} position="top-center" />
    </div>
  );
};

export default Login;