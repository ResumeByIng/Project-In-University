import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

const HP_Student = ({ data }) => {
  const [products, setProducts] = useState([]);
  const fetchData = () => {
    // Fetch ข้อมูลข่าวทั้งหมดจาก API endpoint
    axios.get('https://project-in-back.vercel.app/api/get-news')
        .then(response => {
            // หากการดึงข้อมูลสำเร็จ
            setProducts(response.data);
        })
        .catch(error => {
            // หากเกิดข้อผิดพลาดในการดึงข้อมูล
            console.error('Error fetching news:', error);
        });
};

useEffect(() => {
    // เมื่อ component ถูก mount, ให้ดึงข้อมูลข่าวทั้งหมด
    fetchData();
}, []); // ในกรณีนี้, useEffect จะทำงานเมื่อ component ถูก mount เท่านั้น


  return (
    <div style={{ width: '100%', marginLeft: '10px' }}>
      <DataTable value={products} style={{fontFamily: 'Kanit, sans-serif'}}>
            <Column header="หัวข้อข่าว" field="title"></Column>
            <Column header="เนื้อหา" field="content"></Column>
            <Column header="สร้างโดย" field="author"></Column>
            <Column header="สร้างขึ้นเมื่อวันที่" field="date_created"></Column>
        </DataTable>
    </div>
  );
};

export default HP_Student;
