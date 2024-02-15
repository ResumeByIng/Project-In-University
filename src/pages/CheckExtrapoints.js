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

    // สร้าง FileReader object เพื่ออ่านข้อมูลจาก Blob
    const reader = new FileReader();

    // เมื่ออ่านข้อมูลเสร็จสิ้น
    reader.onload = () => {
      // แปลงข้อมูลเป็น Base64 string
      const base64String = reader.result;

      // สร้าง URL ของภาพจาก Base64 string
      const imageUrl = `data:image/jpeg;base64,${base64String}`;

      // แสดงภาพใน UI
      console.log("รูป:", imageUrl);
    };

    // อ่านข้อมูลจาก Blob object ด้วย FileReader
    reader.readAsDataURL(blob);
  } else {
    console.log("ไม่มีรูป");
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
