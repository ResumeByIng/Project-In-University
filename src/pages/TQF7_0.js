import React, { useRef, useState } from 'react'

import 'primereact/resources/themes/saga-blue/theme.css'; // เลือก theme ตามที่คุณต้องการ
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Panel } from 'primereact/panel';
// import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import 'react-datepicker/dist/react-datepicker.css';
import { ScrollPanel } from 'primereact/scrollpanel';
import TQF7_0123 from '../data/TQF1-2-3';
import moment from 'moment-timezone';
import axios from 'axios';

function TQF7_0() {

  const [dataTqf7_0, setDateTqf7_0] = useState({
        ประจำปีการศึกษา:"2565",
        เริ่มวันที่:" ",
        สิ้นสุดวันที่:" ",
        ชื่อหลักสูตรภาษาไทย:"วิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร",
        ชื่อหลักสูตรภาษาอังกฤษ:"Bachelor of Engineering Program in Computer Engineering",
        ชื่อหลักสูตรย่อ:"วศ.บ.(วิศวกรรมคอมพิวเตอร์)",
        คณะ:"คณะเทคโนโลยีอุตสาหกรรม",
        มหาวิทยาลัย:"มหาวิทยาลัยราชภัฏสวนสุนันทา",
        หลักสูตรปรับปรุง:"2563",
        ปีเกณฑ์มาตรฐานหลักสูตร:"2558",
        บทสรุปผู้บริหาร:"",
        คะแนนการประเมินเฉลี่ย1:"",
        คะแนนการประเมินเฉลี่ย2:"",
        คะแนนการประเมินเฉลี่ย3:"",
        คะแนนการประเมินเฉลี่ย4:"",
        คะแนนการประเมินเฉลี่ย5:"",
        คะแนนการประเมินเฉลี่ย6:"",
        ระดับคุณภาพ1:"",
        ระดับคุณภาพ2:"",
        ระดับคุณภาพ3:"",
        ระดับคุณภาพ4:"",
        ระดับคุณภาพ5:"",
        ระดับคุณภาพ6:"",
        หมายเหตุ1:"",
        หมายเหตุ2:"",
        หมายเหตุ3:"",
        หมายเหตุ4:"",
        หมายเหตุ5:"",
        หมายเหตุ6:"",
        หมายเหตุ7:"",
        คำนำ:"",
        ลงชื่อคำนำ:"",
        ประวัติความเป็นมาของหลักสูตร:"",
        จุดแข็งองค์ประกอบ1_1: "",
        จุดแข็งองค์ประกอบ2_1: "",
        จุดแข็งองค์ประกอบ3_1 : " ",
        จุดแข็งองค์ประกอบ3_2 : "",
        จุดแข็งองค์ประกอบ4_1 : "้",
        จุดแข็งองค์ประกอบ4_2 : "",
        จุดแข็งองค์ประกอบ5_1 : "",
        จุดแข็งองค์ประกอบ5_2 : "",
        จุดแข็งองค์ประกอบ5_3 : "",
        จุดแข็งองค์ประกอบ5_4 : " ",
        จุดแข็งองค์ประกอบ6_1: "",
        องค์ประกอบเกณฑ์การประเมิน1 : "",
        องค์ประกอบเกณฑ์การประเมิน2 : "",
        องค์ประกอบเกณฑ์การประเมิน3_1 : "",
        องค์ประกอบเกณฑ์การประเมิน3_2 : "",
        องค์ประกอบเกณฑ์การประเมิน4_1 : "",
        องค์ประกอบเกณฑ์การประเมิน4_2 : "",
        องค์ประกอบเกณฑ์การประเมิน5_1 : "",
        องค์ประกอบเกณฑ์การประเมิน5_2 : "",
        องค์ประกอบเกณฑ์การประเมิน5_3 : "",
        องค์ประกอบเกณฑ์การประเมิน5_4 : "",
        องค์ประกอบเกณฑ์การประเมิน6 : "",
        การดำเนินการโครงการ1 : "",
        การดำเนินการโครงการ2 : "",    
        การดำเนินการโครงการ3_1 : "",
        การดำเนินการโครงการ3_2 : "",
        การดำเนินการโครงการ4_1 : "",
        การดำเนินการโครงการ4_2 : "",
        การดำเนินการโครงการ5_1 : "",
        การดำเนินการโครงการ5_2 : "",
        การดำเนินการโครงการ5_3 : "",
        การดำเนินการโครงการ5_4 : "",
        การดำเนินการโครงการ6 : "",
        ผลการดำเนินงาน1 : "",
        ผลการดำเนินงาน2 : "",
        ผลการดำเนินงาน3_1 : "",
        ผลการดำเนินงาน3_2 : "",
        ผลการดำเนินงาน4_1 : "",
        ผลการดำเนินงาน4_2 : "",
        ผลการดำเนินงาน5_1 : "",
        ผลการดำเนินงาน5_2 : "",
        ผลการดำเนินงาน5_3 : "",
        ผลการดำเนินงาน5_4 : "",
        ผลการดำเนินงาน6 : "",
  });

  // (generateDocument) แก้ไข docx
  const PizZip = require('pizzip');
  const Docxtemplater = require('docxtemplater');
  const formattedDate = moment.tz('Asia/Bangkok');
  const year = Number(formattedDate.format('YYYY')) + 543;

  
  const handleGenerateDocx = async (e) => {
    e.preventDefault();

    
    try {
      // เรียก API เพื่อดึงข้อมูลเทมเพลต DOCX
      const response = await axios.get('https://project-in-back.vercel.app/api/gettqf7', {
        params: { id: '1' },
        responseType: 'arraybuffer',
      });

    axios.post('https://project-in-back.vercel.app/api/gettqf7', {
    })
    .then((response) => {
      console.log('Status updated successfully:', response.data);
    })
    .catch((error) => {
      console.error('Error updating status:', error);
    });
    const zip = new PizZip(response.data);
    const doc = new Docxtemplater();
    doc.loadZip(zip);
    doc.setOptions({ linebreaks: true });

    doc.setData({
      ประจำปีการศึกษา:"2565",
      เริ่มวันที่:" ",
      สิ้นสุดวันที่:" ",
      ชื่อหลักสูตรภาษาไทย:"วิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร",
      ชื่อหลักสูตรภาษาอังกฤษ:"Bachelor of Engineering Program in Computer Engineering",
      ชื่อหลักสูตรย่อ:"วศ.บ.(วิศวกรรมคอมพิวเตอร์)",
      คณะ:"คณะเทคโนโลยีอุตสาหกรรม",
      มหาวิทยาลัย:"มหาวิทยาลัยราชภัฏสวนสุนันทา",
      หลักสูตรปรับปรุง:"2563",
      ปีเกณฑ์มาตรฐานหลักสูตร:"2558",
      บทสรุปผู้บริหาร:"",
      คะแนนการประเมินเฉลี่ย1:"",
      คะแนนการประเมินเฉลี่ย2:"",
      คะแนนการประเมินเฉลี่ย3:"",
      คะแนนการประเมินเฉลี่ย4:"",
      คะแนนการประเมินเฉลี่ย5:"",
      คะแนนการประเมินเฉลี่ย6:"",
      ระดับคุณภาพ1:"",
      ระดับคุณภาพ2:"",
      ระดับคุณภาพ3:"",
      ระดับคุณภาพ4:"",
      ระดับคุณภาพ5:"",
      ระดับคุณภาพ6:"",
      หมายเหตุ1:"",
      หมายเหตุ2:"",
      หมายเหตุ3:"",
      หมายเหตุ4:"",
      หมายเหตุ5:"",
      หมายเหตุ6:"",
      หมายเหตุ7:"",
      คำนำ:"",
      ลงชื่อคำนำ:"",
      ประวัติความเป็นมาของหลักสูตร:"",
      จุดแข็งองค์ประกอบ1_1: "",
      จุดแข็งองค์ประกอบ2_1: "",
      จุดแข็งองค์ประกอบ3_1 : " ",
      จุดแข็งองค์ประกอบ3_2 : "",
      จุดแข็งองค์ประกอบ4_1 : "้",
      จุดแข็งองค์ประกอบ4_2 : "",
      จุดแข็งองค์ประกอบ5_1 : "",
      จุดแข็งองค์ประกอบ5_2 : "",
      จุดแข็งองค์ประกอบ5_3 : "",
      จุดแข็งองค์ประกอบ5_4 : " ",
      จุดแข็งองค์ประกอบ6_1: "",
      องค์ประกอบเกณฑ์การประเมิน1 : "",
      องค์ประกอบเกณฑ์การประเมิน2 : "",
      องค์ประกอบเกณฑ์การประเมิน3_1 : "",
      องค์ประกอบเกณฑ์การประเมิน3_2 : "",
      องค์ประกอบเกณฑ์การประเมิน4_1 : "",
      องค์ประกอบเกณฑ์การประเมิน4_2 : "",
      องค์ประกอบเกณฑ์การประเมิน5_1 : "",
      องค์ประกอบเกณฑ์การประเมิน5_2 : "",
      องค์ประกอบเกณฑ์การประเมิน5_3 : "",
      องค์ประกอบเกณฑ์การประเมิน5_4 : "",
      องค์ประกอบเกณฑ์การประเมิน6 : "",
      การดำเนินการโครงการ1 : "",
      การดำเนินการโครงการ2 : "",    
      การดำเนินการโครงการ3_1 : "",
      การดำเนินการโครงการ3_2 : "",
      การดำเนินการโครงการ4_1 : "",
      การดำเนินการโครงการ4_2 : "",
      การดำเนินการโครงการ5_1 : "",
      การดำเนินการโครงการ5_2 : "",
      การดำเนินการโครงการ5_3 : "",
      การดำเนินการโครงการ5_4 : "",
      การดำเนินการโครงการ6 : "",
      ผลการดำเนินงาน1 : "",
      ผลการดำเนินงาน2 : "",
      ผลการดำเนินงาน3_1 : "",
      ผลการดำเนินงาน3_2 : "",
      ผลการดำเนินงาน4_1 : "",
      ผลการดำเนินงาน4_2 : "",
      ผลการดำเนินงาน5_1 : "",
      ผลการดำเนินงาน5_2 : "",
      ผลการดำเนินงาน5_3 : "",
      ผลการดำเนินงาน5_4 : "",
      ผลการดำเนินงาน6 : "",
    });

    doc.render();
    const content = doc.getZip().generate({ type: 'blob' }); // <-- ถาม
    const url = URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    link.download = `มคอ.7 หมวดที่ 1 2 และ 3.docx`; // <-- ถาม
    link.click();
  } catch (error) {
    console.error('Error generating document:', error);
  }
};



  const handleChange = (event, property) => {
    setDateTqf7_0({
      ...dataTqf7_0,
      [property]: event.target.value,
    });
    console.log(dataTqf7_0);
  };

  {/***********************************************/}
  const [editableColumn, setEditableColumn] = useState(null);
  const [tableData, setTableData] = useState([
    { องค์ประกอบ: 'องค์ประกอบ 1', 'คะแนนการประเมินเฉลี่ย': 5, 'ระดับคุณภาพ': 'ดีมาก', หมายเหตุ: 'หมายเหตุ 1' },
    { องค์ประกอบ: 'องค์ประกอบ 2', 'คะแนนการประเมินเฉลี่ย': 4, 'ระดับคุณภาพ': 'ดี', หมายเหตุ: 'หมายเหตุ 2' },
    { องค์ประกอบ: 'องค์ประกอบ 3', 'คะแนนการประเมินเฉลี่ย': 3, 'ระดับคุณภาพ': 'พอใช้', หมายเหตุ: 'หมายเหตุ 3' },
    { องค์ประกอบ: 'องค์ประกอบ 4', 'คะแนนการประเมินเฉลี่ย': 4, 'ระดับคุณภาพ': 'ดี', หมายเหตุ: 'หมายเหตุ 4' },
    // เพิ่มข้อมูลอื่น ๆ ตามความต้องการ
  ]);
  const onEditorOpen = (e) => {
    setEditableColumn(e.field);
  };
  
  const onEditorClose = () => {
    setEditableColumn(null);
  };
  {/***********************************************/}

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <form onSubmit={handleGenerateDocx}  >
    <div style={{ width: '100%',marginLeft: '10px'}}>
      <ScrollPanel style={{ width: '100%', height: '875px' }}>
      <Panel header="สร้างผลการดำเนินงาน">
        {/***********************************************/}
      <div className="field col-12 md:col-4">
        <div style={{ marginBottom: '10px' }}>
          <label>เริ่มวันที่</label>
          <InputText
          value={dataTqf7_0.เริ่มวันที่}
          onChange={(e) => handleChange(e, 'เริ่มวันที่')}
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
          />
          <label>ถึงวันที่</label>
          <InputText
          value={dataTqf7_0.สิ้นสุดวันที่}
          onChange={(e) => handleChange(e, 'สิ้นสุดวันที่')}
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
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
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
          />
          
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="เลือกหลักสูตร">
        {/***********************************************/}
        <div style={{ marginBottom: '20px' }}>
          <span>ชื่อหลักสูตร(ภาษาไทย)</span>
          <InputText
          value={dataTqf7_0.ชื่อหลักสูตรภาษาไทย} 
          onChange={(e) => handleChange(e, 'ชื่อหลักสูตรภาษาไทย')} 
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
          />
          
          <span>หลักสูตรปรับปรุงปี</span>
          <InputText
          value={dataTqf7_0.หลักสูตรปรับปรุง} 
          onChange={(e) => handleChange(e, 'หลักสูตรปรับปรุง')} 
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
          />
        </div>
        {/***********************************************/}
        <div style={{ marginBottom: '20px' }}>
          <span>ชื่อหลักสูตร(ภาษาอังกฤษ)</span>
          <InputText 
          value={dataTqf7_0.ชื่อหลักสูตรภาษาอังกฤษ}
          onChange={(e)=> handleChange(e, 'ชื่อหลักสูตรภาษาอังกฤษ')}
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
          />
          <span>ชื่อย่อ</span>
          <InputText
           value={dataTqf7_0.ชื่อหลักสูตรย่อ}
           onChange={(e)=> handleChange(e, 'ชื่อหลักสูตรย่อ')}
           style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
          />
        </div>
        {/***********************************************/}
        <div style={{ marginBottom: '20px' }}>
          <span>คณะ</span>
          <InputText 
          value={dataTqf7_0.คณะ}
          onChange={(e)=> handleChange(e, 'คณะ')}
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
          />
          <span>มหาวิทยาลัย</span>
          <InputText 
          value={dataTqf7_0.มหาวิทยาลัย}
          onChange={(e)=> handleChange(e, 'มหาวิทยาลัย')}
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
          />
        </div>
        {/***********************************************/}
        <div style={{ marginBottom: '20px' }}>
          <span>ปีเกณฑ์มาตรฐานหลักสูตร</span>
          <InputText
          value={dataTqf7_0.ปีเกณฑ์มาตรฐานหลักสูตร}
          onChange={(e)=> handleChange(e, 'ปีเกณฑ์มาตรฐานหลักสูตร')}
          style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
          />
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="บทสรุปผู้บริหาร">
        {/***********************************************/}
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <InputTextarea 
            autoResize 
            rows={4} 
            cols={80}  
            value={dataTqf7_0.บทสรุปผู้บริหาร}
            onChange={(e)=> handleChange(e, 'บทสรุปผู้บริหาร')}
            />
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="สรุปผลการประเมินตนเองตามองค์ประกอบ">
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
                <td className='TD'><InputText value = {dataTqf7_0.คะแนนการประเมินเฉลี่ย1} onChange={(e) => handleChange(e, 'คะแนนการประเมินเฉลี่ย1')}></InputText></td>
                <td className='TD'><InputText value = {dataTqf7_0.ระดับคุณภาพ1} onChange={(e) => handleChange(e, 'ระดับคุณภาพ1')}></InputText></td>
                <td className='TD'><InputText value = {dataTqf7_0.หมายเหตุ1} onChange={(e) => handleChange(e, 'หมายเหตุ1')}></InputText></td>
              </tr>
              <tr>
                <td className='TD'>องค์ประกอบที่ 2</td>
                <td className='TD'><InputText value = {dataTqf7_0.คะแนนการประเมินเฉลี่ย2} onChange={(e) => handleChange(e, 'คะแนนการประเมินเฉลี่ย2')}></InputText></td>
                <td className='TD'><InputText value = {dataTqf7_0.ระดับคุณภาพ2} onChange={(e) => handleChange(e, 'ระดับคุณภาพ2')}></InputText></td>
                <td className='TD'><InputText value = {dataTqf7_0.หมายเหตุ2} onChange={(e) => handleChange(e, 'หมายเหตุ2')}></InputText></td>
              </tr>
              <tr>
                <td className='TD'>องค์ประกอบที่ 3</td>
                <td className='TD'><InputText value = {dataTqf7_0.คะแนนการประเมินเฉลี่ย3} onChange={(e) => handleChange(e, 'คะแนนการประเมินเฉลี่ย3')}></InputText></td>
                <td className='TD'><InputText value = {dataTqf7_0.ระดับคุณภาพ3} onChange={(e) => handleChange(e, 'ระดับคุณภาพ3')}></InputText></td>
                <td className='TD'><InputText value = {dataTqf7_0.หมายเหตุ3} onChange={(e) => handleChange(e, 'หมายเหตุ3')}></InputText></td>
              </tr>
              <tr>
                <td className='TD'>องค์ประกอบที่ 4</td>
                <td className='TD'><InputText value = {dataTqf7_0.คะแนนการประเมินเฉลี่ย4} onChange={(e) => handleChange(e, 'คะแนนการประเมินเฉลี่ย4')}></InputText></td>
                <td className='TD'><InputText value = {dataTqf7_0.ระดับคุณภาพ4} onChange={(e) => handleChange(e, 'ระดับคุณภาพ4')}></InputText></td>
                <td className='TD'><InputText value = {dataTqf7_0.หมายเหตุ4} onChange={(e) => handleChange(e, 'หมายเหตุ4')}></InputText></td>
              </tr>
              <tr>
                <td className='TD'>องค์ประกอบที่ 5</td>
                <td className='TD'><InputText value = {dataTqf7_0.คะแนนการประเมินเฉลี่ย5} onChange={(e) => handleChange(e, 'คะแนนการประเมินเฉลี่ย5')}></InputText></td>
                <td className='TD'><InputText value = {dataTqf7_0.ระดับคุณภาพ5} onChange={(e) => handleChange(e, 'ระดับคุณภาพ5')}></InputText></td>
                <td className='TD'><InputText value = {dataTqf7_0.หมายเหตุ5} onChange={(e) => handleChange(e, 'หมายเหตุ5')}></InputText></td>
              </tr>
              <tr>
                <td className='TD'>องค์ประกอบที่ 6</td>
                <td className='TD'><InputText value = {dataTqf7_0.คะแนนการประเมินเฉลี่ย6} onChange={(e) => handleChange(e, 'คะแนนการประเมินเฉลี่ย6')}></InputText></td>
                <td className='TD'><InputText value = {dataTqf7_0.ระดับคุณภาพ6} onChange={(e) => handleChange(e, 'ระดับคุณภาพ6')}></InputText></td>
                <td className='TD'><InputText value = {dataTqf7_0.หมายเหตุ6} onChange={(e) => handleChange(e, 'หมายเหตุ6')}></InputText></td>
              </tr>
              <tr>
                <td className='TD'>เฉลี่ยรวมทุกตัวบ่งชี้ของทุกองค์ประกอบ</td>
                <td className='TD'><InputText onChange={(e) => handleChange(e, '')}></InputText></td>
                <td className='TD'><InputText onChange={(e) => handleChange(e, '')}></InputText></td>
                <td className='TD'><InputText onChange={(e) => handleChange(e, '')}></InputText></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="คำนำ">
        {/***********************************************/}
        <div style={{ display: 'flex', alignItems: 'flex-start',marginBottom: '20px' }}>
        <span>คำนำ</span>
        <InputTextarea 
        autoResize 
        rows={4} 
        cols={80}  
        value={dataTqf7_0.คำนำ} 
        onChange={(e)=> handleChange(e, 'คำนำ')}
        style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
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
        style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
        />
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="ประวัติความเป็นมาของหลักสูตร">
        {/***********************************************/}
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <InputTextarea 
          autoResize 
          rows={4} 
          cols={80}  
          value={dataTqf7_0.ประวัติความเป็นมาของหลักสูตร}
          onChange={(e)=> handleChange(e, 'ประวัติความเป็นมาของหลักสูตร')}
        />
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา">
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
                <td className='TD'><InputTextarea value = {dataTqf7_0.จุดแข็งองค์ประกอบ1_1} onChange={(e) => handleChange(e, 'จุดแข็งองค์ประกอบ1_1')}></InputTextarea></td>
                <td className='TD'><InputTextarea value = {dataTqf7_0.องค์ประกอบเกณฑ์การประเมิน1} onChange={(e) => handleChange(e, 'จุดแข็งองค์ประกอบ1_1')}></InputTextarea></td>
                <td className='TD'><InputTextarea value = {dataTqf7_0.การดำเนินการโครงการ1} onChange={(e) => handleChange(e, 'จุดแข็งองค์ประกอบ1_1')}></InputTextarea></td>
                <td className='TD'><InputTextarea value = {dataTqf7_0.ผลการดำเนินงาน1} onChange={(e) => handleChange(e, 'จุดแข็งองค์ประกอบ1_1')}></InputTextarea></td>
              </tr>
            องค์ประกอบที่ 2  บัณฑิต
              <tr>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
              </tr>
            องค์ประกอบที่ 3 นักศึกษา
              <tr>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
              </tr>
              <tr>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
              </tr>
            องค์ประกอบที่ 4 อาจารย์
              <tr>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
              </tr>
              <tr>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
              </tr>
            องค์ประกอบที่ 5 หลักสูตร การเรียนการสอน  การประเมินผู้เรียน
              <tr>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
              </tr>
              <tr>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
              </tr>
              <tr>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
              </tr>
              <tr>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
              </tr>
            6. สิ่งสนับสนุนการเรียนรู้
              <tr>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
                <td className='TD'><InputTextarea onChange={(e) => handleChange(e, '')}></InputTextarea></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/***********************************************/}
      </Panel>
      </ScrollPanel>
      <br/><br/>
      <Button type="submit" style={{ marginLeft: '50%' }} label="ยืนยัน" onClick={handleGenerateDocx} />
    </div>
    </form>
  )
}

export default TQF7_0
