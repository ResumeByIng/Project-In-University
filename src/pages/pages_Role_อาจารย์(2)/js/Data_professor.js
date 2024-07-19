import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import axios from 'axios';

function Data_professor() {
  const [userData, setUserData] = useState(null);
  const [professorData, setProfessorData] = useState([]);
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [editableProfessor, setEditableProfessor] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // ดึงข้อมูล userData จาก localStorage
  const storedUserData = localStorage.getItem('userData');

  useEffect(() => {
    setUserData(storedUserData ? JSON.parse(storedUserData) : null);
  }, [storedUserData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userData) {
          console.error('User data not found in localStorage');
          return;
        }

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
  }, [userData]);

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
    setIsEditing(true); // เริ่มแก้ไขข้อมูล
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
      const { user_id, ...updatedData } = editedData;

      setProfessorData((prevData) => {
        return prevData.map((prof) =>
          prof.user_id === user_id ? { ...prof, ...updatedData } : prof
        );
      });

      await axios.put(`https://project-in-back.vercel.app/api/update-professor/${user_id}`, updatedData);

      setDialogVisible(false);
      setIsEditing(false); // เมื่อบันทึกแล้วให้หยุดแก้ไขข้อมูล
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div style={{ width: '100%',height:'100%', marginLeft: '20px', marginTop: '50px',marginRight:'20px' }}>
      <div className='grid'>
        <div className='col'>
          <DataTable style={{ fontFamily: 'Kanit, sans-serif',fontSize:'20px' }} value={professorData}>
            <Column style={{ width: '250px'}} header="ชื่อ - นามสกุล" body={(rowData) => `${rowData.first_name} ${rowData.last_name}`} />
            <Column style={{ width: '250px'}}header="คณะ" field="faculty" />
            <Column style={{ width: '250px'}} header="สาขา" field="branch" />
            <Column style={{ width: '150px'}}header="ตำแหน่งย่อ" field="position" />
            <Column header="คุณวุฒิ" field="qualification" />
            <Column header="เพศ" body={(rowData) => (rowData.gender === 'Male' ? 'ชาย' : 'หญิง')} />
          </DataTable>
        </div>
        <Dialog visible={isDialogVisible} onHide={() => setDialogVisible(false)} style={{ width: '50%' }}>
          <div>
            <label>ชื่อ:</label><br/>
            <input
              type="text"
              name="first_name"
              value={editedData.first_name}
              onChange={handleInputChange}
              disabled={!isEditing} // ทำให้ input ไม่สามารถแก้ไขได้เมื่อไม่ได้กำลังแก้ไข
            />
          </div>
          <div>
            <label>นามสกุล:</label><br/>
            <input
              type="text"
              name="last_name"
              value={editedData.last_name}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>คณะ:</label><br/>
              <select name="faculty" value={editedData.faculty} onChange={handleInputChange} disabled={!isEditing}
                style={{
                  width: '440px',
                  height: '30px',
                  marginLeft: '220px',
                  marginTop: '20px',
                  marginBottom: '10px',
                  textAlign: 'center',
                  fontSize: '20px',
                  fontFamily: 'Kanit, sans-serif',
                  border: '0.5px solid #000'
                        }}>
                <option value="">-- เลือกคณะ --</option>
                <option value="วิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม">วิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม</option>
                {/* เพิ่มคณะอื่นๆ ตามต้องการ */}
              </select>
          </div>
          <div>
  <label>สาขา:</label><br/>
          <select name="branch" value={editedData.branch} onChange={handleInputChange} disabled={!isEditing}
            style={{
              width: '440px',
              height: '30px',
              marginLeft: '220px',
              marginTop: '10px',
              marginBottom: '10px',
              textAlign: 'center',
              fontSize: '20px',
              fontFamily: 'Kanit, sans-serif',
              border: '0.5px solid #000'
                  }}>
          <option value="">-- เลือกสาขา --</option>
          <option value="วิศวกรรมคอมพิวเตอร์">วิศวกรรมคอมพิวเตอร์</option>
          {/* เพิ่มสาขาอื่นๆ ตามต้องการ */}
          </select>
          </div>
          <div>
            <label>ตำแหน่งย่อ:</label>
            <input
              type="text"
              name="position"
              value={editedData.position}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>คุณวุฒิ:</label><br/>
              <InputTextarea
                rows={5}
                cols={30} // จำนวนคอลัมน์เริ่มต้น
                autoResize // ให้ขนาดข้อความปรับอัตโนมัติ
                name="qualification"
                value={editedData.qualification}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{fontFamily: 'Kanit, sans-serif',marginLeft:'220px',width:'440px',border: '1px solid',color:'#00000',fontSize:'20px'}}
              />
          </div>
          <div>
              <label>เพศ:</label>
                <select name="gender" value={editedData.gender} onChange={handleInputChange} disabled={!isEditing}
                  style={{
                    width: '440px',
                    height: '30px',
                    marginLeft: '170px',
                    marginTop: '30px',
                    marginBottom: '10px',
                    textAlign: 'center',
                    fontSize: '20px',
                    fontFamily: 'Kanit, sans-serif',
                    border: '0.5px solid #000',}}
                >
                  <option value="ชาย">Male</option>
                  <option value="หญิง">Female</option>
              </select>
            </div>
          {isEditing && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
                  <button onClick={handleSaveClick} style={{ width: '200px', backgroundColor: 'green' }}>บันทึก</button>
            </div>
          )}
        </Dialog>
      </div>
      <button raised severity="success" style={{ background:'green', width: '200px', marginTop: '10px' }} onClick={() => handleEditClick(userData)}>
        แก้ไขข้อมูลส่วนตัว
      </button>
    </div>
  );
}

export default Data_professor;
