import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h2>รายการข้อร้องเรียน</h2>
      <table>
        <thead>
          <tr>
            <th>หัวข้อร้องเรียน</th>
            <th>เนื้อหา</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map(complaint => (
            <tr key={complaint.id}>
              <td>{complaint.complaintType}</td>
              <td>{complaint.complaintText}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CheckComplaint;
