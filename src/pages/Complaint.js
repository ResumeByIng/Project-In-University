import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

const Complaint = () => {
  const [complaintType, setComplaintType] = useState(null);
  const [complaintText, setComplaintText] = useState('');
  const [branch, setBranch] = useState(null);

  const complaintTypes = [
    { label: 'หัวข้อที่จะร้องเรียน', value: 'complaint1' },
    // เพิ่มหัวข้ออื่น ๆ ตามต้องการ
  ];

  const branches = [
    { label: 'สาขาวิศวกรรมคอมพิวเตอร์', value: 'computer_engineering', style: { fontFamily: 'Kanit, sans-serif' } },
    { label: 'สาขาวิศวกรรมหุ่นยนต์', value: 'robot_engineering', style: { fontFamily: 'Kanit, sans-serif' } },
    // เพิ่มสาขาอื่น ๆ ตามต้องการ
  ];
  

  const handleSubmit = () => {
    // ทำการส่งข้อมูลการร้องเรียนไปยังเซิร์ฟเวอร์หรือทำการจัดเก็บข้อมูลตามที่ต้องการ
    console.log('Submit Complaint:', {
      complaintType,
      complaintText,
      branch,
    });
  };

  return (
    <div style={{ width: '100%', marginLeft: '20px', marginTop: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>ร้องเรียนสาขา</h1>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>หัวข้อที่จะร้องเรียน</label>
        <InputText style={{ width: '20%', padding: '8px', boxSizing: 'border-box',fontFamily: 'Kanit, sans-serif'}} value={complaintType} onChange={(e) => setComplaintType(e.target.value)} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>เนื้อหาที่จะร้องเรียน</label>
        <InputTextarea style={{ width: '800px',height:'200px', padding: '8px', boxSizing: 'border-box',fontFamily: 'Kanit, sans-serif' }} value={complaintText} onChange={(e) => setComplaintText(e.target.value)} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <Button label="ส่งแบบฟอร์มการร้องเรียน" style={{ marginTop:'10px',backgroundColor:'green',border:'0px',fontFamily: 'Kanit, sans-serif' }} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Complaint;
