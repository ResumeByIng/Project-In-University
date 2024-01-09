import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { DataView } from 'primereact/dataview';

function Data_professor() {
  const [professorData, setProfessorData] = useState([]);
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [editableProfessor, setEditableProfessor] = useState(null);
  const [editedData, setEditedData] = useState({});



  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    setProfessorData([userData]);
  }, []);

  const handleEditClick = (professor) => {
    setEditableProfessor(professor);
    setEditedData({
      fullName: `${professor.professor_first_name} ${professor.professor_last_name}`,
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

  /////โปรดปรับปรุงโค้ดตามโครงสร้างข้อมูลและการอัปเดต state ของคุณตามที่คุณจำเป็นต้องการในโปรเจ็คของคุณครับ ถ้าคุณใช้ API เพื่อบันทึกข้อมูลลงในฐานข้อมูล คุณต้องทำการส่งข้อมูลไปยัง API แทนการใช้ setProfessorData ครับ /////
  const handleSaveClick = () => {
    // ทำการบันทึกข้อมูลที่แก้ไข
    // ตัวอย่าง: อัปเดต state ของอาจารย์ที่ถูกแก้ไขใน professorData
    setProfessorData((prevData) => {
      const updatedData = prevData.map((professor) => {
        if (professor.id === editableProfessor.id) {
          return {
            ...professor,
            professor_first_name: editedData.fullName.split(' ')[0],
            professor_last_name: editedData.fullName.split(' ')[1],
            professor_faculty: editedData.faculty,
            professor_branch: editedData.branch,
            professor_position: editedData.position,
            professor_qualification: editedData.qualification,
            professor_gender: editedData.gender,
          };
        }
        return professor;
      });
      return updatedData;
    });
  
    // ปิด Dialog
    setDialogVisible(false);
  };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function EditDialog({ visible, onHide, editedData, onInputChange, onSaveClick }) {
    return (
      <Dialog visible={visible} onHide={onHide} style={{ width: '50%'}}>
        {/* ฟอร์มแก้ไขข้อมูล */}
        <div>
          <label>ชื่อ - นามสกุล:</label>
          <input
            type="text"
            name="fullName"
            value={editedData.fullName}
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
        <button onClick={onSaveClick} style={{  display: 'flex',alignItems: 'center',justifyContent: 'center', marginLeft:'40%',marginTop:'50px',backgroundColor:'green'}} >บันทึก</button>
      </Dialog>
    );
  }
  
  const itemTemplate = (professor) => (
    <div className="p-col-12 professor-item">
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
