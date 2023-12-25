import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ใช้ useNavigate แทน useHistory

  const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:3001/login', {
            email: email,
            password: password
        });
        localStorage.setItem('isLoggedin', 'false');
        localStorage.setItem('user', JSON.stringify(user));
        
        console.log('Full response:', response);
        const user = response.data[0].role;  // Fix here
        console.log('role:', response.data[0].role);
        onLogin(user);

        switch (user) {
            case 1: // Assuming 1 is for 'student'
                navigate('/home');
                break;
            case 2: // Assuming 2 is for 'professor'
                navigate('/home');
                break;
            case 3: // Assuming 3 is for 'graduate'
                navigate('/tqf.7_1');
                break;
            default:
                // Handle invalid role
                console.error('Invalid role:', user);
        }
    } catch (error) {
        console.error('Login failed', error);
    }
};

  return (
    <div>
    <h2>Login</h2>
    <label>Email:</label>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

    <label>Password:</label>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

    <button onClick={handleLogin}>Login</button>
  </div>
);
};

export default Login;
