import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import axios from 'axios';

const Complaint = () => {
  const [complaintType, setComplaintType] = useState('');
  const [complaintText, setComplaintText] = useState('');
  
  const handleSubmit = () => {
    // ทำการส่งข้อมูลการร้องเรียนไปยังเซิร์ฟเวอร์หรือทำการจัดเก็บข้อมูลตามที่ต้องการ
    axios.post('https://project-in-back.vercel.app/api/complaints', {
      complaintType,
      complaintText,
    })
    .then(response => {
      console.log('Complaint submitted successfully!', response);
      // ทำอย่างอื่นตามต้องการ เช่น แสดงข้อความว่าร้องเรียนสำเร็จ หรือ รีเซ็ตฟอร์ม เป็นต้น
    })
    .catch(error => {
      console.error('Error submitting complaint:', error);
      // ทำอย่างอื่นตามต้องการ เช่น แสดงข้อความแจ้งเตือนว่ามีข้อผิดพลาดเกิดขึ้น เป็นต้น
    });
  };

  return (
    <div style={{ width: '100%', marginLeft: '20px', marginTop: '20px', fontFamily: 'Kanit, sans-serif'}}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>ร้องเรียนสาขา</h1>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>หัวข้อที่จะร้องเรียน</label>
        <InputText style={{ width: '20%', padding: '8px', boxSizing: 'border-box',fontFamily: 'Kanit, sans-serif'}} value={complaintType} onChange={(e) => setComplaintType(e.target.value)} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>เนื้อหาที่จะร้องเรียน</label>
        <InputTextarea style={{ width: '800px',height:'200px', padding: '8px', boxSizing: 'border-box',fontFamily: 'Kanit, sans-serif' }} value={complaintText} onChange={(e) => setComplaintText(e.target.value)} />
      </div>
      <div>
        <Button label="ส่งแบบฟอร์มการร้องเรียน" style={{ marginTop:'10px',backgroundColor:'green',border:'0px',fontFamily: 'Kanit, sans-serif' }} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Complaint;
