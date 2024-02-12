import React, { useState } from 'react'

import 'primereact/resources/themes/saga-blue/theme.css'; // เลือก theme ตามที่คุณต้องการ
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Panel } from 'primereact/panel';
// import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import 'react-datepicker/dist/react-datepicker.css';
import { ScrollPanel } from 'primereact/scrollpanel';
import axios from 'axios';

function TQF7_0() {

  const [dataTqf7_0, setDateTqf7_0] = useState({
    ประจำปีการศึกษา:"2565",
    เริ่มวันที่:"",
    สิ้นสุดวันที่:"",
    ชื่อหลักสูตรภาษาไทย:"วิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร",
    ชื่อหลักสูตรภาษาอังกฤษ:"Bachelor of Engineering Program in Computer Engineering",
    ชื่อหลักสูตรย่อ:"วศ.บ.(วิศวกรรมคอมพิวเตอร์)",
    คณะ:"คณะเทคโนโลยีอุตสาหกรรม",
    มหาวิทยาลัย:"มหาวิทยาลัยราชภัฏสวนสุนันทา",
    หลักสูตรปรับปรุง:"2563",
    ปีเกณฑ์มาตรฐานหลักสูตร:"2558",
    บทสรุปผู้บริหาร:"",
    คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_1:"",
    คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_2:"",
    คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_3:"",
    คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_4:"",
    คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_5:"",
    คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_6:"",
    ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_1:"",
    ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_2:"",
    ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_3:"",
    ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_4:"",
    ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_5:"",
    ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_6:"",
    หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_1:"",
    หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_2:"",
    หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_3:"",
    หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_4:"",
    หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_5:"",
    หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_6:"",
    เฉลี่ยรวมทุกตัวบ่งชี้ของทุกองค์ประกอบ_คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ:"",
    เฉลี่ยรวมทุกตัวบ่งชี้ของทุกองค์ประกอบ_ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ:"",
    เฉลี่ยรวมทุกตัวบ่งชี้ของทุกองค์ประกอบ_หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ:"",
    คำนำ:"",
    ลงชื่อคำนำ:"",
    ประวัติความเป็นมาของหลักสูตร:"",
    จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_1 : "",
    จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_2 : "",
    จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_1 : "",
    จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_2 : "",
    จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_1 : "",
    จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_2 : "",
    จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_1 : "",
    จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_2 : "",
    จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_3 : "",
    จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_4 : "",
    จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_6 : "",
    องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_1 : "",
    องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_2 : "",
    องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_1 : "",
    องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_2 : "",
    องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_1 : "",
    องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_2 : "",
    องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_1 : "",
    องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_2 : "",
    องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_3 : "",
    องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_4 : "",
    องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_6 : "",
    การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_1 : "",
    การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_2 : "",    
    การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_1 : "",
    การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_2 : "",
    การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_1 : "",
    การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_2 : "",
    การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_1 : "",
    การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_2 : "",
    การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_3 : "",
    การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_4 : "",
    การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_6 : "",
    ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_1 : "",
    ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_2 : "",
    ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_1 : "",
    ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_2 : "",
    ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_1 : "",
    ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_2 : "",
    ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_1 : "",
    ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_2 : "",
    ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_3 : "",
    ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_4 : "",
    ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_6 : "",
  });

  // (generateDocument) แก้ไข docx
  const PizZip = require('pizzip');
  const Docxtemplater = require('docxtemplater');
  
  const handleGenerateDocx = async (e) => {
    e.preventDefault();
    try {
      // เรียก API เพื่อดึงข้อมูลเทมเพลต DOCX
      const response = await axios.get('https://project-in-back.vercel.app/api/gettqf7', {
        params: { id: '1' },
        responseType: 'arraybuffer',
      });
      const userFormData = dataTqf7_0;  // ใช้ dataTqf7_0 ที่ได้จาก state แทน doc.getData()
  
      const zip = new PizZip(response.data);
      doc = new Docxtemplater();
      doc.loadZip(zip);
      doc.setOptions({ linebreaks: true });
  
      doc.setData(userFormData);
  
      doc.render();
  
      const content = doc.getZip().generate({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = `คำนำ มคอ.7.docx`;
      link.click();
    } catch (error) {
      console.error('Error generating document:', error);
    }
  };
  let doc;
  const handleChange = (event, property) => {
    setDateTqf7_0((prevData) => ({
      ...prevData,
      [property]: event.target.value,
    }));
  
    if (doc) {
      doc.setData(dataTqf7_0);
    }
  };

  return (
    <form onSubmit={handleGenerateDocx}  >
    <div style={{ width: '1600px',marginLeft: '10px'}}>
      <ScrollPanel style={{ width: '100%', height: '950px' }}>
      <Panel style={{ fontFamily: 'Kanit, sans-serif' }} header="สร้างผลการดำเนินงาน">
        {/***********************************************/}
      <div className="field col-12 md:col-4">
        <div style={{ marginBottom: '10px' }}>
          <label>เริ่มวันที่</label>
          <InputText
          value={dataTqf7_0.เริ่มวันที่}
          onChange={(e) => handleChange(e, 'เริ่มวันที่')}
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' ,fontFamily: 'Kanit, sans-serif'}}
          />
          <label>ถึงวันที่</label>
          <InputText
          value={dataTqf7_0.สิ้นสุดวันที่}
          onChange={(e) => handleChange(e, 'สิ้นสุดวันที่')}
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' ,fontFamily: 'Kanit, sans-serif'}}
          />
        </div>
       </div>
        <br/>
        {/***********************************************/}
        <div style={{ marginBottom: '10px' }}>
          <label>ประจำปีการศึกษา</label>
          <InputText
          value={dataTqf7_0.ประจำปีการศึกษา} 
          onChange={(e) => handleChange(e, 'ประจำปีการศึกษา')} 
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc',fontFamily: 'Kanit, sans-serif' }}
          />
          
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel style={{ fontFamily: 'Kanit, sans-serif' }} header="เลือกหลักสูตร">
        {/***********************************************/}
        <div style={{ marginBottom: '20px' }}>
          <label>ชื่อหลักสูตร(ภาษาไทย)</label>
          <InputText
          value={dataTqf7_0.ชื่อหลักสูตรภาษาไทย} 
          onChange={(e) => handleChange(e, 'ชื่อหลักสูตรภาษาไทย')} 
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc',fontFamily: 'Kanit, sans-serif' }}
          />
          
          <label>หลักสูตรปรับปรุงปี</label>
          <InputText
          value={dataTqf7_0.หลักสูตรปรับปรุง} 
          onChange={(e) => handleChange(e, 'หลักสูตรปรับปรุง')} 
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc',fontFamily: 'Kanit, sans-serif'}}
          />
        </div>
        {/***********************************************/}
        <div style={{ marginBottom: '20px' }}>
          <label>ชื่อหลักสูตร(ภาษาอังกฤษ)</label>
          <InputText 
          value={dataTqf7_0.ชื่อหลักสูตรภาษาอังกฤษ}
          onChange={(e)=> handleChange(e, 'ชื่อหลักสูตรภาษาอังกฤษ')}
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc',fontFamily: 'Kanit, sans-serif' }}
          />
          <label>ชื่อย่อ</label>
          <InputText
           value={dataTqf7_0.ชื่อหลักสูตรย่อ}
           onChange={(e)=> handleChange(e, 'ชื่อหลักสูตรย่อ')}
           style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc',fontFamily: 'Kanit, sans-serif' }}
          />
        </div>
        {/***********************************************/}
        <div style={{ marginBottom: '20px' }}>
          <label>คณะ</label>
          <InputText 
          value={dataTqf7_0.คณะ}
          onChange={(e)=> handleChange(e, 'คณะ')}
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc',fontFamily: 'Kanit, sans-serif' }}
          />
          <label>มหาวิทยาลัย</label>
          <InputText 
          value={dataTqf7_0.มหาวิทยาลัย}
          onChange={(e)=> handleChange(e, 'มหาวิทยาลัย')}
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc',fontFamily: 'Kanit, sans-serif' }}
          />
        </div>
        {/***********************************************/}
        <div style={{ marginBottom: '20px' }}>
          <label>ปีเกณฑ์มาตรฐานหลักสูตร</label>
          <InputText
          value={dataTqf7_0.ปีเกณฑ์มาตรฐานหลักสูตร}
          onChange={(e)=> handleChange(e, 'ปีเกณฑ์มาตรฐานหลักสูตร')}
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc',fontFamily: 'Kanit, sans-serif' }}
          />
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel style={{ fontFamily: 'Kanit, sans-serif' }} header="บทสรุปผู้บริหาร">
        {/***********************************************/}
        <div style={{ display: 'flex', alignItems: 'flex-start'}}>
            <InputTextarea 
            autoResize 
            rows={4} 
            cols={80}  
            value={dataTqf7_0.บทสรุปผู้บริหาร}
            onChange={(e)=> handleChange(e, 'บทสรุปผู้บริหาร')}
            style={{ fontFamily: 'Kanit, sans-serif' }}
            />
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel style={{ fontFamily: 'Kanit, sans-serif' }} header="สรุปผลการประเมินตนเองตามองค์ประกอบ">
        {/***********************************************/}
        <div>
          <table className='TA'>
            <thead>
              <tr>
                <th className='TH'>องค์ประกอบ</th>
                <th className='TH'>คะแนนการประเมินเฉลี่ย</th>
                <th className='TH'>ระดับคุณภาพ</th>
                <th className='TH'>หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='TD'>องค์ประกอบที่ 1</td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_1} onChange={(e) => handleChange(e, 'คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_1')}></InputText></td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_1} onChange={(e) => handleChange(e, 'ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_1')}></InputText></td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_1} onChange={(e) => handleChange(e, 'หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_1')}></InputText></td>
              </tr>
              <tr>
                <td className='TD'>องค์ประกอบที่ 2</td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_2} onChange={(e) => handleChange(e, 'คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_2')}></InputText></td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_2} onChange={(e) => handleChange(e, 'ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_2')}></InputText></td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_2} onChange={(e) => handleChange(e, 'หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_2')}></InputText></td>
              </tr>
              <tr>
                <td className='TD'>องค์ประกอบที่ 3</td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_3} onChange={(e) => handleChange(e, 'คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_3')}></InputText></td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_3} onChange={(e) => handleChange(e, 'ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_3')}></InputText></td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_3} onChange={(e) => handleChange(e, 'หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_3')}></InputText></td>
              </tr>
              <tr>
                <td className='TD'>องค์ประกอบที่ 4</td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_4} onChange={(e) => handleChange(e, 'คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_4')}></InputText></td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_4} onChange={(e) => handleChange(e, 'ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_4')}></InputText></td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_4} onChange={(e) => handleChange(e, 'หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_4')}></InputText></td>
              </tr>
              <tr>
                <td className='TD'>องค์ประกอบที่ 5</td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_5} onChange={(e) => handleChange(e, 'คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_5')}></InputText></td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_5} onChange={(e) => handleChange(e, 'ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_5')}></InputText></td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_5} onChange={(e) => handleChange(e, 'หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_5')}></InputText></td>
              </tr>
              <tr>
                <td className='TD'>องค์ประกอบที่ 6</td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_6} onChange={(e) => handleChange(e, 'คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ_6')}></InputText></td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_6} onChange={(e) => handleChange(e, 'ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ_6')}></InputText></td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_6} onChange={(e) => handleChange(e, 'หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ_6')}></InputText></td>
              </tr>
              <tr>
                <td className='TD'>เฉลี่ยรวมทุกตัวบ่งชี้ของทุกองค์ประกอบ</td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.เฉลี่ยรวมทุกตัวบ่งชี้ของทุกองค์ประกอบ_คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ} onChange={(e) => handleChange(e, 'เฉลี่ยรวมทุกตัวบ่งชี้ของทุกองค์ประกอบ_คะแนนการประเมินเฉลี่ย_สรุปผลการประเมินตนเองตามองค์ประกอบ')}></InputText></td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.เฉลี่ยรวมทุกตัวบ่งชี้ของทุกองค์ประกอบ_ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ} onChange={(e) => handleChange(e, 'เฉลี่ยรวมทุกตัวบ่งชี้ของทุกองค์ประกอบ_ระดับคุณภาพ_สรุปผลการประเมินตนเองตามองค์ประกอบ')}></InputText></td>
                <td className='TD'><InputText autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.เฉลี่ยรวมทุกตัวบ่งชี้ของทุกองค์ประกอบ_หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ} onChange={(e) => handleChange(e, 'เฉลี่ยรวมทุกตัวบ่งชี้ของทุกองค์ประกอบ_หมายเหตุ_สรุปผลการประเมินตนเองตามองค์ประกอบ')}></InputText></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel style={{ fontFamily: 'Kanit, sans-serif' }} header="คำนำ">
        {/***********************************************/}
        <div style={{ display: 'flex', alignItems: 'flex-start',marginBottom: '20px' ,fontFamily: 'Kanit, sans-serif'}}>
        <label>คำนำ</label>
        <InputTextarea 
        autoResize 
        rows={4} 
        cols={80}  
        value={dataTqf7_0.คำนำ} 
        onChange={(e)=> handleChange(e, 'คำนำ')}
        style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' ,fontFamily: 'Kanit, sans-serif'}}
        />
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start',marginBottom: '20px' }}>
        <label>ลงชื่อ</label>
        <InputTextarea 
        autoResize 
        rows={4} 
        cols={80}  
        value={dataTqf7_0.ลงชื่อคำนำ}
        onChange={(e)=> handleChange(e, 'ลงชื่อคำนำ')}
        style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' ,fontFamily: 'Kanit, sans-serif'}}
        />
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel style={{ fontFamily: 'Kanit, sans-serif' }} header="ประวัติความเป็นมาของหลักสูตร">
        {/***********************************************/}
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <InputTextarea 
          autoResize 
          rows={4} 
          cols={80}  
          value={dataTqf7_0.ประวัติความเป็นมาของหลักสูตร}
          onChange={(e)=> handleChange(e, 'ประวัติความเป็นมาของหลักสูตร')}
          style={{ fontFamily: 'Kanit, sans-serif' }}
        />
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel style={{ fontFamily: 'Kanit, sans-serif' }} header="ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา">
        {/***********************************************/}
        <div>
          <table className='TA'>
            <thead>
              <tr>
                <th className='TH'>จุดแข็ง แนวทางเสริมจุดแข็ง จุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ ปีการศึกษา 2564</th>
                <th className='TH'>องค์ประกอบ/ตัวบ่งชี้/เกณฑ์การประเมิน</th>
                <th className='TH'>การดำเนินการ/กิจกรรม/โครงการ</th>
                <th className='TH'>ผลการดำเนินงาน</th>
              </tr>
            </thead>
            <tbody>
            องค์ประกอบที่ 1 การกำกับมาตรฐาน
              <tr>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_1} onChange={(e) => handleChange(e, 'จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_1')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_1} onChange={(e) => handleChange(e, 'องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_1')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_1} onChange={(e) => handleChange(e, 'การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_1')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_1} onChange={(e) => handleChange(e, 'ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_1')}></InputTextarea></td>
              </tr>
            องค์ประกอบที่ 2  บัณฑิต
              <tr>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_2} onChange={(e) => handleChange(e, 'จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_2')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_2} onChange={(e) => handleChange(e, 'องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_2')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_2} onChange={(e) => handleChange(e, 'การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_2')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_2} onChange={(e) => handleChange(e, 'ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_2')}></InputTextarea></td>
              </tr>
            องค์ประกอบที่ 3 นักศึกษา
              <tr>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_1} onChange={(e) => handleChange(e, 'จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_1')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_1} onChange={(e) => handleChange(e, 'องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_1')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_1} onChange={(e) => handleChange(e, 'การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_1')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_1} onChange={(e) => handleChange(e, 'ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_1')}></InputTextarea></td>
              </tr>
              <tr>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_2} onChange={(e) => handleChange(e, 'จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_2')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_2} onChange={(e) => handleChange(e, 'องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_2')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_2} onChange={(e) => handleChange(e, 'การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_2')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_2} onChange={(e) => handleChange(e, 'ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_3_2')}></InputTextarea></td>
              </tr>
            องค์ประกอบที่ 4 อาจารย์
              <tr>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_1} onChange={(e) => handleChange(e, 'จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_1')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_1} onChange={(e) => handleChange(e, 'องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_1')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_1} onChange={(e) => handleChange(e, 'การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_1')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_1} onChange={(e) => handleChange(e, 'ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_1')}></InputTextarea></td>
              </tr>
              <tr>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_2} onChange={(e) => handleChange(e, 'จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_2')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_2} onChange={(e) => handleChange(e, 'องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_2')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_2} onChange={(e) => handleChange(e, 'การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_2')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_2} onChange={(e) => handleChange(e, 'ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_4_2')}></InputTextarea></td>
              </tr>
            องค์ประกอบที่ 5 หลักสูตร การเรียนการสอน  การประเมินผู้เรียน
              <tr>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_1} onChange={(e) => handleChange(e, 'จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_1')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_1} onChange={(e) => handleChange(e, 'องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_1')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_1} onChange={(e) => handleChange(e, 'การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_1')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_1} onChange={(e) => handleChange(e, 'ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_1')}></InputTextarea></td>
              </tr>
              <tr>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_2} onChange={(e) => handleChange(e, 'จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_2')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_2} onChange={(e) => handleChange(e, 'องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_2')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_2} onChange={(e) => handleChange(e, 'การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_2')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_2} onChange={(e) => handleChange(e, 'ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_2')}></InputTextarea></td>
              </tr>
              <tr>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_3} onChange={(e) => handleChange(e, 'จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_3')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_3} onChange={(e) => handleChange(e, 'องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_3')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_3} onChange={(e) => handleChange(e, 'การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_3')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_3} onChange={(e) => handleChange(e, 'ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_3')}></InputTextarea></td>
              </tr> 
              <tr>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_4} onChange={(e) => handleChange(e, 'จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_4')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_4} onChange={(e) => handleChange(e, 'องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_4')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_4} onChange={(e) => handleChange(e, 'การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_4')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_4} onChange={(e) => handleChange(e, 'ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_5_4')}></InputTextarea></td>
              </tr>
            6. สิ่งสนับสนุนการเรียนรู้
              <tr>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_6} onChange={(e) => handleChange(e, 'จุดแข็งแนวทางเสริมจุดแข็งจุดที่ควรพัฒนาและข้อเสนอแนะของคณะกรรมการประเมินฯ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_6')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_6} onChange={(e) => handleChange(e, 'องค์ประกอบตัวบ่งชี้เกณฑ์การประเมิน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_6')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_6} onChange={(e) => handleChange(e, 'การดำเนินการกิจกรรมโครงการ_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_6')}></InputTextarea></td>
                <td className='TD'><InputTextarea autoResize style={{width:'100%',fontFamily: 'Kanit, sans-serif'}} value = {dataTqf7_0.ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_6} onChange={(e) => handleChange(e, 'ผลการดำเนินงาน_การกำกับมาตรฐาน_ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา_6')}></InputTextarea></td>
              </tr>
            </tbody>
          </table>
          <br/><br/>
          <Button type="submit" style={{ marginLeft: '40%' ,fontFamily: 'Kanit, sans-serif'}} label="ยืนยัน" onClick={handleGenerateDocx} />
        </div>
        {/***********************************************/}
      </Panel>
      </ScrollPanel>
    </div>
    </form>
  )
}

export default TQF7_0
