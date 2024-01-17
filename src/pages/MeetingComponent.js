import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const MeetingComponent = () => {
  const [meetings, setMeetings] = useState([]);

  const addMeeting = () => {
    // ทำสิ่งที่คุณต้องการเพื่อเพิ่มการประชุม
    // เช่น เรียก API, จัดการ state ใหม่, etc.

    // ตัวอย่างเพิ่ม meeting ดังนี้
    const newMeeting = {
      title: 'New Meeting',
      date: '2024-01-17',
      room: 'Meeting Room A',
      position: 'Manager',
      agenda: 'Discussion'
    };

    setMeetings([...meetings, newMeeting]);
  };

  return (
    <div>
      <button onClick={addMeeting}>Add Meeting</button>

      <DataTable value={meetings}>
        <Column header="หัวข้อการประชุม" field="title" />
        <Column header="วันที่" field="date" />
        <Column header="ห้องที่จัดการประชุม" field="room" />
        <Column header="ตำแหน่ง" field="position" />
        <Column header="วาระในการประชุม" field="agenda" />
      </DataTable>
    </div>
  );
};

export default MeetingComponent;
