import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

const CheckExtrapoints = () => {
  const [extrapointsData, setExtrapointsData] = useState([]);

  useEffect(() => {
    const getExtraPointsData = async () => {
      try {
        const result = await axios.get('https://project-in-back.vercel.app/api/get-extrapoints');
        setExtrapointsData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getExtraPointsData();
  }, []);

  const imageTemplate = (rowData) => {
    const extrapoint_pdf = rowData.extrapoint_pdf;

    if (extrapoint_pdf && extrapoint_pdf.type === 'Buffer' && extrapoint_pdf.data) {
      const blob = new Blob([new Uint8Array(extrapoint_pdf.data)], { type: 'application/octet-stream' });
      const imageUrl = URL.createObjectURL(blob);

      return <img src={imageUrl} alt="รูปภาพ" style={{ width: '300px' }} />;
    } else {
      return <p>No image available</p>;
    }
  };

  return (
    <div style={{ width: '100%', marginLeft: '10px' }}>
      <DataTable value={extrapointsData} style={{ fontFamily: 'Kanit, sans-serif' }}>
        <Column field="list" header="ชื่อแบบประเมิน" />
        <Column field="points" header="คะแนน" />
        <Column field="first_name" header="ชื่อ" />
        <Column field="last_name" header="นามสกุล" />
        <Column field="id_student" header="รหัสนักศึกษา" />
        <Column header="รูปภาพ" body={imageTemplate} />
      </DataTable>
    </div>
  );
};

export default CheckExtrapoints;
