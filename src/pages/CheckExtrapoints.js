import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function CheckExtrapoints() {
  const [extrapointsData, setExtrapointsData] = useState([]);

  useEffect(() => {
    // Fetch data from Extrapoints or use existing state from Extrapoints component
    // For simplicity, let's assume you have a function getExtrapointsData() in ExtrapointsService
    // that returns the data.
    // const extrapointsData = ExtrapointsService.getExtrapointsData();
    // setExtrapointsData(extrapointsData);
  }, []);

  return (
    <div style={{ width: '100%', marginLeft: '10px' }}>
      <DataTable value={extrapointsData}>
        <Column field="list" header="ชื่อแบบประเมิน" />
        <Column field="points" header="คะแนน" />
        <Column field="picture" header="รูปภาพ" body={imageBodyTemplate} />
        <Column field="fullName" header="ชื่อ - นามสกุล" />
        <Column field="studentId" header="รหัสนักศึกษา" />
      </DataTable>
    </div>
  );
}

// Function to render image in DataTable
const imageBodyTemplate = (rowData) => {
  return <img src={rowData.picture} alt="รูปภาพ" style={{ width: '50px' }} />;
};

export default CheckExtrapoints;
