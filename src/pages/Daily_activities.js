import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import './Daily_activities.css';

function App() {
  const [date, setDate] = useState(new Date());
  const [activities, setActivities] = useState({});
  const [newActivityTitle, setNewActivityTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createActivity = () => {
    const newActivities = { ...activities };
    const dateKey = date.toISOString().split('T')[0];

    if (newActivities[dateKey]) {
      newActivities[dateKey].push(newActivityTitle);
    } else {
      newActivities[dateKey] = [newActivityTitle];
    }

    setActivities(newActivities);
    setNewActivityTitle('');
    closeModal();
  };

  return (
    <div className="daily-activities-container">
    <h1>กิจกรรมประจำเดือน</h1>
    <div className="calendar-container">
      <Calendar onChange={onChange} value={date} />
      <div className="day-activities">
          <h2>กิจกรรมประจำวัน ({date.toLocaleDateString('en-GB')})</h2>
          {activities[date.toISOString().split('T')[0]] &&
            activities[date.toISOString().split('T')[0]].map((activity, index) => (
              <p key={index}>- {activity}</p>
            ))}
        </div>
      </div>
    <div>
      <button onClick={openModal}>สร้างกิจกรรม</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Create Activity"
        style={{
            content: {
              width: '50%',
              height: '25%',
              margin: 'auto',
            }
          }}
      >
        <h2>สร้างกิจกรรม</h2>
        <input
          type="text"
          placeholder="หัวข้อกิจกรรม"
          value={newActivityTitle}
          onChange={(e) => setNewActivityTitle(e.target.value)}
        />
        <br/>
        <div className='buttons-container'>
        <button onClick={createActivity}>บันทึก</button>
        <button onClick={closeModal}>ปิด</button>
        </div>
      </Modal>
    </div>
  </div>
);
}

export default App;
