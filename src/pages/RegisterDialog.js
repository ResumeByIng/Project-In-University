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
  const [successDialogVisible, setSuccessDialogVisible] = useState(false);
  const [registerErrorDialogVisible, setRegisterErrorDialogVisible] = useState(false);

  const onHideRegisterErrorDialog = () => {
    setRegisterErrorDialogVisible(false);
    onHide();
  };

  const onHideSuccessDialog = () => {
    setSuccessDialogVisible(false);
    onHide();
  };

  const handleRegister = async () => {
    if (!registerEmail || !registerPassword || !firstName || !lastName || !studentId || !faculty || !branch || !classYear ) {
      alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
      return;
    }

    try {
      const response = await axios.get('https://project-in-back.vercel.app/api/students');
      const students = response.data;
      const studentCount = students.filter(student => student.role === 1).length;
      if (studentCount >= 400) {
        setRegisterErrorDialogVisible(true);
        return;
      }

      const registerResponse = await axios.post('https://project-in-back.vercel.app/api/register', {
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

      if (registerResponse.status === 200 && !registerResponse.data.error) {
        resetForm();
        setSuccessDialogVisible(true);
      } else {
        alert(registerResponse.data.error || 'เกิดข้อผิดพลาดในการลงทะเบียน');
      }
    } catch (error) {
      alert('เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์');
    }
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
      <div style={{ width: '100%' }}>
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
            <input type="text" value={classYear} onChange={(e) => setClassYear(e.target.value)} /><br /><br />
            <label>เพศ :</label>
            <select style={{ width: '425px', height: '30px', textAlign: 'center', marginBottom: '20px', marginLeft: '160px' }} className="my-custom-select" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      </div>
  
      <div className="p-mt-2 button-container">
        <Button style={{ width: '100px', height: '50px', marginBottom: '20px', marginLeft: '400px', backgroundColor: '#469303', border: '0px' }} className='button' label="ยืนยัน" onClick={handleRegister} />
      </div>
      <Dialog
        header="สมัครสมาชิกสำเร็จ"
        visible={successDialogVisible}
        style={{ width: '50%' }}
        onHide={onHideSuccessDialog}
        modal
      >
        <div style={{ width: '100%', textAlign: 'center', fontSize: '18px', padding: '20px' }}>
          สมัครสมาชิกสำเร็จ
        </div>
      </Dialog>
      <Dialog
        header="ไม่สามารถสมัครสมาชิกได้"
        visible={registerErrorDialogVisible}
        style={{ width: '50%' }}
        onHide={onHideRegisterErrorDialog}
        modal
      >
        <div style={{ width: '100%', textAlign: 'center', fontSize: '18px', padding: '20px' }}>
          ไม่สามารถสมัครสมาชิกได้เนื่องจากบัญชีในระบบเต็มจำนวนแล้ว
        </div>
      </Dialog>
    </Dialog>
  );
};

export default RegisterDialog;