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
      <div className="register-form">
        <div className="input-container">
          <label htmlFor="register-email">Email:</label>
          <input id="register-email" type="text" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="register-password">Password:</label>
          <input id="register-password" type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="first-name">ชื่อ :</label>
          <input id="first-name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="last-name">นามสกุล :</label>
          <input id="last-name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="student-id">รหัสนักศึกษา :</label>
          <input id="student-id" type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="faculty">คณะ :</label>
          <select id="faculty" value={faculty} onChange={(e) => setFaculty(e.target.value)}>
            <option value="">-- เลือกคณะ --</option>
            <option value="เทคโนโลยีอุตสาหกรรม">เทคโนโลยีอุตสาหกรรม</option>
            {/* เพิ่มคณะอื่นๆ ตามต้องการ */}
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="branch">สาขา :</label>
          <select id="branch" value={branch} onChange={(e) => setBranch(e.target.value)}>
            <option value="">-- เลือกคณะ --</option>
            <option value="เทคโนโลยีอุตสาหกรรม">เทคโนโลยีอุตสาหกรรม</option>
            {/* เพิ่มสาขาอื่นๆ ตามต้องการ */}
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="class-year">รุ่นปีการศึกษา :</label>
          <input id="class-year" type="text" value={classYear} onChange={(e) => setClassYear(e.target.value)} /><br /><br />
          <label htmlFor="gender">เพศ :</label>
          <select id="gender" className="gender-select" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br/><br/>
          <span>* กรุณากรอกข้อมูลให้ครบทุกช่อง</span>
        </div>
      </div>
  
      <div className="button-container">
        <Button className="confirm-button" label="ยืนยัน" onClick={handleRegister} />
      </div>
  
      <Dialog
        header="สมัครสมาชิกสำเร็จ"
        visible={successDialogVisible}
        style={{ width: '50%' }}
        onHide={onHideSuccessDialog}
        modal
      >
        <div className="success-message">
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
        <div className="error-message">
          ไม่สามารถสมัครสมาชิกได้เนื่องจากบัญชีในระบบเต็มจำนวนแล้ว
        </div>
      </Dialog>
    </Dialog>
  );
}  

export default RegisterDialog;