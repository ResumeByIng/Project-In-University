import React, { useState, useEffect } from 'react';
import { DataView } from 'primereact/dataview';

function Data_Student() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    setStudentData([userData]);
  }, []);

  const itemTemplate = (student) => (
    <div className="p-col-12 student-item">
      <div className='data_student'>
        <div>
          <strong><h1>ชื่อ - นามสกุล:</h1></strong>
          <h1>{student.student_first_name} {student.student_last_name}</h1>
        </div>
        <br/>
        <div>
          <strong><h1>รหัสนักศึกษา:</h1></strong>
          <h1>{student.student_id_student}</h1>
        </div>
        <br/>
        <div>
          <strong><h1>คณะ:</h1></strong>
          <h1>{student.student_faculty}</h1>
        </div>
        <br/>
        <div>
          <strong><h1>สาขา :</h1></strong>
          <h1>{student.student_branch}</h1>
        </div>
        <br/>
        <div>
          <strong><h1>รุ่นปีการศึกษา :</h1></strong>
          <h1>{student.student_class_year}</h1>
        </div>
        <br/>
        <div>
          <strong><h1>เพศ :</h1></strong>
          <h1>{student.student_gender}</h1>
        </div>
        <br/>
      </div>
    </div>
  );

  return (
    <div style={{ width: '100%', marginLeft: '50px', marginTop: '50px' }}>
      <div className='grid'>
        <div className='col'>
          <DataView value={studentData} itemTemplate={itemTemplate} layout="list" />
        </div>
      </div>
    </div>
  );
}

export default Data_Student;
