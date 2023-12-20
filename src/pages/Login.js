// import './Login.css'
// import myImage1 from './ce.png';
// //npm install bootstrap react-bootstrap
// /*bootstrap*/
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from 'react';
// import Axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import { FaUserAlt } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import { Dialog } from 'primereact/dialog';
// import { useUser } from '../data/UserContext';
// import { Button } from 'primereact/button';

// function Login() {
//   const MySwal = withReactContent(Swal);
//   const navigate = useNavigate();

//   const { email, setEmail } = useUser();
//   const [password, setPassword] = useState("");
//   const [visible, setVisible] = useState(false);
//   const [showOTPForm, setShowOTPForm] = useState(false);
//   const [LoginForm, setLoginForm] = useState(true);
//   const [otp, setOTP] = useState('');
//   const [countdown, setCountdown] = useState(60);
//   const [isCountdownComplete, setIsCountdownComplete] = useState(false);
//   let islogPass = '';

//   const showDialog = () => {
//     setVisible(true);
//   }

//   const hideDialog = () => {
//     setVisible(false);
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     Axios.post("https://api-bhusin-unthatharns-projects.vercel.app/project", {
//       email: email,
//       password: password,
//     }).then((response) => {
//       // navigate("/Home")
//       if (response.data.message) {
//         MySwal.fire({
//           title: <strong>อีเมลหรือรหัสผ่านไม่ถูกต้อง!</strong>,
//           icon: 'error',
//           timer: 2000
//         })
//       }
//       else {
//         MySwal.fire({
//           title: <strong>ตรวจสอบรหัส OTP ใน email</strong>,
//           icon: 'info',
//           timer: 2000
//         })
//         setLoginForm(false);
//         localStorage.setItem('email-e', email);
//         setShowOTPForm(true);
//         Axios.post('https://api-bhusin-unthatharns-projects.vercel.app/generate-otp', { email })
//           .then((response) => {
//             console.log('Response from /generate-otp:', response.data);
//           })
//           .catch((error) => {
//             console.error('Error sending POST request:', error);
//           });
//       }
//     });
//   };
//   //ตรวจสอบรหัส otp
//   const handleVerifyOTP = (event) => {
//     event.preventDefault();
//     Axios.post('https://api-bhusin-unthatharns-projects.vercel.app/verify', { otp, email })
//       .then((response) => {
//         if (response.data.message) {
//           MySwal.fire({
//             title: <strong>ล็อคอินสำเร็จ!</strong>,
//             icon: 'success',
//             timer: 2000
//           }).then((response) => {
//             Axios.delete(`https://api-bhusin-unthatharns-projects.vercel.app/${email}`)
//               .then((response) => {
//                 // ดำเนินการเมื่อคำขอสำเร็จ
//                 console.log('Deleted:', response.data);
//               })
//               .catch((error) => {
//                 // ดำเนินการเมื่อคำขอไม่สำเร็จ
//                 console.error('Error:', error);
//               });
//             islogPass = "pass";
//             localStorage.setItem('pass', islogPass);
//             navigate("/Home");
//           });
//         }
//       })
//       .catch((error) => {
//         MySwal.fire({
//           title: <strong>OTP ไม่ถูกต้อง</strong>,
//           icon: 'error',
//           timer: 2000
//         })
//         Axios.delete(`https://api-bhusin-unthatharns-projects.vercel.app/delete-secret/${email}`)
//           .then((response) => {
//             // ดำเนินการเมื่อคำขอสำเร็จ
//             console.log('Deleted:', response.data);
//           })
//           .catch((error) => {
//             // ดำเนินการเมื่อคำขอไม่สำเร็จ
//             console.error('Error:', error);
//           });
//       });
//   };
//   //ส่ง otp ใหม่
//   const resetOTP = (event) => {
//     event.preventDefault();
//     Axios.delete(`https://api-bhusin-unthatharns-projects.vercel.app/delete-secret/${email}`)
//       .then((response) => {
//         // ดำเนินการเมื่อคำขอสำเร็จ
//         console.log('Deleted:', response.data);
//       })
//       .catch((error) => {
//         // ดำเนินการเมื่อคำขอไม่สำเร็จ
//         console.error('Error:', error);
//       });
//     MySwal.fire({
//       title: <strong>ตรวจสอบรหัส OTP ใน email</strong>,
//       icon: 'info',
//       timer: 2000
//     })
//     Axios.post('https://api-bhusin-unthatharns-projects.vercel.app/reset-otp', { email })
//       .then((response) => {
//         console.log('Response from /reset-otp:', response.data);
//       })
//       .catch((error) => {

//         console.error('Error sending POST request:', error);
//       });
//   }
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };
//   useEffect(() => {
//     // ตัวนับเวลาส่ง otp 
//     if (showOTPForm) {
//       const countdownInterval = setInterval(() => {
//         setCountdown((prevCountdown) => {
//           if (prevCountdown > 0) {
//             return prevCountdown - 1;
//           }
//           clearInterval(countdownInterval); // หยุดตัวนับถอยหลังเมื่อครบเวลา
//           setIsCountdownComplete(true);
//           return 0;
//         });
//       }, 1000); // นับถอยหลังทุก 1 วินาที
//     }

//   }, [showOTPForm]);
//   return (

//     <>
//       <div className="wrapper fadeInDown ">
//         <div id="formContent">
//           {/* แบบฟอร์มเข้าสู่ระบบ */}
//           <div className="fadeIn first">
//             <img src={myImage1} alt="รูปภาพ" className="image" />
//             <h5>ล็อคอิน</h5>
//           </div>
//           {LoginForm && (
//             <form onSubmit={handleSubmit} className="form-container">
//               <div className="form-group">
//                 <FaUserAlt className="fadeIn second" />
//                 <input
//                   type="text"
//                   required
//                   id="login"
//                   className="form-control fadeIn second"
//                   name="login"
//                   placeholder="อีเมล"
//                   value={email}
//                   onChange={handleEmailChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <FaLock className="fadeIn third" />
//                 <input
//                   type="password"
//                   required
//                   id="password"
//                   className="password form-control fadeIn third"
//                   name="password"
//                   placeholder="รหัสผ่าน"
//                   value={password}
//                   onChange={handlePasswordChange}
//                 />
//               </div>
//               <div className="button-container">
//                 <input type="submit" className="fadeIn fourth" value='เข้าสู่ระบบ' />
//               </div>
//             </form>
//           )}
//           {showOTPForm && (
//             <div className="otp-popup">
//               <form onSubmit={handleVerifyOTP} className='form-container'>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     required
//                     id="otp"
//                     className="form-control fadeIn fifth"
//                     name="otp"
//                     placeholder="รหัส OTP"
//                     value={otp}
//                     onChange={(e) => setOTP(e.target.value)}
//                   />
//                 </div>
//                 <input type="submit" className=" fadeIn sixth " value="ยืนยัน OTP" />
//                 <p>
//                   รับรหัส OTP ใหม่ในอีก: {countdown} วินาที
//                   {isCountdownComplete && (
//                     <Link
//                       style={{ marginLeft: '10px' }}
//                       onClick={resetOTP}
//                       className="fadeIn seventh"
//                     >
//                       ส่ง OTP ใหม่
//                     </Link>
//                   )}
//                 </p>
//               </form>
//             </div>
//           )}

//         </div>
//         <div>
//           <div className="forgetpass">
//             <Link className="underlineHover" onClick={showDialog}>
//               ลืมรหัสผ่าน
//             </Link>
//           </div>
//           <Dialog visible={visible} onHide={hideDialog}>
//             <p>08x-xxx-xxxx , หรือ Email - CE_SSRU@ssru.ac.th</p>
//           </Dialog>
//         </div>
//       </div></>
//   );
// }

// export default Login;