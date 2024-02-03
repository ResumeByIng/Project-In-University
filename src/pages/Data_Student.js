import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Data_Student() {
  const [studentData, setStudentData] = useState([]);

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

  return (
    <div style={{ width: '83%', marginLeft: '20px', marginTop: '50px' }}>
      <h1 style={{ color: '#333' }}>ข้อมูลส่วนตัว</h1>
      <DataTable
        style={{
          marginTop: '10px',
          fontFamily: 'Kanit, sans-serif',
        }}
        value={studentData}
        header="ข้อมูลส่วนตัวนักศึกษา"
        rowClassName={rowClassName}
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
    </div>
  );
}

export default Data_Student;