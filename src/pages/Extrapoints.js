import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';
// import 
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ExtrapointsService } from '../data/ExtrapointsService';
import { FileUpload } from 'primereact/fileupload';
import { ScrollPanel } from 'primereact/scrollpanel';


function Extrapoints() {
  const [Extrapoints, setExtrapoints] = useState([]);
  const [selectedExtrapoints, setSelectedExtrapoints] = useState([]);
  
  /////////////////////////////////////////////////////////////////////////////    ส่วนของการ Upload รูปภาพของ คะแนนพิเศษ     //////////////////////////////////////////////////////////////////////
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB in bytes

const isImageFileValid = (file) => {
  const allowedTypes = ['image/jpeg', 'image/png'];
  return allowedTypes.includes(file.type) && file.size <= MAX_FILE_SIZE;
};

const uploadImage = (event, rowData) => {
  const file = event.files[0];
  
  if (!file || !isImageFileValid(file)) {
    console.log('Invalid file. Please upload a valid image file (jpg or png) not exceeding 10 MB.');
    return;
  }

  const reader = new FileReader();

  reader.onload = (e) => {
    console.log('Uploading image for row:', rowData);
    console.log('Image data:', e.target.result);
  };

  reader.readAsDataURL(file);
};

const imageUploadTemplate = (rowData) => {
  return (
    <div>
      {rowData.picture ? (
        <img src={rowData.picture} alt="รูปภาพ" style={{ width: '100px' }} />
      ) : (
        <FileUpload
          mode="basic"
          chooseLabel="เลือกรูปภาพ"
          className="p-button-rounded p-button-outlined p-button-secondary"
          customUpload={true}
          uploadHandler={(e) => uploadImage(e, rowData)}
          accept="image/jpeg, image/png"
          maxFileSize={MAX_FILE_SIZE}
        />
      )}
    </div>
  );
};
const [loading, setLoading] = useState(true);

useEffect(() => {
  ExtrapointsService.getExtrapoints()
    .then((data) => {
      setExtrapoints(data);
      setLoading(false); // ตั้งค่าการโหลดเป็นเท็จเมื่อข้อมูลถึง
    })
    .catch((error) => {
      console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      setLoading(false); // จัดการข้อผิดพลาดโดยการตั้งค่าการโหลดเป็นเท็จ
    });
}, []);

  return (
        <div style={{ width: '100%',marginLeft: '10px' }}>
                      <ScrollPanel style={{ width: '100%', height: '950px' }}>
          <p>เนื้อหาของคะแนนพิเศษ</p>
          <div className="card">
            <DataTable value={Extrapoints} selectionMode="single" selection={selectedExtrapoints} onSelectionChange={(e) => setSelectedExtrapoints(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                <Column field="clause" header="ข้อ"></Column>
                <Column field="list" header="ชื่อแบบประเมิน"></Column>
                <Column field="points" header="คะแนน"></Column>
                <Column field="picture" header="รูปภาพ" body={imageUploadTemplate} ></Column>
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
            </DataTable>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>              
            <Button type="submit" label="ส่งแบบประเมิน" className="w-full md:w-14rem" />
            </div>
        </div>
        </ScrollPanel>
        </div>
  );
}
export default Extrapoints;