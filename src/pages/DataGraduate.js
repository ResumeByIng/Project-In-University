import React, { useState, useEffect } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function Data_Graduate() {
  const [graduateData, setGraduateData] = useState([]);
  const [work, setWork] = useState([]);
  const [selectedGraduate, setSelectedGraduate] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setGraduateData([userData]);
      fetchData(userData.user_id);
    }
  }, []);

  const fetchData = async (userId) => {
    try {
      const response = await fetch(`https://project-in-back.vercel.app/data_graduate/all?user_id=${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setWork([data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const rowClassName = (rowData) => {
    return rowData.index % 2 === 0 ? 'p-datatable-even' : 'p-datatable-odd';
  };

  const handleEdit = (rowData) => {
    setEditedData(rowData);
    setDialogVisible(true);
  };

  const handleSave = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (!userData || !userData.user_id) {
        throw new Error('User data or user_id not found in localStorage');
      }
  
      const { user_id } = userData;
      const { user_id: updatedUserId, ...updatedData } = editedData;
  
      // เพิ่ม user_id เข้าไปในอ็อบเจ็กต์ updatedData
      updatedData.user_id = user_id;
  
      console.log('Data to be updated:', updatedData);
  
      const response = await fetch(`https://project-in-back.vercel.app/data_graduate/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData), // ส่ง updatedData ที่มี user_id ไปยังเซิร์ฟเวอร์
      });
  
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
  
      fetchData(user_id);
  
      setDialogVisible(false);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  
  return (
    <div style={{ width: '83%', marginLeft: '20px', marginTop: '50px' }}>
      <h1 style={{ color: '#333' }}>ข้อมูลส่วนตัว</h1>
      <DataTable
        style={{
          marginTop: '10px',
          fontFamily: 'Kanit, sans-serif',
        }}
        value={graduateData}
        header="ข้อมูลส่วนตัวของบัณฑิต"
        rowClassName={rowClassName}
        selectionMode="single"
        selection={selectedGraduate}
        onSelectionChange={(e) => setSelectedGraduate(e.value)}
      >
        <Column field="graduate_first_name" header="ชื่อ" />
        <Column field="graduate_last_name" header="นามสกุล" />
        <Column field="graduate_id_graduate" header="รหัสบัณฑิต" />
        <Column field="graduate_faculty" header="คณะ" />
        <Column field="graduate_branch" header="สาขา" />
        <Column field="graduate_class_year" header="รุ่นปีการศึกษา" />
        <Column field="graduate_gender" header="เพศ" />
      </DataTable><br/><br/>
      <h1 style={{ color: '#333' }}>ข้อมูลสถานที่ทำงานของบัณฑิต</h1>
      <DataTable
        style={{
          marginTop: '10px',
          fontFamily: 'Kanit, sans-serif',
        }}
        value={work}
        header="ข้อมูลส่วนตัวของสถานที่ทำงาน"
        rowClassName={rowClassName}
        selectionMode="single"
        selection={selectedGraduate}
        onSelectionChange={(e) => setSelectedGraduate(e.value)}
      >
        <Column field="work_place" header="สถานที่ทำงาน" />
        <Column field="salary" header="เงินเดือน" />
        <Column field="work_about" header="ทำงานเกี่ยวกับ" />
        <Column field="end_year" header="ปีที่จบการศึกษา" />
      </DataTable><br/><br/>
      <button onClick={() => handleEdit(work)}>แก้ไข</button>
      <Dialog visible={dialogVisible} onHide={() => setDialogVisible(false)}>
        <h1>Edit Data</h1>
        <div>
          <label htmlFor="work_place">สถานที่ทำงาน:</label>
          <input type="text" id="work_place" value={editedData.work_place || ''} onChange={(e) => setEditedData({ ...editedData, work_place: e.target.value })} />
        </div>
        <div>
          <label htmlFor="salary">เงินเดือน:</label>
          <input type="text" id="salary" value={editedData.salary || ''} onChange={(e) => setEditedData({ ...editedData, salary: e.target.value })} />
        </div>
        <div>
          <label htmlFor="work_about">ทำงานเกี่ยวกับ:</label>
          <input type="text" id="work_about" value={editedData.work_about || ''} onChange={(e) => setEditedData({ ...editedData, work_about: e.target.value })} />
        </div>
        <div>
          <label htmlFor="end_year">ปีที่จบการศึกษา:</label>
          <input type="text" id="end_year" value={editedData.end_year || ''} onChange={(e) => setEditedData({ ...editedData, end_year: e.target.value })} />
        </div>
        <Button label="Save" onClick={handleSave} />
      </Dialog>
    </div>
  );
}

export default Data_Graduate;
