import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

const HP_Student = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://project-in-back.vercel.app/api/get-news');
        const formattedData = response.data.map(newsItem => ({
          ...newsItem,
          date_created: formatDate(newsItem.date_created) // แปลงรูปแบบวันที่
        }));
        setProducts(formattedData);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  // ฟังก์ชันสำหรับแปลงรูปแบบวันที่
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    // เพิ่ม leading zero ในกรณีที่มีเลขเดี่ยว (1-9)
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${day}-${month}-${year}`;
  };

  return (
    <div style={{ width: '100%', marginLeft: '10px' }}>
      <DataTable value={products} style={{ fontFamily: 'Kanit, sans-serif' }}>
        <Column header="หัวข้อข่าว" field="title" />
        <Column header="เนื้อหา" field="content" />
        <Column style={{ width: '200px'}} header="สร้างโดย" field="author" />
        <Column style={{ width: '150px'}} header="สร้างขึ้นเมื่อวันที่" field="date_created" />
      </DataTable>
    </div>
  );
};

export default HP_Student;
