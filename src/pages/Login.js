import './Login.css';
import React, { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import Axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post('http://localhost:3000', {
        email: email,
        password: password,
      });

      if (response.data.message) {
        MySwal.fire({
          title: <strong>อีเมลหรือรหัสผ่านไม่ถูกต้อง!</strong>,
          icon: 'error',
          timer: 2000,
        });
      } else {
        MySwal.fire({
          title: <strong>ล็อกอินสำเร็จ!</strong>,
          icon: 'success',
          timer: 2000,
        }).then(() => {
            navigate('/Home');
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        {/* Login Form */}
        <div className="fadeIn first">
          <h5>ล็อคอิน</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <FaUserAlt className="fadeIn second" />
          <input
            type="text"
            required
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <FaLock className="fadeIn third" />
          <input
            type="password"
            required
            id="password"
            className="password fadeIn third"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input type="submit" className="fadeIn fourth" value="เข้าสู่ระบบ" />
        </form>
      </div>
      <div>
        <div className="forgetpass">
          <Link className="underlineHover">ลืมรหัสผ่าน</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
