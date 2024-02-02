import React, { useState,useRef} from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import './AddAssessment.css';

const AddAssessment = () => {
  const [academicYear, setAcademicYear] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [lecturer, setLecturer] = useState('');
  const [visible, setVisible] = useState(false);
  const [header, setHeader] = useState('');
  const [title, setTitle] = useState('');
  const toast = useRef(null);
  const [toastData, setToastData] = useState({});
  const [assessmentList, setAssessmentList] = useState(Array.from({ length: 5 }, (_, index) => ({
    clause: `ข้อที่ ${index + 1}`,
    list: ''
  })));
  const [tableData, setTableData] = useState([]);

  const resetDialog = () => {
    setHeader('');
    setTitle('');
    setAcademicYear('');
    setCourseCode('');
    setLecturer('');
    setAssessmentList(Array.from({ length: 5 }, (_, index) => ({
      clause: `หัวข้อที่ ${index + 1}`,
      list: ''
    })));
  };

  const handleSave = () => {
    // ตรวจสอบข้อมูลก่อนบันทึก
    if (!academicYear || !courseCode || !lecturer || assessmentList.some(item => !item.list)) {
      // ใช้ ref ที่สร้างไว้
      toast.current.show({ severity: 'error', summary: 'กรุณากรอกข้อมูลให้ครบถ้วน', life: 3000 });
      return;
    }

    // ถ้าข้อมูลถูกต้อง ทำการบันทึก
    const newData = {
      academicYear,
      courseCode,
      lecturer,
      createdDate: new Date().toLocaleDateString(),
      // เพิ่มข้อมูลอื่น ๆ ตามต้องการ
    };

    setTableData([...tableData, newData]);
    setVisible(false);
    resetDialog(); // รีเซ็ตข้อมูล

    // ตั้งค่า State สำหรับแสดง Toast สำเร็จ
    setToastData({
    severity: 'success',
    summary: 'บันทึกแบบประเมินสำเร็จ',
    life: 3000
  });
};

  const handleAddItem = () => {
    const newItem = {
      clause: `หัวข้อที่ ${assessmentList.length + 1}`,
      list: ''
    };
    setAssessmentList([...assessmentList, newItem]);
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
      <div style={{ width: '100%' ,justifyContent: 'center'}}>
        <InputText
          value={academicYear}
          onChange={(e) => setAcademicYear(e.target.value)}
          placeholder="ปีการศึกษา"
          className="custom-inputtext"
        />
        <InputText
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          placeholder="รหัสวิชา"
          className="custom-inputtext"
        />
        <InputText
          value={lecturer}
          onChange={(e) => setLecturer(e.target.value)}
          placeholder="อาจารย์"
          className="custom-inputtext"
        />
        <InputText value={header} onChange={(e) => setHeader(e.target.value)} placeholder="Header" className="custom-inputtext"/>
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
            />
          </div>
        ))}
        <Button label="เพิ่มรายการประเมิน" onClick={handleAddItem} className='custom-button' />
        <Button label="บันทึกแบบประเมิน" onClick={handleSave} className='custom-button' />
      </div>
    </Dialog>
    <Toast ref={toast} />
    <div style={{marginLeft:'10px',marginTop:'10px'}}>
    <DataTable
      value={tableData}
      showGridlines
      tableStyle={{ minWidth: '100rem', textAlign: 'center'}}
      style={{fontFamily: 'Kanit, sans-serif'}}
    >
      <Column field="academicYear" header="ปีการศึกษา"></Column>
      <Column field="courseCode" header="รหัสวิชา"></Column>
      <Column field="lecturer" header="อาจารย์"></Column>
      <Column field="createdDate" header="สร้างขึ้นเมื่อ"></Column>
      {/* เพิ่ม Column ตามต้องการ */}
    </DataTable>
      <div style={{marginTop:'10px'}} >
        <Button style={{fontFamily: 'Kanit, sans-serif'}} label="สร้างแบบประเมิน" onClick={() => setVisible(true)} />
      </div>
    </div>
  </div>
  );
};

export default AddAssessment;
