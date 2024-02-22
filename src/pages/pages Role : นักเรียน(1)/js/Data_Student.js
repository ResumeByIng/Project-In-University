import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import axios from 'axios';

function Data_Student() {
  const [studentData, setStudentData] = useState([]);
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [confirmationText, setConfirmationText] = useState('');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    setStudentData([userData]);
  }, []);

  const columns = [
    { field: 'student_first_name', header: 'ชื่อ' },
    { field: 'student_last_name', header: 'นามสกุล' },
    { field: 'student_id_student', header: 'รหัสนักศึกษา' },
    { field: 'student_faculty', header: 'คณะ' },
    { field: 'student_branch', header: 'สาขา' },
    { field: 'student_class_year', header: 'รุ่นปีการศึกษา' },
    { field: 'student_gender', header: 'เพศ' },
  ];

  const rowClassName = (rowData) => {
    return rowData.index % 2 === 0 ? 'p-datatable-even' : 'p-datatable-odd';
  };

  const handleConfirmation = () => {
    // ตรวจสอบว่า studentData มีข้อมูลหรือไม่
    if (studentData.length === 0) {
      
      console.error('No student data found.');
      return;
    }
  
    // ตรวจสอบว่า studentData[0] มีค่าเป็น null หรือไม่
    if (!studentData[0]) {
      console.error('No student data found.');
      return;
    }
  
    // ตรวจสอบว่า studentData[0].user_id มีค่าเป็น null หรือไม่
    if (!studentData[0].user_id) {
      console.error('studentData[0].user_id is null.');
      return;
    }
  
    // ส่งคำขอเปลี่ยน role ไปยังเซิร์ฟเวอร์
    axios.post(`https://project-in-back.vercel.app/api/confirm-graduate/${studentData[0].user_id}`, {
      // ส่งข้อมูลผ่าน body ของคำขอ POST
      // หากใช้ axios.post จะส่งข้อมูลผ่าน body และไม่ต้องใช้ params ใน URL
      role: 3 // กำหนด role เป็นบัณฑิต
    }).then(response => {
      console.log('Role updated successfully:', response.data);
      // ปิด Modal หลังจากเปลี่ยน role เรียบร้อย
      setDisplayConfirmation(false);
      // รีเฟรชข้อมูลหลังจากเปลี่ยน role เรียบร้อย
      window.location.reload();
    }).catch(error => {
      console.error('Error updating role:', error);
    });
  };

  return (
    <div style={{ width: '100vw', marginLeft: '10px', marginTop: '50px', marginRight: '10px' }}>
      <h1 style={{ color: '#333' }}>ข้อมูลส่วนตัว</h1>
      <DataTable
        style={{
          marginTop: '10px',
          fontFamily: 'Kanit, sans-serif',
        }}
        value={studentData}
        header="ข้อมูลส่วนตัวนักศึกษา"
        rowClassName={rowClassName}
        selectionMode="single"
        selection={selectedStudent}
        onSelectionChange={(e) => setSelectedStudent(e.value)}
      >
        {columns.map((col, index) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            style={{
              border: '1px solid #ddd',
              padding: '10px',
            }}
          />
        ))}
      </DataTable>
      <div style={{ marginTop: '20px' }}>
        <Button
          label="ยืนยันจบการศึกษา"
          className="p-button-danger"
          style={{ background:'green',border:'0px',fontFamily: 'Kanit, sans-serif' }}
          onClick={() => setDisplayConfirmation(true)}
        />
      </div>
      <Dialog
        visible={displayConfirmation}
        onHide={() => setDisplayConfirmation(false)}
        header="ยืนยันการจบการศึกษา"
        style={{ fontFamily: 'Kanit, sans-serif' }}
        modal
        footer={
          <div style={{ marginLeft:'10px',alignItems:'center',fontFamily: 'Kanit, sans-serif' }}>
            <Button label="ใช่" style={{ width:'100px',alignItems:'center',fontFamily: 'Kanit, sans-serif' }} onClick={handleConfirmation} disabled={confirmationText !== 'ยืนยัน'} />
            <Button label="ยกเลิก" style={{ width:'100px',alignItems:'center',marginLeft:'20px', fontFamily: 'Kanit, sans-serif' }} onClick={() => setDisplayConfirmation(false)} className="p-button-secondary" />
            <br/><br/><span style={{fontFamily: 'Kanit, sans-serif',color:'#D63434'}} >**ถ้าจบการศึกษาให้พิมพ์คำว่า "ยืนยัน"</span>
          </div>
        }
      >
        <input type="text" style={{ width:'100px',alignItems:'center',fontFamily: 'Kanit, sans-serif' }} value={confirmationText} onChange={(e) => setConfirmationText(e.target.value)} placeholder="ยืนยัน" />
      </Dialog>
    </div>
  );
}

export default Data_Student;