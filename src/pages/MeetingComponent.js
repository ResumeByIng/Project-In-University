import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import styles from './Meeting.css';

const MeetingComponent = ({ data }) => {
  return (
    <div style={{ width: '100%', marginLeft: '10px', marginTop: '20px'}}>
      <DataTable value={data} paginator rows={5} style={{fontFamily: 'Kanit, sans-serif'}} >
        <Column header="หัวข้อการประชุม" field="title" />
        <Column header="วันที่" field="date"/>
        <Column header="ห้องที่จัดการประชุม" field="room" />
        <Column header="ตำแหน่ง" field="position" />
        <Column header="วาระในการประชุม" field="agenda" />
      </DataTable>
    </div>
  );
};

export default MeetingComponent;
