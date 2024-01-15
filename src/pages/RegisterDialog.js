import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './RegisterDialog.css';

const RegisterDialog = ({ visible, onHide, onRegister }) => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [faculty, setFaculty] = useState('');
  const [major, setMajor] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');


  const handleRegister = () => {
    if (!registerEmail || !registerPassword || !fullName || !studentId || !faculty || !major || !gender) {
      setError('กรุณากรอกข้อมูลให้ครบทุกช่อง');
      return;
    }
  
    // ทำสิ่งที่ต้องการเมื่อข้อมูลถูกต้อง
  
    // Reset ข้อผิดพลาด (ถ้ามี)
    setError('');
  
    // Reset ค่าใน Form
    resetForm();

    // ปิด Dailog
    onHide();
  };
  const resetForm = () => {
    setRegisterEmail('');
    setRegisterPassword('');
    setFullName('');
    setStudentId('');
    setFaculty('');
    setMajor('');
    setGender('');
    setError('');
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
          <label>ชื่อ - นามสกุล :</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
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
          <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} />
        </div>
        <div className="p-field">
          <label>รุ่นปีการศึกษา :</label>
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
