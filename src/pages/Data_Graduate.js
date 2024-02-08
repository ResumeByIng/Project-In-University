import React, { useState, useEffect } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

function DataGraduate() {
  const [graduateData, setGraduateData] = useState([]);
  const [selectedGraduate, setSelectedGraduate] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setGraduateData([userData]);
    }

    const fetchData = async () => {
        try {
          const response = await fetch(`https://project-in-back.vercel.app/data_graduate/all?user_id=${userData.user_id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          console.log(data); // นำข้อมูลที่ได้มา log เพื่อดู
          setGraduateData(prevData => [...prevData, data]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    if (userData) {
      fetchData();
    }

  }, []);

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
        value={graduateData}
        header="ข้อมูลส่วนตัวนักศึกษา"
        rowClassName={rowClassName}
        selectionMode="single"
        selection={selectedGraduate}
        onSelectionChange={(e) => setSelectedGraduate(e.value)}
      >
        <Column field="graduate_first_name" header="ชื่อ" />
        <Column field="graduate_last_name" header="นามสกุล" />
        <Column field="graduate_id_graduate" header="รหัสบัณฑิต" />
        <Column field="graduate_faculty" header="คณะ" />
        <Column field="graduate_branch" header="สาขา" />
        <Column field="graduate_class_year" header="รุ่นปีการศึกษา" />
        <Column field="graduate_gender" header="เพศ" />
        <Column field="work_place" header="สถานที่ทำงาน" />
        <Column field="salary" header="เงินเดือน" />
        <Column field="work_about" header="ทำงานเกี่ยวกับ" />
      </DataTable>
    </div>
  );
}

export default DataGraduate;
