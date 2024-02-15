import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ScrollPanel } from 'primereact/scrollpanel';
import axios from 'axios';

  const CheckExtrapoints = () => {
    const [extrapointsData, setExtrapointsData] = useState([]);
    const userData = JSON.parse(localStorage.getItem('userData'));
    const professorCheck = `${userData.professor_first_name} ${userData.professor_last_name}`;

    const getExtraPointsData = async () => {
      try {
        const result = await axios.get('https://project-in-back.vercel.app/api/get-check-extrapoints');
        setExtrapointsData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      getExtraPointsData();
    }, []);

  const imageTemplate = (rowData) => {
    const extrapoint_pdf = rowData.extrapoint_pdf;

    if (extrapoint_pdf && extrapoint_pdf.type === 'Buffer' && extrapoint_pdf.data) {
      const blob = new Blob([new Uint8Array(extrapoint_pdf.data)], { type: 'application/octet-stream' });
      const imageUrl = URL.createObjectURL(blob);

      return <img src={imageUrl} alt="รูปภาพ" style={{ width: '600px', height: '400px' }} />;
    } else {
      return <p>No image available</p>;
    }
  };

  const renderActionButtons = (rowData) => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const professorCheck = `${userData.professor_first_name} ${userData.professor_last_name}`;
  
    const handlePass = async () => {
      try {
        await axios.put(`https://project-in-back.vercel.app/extrapoints/${rowData.extrapoint_id}`, { Check_id: 1, professor_check: professorCheck });
        console.log('Passed');
        // เมื่อผ่านสำเร็จ ต้องเรียกใช้ฟังก์ชัน getExtraPointsData() เพื่อรีเฟรชข้อมูลในตาราง
        getExtraPointsData();
      } catch (error) {
        console.error('Error updating Check_id:', error);
      }
    };
  
    const handleReject = async () => {
      try {
        await axios.put(`https://project-in-back.vercel.app/extrapoints/${rowData.extrapoint_id}`, { Check_id: 2, professor_check: professorCheck });
        console.log('Rejected');
        // เมื่อไม่ผ่านสำเร็จ ต้องเรียกใช้ฟังก์ชัน getExtraPointsData() เพื่อรีเฟรชข้อมูลในตาราง
        getExtraPointsData();
      } catch (error) {
        console.error('Error updating Check_id:', error);
      }
    };
  
    return (
      <div>
        <button onClick={handlePass}>ผ่าน</button>
        <button onClick={handleReject}>ไม่ผ่าน</button>
      </div>
    );
  };


  return (
    <div style={{ width: '100%', marginLeft: '10px' }}>
      <ScrollPanel style={{ width: "100%", height: "950px" }}>
      <DataTable value={extrapointsData} style={{ fontFamily: 'Kanit, sans-serif' }}>
        <Column field="list" header="ชื่อแบบประเมิน" />
        <Column field="points" header="คะแนน" />
        <Column field="first_name" header="ชื่อ" />
        <Column field="last_name" header="นามสกุล" />
        <Column field="id_student" header="รหัสนักศึกษา" />
        <Column header="รูปภาพ" body={imageTemplate} />
        <Column header='Action' body={renderActionButtons} />
        
        
      </DataTable>
      </ScrollPanel>
    </div>
  );
};

export default CheckExtrapoints;
