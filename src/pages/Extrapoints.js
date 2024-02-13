import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Checkbox } from 'primereact/checkbox';
import { FileUpload } from 'primereact/fileupload';

const Extrapoints = () => {
  const [extrapoints, setExtrapoints] = useState([]);
  const [selectedExtrapoints, setSelectedExtrapoints] = useState([]);

  useEffect(() => {
    ExtrapointsService.getExtrapoints()
      .then((data) => {
        setExtrapoints(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleCheckboxToggle = (e, rowData) => {
    const selectedItems = [...selectedExtrapoints];
    if (e.checked) {
      selectedItems.push(rowData);
    } else {
      const index = selectedItems.findIndex(item => item === rowData);
      if (index !== -1) {
        selectedItems.splice(index, 1);
      }
    }
    setSelectedExtrapoints(selectedItems);
  };

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB in bytes

  const isPDFFileValid = (file) => {
    return file.type === 'application/pdf' && file.size <= MAX_FILE_SIZE;
  };

  const uploadPDF = (event, rowData) => {
    const file = event.files[0];

    if (!file || !isPDFFileValid(file)) {
      console.error('Invalid file. Please upload a valid PDF file not exceeding 10 MB.');
      return;
    }
    const reader = new FileReader();

    reader.onload = (e) => {
      console.log('Uploading PDF for row:', rowData);
      console.log('PDF data:', e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const pdfUploadTemplate = (rowData) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <FileUpload
          mode="basic"
          chooseLabel="เลือกไฟล์ PDF"
          className="p-button-rounded p-button-outlined p-button-secondary"
          customUpload={true}
          uploadHandler={(e) => uploadPDF(e, rowData)}
          accept="application/pdf"
          maxFileSize={MAX_FILE_SIZE}
          style={{ fontFamily: 'Kanit, sans-serif' }}
        />
        <Checkbox
          checked={selectedExtrapoints.includes(rowData)}
          onChange={(e) => handleCheckboxToggle(e, rowData)}
          style={{ marginLeft: '10px' }}
        />
      </div>
    );
  };

  return (
    <div style={{ width: '100%', marginLeft: '10px' }}>
      <ScrollPanel style={{ width: '100%', height: '950px' }}>
        <p>Content of Extrapoints</p>
        <div className="card">
          <DataTable
            value={extrapoints}
            selection={selectedExtrapoints}
            onSelectionChange={handleCheckboxToggle}
            dataKey="id"
            tableStyle={{ minWidth: '50rem' }}
            style={{ fontFamily: 'Kanit, sans-serif' }}
          >
            <Column field="clause" header="ข้อ"></Column>
            <Column field="list" header="ชื่อแบบประเมิน"></Column>
            <Column field="points" header="คะแนน"></Column>
            <Column field="picture" header="PDF" body={pdfUploadTemplate}></Column>
          </DataTable>
          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="submit" label="ส่งแบบประเมิน" style={{ fontFamily: 'Kanit, sans-serif' }} className="w-full md:w-14rem" />
          </div>
        </div>
      </ScrollPanel>
    </div>
  );
}

export default Extrapoints;

export const ExtrapointsService = {
  getExtrapointsData() {
    return [
      {
        clause: '1',
        list: 'ประชาสัมพันธ์สาขาผ่าน Facebook/Twitter/Community จำนวน 10 ครั้ง/เดือน',
        points: '2',
      },
      {
        clause: '2',
        list: 'ประชาสัมพันธ์สาขาผ่าน Pantip/Dek-d ด้วยการสร้างกระทู้ จำนวน 5 ครั้ง/เดือน',
        points: '2',
      },
      {
        clause: '3',
        list: 'ประชาสัมพันธ์สาขาผ่านโรงเรียน',
        points: '8',
      },
      {
        clause: '4',
        list: 'ประชาสัมพันธ์สาขาผ่านโรงเรียนเก่าของตัวเอง',
        points: '8',
      },
      {
        clause: '5',
        list: 'ช่วยเเหลืออาจารย์ตามที่ได้รับมอบหมาย 10 ครั้ง/เดือน',
        points: '2',
      },
      {
        clause: '6',
        list: 'เข้าร่วมอบรม/สัมมนาที่มีหน่วยงานของรัฐและเอกชนเป็นเจ้าภาพ',
        points: '2',
      },
      {
        clause: '7',
        list: 'ทำโครงการของสาขา/บริการวิชาการ',
        points: '5',
      },
      {
        clause: '8',
        list: 'เข้าร่วมการแข่งขันเกมและผ่านเข้ารอบแรก 1 ครั้ง/รอบการประเมิน',
        points: '3',
      },
      {
        clause: '9',
        list: 'เข้าร่วมการแข่งขันทักษะวิศวกรรมคอมพิวเตอร์',
        points: '4',
      },
      {
        clause: '10',
        list: 'รับรางวัล (อันดับ 1 - 4) ในการแข่งขันเกม ',
        points: '10',
      },
      {
        clause: '11',
        list: 'รับรางวัล (อันดับ 1 - 4) ในการแข่งขันทักษะวิศวกรรมคอมพิวเตอร์ ',
        points: '10',
      },
      {
        clause: '12',
        list: 'นำเสนอผลงานทางวิชาการในระดับชาติ',
        points: '10',
      },
      {
        clause: '13',
        list: 'นำเสนอผลงานทางวิชาการในระดับนานาชาติ/ตีพิมพ์วารสาร',
        points: '10',
      },
      {
        clause: '14',
        list: 'สร้าง Content ใน Youtube หัวข้อต้องเกี่ยวกับการประชาสัมพันธ์สาขา และไม่เกี่ยวข้องกับคะแนนในวิชาเรียน',
        points: '10',
      },
    ];
  },

  getExtrapointsMini() {
    return Promise.resolve(this.getExtrapointsData().slice(0, 5));
  },

  getExtrapointsSmall() {
    return Promise.resolve(this.getExtrapointsData().slice(0, 10));
  },

  getExtrapoints() {
    return Promise.resolve(this.getExtrapointsData());
  },
};
