import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { DataView } from 'primereact/dataview';
import axios from 'axios';

function Data_professor() {
  const [professorData, setProfessorData] = useState([]);
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [editableProfessor, setEditableProfessor] = useState(null);
  const [editedData, setEditedData] = useState({});

  const updateProfessorInDatabase = async (user_id, updatedData) => {
    try {
      const response = await axios.put(`https://project-in-back.vercel.app/api/update-professor/${user_id}`, updatedData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการอัปเดตอาจารย์ในฐานข้อมูล:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://project-in-back.vercel.app/api/data'); // แก้ไข URL ตามที่คุณต้องการ
        const userData = response.data[0]; // กำหนดให้ใช้ข้อมูลของผู้ใช้ที่ได้จาก API
        if (userData) {
          setProfessorData([userData]);
          setEditedData((prevData) => ({
            ...prevData,
            user_id: userData.user_id,
          }));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const handleEditClick = (professor) => {
    setEditableProfessor(professor);
    setEditedData({
      user_id: professor.user_id,
      first_name: professor.professor_first_name,
      last_name: professor.professor_last_name,
      faculty: professor.professor_faculty,
      branch: professor.professor_branch,
      position: professor.professor_position,
      qualification: professor.professor_qualification,
      gender: professor.professor_gender,
    });
    setDialogVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
// และปรับ handleSaveClick ดังนี้
const handleSaveClick = async () => {
  try {
    // ดึง user_id จาก editedData
    const { user_id, ...updatedData } = editedData;

    // อัปเดตข้อมูลใน state ท้องถิ่น
    setProfessorData((prevData) => {
      return prevData.map((prof) =>
        prof.user_id === user_id ? { ...prof, ...updatedData } : prof
      );
    });

    // อัปเดตข้อมูลในฐานข้อมูล
    await axios.put(`https://project-in-back.vercel.app/api/update-professor/${user_id}`, updatedData);

    // ปิดหน้าต่าง Dialog
    setDialogVisible(false);
  } catch (error) {
    console.error('Error updating user data:', error);
    // จัดการข้อผิดพลาด (แสดงข้อความ, ย้อนกลับการเปลี่ยนแปลง, เป็นต้น)
  }
};


  function EditDialog({ visible, onHide, editedData, onInputChange, onSaveClick }) {
    return (
    <Dialog visible={visible} onHide={onHide} style={{ width: '50%' }}>
      {/* ฟอร์มแก้ไขข้อมูล */}
      <div>
        <label>ชื่อ:</label>
        <input
          type="text"
          name="first_name"
          value={editedData.first_name}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>นามสกุล:</label>
        <input
          type="text"
          name="last_name"
          value={editedData.last_name}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>คณะ:</label>
        <input
          type="text"
          name="faculty"
          value={editedData.faculty}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>สาขา:</label>
        <input
          type="text"
          name="branch"
          value={editedData.branch}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>ตำแหน่งย่อ:</label>
        <input
          type="text"
          name="position"
          value={editedData.position}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>คุณวุฒิ:</label>
        <input
          type="text"
          name="qualification"
          value={editedData.qualification}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>เพศ:</label>
        <input
          type="text"
          name="gender"
          value={editedData.gender}
          onChange={onInputChange}
        />
      </div>
      <button onClick={onSaveClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '40%', marginTop: '50px', backgroundColor: 'green' }} >บันทึก</button>
      </Dialog>
    );
  }
  
  const itemTemplate = (professor) => (
    <div className="p-col-12 professor-item">
      {professorData.length > 0 ? (
      <div className='data_professor'>
        <div>
          <strong><h1>ชื่อ - นามสกุล:</h1></strong>
          <h1>{professor.professor_first_name} {professor.professor_last_name}</h1>
        </div>
        <br/>
        <div>
          <strong><h1>คณะ:</h1></strong>
          <h1>{professor.professor_faculty}</h1>
        </div>
        <br/>
        <div>
          <strong><h1>สาขา :</h1></strong>
          <h1>{professor.professor_branch}</h1>
        </div>
        <br/>
        <div>
          <strong><h1>ตำแหน่งย่อ:</h1></strong>
          <h1>{professor.professor_position}</h1>
        </div>
        <br/>
        <div>
          <strong><h1>คุณวุฒิ :</h1></strong>
          <h1>{professor.professor_qualification}</h1>
        </div>
        <br/>
        <div>
          <strong><h1>เพศ :</h1></strong>
          <h1>{professor.professor_gender}</h1>
        </div>
        <br/>
      </div>
      ) : (
        <p>No results found</p>
      )}
      <button onClick={() => handleEditClick(professor)}>แก้ไขข้อมูลส่วนตัว</button>
    </div>
  );

  return (
    <div style={{ width: '100%', marginLeft: '50px', marginTop: '50px' }}>
      <div className='grid'>
        <div className='col'>
          <DataView value={professorData} itemTemplate={itemTemplate} layout="list" />
        </div>
        <EditDialog
          visible={isDialogVisible}
          onHide={() => setDialogVisible(false)}
          editedData={editedData}
          onInputChange={(e) => handleInputChange(e)}
          onSaveClick={handleSaveClick}
        />
      </div>
    </div>
  );
}

export default Data_professor;
