// Meeting.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MeetingComponent from './MeetingComponent';
import styles from './Meeting.css';

// ...

const Meeting = () => {
    const [meetings, setMeetings] = useState([]);
    const [formData, setFormData] = useState({
      title: '',
      date: '',
      room: '',
      position: '',
      agenda: '',
    });
  
    const fetchMeetings = () => {
      axios.get('http://localhost/api/meetings')
        .then(response => {
          setMeetings(response.data);
        })
        .catch(error => {
          console.error('Error fetching meetings:', error);
        });
    };
  
    useEffect(() => {
      fetchMeetings();
    }, []);
  
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log('FormData:', formData); // ตรวจสอบค่าของ formData
        setFormData(prevData => ({
          ...prevData,
          [name]: value,
        }));
      };
      
  
    const handleAddMeeting = () => {
      axios.post('http://localhost/api/meetings', formData)
        .then(response => {
          console.log('Meeting added successfully:', response.data);
          fetchMeetings();
        })
        .catch(error => {
          console.error('Error adding meeting:', error);
        });
  
      // ชั่วคราว comment ส่วน Axios ไว้
      console.log('Meeting added successfully:', formData); // ตรวจสอบค่าที่ได้จากการเพิ่ม Meeting
    };
  
    return (
      <div style={{ width: '100%', marginLeft: '10px',marginTop:'20px' }}>
        {/* แบบฟอร์มเพิ่มข้อมูล */}
        <div className="AddMeeting">
          <label>Title: </label>
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
  
          <label>Date: </label>
          <input type="text" name="date" value={formData.date} onChange={handleInputChange} />
  
          <label>Room: </label>
          <input type="text" name="room" value={formData.room} onChange={handleInputChange} />
  
          <label>Position: </label>
          <input type="text" name="position" value={formData.position} onChange={handleInputChange} />
  
          <label>Agenda: </label>
          <input type="text" name="agenda" value={formData.agenda} onChange={handleInputChange} />
  
          <button onClick={handleAddMeeting}>Add Meeting</button>
        </div>
  
        {/* แสดง Datatable */}
        <div className="AddMeeting" >
        {meetings.length > 0 ? (
          <MeetingComponent data={meetings} />
        ) : (
          <label>No meetings available. Please add a meeting.</label>
        )}
        </div>
      </div>
    );
  };
  
  export default Meeting;
  