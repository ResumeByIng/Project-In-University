import { InputTextarea } from 'primereact/inputtextarea';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import thLocale from 'date-fns/locale/th';


function ProjectList() {
    const [professors, setProfessors] = useState([]);

    const PizZip = require("pizzip");
    const Docxtemplater = require("docxtemplater");

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get("http://localhost:8081/api/get-professor");
          const formattedData = response.data.map((professor) => ({
            value: `${professor.first_name} ${professor.last_name}`,
            label: `${professor.first_name} ${professor.last_name}`,
          }));
          
          setProfessors(formattedData);
          console.log(formattedData);
        } catch (error) {
          console.error("Error fetching professors:", error);
        }
      }
      fetchData();
    }, []);

    const [projectList, setProjectList] = useState({
    
      วันเดือนปี: new Date(),

        ชื่อโครงการ1:"ระบบการจัดการห้องเรียนโดยใช้เทคโนโลยีผสมผสานกับAI",
        ชื่อผู้จัดทำโครงการ1:"ผศ.ดร. พรภวิษย์",
        เวลาโครงการ1:"9.30 - 10.00 น.",
        หมายเหตุ1:"สอบ Proposal ปี 64",

        ชื่อโครงการ2:"เครื่องเกมอาเขตจากบอร์ดราสเบอร์รี่พาย",
        ชื่อผู้จัดทำโครงการ2:"ผศ.ดร. พรภวิษย์", 
        เวลาโครงการ2:"10.00 - 10.30 น.",
        หมายเหตุ2:"สอบ Proposal ปี 64",

        ชื่อโครงการ3:"ระบบการทำธุรกิจร้านขายของชำแบบทันสมัย",
        ชื่อผู้จัดทำโครงการ3:"ผศ.ดร. พรภวิษย์", 
        เวลาโครงการ3:"10.30 - 11.00 น.",
        หมายเหตุ3:"สอบ Proposal ปี 64",

        ชื่อโครงการ4:"รถพ่นยาบังคับวิทยุ",
        ชื่อผู้จัดทำโครงการ4:"ผศ.ดร. พรภวิษย์", 
        เวลาโครงการ4:"11.00 - 11.30 น.",
        หมายเหตุ4:"สอบ Proposal ปี 64",

        ชื่อโครงการ5:"มินิโฮมกระบองเพชร",
        ชื่อผู้จัดทำโครงการ5:"ผศ.ดร.รวิ", 
        เวลาโครงการ5:"11.30 - 12.00 น.",
        หมายเหตุ5:"สอบ Proposal ปี 64",

        ชื่อโครงการ6:"ตู้สำหรับฟักไข่ไก่แบบอัตโนมัติควบคุมผ่านเว็ปแอปพลิเคชั่น",
        ชื่อผู้จัดทำโครงการ6:"ผศ.ดร.ขวัญเรือน\nผศ.ดร.เศรษฐกาล\nผศ.ดร.รวิ", 
        เวลาโครงการ6:"13.00 -13.30 น.",
        หมายเหตุ6:"สอบ Proposal ปี 64",

        ชื่อโครงการ7:"เครื่องผสมอาหารลูกไก่แบบอัตโนมัติ",
        ชื่อผู้จัดทำโครงการ7:"ผศ.ดร.ขวัญเรือน\nผศ.ดร.เศรษฐกาล", 
        เวลาโครงการ7:"13.30 - 14.00 น.",
        หมายเหตุ7:"สอบ Proposal ปี 64",

        ชื่อโครงการ8:"ระบบ CRM สำหรับบริษัท Mata Agency",
        ชื่อผู้จัดทำโครงการ8:"ผศ.ดร.รวิ", 
        เวลาโครงการ8:"14.00 น. - 14.30 น.",
        หมายเหตุ8:"สอบ Proposal ปี 64",

        ชื่อโครงการ9:"ระบบสั่งซื้อดอกมาลัย",
        ชื่อผู้จัดทำโครงการ9:"ผศ.ดร.รวิ", 
        เวลาโครงการ9:"14.30 - 15.00 น.",
        หมายเหตุ9:"สอบ Proposal ปี 64",

        ชื่อโครงการ10:"มาตรฐานคุณวุฒิสำหรับหลักสูตรวิศวกรรมศาสตร์และคะแนนสาขากรณีศึกษาจากหลักสูตรวิศวกรรมคอมพิวเตอร์",
        ชื่อผู้จัดทำโครงการ10:"ผศ.ดร.รวิ", 
        เวลาโครงการ10:"15.00 - 16.00 น.",
        หมายเหตุ10:"สอบจบ ปี 62",
      });
      const thaiDateString = format(projectList.วันเดือนปี, "dd MMMM yyyy", { locale: thLocale });

    const handleGenerateDocx = async (e) => {
        e.preventDefault();
        try {
          // เรียก API เพื่อดึงข้อมูลเทมเพลต DOCX
          const response = await axios.get("https://project-in-back.vercel.app/api/gettqf7", {
            params: { id: "8" },
            responseType: "arraybuffer",
          });
          const userFormData = projectList;
    
          const zip = new PizZip(response.data);
          doc = new Docxtemplater();
          doc.loadZip(zip);
          doc.setOptions({ linebreaks: true });
    
          doc.setData(userFormData);
    
          doc.render();
    
          const content = doc.getZip().generate({ type: "blob" });
          const url = URL.createObjectURL(content);
          const link = document.createElement("a");
          link.href = url;
          link.download = `ฟอร์มรายชื่อโครงการ.docx`;
          link.click();
        } catch (error) {
          console.error("Error generating document:", error);
        }
      };
      let doc;

      const handleChange = (event, property) => {
        setProjectList((prevData) => ({
            ...prevData,
            [property]: event.target.value,
        }));
        if (doc) {
            doc.setData(projectList);
        }
    };

    const handleChangeDate = (date) => {
        setProjectList((prevData) => ({
            ...prevData,
            วันเดือนปี: date,
        }));
        if (doc) {
            doc.setData(projectList);
        }
    };

    return (
        <form onSubmit={handleGenerateDocx}>
          <div style={{ width: "1600px", marginLeft: "10px" }}>
          <button 
            style={{ 
              width: "100px", 
              backgroundColor: '#426ec7', 
              borderRadius: '50px', 
              border: 'none', 
              padding: '10px', 
              color: 'white',
              fontWeight: 'bold',
              fontFamily: 'Kanit, sans-serif', 
              cursor: 'pointer', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
              transition: '0.3s', 
              position: 'fixed', /* ทำให้ปุ่มลอยโดด */
              top: '20px', /* กำหนดตำแหน่งด้านบนของหน้าจอ */
              right: '20px', /* กำหนดตำแหน่งด้านขวาของหน้าจอ */
              zIndex: '1000', /* กำหนดค่า z-index ให้มากกว่าค่า z-index ของ panel */
            }} 
            type="button" 
            onClick={handleGenerateDocx}
          >
            โหลด Docx
          </button>
            <ScrollPanel style={{ width: "100%", height: "100vh" }}>
            <Panel style={{ fontFamily: "Kanit, sans-serif" }} header="หัวเรื่อง">
                <div className="field col-12 md:col-4" style={{ marginBottom: "10px", width: "100%" }}>
                    <span style={{ color: "black" }}>วัน/เดือน/ปี</span>
                      <DatePicker
                        selected={projectList.วันเดือนปี}
                        onChange={handleChangeDate}
                        dateFormat={thaiDateString}
                        style={{ backgroundColor: 'white', color: 'black', border: '1px solid gray', borderRadius: '4px', padding: '5px' }}
                      />
                </div>
                    </Panel><br />
              {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="โครงการที่ 1"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "500px" }}>
                    <span style={{ color: "black"}}>ชื่อโครงการที่ 1</span>
                    <InputTextarea
                    autoResize
                      placeholder=""
                      value={projectList.ชื่อโครงการ1}
                      onChange={(e) => handleChange(e, "ชื่อโครงการ1")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black"}}>ชื่อผู้จัดทำโครงการที่ 1</span>
                    <InputTextarea
                    autoResize
                      value={projectList.ชื่อผู้จัดทำโครงการ1}
                      onChange={(e) => handleChange(e, "ชื่อผู้จัดทำโครงการ1")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>เวลาโครงการที่ 1</span>
                    <InputText
                      value={projectList.เวลาโครงการ1}
                      onChange={(e) => handleChange(e, "เวลาโครงการ1")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>หมายเหตุโครงการที่ 1</span>
                    <InputText
                      value={projectList.หมายเหตุ1}
                      onChange={(e) => handleChange(e, "หมายเหตุ1")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
              {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="โครงการที่ 2"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "500px" }}>
                    <span style={{ color: "black" }}>ชื่อโครงการที่ 2</span>
                    <InputTextarea
                    autoResize
                      placeholder=""
                      value={projectList.ชื่อโครงการ2}
                      onChange={(e) => handleChange(e, "ชื่อโครงการ2")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>ชื่อผู้จัดทำโครงการที่ 2</span>
                    <InputTextarea
                    autoResize
                      value={projectList.ชื่อผู้จัดทำโครงการ2}
                      onChange={(e) => handleChange(e, "ชื่อผู้จัดทำโครงการ2")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>เวลาโครงการที่ 2</span>
                    <InputText
                      value={projectList.เวลาโครงการ2}
                      onChange={(e) => handleChange(e, "เวลาโครงการ2")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>หมายเหตุโครงการที่ 2</span>
                    <InputText
                      value={projectList.หมายเหตุ2}
                      onChange={(e) => handleChange(e, "หมายเหตุ2")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
              {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="โครงการที่ 3"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "500px" }}>
                    <span style={{ color: "black" }}>ชื่อโครงการที่ 3</span>
                    <InputTextarea
                    autoResize
                      placeholder=""
                      value={projectList.ชื่อโครงการ3}
                      onChange={(e) => handleChange(e, "ชื่อโครงการ3")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>ชื่อผู้จัดทำโครงการที่ 3</span>
                    <InputTextarea
                    autoResize
                      value={projectList.ชื่อผู้จัดทำโครงการ3}
                      onChange={(e) => handleChange(e, "ชื่อผู้จัดทำโครงการ3")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>เวลาโครงการที่ 3</span>
                    <InputText
                      value={projectList.เวลาโครงการ3}
                      onChange={(e) => handleChange(e, "เวลาโครงการ3")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>หมายเหตุโครงการที่ 3</span>
                    <InputText
                      value={projectList.หมายเหตุ3}
                      onChange={(e) => handleChange(e, "หมายเหตุ3")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
              {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="โครงการที่ 4"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "500px" }}>
                    <span style={{ color: "black" }}>ชื่อโครงการที่ 4</span>
                    <InputTextarea
                    autoResize
                      placeholder=""
                      value={projectList.ชื่อโครงการ4}
                      onChange={(e) => handleChange(e, "ชื่อโครงการ4")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>ชื่อผู้จัดทำโครงการที่ 4</span>
                    <InputTextarea
                    autoResize
                      value={projectList.ชื่อผู้จัดทำโครงการ4}
                      onChange={(e) => handleChange(e, "ชื่อผู้จัดทำโครงการ4")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>เวลาโครงการที่ 4</span>
                    <InputText
                      value={projectList.เวลาโครงการ4}
                      onChange={(e) => handleChange(e, "เวลาโครงการ4")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>หมายเหตุโครงการที่ 4</span>
                    <InputText
                      value={projectList.หมายเหตุ4}
                      onChange={(e) => handleChange(e, "หมายเหตุ4")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
              {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="โครงการที่ 5"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "500px" }}>
                    <span style={{ color: "black" }}>ชื่อโครงการที่ 5</span>
                    <InputTextarea
                    autoResize
                      placeholder=""
                      value={projectList.ชื่อโครงการ5}
                      onChange={(e) => handleChange(e, "ชื่อโครงการ5")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>ชื่อผู้จัดทำโครงการที่ 5</span>
                    <InputTextarea
                    autoResize
                      value={projectList.ชื่อผู้จัดทำโครงการ5}
                      onChange={(e) => handleChange(e, "ชื่อผู้จัดทำโครงการ5")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>เวลาโครงการที่ 5</span>
                    <InputText
                      value={projectList.เวลาโครงการ5}
                      onChange={(e) => handleChange(e, "เวลาโครงการ5")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>หมายเหตุโครงการที่ 5</span>
                    <InputText
                      value={projectList.หมายเหตุ5}
                      onChange={(e) => handleChange(e, "หมายเหตุ5")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
              {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="โครงการที่ 6"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "500px" }}>
                    <span style={{ color: "black" }}>ชื่อโครงการที่ 6</span>
                    <InputTextarea
                    autoResize
                      placeholder=""
                      value={projectList.ชื่อโครงการ6}
                      onChange={(e) => handleChange(e, "ชื่อโครงการ6")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>ชื่อผู้จัดทำโครงการที่ 6</span>
                    <InputTextarea
                    autoResize
                      value={projectList.ชื่อผู้จัดทำโครงการ6}
                      onChange={(e) => handleChange(e, "ชื่อผู้จัดทำโครงการ6")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>เวลาโครงการที่ 6</span>
                    <InputText
                      value={projectList.เวลาโครงการ6}
                      onChange={(e) => handleChange(e, "เวลาโครงการ6")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>หมายเหตุโครงการที่ 6</span>
                    <InputText
                      value={projectList.หมายเหตุ6}
                      onChange={(e) => handleChange(e, "หมายเหตุ6")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
              {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="โครงการที่ 7"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "500px" }}>
                    <span style={{ color: "black" }}>ชื่อโครงการที่ 7</span>
                    <InputTextarea
                    autoResize
                      placeholder=""
                      value={projectList.ชื่อโครงการ7}
                      onChange={(e) => handleChange(e, "ชื่อโครงการ7")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>ชื่อผู้จัดทำโครงการที่ 7</span>
                    <InputTextarea
                    autoResize
                      value={projectList.ชื่อผู้จัดทำโครงการ7}
                      onChange={(e) => handleChange(e, "ชื่อผู้จัดทำโครงการ7")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>เวลาโครงการที่ 7</span>
                    <InputText
                      value={projectList.เวลาโครงการ7}
                      onChange={(e) => handleChange(e, "เวลาโครงการ7")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>หมายเหตุโครงการที่ 7</span>
                    <InputText
                      value={projectList.หมายเหตุ7}
                      onChange={(e) => handleChange(e, "หมายเหตุ7")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
              {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="โครงการที่ 8"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "500px" }}>
                    <span style={{ color: "black" }}>ชื่อโครงการที่ 8</span>
                    <InputTextarea
                    autoResize
                      placeholder=""
                      value={projectList.ชื่อโครงการ8}
                      onChange={(e) => handleChange(e, "ชื่อโครงการ8")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>ชื่อผู้จัดทำโครงการที่ 8</span>
                    <InputTextarea
                    autoResize
                      value={projectList.ชื่อผู้จัดทำโครงการ8}
                      onChange={(e) => handleChange(e, "ชื่อผู้จัดทำโครงการ8")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>เวลาโครงการที่ 8</span>
                    <InputText
                      value={projectList.เวลาโครงการ8}
                      onChange={(e) => handleChange(e, "เวลาโครงการ8")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>หมายเหตุโครงการที่ 8</span>
                    <InputText
                      value={projectList.หมายเหตุ8}
                      onChange={(e) => handleChange(e, "หมายเหตุ8")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
              {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="โครงการที่ 9"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "500px" }}>
                    <span style={{ color: "black" }}>ชื่อโครงการที่ 9</span>
                    <InputTextarea
                    autoResize
                      placeholder=""
                      value={projectList.ชื่อโครงการ9}
                      onChange={(e) => handleChange(e, "ชื่อโครงการ9")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>ชื่อผู้จัดทำโครงการที่ 9</span>
                    <InputTextarea
                    autoResize
                      value={projectList.ชื่อผู้จัดทำโครงการ9}
                      onChange={(e) => handleChange(e, "ชื่อผู้จัดทำโครงการ9")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>เวลาโครงการที่ 9</span>
                    <InputText
                      value={projectList.เวลาโครงการ9}
                      onChange={(e) => handleChange(e, "เวลาโครงการ9")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>หมายเหตุโครงการที่ 9</span>
                    <InputText
                      value={projectList.หมายเหตุ9}
                      onChange={(e) => handleChange(e, "หมายเหตุ9")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
              {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="โครงการที่ 10"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "500px" }}>
                    <span style={{ color: "black" }}>ชื่อโครงการที่ 10</span>
                    <InputTextarea
                    autoResize
                      placeholder=""
                      value={projectList.ชื่อโครงการ10}
                      onChange={(e) => handleChange(e, "ชื่อโครงการ10")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>ชื่อผู้จัดทำโครงการที่ 10</span>
                    <InputTextarea
                    autoResize
                      value={projectList.ชื่อผู้จัดทำโครงการ10}
                      onChange={(e) => handleChange(e, "ชื่อผู้จัดทำโครงการ10")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>เวลาโครงการที่ 10</span>
                    <InputText
                      value={projectList.เวลาโครงการ10}
                      onChange={(e) => handleChange(e, "เวลาโครงการ10")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>หมายเหตุโครงการที่ 10</span>
                    <InputText
                      value={projectList.หมายเหตุ10}
                      onChange={(e) => handleChange(e, "หมายเหตุ10")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
              {/*///////////////////////////////////////////////////////////////*/}
            </ScrollPanel>
          </div>
        </form>
      );
    }

export default ProjectList