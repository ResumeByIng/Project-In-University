import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const HP_Student = ({ data }) => {
  return (
    <div style={{ width: '100%', marginLeft: '10px' }}>
      <DataTable value={data}>
        <Column header="ลำดับ" field="code"></Column>
        <Column header="หัวข้อข่าว" field="headlines"></Column>
        <Column header="สร้างโดย" field="name"></Column>
        <Column header="สร้างขึ้นเมื่อวันที่" field="quantity"></Column>
        <Column header="ยอดวิว" field="visit"></Column>
        <Column header="ตอบกลับ" field="reply"></Column>
      </DataTable>
    </div>
  );
};

export default HP_Student;
