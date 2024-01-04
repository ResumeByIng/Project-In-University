import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';

function Data_professor() {
  const [professorData, setProfessorData] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    setProfessorData([userData]);
  }, []);

  const itemTemplate = (professor) => (
    <div className="p-col-12 professor-item">
      <div><strong>รหัสพนักงาน:</strong> {professor.professor_user_id}</div>
      <div><strong>ชื่อ:</strong> {professor.professor_first_name}</div>
      <div><strong>นามสกุล:</strong> {professor.professor_last_name}</div>
      <div><strong>ตำแหน่งย่อ:</strong> {professor.professor_position}</div>
      <div><strong>สังกัด:</strong> {professor.professor_faculty}</div>
    </div>
  );

  return (
    <div className='data_student' style={{ width: '100%', marginLeft: '100px', marginTop: '50px' }}>
      <div className='grid'>
        <div className='col'>
          <DataView value={professorData} itemTemplate={itemTemplate} layout="list" />
        </div>
      </div>
    </div>
  );
}

export default Data_professor;