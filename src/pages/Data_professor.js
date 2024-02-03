import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';

function Data_professor() {
  const [userData, setUserData] = useState(null);
  const [professorData, setProfessorData] = useState([]);
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [editableProfessor, setEditableProfessor] = useState(null);
  const [editedData, setEditedData] = useState({});

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
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  function EditDialog({ visible, onHide, editedData, onInputChange, onSaveClick }) {
    return (
      <Dialog visible={visible} onHide={onHide} style={{ width: '50%' }}>
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
        <button onClick={onSaveClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '40%', marginTop: '50px', backgroundColor: 'green' }}>บันทึก</button>
      </Dialog>
    );
  }

  const itemTemplate = (userData) => (
    <div className="p-col-12 professor-item">
      {userData ? (
        <div className='data_professor'>
          <div className="column">
            <strong><h1>ชื่อ - นามสกุล:</h1></strong>
            <h1>{userData.first_name} {userData.last_name}</h1>
          </div>
          <br/>
          <div className="column">
            <strong><h1>คณะ:</h1></strong>
            <h1>{userData.faculty}</h1>
          </div>
          <br/>
          <div className="column">
            <strong><h1>สาขา :</h1></strong>
            <h1>{userData.branch}</h1>
          </div>
          <br/>
          <div className="column">
            <strong><h1>ตำแหน่งย่อ:</h1></strong>
            <h1>{userData.position}</h1>
          </div>
          <br/>
          <div className="column">
            <strong><h1>คุณวุฒิ :</h1></strong>
            <h1>{userData.qualification}</h1>
          </div>
          <br/>
          <div className="column">
            <strong><h1>เพศ :</h1></strong>
            <h1>{userData.gender === 'Male' ? 'ชาย' : 'หญิง'}</h1>
          </div>
        </div>
      ) : (
        <p>No results found</p>
      )}
      <br/><br/>
    </div>
  );

  return (
    <div style={{ width: '100%', marginLeft: '50px', marginTop: '50px' }}>
      <div className='grid'>
        <div className='col'>
          <DataTable style={{ fontFamily: 'Kanit, sans-serif' }} value={professorData}>
            <Column header="ชื่อ - นามสกุล" body={(rowData) => `${rowData.first_name} ${rowData.last_name}`} />
            <Column header="คณะ" field="faculty" />
            <Column header="สาขา" field="branch" />
            <Column header="ตำแหน่งย่อ" field="position" />
            <Column header="คุณวุฒิ" field="qualification" />
            <Column header="เพศ" body={(rowData) => (rowData.gender === 'Male' ? 'ชาย' : 'หญิง')} />
          </DataTable>
        </div>
        <EditDialog
          visible={isDialogVisible}
          onHide={() => setDialogVisible(false)}
          editedData={editedData}
          onInputChange={(e) => handleInputChange(e)}
          onSaveClick={handleSaveClick}
        />
      </div>
      <button style={{ width: '200px', marginTop: '10px' }} onClick={() => handleEditClick(userData)}>
        แก้ไขข้อมูลส่วนตัว
      </button>
    </div>
  );
}

export default Data_professor;
