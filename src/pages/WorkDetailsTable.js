import React from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

function WorkDetailsTable({ data }) {
  return (
    <DataTable
      style={{
        marginTop: '10px',
        fontFamily: 'Kanit, sans-serif',
      }}
      value={data}
      header="รายละเอียดการทำงาน"
    >
      <Column field="work_place" header="สถานที่ทำงาน" />
      <Column field="salary" header="เงินเดือน" />
      <Column field="work_about" header="ทำงานเกี่ยวกับ" />
    </DataTable>
  );
}

export default WorkDetailsTable;
