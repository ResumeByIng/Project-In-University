import React, { useEffect, useState } from 'react';

function Data_professor() {
  const [professorData, setProfessorData] = useState({});

  useEffect(() => {
    // ดึงข้อมูลจาก Local Storage โดยใช้ key ที่เก็บข้อมูล
    const storedProfessorData = localStorage.getItem('userData');
    
    if (storedProfessorData) {
      // แปลงข้อมูลที่ดึงมาจาก Local Storage เป็น Object
      const parsedProfessorData = JSON.parse(storedProfessorData);
      
      // ตั้งค่า state เพื่อให้ React component รีเรนเดอร์
      setProfessorData(parsedProfessorData);
    }
  }, []);

  // ตรวจสอบว่า professorData มีค่าหรือไม่
  if (!professorData || !professorData.professor) {
    return <div className ='data_student' style={{ width: '100%', marginLeft: '100px', marginTop:'50px' }}>Loading...</div>;
  }

  // เพิ่มตัวกรองเพื่อไม่ให้ email และ password ปรากฏใน JS
  const { email, password, ...filteredProfessorData } = professorData.professor;

  return (
    <div className ='data_student' style={{ width: '100%', marginLeft: '100px', marginTop:'50px' }}>
      <h1>ชื่อ-นามสกุล : {filteredProfessorData.first_name} {filteredProfessorData.last_name}</h1>
      <br />
      <h1>คณะ : {filteredProfessorData.faculty}</h1>
      <br />
      <h1>สาขา : {filteredProfessorData.branch}</h1>
      <br />
      <h1>ตำแหน่ง : {filteredProfessorData.position}</h1>
      <br />
      <h1>คุณวุฒิ : {filteredProfessorData.qualification}</h1>
      <br />
      <h1>เพศ : {filteredProfessorData.gender}</h1>
    </div>
  );
}

export default Data_professor;
