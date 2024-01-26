import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { DataView } from 'primereact/dataview';
import axios from 'axios';

function Data_professor() {
  const [professorData, setProfessorData] = useState([]);
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [editableProfessor, setEditableProfessor] = useState(null);
  const [editedData, setEditedData] = useState({});

  // ดึงข้อมูล userData จาก localStorage
  const storedUserData = localStorage.getItem('userData');
  
  // สร้าง state เพื่อเก็บข้อมูล userData
  const [userData, setUserData] = useState(storedUserData ? JSON.parse(storedUserData) : null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ตรวจสอบว่ามี userData ที่ถูกดึงมาจาก localStorage หรือไม่
        if (!userData) {
          console.error('User data not found in localStorage');
          return;
        }

        // ดึงข้อมูลผ่าน path user_id
        const response = await axios.get(`https://project-in-back.vercel.app/api/data/user/${userData.user_id}`);
        const userDataFromApi = response.data[0];

        if (userDataFromApi) {
          setProfessorData([userDataFromApi]);
          setEditedData({
            user_id: userDataFromApi.user_id,
            first_name: userDataFromApi.professor_first_name,
            last_name: userDataFromApi.professor_last_name,
            faculty: userDataFromApi.professor_faculty,
            branch: userDataFromApi.professor_branch,
            position: userDataFromApi.professor_position,
            qualification: userDataFromApi.professor_qualification,
            gender: userDataFromApi.professor_gender,
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [userData]); // ให้ useEffect ทำงานเมื่อ userData มีการเปลี่ยนแปลง

  const handleEditClick = (userData) => {
    setEditableProfessor(userData);
    setEditedData({
      user_id: userData.user_id,
      first_name: userData.professor_first_name,
      last_name: userData.professor_last_name,
      faculty: userData.professor_faculty,
      branch: userData.professor_branch,
      position: userData.professor_position,
      qualification: userData.professor_qualification,
      gender: userData.professor_gender,
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

  const itemTemplate = (userData) => (
    <div className="p-col-12 professor-item">
      {userData ? (
        <div className='data_professor'>
          <div className="column">
            <strong><div>ชื่อ - นามสกุล:</div></strong>
            <div>{userData.first_name} {userData.last_name}</div>
          </div>
          <br/>
          <div className="column">
            <strong><div>คณะ:</div></strong>
            <div>{userData.faculty}</div>
          </div>
          <br/>
          <div className="column">
            <strong><div>สาขา :</div></strong>
            <div>{userData.branch}</div>
          </div>
          <br/>
          <div className="column">
            <strong><div>ตำแหน่งย่อ:</div></strong>
            <div>{userData.position}</div>
          </div>
          <br/>
          <div className="column">
            <strong><div>คุณวุฒิ :</div></strong>
            <div>{userData.qualification}</div>
          </div>
          <br/>
          <div className="column">
            <strong><div>เพศ :</div></strong>
            <div>{userData.gender === 'Male' ? 'ชาย' : 'หญิง'}</div>
          </div>
        </div>
      ) : (
        <p>No results found</p>
      )}
      <button onClick={() => handleEditClick(userData)}>แก้ไขข้อมูลส่วนตัว</button>
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
