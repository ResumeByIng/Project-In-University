import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ExtrapointsService } from '../data/ExtrapointsService';
import axios from 'axios';


function CheckExtrapoints() {
  const [extrapointsData, setExtrapointsData] = useState([]);
  const [imageSrc, setImageSrc] = useState(null);
  
  useEffect(() => {
    // Fetch data from Extrapoints or use existing state from Extrapoints component
    // For simplicity, let's assume you have a function getExtrapointsData() in ExtrapointsService
    // that returns the data.
    async function getExtraPointsData() {
      // const result = await ExtrapointsService.getExtrapointsData();
      // setExtrapointsData(result);
      // console.log('extrapointsData', result);
      const result = await axios.get('https://project-in-back.vercel.app/api/get-extrapoints');
      setExtrapointsData(result.data);
    }
    getExtraPointsData();
    // const extrapointsData = ExtrapointsService.getExtrapointsData();
    // console.log('extrapointsData', extrapointsData);
    // setExtrapointsData(extrapointsData);
  }, []);
//////////////////////////////////////////  ส่วนที่เพิ่มเข้ามา  ///////////////////////////////////////////////////////
const imageTemplate = (rowData) => {
  const extrapoint_pdf = rowData.extrapoint_pdf;

  // ตรวจสอบว่า rowData.extrapoint_pdf ไม่เป็น null และมีค่า
  if (extrapoint_pdf && extrapoint_pdf.type === 'Buffer' && extrapoint_pdf.data) {
    // สร้าง Blob object จาก Buffer data
    const blob = new Blob([new Uint8Array(extrapoint_pdf.data)], { type: 'application/octet-stream' });

    // สร้าง URL ของภาพจาก Blob object
    const imageUrl = URL.createObjectURL(blob);

    // แสดงภาพใน UI
    console.log("รูป:", imageUrl);

    // ส่ง imageUrl ไปยัง UI หรือทำการใช้ในการแสดงรูปภาพใน HTML
    // ตัวอย่างเช่น ส่งไปยัง state หรือ props ของ Component
    return imageUrl;
  } else {
    console.log("ไม่มีรูป");
    return null; // หรือให้ส่งค่าว่างกลับไปหา Component เพื่อให้มันไม่แสดงรูป
  }
};
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div style={{ width: '100%', marginLeft: '10px' }}>
      <DataTable value={extrapointsData} style={{fontFamily: 'Kanit, sans-serif'}}>
        <Column field="list" header="ชื่อแบบประเมิน" />
        <Column field="points" header="คะแนน" />
        <Column field="first_name" header="ชื่อ" />
        <Column field="last_name" header="นามสกุล" />
        <Column field="id_student" header="รหัสนักศึกษา" />
        <Column header="รูปภาพ" body={imageTemplate} />
      </DataTable>
    </div>
  );
}

// Function to render image in DataTable
// const imageBodyTemplate = (rowData) => {
//   return <img src={'https://uploads/Doc1 copy.pdf'} alt="รูปภาพ" style={{ width: '50px' }} />;
// };

export default CheckExtrapoints;
