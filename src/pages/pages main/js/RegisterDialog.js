import React, { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import '../css/RegisterDialog.css';
import axios from 'axios';
import { Dropdown } from 'primereact/dropdown';

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
  const [confirmPassword, setConfirmPassword] = useState(''); // เพิ่ม state สำหรับยืนยันรหัสผ่าน
  const [options, setOptions] = useState([]); // เพิ่ม state สำหรับเก็บ options ของ Dropdown

  useEffect(() => {
    // สร้าง options สำหรับ Dropdown โดยให้เริ่มต้นจาก พ.ศ. 2558 ถึง 2567
    const currentYear = new Date().getFullYear() + 543; // แปลงเป็น พ.ศ.
    const yearOptions = [];
    for (let year = currentYear - 9; year <= currentYear + 1; year++) {
      yearOptions.push({ label: `${year}`, value: `${year}` });
    }
    setOptions(yearOptions);
  }, []); // useEffect นี้จะทำงานเมื่อ component ถูกโหลดครั้งแรกเท่านั้น

  const onHideRegisterErrorDialog = () => {
    setRegisterErrorDialogVisible(false);
    onHide();
  };

  const onHideSuccessDialog = () => {
    setSuccessDialogVisible(false);
    onHide();
  };
  
  const handleRegister = async () => {
    if (!registerEmail || !registerPassword || !firstName || !lastName || !studentId || !faculty || !branch || !classYear || !gender || !confirmPassword) {
      alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
      return;
    }

    if (registerPassword !== confirmPassword) {
      alert('รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน');
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
        setSuccessDialogVisible(true);
      } else {
        alert(data.error || 'เกิดข้อผิดพลาดในการลงทะเบียน');
      }
    } catch (error) {
      alert('เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์');
    }
  };

  const resetForm = () => {
    setRegisterEmail('');
    setRegisterPassword('');
    setConfirmPassword('');
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
      style={{ fontFamily: 'Kanit, sans-serif', width: '40%' }}
      onHide={onHide}
      modal
    >
      <div className="register-form" style={{ width: '100%',marginLeft:'50px' }}>
        <div className="input-container">
          <label htmlFor="register-email" style={{ display: 'inline-block', width: '200px' }}>Email</label>
          <input 
            id="register-email" 
            type="text" 
            value={registerEmail} 
            onChange={(e) => setRegisterEmail(e.target.value.replace(/[^a-zA-Z0-9@.]/g, ''))} 
            style={{ width: 'calc(100% - 140px)', height: '30px', marginLeft: '20px',border: '1px solid #ccc',fontSize:'16px', display: 'inline-block' }} 
          /><br/>
          <span style={{color:'red',fontSize:'10px',marginLeft:'20px',marginTop:'0px'}}>** กรุณาใส่ Email ที่มี domain เป็น '@ssru.ac.th' เท่านั้น **</span>
        </div><br/>
        <div className="input-container">
          <label htmlFor="register-password" style={{ display: 'inline-block', width: '200px' }}>Password</label><br/>
          <input 
            id="register-password" 
            type="password" 
            value={registerPassword} 
            onChange={(e) => setRegisterPassword(e.target.value)} 
            style={{ width: 'calc(100% - 140px)', height: '30px', marginLeft: '20px',border: '1px solid #ccc',borderRadius:'0px',textAlign:'center',fontSize:'16px', display: 'inline-block' }} 
          />
        </div><br/>
        
        <div className="input-container">
          <label htmlFor="confirm-password" style={{ display: 'inline-block', width: '200px' }}>Confirm Password</label>
          <input 
            id="confirm-password" 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            style={{ width: 'calc(100% - 140px)', height: '30px', marginLeft: '20px',border: '1px solid #ccc',borderRadius:'0px',textAlign:'center',fontSize:'16px', display: 'inline-block' }} 
          />
        </div><br/>



        <div className="input-container">
          <label htmlFor="first-name" style={{ display: 'inline-block', width: '120px' }}>ชื่อ</label><br/>
          <input 
            id="first-name" 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value.replace(/[^ก-๏\s]/g, ''))}
            style={{ width: 'calc(100% - 140px)', height: '30px', marginLeft: '20px',border: '1px solid #ccc',fontSize:'16px', display: 'inline-block' }} 
          /><br/>
          <span style={{color:'red',fontSize:'10px',marginLeft:'20px',marginTop:'0px'}}>** กรุณาใส่ 'ชื่อ' เป็นภาษาไทย **</span>
        </div><br/>
        <div className="input-container">
          <label htmlFor="last-name" style={{ display: 'inline-block', width: '120px' }}>นามสกุล</label><br/>
          <input 
            id="last-name" 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value.replace(/[^ก-๏\s]/g, ''))}
            style={{ width: 'calc(100% - 140px)', height: '30px', marginLeft: '20px',border: '1px solid #ccc',fontSize:'16px', display: 'inline-block' }} 
          /><br/>
          <span style={{color:'red',fontSize:'10px',marginLeft:'20px',marginTop:'0px'}}>** กรุณาใส่ 'นามสกุล' เป็นภาษาไทย **</span>
        </div><br/>
        <div className="input-container">
          <label htmlFor="student-id" style={{ display: 'inline-block', width: '120px' }}>รหัสนักศึกษา</label><br/>
          <input 
            id="student-id" 
            type="text" 
            value={studentId} 
            onChange={(e) => setStudentId(e.target.value.replace(/\D/g, ''))}
            style={{ width: 'calc(100% - 140px)', height: '30px', marginLeft: '20px',border: '1px solid #ccc',fontSize:'16px', display: 'inline-block' }} 
          />
        </div>
        <span style={{color:'grey',fontSize:'10px',marginLeft:'20px',marginTop:'0px'}}>ตัวอย่าง 62122519010</span>
        <br/><br/>
        <div className="input-container">
          <label htmlFor="faculty" style={{ display: 'inline-block', width: '120px' }}>คณะ</label><br/>
          <Dropdown
            id="faculty"
            value={faculty}
            options={[
              { label: 'วิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม', value: 'วิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม' }
              // Add more options as needed
            ]}
            onChange={(e) => setFaculty(e.value)}
            placeholder="เลือกคณะ"
            style={{ width: 'calc(100% - 140px)', height: '30px', marginLeft: '20px', border: '1px solid #ccc', fontSize: '16px', fontFamily: 'Kanit, sans-serif' }}
          />
        </div><br/>
        <div className="input-container">
          <label htmlFor="branch" style={{ display: 'inline-block', width: '120px' }}>สาขา</label><br/>
          <Dropdown
            id="branch"
            value={branch}
            options={[
              { label: 'วิศวกรรมคอมพิวเตอร์', value: 'วิศวกรรมคอมพิวเตอร์' }
              // Add more options as needed
            ]}
            onChange={(e) => setBranch(e.value)}
            placeholder="เลือกสาขา"
            style={{ width: 'calc(100% - 140px)', height: '30px', marginLeft: '20px', border: '1px solid #ccc', fontSize: '16px', fontFamily: 'Kanit, sans-serif' }}
          />
        </div><br/>
        <div className="input-container">
          <label htmlFor="class-year" style={{ display: 'inline-block', width: '200px' }}>รุ่นปีการศึกษา</label>
          <Dropdown 
            id="class-year" 
            value={classYear} 
            options={options} 
            onChange={(e) => setClassYear(e.value)} 
            placeholder="เลือกรุ่นปีการศึกษา" 
            style={{ width: 'calc(100% - 140px)', height: '30px', marginLeft: '20px', fontSize:'16px', }} 
          />
        </div><br/>
        <div className="input-container">
          <label htmlFor="gender" style={{ display: 'inline-block', width: '120px' }}>เพศ</label><br/>
          <Dropdown
            id="gender"
            value={gender}
            options={[
              { label: 'ชาย', value: 'male' },
              { label: 'หญิง', value: 'female' }
            ]}
            onChange={(e) => setGender(e.value)}
            placeholder="เลือกเพศ"
            style={{ width: 'calc(100% - 140px)', height: '30px', marginLeft: '20px', border: '1px solid #ccc',fontSize: '16px', fontFamily: 'Kanit, sans-serif' }}
          />
        </div>
      </div><br/>
      <div className="button-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
        <Button 
          className="confirm-button" 
          style={{ fontFamily: 'Kanit, sans-serif', backgroundColor:'#77EB73', border:'0px' }} 
          label="ยืนยัน" 
          onClick={handleRegister} 
        />
      </div>

      <Dialog
        header="สมัครสมาชิกสำเร็จ"
        visible={successDialogVisible}
        style={{ fontFamily: 'Kanit, sans-serif', width: '50%' }}
        onHide={onHideSuccessDialog}
        modal
      >
        <div className="success-message" style={{ fontFamily: 'Kanit, sans-serif', width: '50%' }}>
          สมัครสมาชิกสำเร็จ 
          *ข้อมูลที่ผิดพลาดสามารถติดต่อ ADMIN
        </div>
      </Dialog>

      <Dialog
        header="ไม่สามารถสมัครสมาชิกได้"
        visible={registerErrorDialogVisible}
        style={{ fontFamily: 'Kanit, sans-serif', width: '50%' }}
        onHide={onHideRegisterErrorDialog}
        modal
      >
        <div className="error-message" style={{ fontFamily: 'Kanit, sans-serif', width: '50%' }}>
          ไม่สามารถสมัครสมาชิกได้เนื่องจากบัญชีในระบบเต็มจำนวนแล้ว
        </div>
      </Dialog>
    </Dialog>
  );
}  

export default RegisterDialog;
