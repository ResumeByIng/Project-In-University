import React, { useState, useRef } from 'react';
import MeetingComponent from './MeetingComponent';
import { Toast } from 'primereact/toast';

const Meeting = () => {
  const [meetings, setMeetings] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    room: '',
    position: '',
    agenda: '',
  });

  const toast = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'date') {
      const parts = value.split('/');
      const formattedDate = parts.length === 3 ? `${parts[1]}/${parts[0]}/${parts[2]}` : value;

      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedDate,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    // ตรวจสอบและลบ class 'p-invalid' ของ input ทุกตัวทุกครั้งที่มีการเปลี่ยนแปลงใน input
    const inputElements = document.querySelectorAll('.AddMeeting input');
    inputElements.forEach((input) => {
      if (input.value.trim() !== '') {
        input.classList.remove('p-invalid');
      }
    });
  };

  const isFormDataValid = () => {
    let isValid = true;

    // ตรวจสอบและเพิ่ม class 'p-invalid' ของ input ทุกตัวที่ไม่มีข้อมูล
    const inputElements = document.querySelectorAll('.AddMeeting input');
    inputElements.forEach((input) => {
      if (input.value.trim() === '') {
        input.classList.add('p-invalid');
        isValid = false;
      }
    });

    return isValid;
  };

  const handleAddMeeting = () => {
    if (!isFormDataValid()) {
      toast.current.show({ severity: 'error', summary: 'กรุณากรอกข้อมูลให้ครบถ้วน', life: 3000 });
      return;
    }

    const newMeeting = {
      title: formData.title,
      date: formData.date,
      room: formData.room,
      position: formData.position,
      agenda: formData.agenda,
    };

    setMeetings([...meetings, newMeeting]);

    setFormData({
      title: '',
      date: '',
      room: '',
      position: '',
      agenda: '',
    });

    toast.current.show({ severity: 'success', summary: 'Meeting added successfully', life: 3000 });
  };

  return (
    <div style={{ width: '100%', marginLeft: '10px', marginTop: '20px' }}>
      {/* แบบฟอร์มเพิ่มข้อมูล */}
      <div className="AddMeeting">
        <label>Title: </label>
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="หัวข้อการประชุม" />

        <label>Date: </label>
        <input type="date" name="date" value={formData.date} onChange={handleInputChange} placeholder="วัน/เดือน/ปี" />

        <label>Room: </label>
        <input type="text" name="room" value={formData.room} onChange={handleInputChange} placeholder="ห้องที่จัดการประชุม" />

        <label>Position: </label>
        <input type="text" name="position" value={formData.position} onChange={handleInputChange} placeholder="ตำแหน่ง" />

        <label>Agenda: </label>
        <input type="text" name="agenda" value={formData.agenda} onChange={handleInputChange} placeholder="วาระในการประชุม" />

        <button onClick={handleAddMeeting}>Add Meeting</button>
      </div>

      {/* แสดง Datatable */}
      <div className="AddMeeting">
        {meetings.length > 0 ? (
          <MeetingComponent data={meetings} />
        ) : (
          <label>ไม่มีการประชุม กรุณาเพิ่มการประชุม</label>
        )}
      </div>

      {/* Toast */}
      <Toast ref={toast} />
    </div>
  );
};

export default Meeting;