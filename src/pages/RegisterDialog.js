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
    if (!registerEmail || !registerPassword || !firstName || !lastName || !studentId || !faculty || !branch || !classYear || !gender) {
      alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
      return;
    }
    
      // ตรวจสอบว่าอีเมลมี domain เป็น "@ssru.ac.th" หรือไม่
      const ssruEmailRegex = /^[a-zA-Z0-9._%+-]+@ssru.ac.th$/;
      if (!ssruEmailRegex.test(registerEmail)) {
        alert('กรุณาใช้อีเมลที่มี domain เป็น "@ssru.ac.th" เท่านั้น');
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
      header="สมัครสมาชิกสำหรับนักศึกษา"
      visible={visible}
      style={{ fontFamily: 'Kanit, sans-serif',width: '40%' }}
      onHide={onHide}
      modal
    >
      <div className="register-form">
        <div className="input-container">
          <label htmlFor="register-email" >Email:</label><br/>
          <input id="register-email" style={{marginTop:'0px',marginLeft:'130px',width:'500px'}} type="text" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="register-password">Password:</label><br/>
          <input id="register-password" type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)}
            style={{
              width: '500px',
              height: '30px',
              marginLeft: '130px',
              marginTop: '0px',
              textAlign: 'center',
              fontSize: '20px',
              fontFamily: 'Kanit, sans-serif',
              border: '0.5px solid #000',
            }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="first-name">ชื่อ :</label><br/>
          <input id="first-name" type="text" style={{marginTop:'0px',marginLeft:'130px',width:'500px'}} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="last-name">นามสกุล :</label><br/>
          <input id="last-name" type="text" style={{marginTop:'0px',marginLeft:'130px',width:'500px'}} value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="student-id">รหัสนักศึกษา :</label><br/>
          <input id="student-id" type="text" style={{marginTop:'0px',marginLeft:'130px',width:'500px'}} value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="faculty">คณะ :</label><br/>
          <select id="faculty" value={faculty} onChange={(e) => setFaculty(e.target.value)}
          style={{
            width: '500px',
            height: '30px',
            marginLeft: '130px',
            marginTop: '0px',
            marginBottom: '10px',
            textAlign: 'center',
            fontSize: '20px',
            fontFamily: 'Kanit, sans-serif',
            border: '0.5px solid #000',
          }}>
            <option value="">---เลือกคณะ---</option><br/>
            <option value="วิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม">วิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม</option>
            {/* เพิ่มคณะอื่นๆ ตามต้องการ */}
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="branch">สาขา :</label><br/>
          <select id="branch" value={branch} onChange={(e) => setBranch(e.target.value)}
          style={{
            width: '500px',
            height: '30px',
            marginLeft: '130px',
            marginTop: '0px',
            marginBottom: '10px',
            textAlign: 'center',
            fontSize: '20px',
            fontFamily: 'Kanit, sans-serif',
            border: '0.5px solid #000',
          }}>
            <option value="">---เลือกสาขา---</option><br/>
            <option value="วิศวกรรมคอมพิวเตอร์">วิศวกรรมคอมพิวเตอร์</option>
            {/* เพิ่มสาขาอื่นๆ ตามต้องการ */}
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="class-year">รุ่นปีการศึกษา :</label><br/>
          <input id="class-year" type="text" style={{marginTop:'0px',marginLeft:'130px',marginBottom:'0px',width:'500px'}} value={classYear} onChange={(e) => setClassYear(e.target.value)} />
        <div/>
        <div className="input-container">  
          <label htmlFor="gender">เพศ :</label><br/>
          <select id="gender" className="gender-select" value={gender} onChange={(e) => setGender(e.target.value)} 
          style={{
            width: '500px',
            height: '30px',
            marginLeft: '130px',
            marginTop: '0px',
            marginBottom: '10px',
            textAlign: 'center',
            fontSize: '20px',
            fontFamily: 'Kanit, sans-serif',
            border: '0.5px solid #000',
          }}>
            <option value="">---เลือกเพศ---</option>
            <option value="ชาย">Male</option>
            <option value="หญิง">Female</option>
          </select>
          <br/><br/>
          <span style={{fontFamily: 'Kanit, sans-serif',color:'#D63434'}} >* กรุณากรอกข้อมูลให้ครบทุกช่องและใช้ Email @ssru.ac.th เท่านั้น</span>
        </div>
      </div>
      </div>
      <div className="button-container">
        <Button className="confirm-button" style={{fontFamily: 'Kanit, sans-serif',marginLeft:'45%',backgroundColor:'#77EB73',border:'0px'}} label="ยืนยัน" onClick={handleRegister} />
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