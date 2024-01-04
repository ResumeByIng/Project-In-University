import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ExtrapointsService } from '../data/ExtrapointsService';
import { FileUpload } from 'primereact/fileupload';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Checkbox } from 'primereact/checkbox';

function Extrapoints() {
  const [Extrapoints, setExtrapoints] = useState([]);
  const [selectedExtrapoints, setSelectedExtrapoints] = useState([]);

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB in bytes

  const isImageFileValid = (file) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    return allowedTypes.includes(file.type) && file.size <= MAX_FILE_SIZE;
  };

  const uploadImage = (event, rowData) => {
    const file = event.files[0];

    if (!file || !isImageFileValid(file)) {
      console.error('Invalid file. Please upload a valid image file (jpg or png) not exceeding 10 MB.');
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

  useEffect(() => {
    ExtrapointsService.getExtrapoints()
      .then((data) => {
        setExtrapoints(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleCheckboxToggle = (e) => {
    const selectedItems = e.value;
    setSelectedExtrapoints(selectedItems);
  };
  const handleButtonClick = (rowData) => {
    // ทำงานที่ต้องการเมื่อปุ่มถูกคลิก
    console.log('Button clicked for row data:', rowData);

    // ส่งข้อมูลที่ต้องการไปยัง API หรือทำประการอื่น ๆ ตามที่ต้องการ
  };

  return (
    <div style={{ width: '100%', marginLeft: '10px' }}>
      <ScrollPanel style={{ width: '100%', height: '950px' }}>
        <p>Content of Extrapoints</p>
        <div className="card">
        <DataTable
          value={Extrapoints}
          selection={selectedExtrapoints}
          onSelectionChange={handleCheckboxToggle}
          dataKey="id"
          tableStyle={{ minWidth: '50rem' }}
        >
            <Column field="clause" header="ข้อ"></Column>
            <Column field="list" header="ชื่อแบบประเมิน"></Column>
            <Column field="points" header="คะแนน"></Column>
            <Column field="picture" header="รูปภาพ" body={imageUploadTemplate}></Column>
            <Column>
              <Button onClick={() => handleButtonClick(selectedExtrapoints[0])}>Button</Button>
            </Column>
            <Column>
              <Checkbox checked={selectedExtrapoints.length > 0} onChange={(e) => handleCheckboxToggle({ value: Extrapoints, checked: e.checked })} />
            </Column>
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
