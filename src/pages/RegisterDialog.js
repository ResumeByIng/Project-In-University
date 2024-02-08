import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './RegisterDialog.css';
import axios from 'axios';

const RegisterDialog = ({ visible, onHide, onRegister }) => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [faculty, setFaculty] = useState('');
  const [branch, setBranch] = useState('');
  const [gender, setGender] = useState('');
  const [classYear, setClassYear] = useState('');


  const handleRegister = async () => {
if (!registerEmail || !registerPassword || !firstName || !lastName || !studentId || !faculty || !branch || !classYear || !gender) {
  alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
  return;
}

try {
  const response = await axios.post('https://project-in-back.vercel.app/api/register', {
    email: registerEmail,
    password: registerPassword,
    firstName,
    lastName,
    studentId,
    faculty,
    branch,
    classYear,
    gender,
  });

  const data = response.data;

  if (response.status === 200 && !data.error) {
    resetForm();
    onHide();
  } else {
    alert(data.error || 'เกิดข้อผิดพลาดในการลงทะเบียน');
  }
} catch (error) {
  alert('เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์');
}
  
  
  
    // ทำสิ่งที่ต้องการเมื่อข้อมูลถูกต้อง
  
    // Reset ค่าใน Form
    resetForm();

    // ปิด Dailog
    onHide();
  };
  const resetForm = () => {
    setRegisterEmail('');
    setRegisterPassword('');
    setFirstName('');
    setLastName('');
    setStudentId('');
    setFaculty('');
    setBranch('');
    setClassYear('');
    setGender('');
  };


  return (
    <Dialog
      header="Register"
      visible={visible}
      style={{ width: '50%' }}
      onHide={onHide}
      modal
    >
    <div style={{ width: '100%'}}>
      <div className="p-field my-custom">
        <div className="p-field">
          <label>Email:</label>
          <input type="text" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
        </div>
        <div className="p-field">
          <label>Password:</label>
          <input type="text" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
        </div>
        <div className="p-field">
          <label>ชื่อ :</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="p-field">
          <label>นามสกุล :</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="p-field">
          <label>รหัสนักศึกษา :</label>
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </div>
        <div className="p-field">
          <label>คณะ :</label>
          <input type="text" value={faculty} onChange={(e) => setFaculty(e.target.value)} />
        </div>
        <div className="p-field">
          <label>สาขา :</label>
          <input type="text" value={branch} onChange={(e) => setBranch(e.target.value)} />
        </div>
        <div className="p-field">
          <label>รุ่นปีการศึกษา :</label>
          <input type="text" value={classYear} onChange={(e) => setClassYear(e.target.value)} /><br/><br/>
        <label>เพศ :</label>
          <select className="my-custom-select" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
    </div>

    <div className="p-mt-2 button-container">
            <Button className='button' label="ยืนยัน" onClick={handleRegister} />
      </div>
    </Dialog>
  );
};

export default RegisterDialog;