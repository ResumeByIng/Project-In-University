  import React, { useState, useRef, useEffect } from 'react';
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
  const [visible2, setVisible2] = useState(false);
  const [header, setHeader] = useState('');
  const [selectedStudentData, setSelectedStudentData] = useState(null);
  const [assessmentList, setAssessmentList] = useState(Array.from({ length: 5 }, (_, index) => ({
    clause: `ข้อ ${index + 1}`,
    list: ''
  })));
  const [tableData, setTableData] = useState([]);
  const [assessmentData, setAssessmentData] = useState([]);
  const [assessmentVoteData, setAssessmentVoteData] = useState([]);
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

  useEffect(() => {
    // ฟังก์ชันสำหรับเรียกข้อมูลจากเซิร์ฟเวอร์
    const fetchData = async () => {
      try {
        const response1 = await axios.get('https://project-in-back.vercel.app/api/get-assessment-data');
        setAssessmentData(response1.data);
        console.log(response1.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    // เรียกใช้ฟังก์ชัน fetchData เมื่อคอมโพเนนต์ถูกโหลด
    fetchData();
  }, []); // ใช้งาน useEffect แบบ one-time effect เพื่อให้โหลดข้อมูลเฉพาะครั้งแรก
  

  const formatDate = (rowData) => {
    // ตัดเอาเฉพาะส่วนที่เป็นวันที่เต็มโดยไม่รวมเวลาและ timezone
    const dateParts = rowData.createdAt.split('T');
    return dateParts[0];
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
  const renderActionButtons = (rowData) => {
    return (
      <div>
        <Button style={{ fontFamily: 'Kanit, sans-serif' }} label="ดูนักศึกษาที่ทำประเมิน" onClick={() => handleViewStudents(rowData)}/>
      </div>
    );
  };

  
  const handleViewStudents = (rowData) => {
    console.log(rowData); // เพิ่มบรรทัดนี้
    setSelectedStudentData(rowData);
    setVisible2(true);
  };
  
  const renderRowExpansion = (rowData) => {
    return (
      <DataTable
        value={[rowData]}
        showGridlines
        tableStyle={{ minWidth: '20rem', textAlign: 'center' }}
        style={{ fontFamily: 'Kanit, sans-serif' }}
      >
        {Object.keys(rowData).filter(key => key.startsWith("vote_value_")).map((key, index) => (
          <Column key={index} field={key} header={`ข้อ ${index + 1}`}></Column>
        ))}
      </DataTable>
    );
  };

  const renderVoteValue = (value) => {
    switch (value) {
      case 0:
        return '';
      case 1:
        return 'ปรับปรุง';
      case 2:
        return 'พอใช้';
      case 3:
        return 'ปานกลาง';
      case 4:
        return 'ดี';
      case 5:
        return 'ดีมาก';
      default:
        return '';
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

      <Dialog
  header={`ข้อมูลนักศึกษาที่ทำประเมิน`}
  visible={visible2}
  className="custom-dialog"
  style={{ width: '100%' }} // เพิ่ม style ที่กำหนดความกว้างของ Dialog
  onHide={() => {
    setVisible2(false); // ปิด Dialog
  }}
>
{selectedStudentData && (
  <>
    <DataTable
      value={[selectedStudentData]}
      showGridlines
      tableStyle={{ minWidth: '20rem', textAlign: 'center' }}
      style={{ fontFamily: 'Kanit, sans-serif',width:'100%' }}
    >
      {Object.keys(selectedStudentData).filter(key => key.startsWith("list_")).map((key, index) => (
        <Column style={{ fontFamily: 'Kanit, sans-serif',width:'500px' }}
        key={index} field={key} header={`ประเมิน ${index + 1}`}></Column>
      ))}
    </DataTable>

    <DataTable
      value={[selectedStudentData]}
      showGridlines
      tableStyle={{ minWidth: '20rem', textAlign: 'center' }}
      style={{ fontFamily: 'Kanit, sans-serif',width:'100%' }}
    >
      {Object.keys(selectedStudentData).filter(key => key.startsWith("vote_value_")).map((key, index) => (
        <Column key={index} field={key} header={`ประเมินที่ ${index + 1}`} body={(rowData) => renderVoteValue(rowData[key])}></Column>
      ))}
    </DataTable>
  </>
)}


</Dialog>
      <Toast ref={toast} />
      <div style={{ marginLeft: '10px', marginTop: '10px' }}>
      <DataTable
  value={assessmentData}
  showGridlines
  tableStyle={{ minWidth: '100rem', textAlign: 'center' }}
  style={{ fontFamily: 'Kanit, sans-serif' }}
>
  <Column field="student_id" header="รหัสนักศึกษา"></Column>
  <Column field="class_year" header="ปีการศึกษา"></Column>
  <Column field="course_code" header="รหัสวิชา"></Column>
  <Column field="name_professor" header="อาจารย์"></Column>
  <Column field="createdAt" header="สร้างขึ้นเมื่อ" body={formatDate}></Column>
  <Column header="ผลการประเมิน" body={renderActionButtons}></Column>
</DataTable>
        <div style={{ marginTop: '10px' }} >
          <Button style={{ fontFamily: 'Kanit, sans-serif' }} label="สร้างแบบประเมิน" onClick={() => setVisible(true)} />
        </div>
      </div>
    </div>
  );
};

export default AddAssessment;
