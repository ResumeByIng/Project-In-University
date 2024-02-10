import React, { useState, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import axios from 'axios';
import './AddAssessment.css';

const AddAssessment = () => {
  const [academicYear, setAcademicYear] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [lecturer, setLecturer] = useState('');
  const [visible, setVisible] = useState(false);
  const [header, setHeader] = useState('');
  const [assessmentList, setAssessmentList] = useState(Array.from({ length: 5 }, (_, index) => ({
    clause: `ข้อ ${index + 1}`,
    list: ''
  })));
  const [tableData, setTableData] = useState([]);
  const toast = useRef(null);

  const resetDialog = () => {
    setHeader('');
    setAcademicYear('');
    setCourseCode('');
    setLecturer('');
    setAssessmentList(Array.from({ length: 5 }, (_, index) => ({
      clause: `ข้อ ${index + 1}`,
      list: ''
    })));
  };

  const handleSave = async () => {
    try {
      const data = {
        class_year: academicYear,
        course_code: courseCode,
        name_professor: lecturer,
        header: header,
        ...assessmentList.reduce((acc, item, index) => {
          acc[`list_${index + 1}`] = item.list;
          return acc;
        }, {})
      };

      console.log('บันทึกข้อมูล:', data); // เพิ่ม log เพื่อดูข้อมูลที่ส่งไป

      // ส่งข้อมูลไปยังฐานข้อมูล
      await axios.post('https://project-in-back.vercel.app/api/addAssessment', data);

      // ทำการอัพเดต tableData หรือส่วนที่เกี่ยวข้องกับการแสดงผลตามที่ต้องการ

      resetDialog(); // รีเซ็ตข้อมูล

      // แสดง Toast สำเร็จ
      toast.current.show({ severity: 'success', summary: 'บันทึกแบบประเมินสำเร็จ', life: 3000 });
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', error);
      // แสดง Toast กรณีเกิดข้อผิดพลาด
      toast.current.show({ severity: 'error', summary: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล', life: 3000 });
    }
  };

  const handleAddItem = () => {
    if (assessmentList.length < 10) {
      const newItem = {
        clause: `ข้อ ${assessmentList.length + 1}`,
        list: ''
      };
      setAssessmentList([...assessmentList, newItem]);
    } else {
      toast.current.show({ severity: 'warn', summary: 'คุณมีรายการประเมินมากสุดแล้ว', life: 3000 });
    }
  };

  return (
    <div>
      <Dialog
        header={`หัวข้อแบบประเมิน : ${header}`}
        visible={visible}
        className="custom-dialog"
        onHide={() => {
          setVisible(false);
          resetDialog(); // รีเซ็ตข้อมูล
        }}
      >
        <div>
          <InputText
            style={{ width: '100%', justifyContent: 'center' }}
            value={academicYear}
            onChange={(e) => setAcademicYear(e.target.value)}
            placeholder="ปีการศึกษา"
            className="custom-inputtext"
          />
          <InputText
            style={{ width: '50%' }}
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            placeholder="รหัสวิชา"
            className="custom-inputtext"
          />
          <InputText
            style={{ width: '50%' }}
            value={lecturer}
            onChange={(e) => setLecturer(e.target.value)}
            placeholder="อาจารย์"
            className="custom-inputtext"
          />
          <InputText value={header} onChange={(e) => setHeader(e.target.value)} placeholder="หัวข้อ" className="custom-inputtext" /><br /><br />
          {assessmentList.map((item, index) => (
            <div key={index}>
              <InputText
                value={item.clause}
                onChange={(e) => {
                  const newList = [...assessmentList];
                  newList[index].clause = e.target.value;
                  setAssessmentList(newList);
                }}
                className="custom-inputtext"
                disabled={true}
              />
              <InputText
                value={item.list}
                onChange={(e) => {
                  const newList = [...assessmentList];
                  newList[index].list = e.target.value;
                  setAssessmentList(newList);
                }}
                placeholder={`รายการประเมิน ${index + 1}`}
                className="custom-inputtext"
              /><br />
            </div>
          ))}
          <Button label="เพิ่มรายการประเมิน" onClick={handleAddItem} className='custom-button' />
          <Button label="บันทึกแบบประเมิน" onClick={handleSave} className='custom-button' />
        </div>
      </Dialog>
      <Toast ref={toast} />
      <div style={{ marginLeft: '10px', marginTop: '10px' }}>
        <DataTable
          value={tableData}
          showGridlines
          tableStyle={{ minWidth: '100rem', textAlign: 'center' }}
          style={{ fontFamily: 'Kanit, sans-serif' }}
        >
          <Column field="academicYear" header="ปีการศึกษา"></Column>
          <Column field="courseCode" header="รหัสวิชา"></Column>
          <Column field="lecturer" header="อาจารย์"></Column>
          <Column field="createdDate" header="สร้างขึ้นเมื่อ"></Column>
          {/* เพิ่ม Column ตามต้องการ */}
        </DataTable>
        <div style={{ marginTop: '10px' }} >
          <Button style={{ fontFamily: 'Kanit, sans-serif' }} label="สร้างแบบประเมิน" onClick={() => setVisible(true)} />
        </div>
      </div>
    </div>
  );
};

export default AddAssessment;
