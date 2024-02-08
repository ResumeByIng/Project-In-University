import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function CheckComplaint() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios.get('https://project-in-back.vercel.app/complaints')
      .then(response => {
        setComplaints(response.data);
      })
      .catch(error => {
        console.error('Error fetching complaints:', error);
      });
  }, []);

  return (
    <div style={{ width: '100%', marginLeft: '10px', marginTop: '10px', color: 'GrayText',fontFamily: 'Kanit, sans-serif' }}>
      <h2>รายการข้อร้องเรียน</h2>
      <DataTable style={{ alignItems:'center',fontFamily: 'Kanit, sans-serif' }} value={complaints}>
        <Column field="complaintType" header="หัวข้อที่ร้องเรียน"style={{width: '150px'}}/>
        <Column field="complaintText" header="เนื้อหา"/>
      </DataTable>
    </div>
  );
}

export default CheckComplaint;
