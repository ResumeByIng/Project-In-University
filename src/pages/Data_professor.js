import React, { useState, useEffect } from 'react';
import { DataView } from 'primereact/dataview';

function Data_professor() {
  const [professorData, setProfessorData] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    setProfessorData([userData]);
  }, []);

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
    </div>
  );

  return (
    <div style={{ width: '100%', marginLeft: '50px', marginTop: '50px' }}>
      <div className='grid'>
        <div className='col'>
          <DataView value={professorData} itemTemplate={itemTemplate} layout="list" />
        </div>
      </div>
    </div>
  );
}

export default Data_professor;
