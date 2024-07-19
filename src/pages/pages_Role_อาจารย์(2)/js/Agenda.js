import React, { useState } from 'react';
import axios from 'axios';
import { Panel } from 'primereact/panel';
import { ScrollPanel } from 'primereact/scrollpanel';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import '../css/Agenda.css';
import { Dropdown } from 'primereact/dropdown';


function Agenda() {

    const PizZip = require("pizzip");
    const Docxtemplater = require("docxtemplater");

    const [agenda, setAgenda] = useState({
    
        เรื่อง: "คณะกรรมการดำเนินงานด้านการจัดกิจกรรม",
        วันที่: "วันพุธที่ 27 กันยายน 2566",
        เวลาชั่วโมง:"11",
        เวลานาที:"00",
        สถานที่: "ประชุมออนไลน์",

        ผู้เข้าร่วมการประชุม: "นายพฤฒินันท์ เล่าสกุลสุข รหัส 66122519007 (ประธานรุ่น 66 / รองประธานสาขา)\nนางสาวมลตณรัตน์ วิวัฒน์เมทากร รหัส 66122519085 (รองประธานรุ่น 66)\nนายกิตติ ชัยตา รหัส 66122519032 (หัวหน้าห้อง sec 1 ปี 66)\nนางสาวธนภร วิรัชมงคลชัย รหัส 66122519084 (หัวหน้าห้อง sec 2 ปี 66 / เลขาสาขา)\nนายจตุรเทพ รัตนวรเศวต รหัส 66122519061 (รองหัวหน้าห้อง sec 2 ปี 66)\nนายณัฐวัฒน์ พงษ์สินสุภานน รหัส 65122519004 (ประธานรุ่น 65 / ประธานสาขา)\nนายอนิรุทธ์ ฝางนอก รหัส 65122519063 (รองประธานรุ่น 65)\nนางสาวชลธร ศิริวรรณพร รหัส 65122519035 (หัวหน้าห้อง sec 1 ปี 65 / เลขาสาขา)\nนางสาวพรธิดา ปั่นทรัพย์ รหัส 65122519062 (หัวหน้าห้อง sec 2 ปี 65)\nนายศักรินทร์ ผันสืบ รหัส 64122519001 (ประธานรุ่น 64)\nนายอามีน อาบู รหัส 64122519014 (รองประธานรุ่น 64)\nนายพลบดี คำดี รหัส 64122519019 (หัวหน้าห้อง 64)\nนางสาวภาริดา ศรีเรือง รหัส 64122519031 (รองหัวหน้าห้อง 64)\nนายเตชยศ ทองย้อย รหัส 63122519016 (ประธานรุ่น 63)\nนายนัฐพล ภู่เขียว รหัส 63122519018 (รองประธาน 63)\nนายวัชร์ชัยพัทธ์ เจริญผล รหัส 63122519040 (หัวหน้าห้อง 63)\nนางสาวธัญลักษณ์ ยงท้วม รหัส 63122519041 \nนางสาวชิดชนก สุนทรมัฏฐ์ รหัส 63122519031",
        ผู้ไม่เข้าร่วมการประชุม: "นางสาวตาหวาน โสภาทุม รหัส 65122519013 (รองหัวหน้าห้อง sec 1 ปี 65)",
        
        ระเบียบวาระที่1: "เรื่องการแต่งตั้งคณะกรรมการสาขาวิศวกรรมคอมพิวเตอร์",
        ระเบียบวาระที่_1_1: "การจัดตั้งประธานสาขา รองประธานสาขา เลขานุการสาขา และคณะกรรมการ\n -	ประธานสาขาวิศวกรรมคอมพิวเตอร์ : นายณัฐวัฒน์ พงษ์สินสุภานน รหัส 65122519004 (ประธานรุ่น 65)\n -	รองประธานสาขาวิศวกรรมคอมพิวเตอร์ : นายพฤฒินันท์ เล่าสกุลสุข รหัส 66122519007 (ประธานรุ่น 66)\n -	เลขานุการสาขาวิศวกรรมคอมพิวเตอร์ : นางสาวชลธร ศิริวรรณพร รหัส 65122519035 (หัวหน้าห้อง sec 1 ปี 65) และนางสาวธนภร วิรัชมงคลชัย รหัส 66122519084 (หัวหน้าห้อง sec 2 ปี 66) \n 1.2 ทีมประชาสัมพันธ์ดำเนินการเขียนข่าวและลงข่าวประชาสัมพันธ์สาขาวิชาลงในช่องทางออนไลน์			ลงข่าวประชาสัมพันธ์ในช่องทาง Facebook, Instagram นักศึกษาปี 65 รับผิดชอบ  \n ช่องทาง Application X, TikTok, YouTube นักศึกษาปี 66 รับผิดชอบ  \n เว็บไซต์ของสาขาวิศวกรรมคอมพิวเตอร์ นักศึกษาปี 64 รับผิดชอบ",

        ระเบียบวาระที่2: "เรื่องกิจกรรมของสาขาวิศวกรรมคอมพิวเตอร์",
        ระเบียบวาระที่_2_1: "กิจกรรม Open House \nกิจกรรมไหว้ครู \nกิจกรรมไปค่าย \nกิจกรรมบายเนียร์ \nกิจกรรมวันคริสมาสและวันปีใหม่ \nกิจกรรมกีฬาสีคณะ \nกิจกรรมบายศรีนักศึกษา ชั้นปีที่ 1 รุ่น 67",

        ระเบียบวาระที่3: "เรื่องการจัดค่ายจิตอาสาของสาขาวิศวกรรมคอมพิวเตอร์",
        ระเบียบวาระที่_3_1: "วางแผนการจัดค่าย \n จำนวนโควตาที่ของนักศึกษาที่จะไปค่ายของแต่ชั้นปี นักศึกษาปี 66 sec1 มี 31 คน โควตาไปค่าย 22 คนนักศึกษาปี 66 sec2 มี 43 คน โควตาไปค่าย 25 คนนักศึกษาปี 65 sec1 มี 26 คน โควตาไปค่าย 18 คนนักศึกษาปี 65 sec2 มี 29 คน โควตาไปค่าย 18 คนนักศึกษาปี 64 โควตาไปค่าย 15 คนนักศึกษาปี 63 โควตาไปค่าย 13 คน",

        ระเบียบวาระที่4: "เรื่องเสนอเพื่อพิจารณา",
        ระเบียบวาระที่_4_1: "..................................................................................................................",

        ระเบียบวาระที่5:"เรื่องอื่นๆ (ถ้ามี)",
        ระเบียบวาระที่_5_1: "..................................................................................................................",

      });

      const [agenda1, setAgenda1] = useState({
    
        เรื่อง: "คณะกรรมการดำเนินงานด้านการจัดกิจกรรม",
        วันที่: "วันพุธที่ 27 กันยายน 2566 เวลา 11.00 น.",
        สถานที่: "ประชุมออนไลน์",

        ผู้เข้าร่วมการประชุม: "นายพฤฒินันท์ เล่าสกุลสุข รหัส 66122519007 (ประธานรุ่น 66 / รองประธานสาขา)\nนางสาวมลตณรัตน์ วิวัฒน์เมทากร รหัส 66122519085 (รองประธานรุ่น 66)\nนายกิตติ ชัยตา รหัส 66122519032 (หัวหน้าห้อง sec 1 ปี 66)\nนางสาวธนภร วิรัชมงคลชัย รหัส 66122519084 (หัวหน้าห้อง sec 2 ปี 66 / เลขาสาขา)\nนายจตุรเทพ รัตนวรเศวต รหัส 66122519061 (รองหัวหน้าห้อง sec 2 ปี 66)\nนายณัฐวัฒน์ พงษ์สินสุภานน รหัส 65122519004 (ประธานรุ่น 65 / ประธานสาขา)\nนายอนิรุทธ์ ฝางนอก รหัส 65122519063 (รองประธานรุ่น 65)\nนางสาวชลธร ศิริวรรณพร รหัส 65122519035 (หัวหน้าห้อง sec 1 ปี 65 / เลขาสาขา)\nนางสาวพรธิดา ปั่นทรัพย์ รหัส 65122519062 (หัวหน้าห้อง sec 2 ปี 65)\nนายศักรินทร์ ผันสืบ รหัส 64122519001 (ประธานรุ่น 64)\nนายอามีน อาบู รหัส 64122519014 (รองประธานรุ่น 64)\nนายพลบดี คำดี รหัส 64122519019 (หัวหน้าห้อง 64)\nนางสาวภาริดา ศรีเรือง รหัส 64122519031 (รองหัวหน้าห้อง 64)\nนายเตชยศ ทองย้อย รหัส 63122519016 (ประธานรุ่น 63)\nนายนัฐพล ภู่เขียว รหัส 63122519018 (รองประธาน 63)\nนายวัชร์ชัยพัทธ์ เจริญผล รหัส 63122519040 (หัวหน้าห้อง 63)\nนางสาวธัญลักษณ์ ยงท้วม รหัส 63122519041 \nนางสาวชิดชนก สุนทรมัฏฐ์ รหัส 63122519031",
        ผู้ไม่เข้าร่วมการประชุม: "นางสาวตาหวาน โสภาทุม รหัส 65122519013 (รองหัวหน้าห้อง sec 1 ปี 65)",
        
        ระเบียบวาระที่1: "เรื่องการแต่งตั้งคณะกรรมการสาขาวิศวกรรมคอมพิวเตอร์",
        ระเบียบวาระที่_1_1: "การจัดตั้งประธานสาขา รองประธานสาขา เลขานุการสาขา และคณะกรรมการ\n -	ประธานสาขาวิศวกรรมคอมพิวเตอร์ : นายณัฐวัฒน์ พงษ์สินสุภานน รหัส 65122519004 (ประธานรุ่น 65)\n -	รองประธานสาขาวิศวกรรมคอมพิวเตอร์ : นายพฤฒินันท์ เล่าสกุลสุข รหัส 66122519007 (ประธานรุ่น 66)\n -	เลขานุการสาขาวิศวกรรมคอมพิวเตอร์ : นางสาวชลธร ศิริวรรณพร รหัส 65122519035 (หัวหน้าห้อง sec 1 ปี 65) และนางสาวธนภร วิรัชมงคลชัย รหัส 66122519084 (หัวหน้าห้อง sec 2 ปี 66) \n 1.2 ทีมประชาสัมพันธ์ดำเนินการเขียนข่าวและลงข่าวประชาสัมพันธ์สาขาวิชาลงในช่องทางออนไลน์			ลงข่าวประชาสัมพันธ์ในช่องทาง Facebook, Instagram นักศึกษาปี 65 รับผิดชอบ  \n ช่องทาง Application X, TikTok, YouTube นักศึกษาปี 66 รับผิดชอบ  \n เว็บไซต์ของสาขาวิศวกรรมคอมพิวเตอร์ นักศึกษาปี 64 รับผิดชอบ",

        ระเบียบวาระที่2: "เรื่องกิจกรรมของสาขาวิศวกรรมคอมพิวเตอร์",
        ระเบียบวาระที่_2_1: "กิจกรรม Open House \nกิจกรรมไหว้ครู \nกิจกรรมไปค่าย \nกิจกรรมบายเนียร์ \nกิจกรรมวันคริสมาสและวันปีใหม่ \nกิจกรรมกีฬาสีคณะ \nกิจกรรมบายศรีนักศึกษา ชั้นปีที่ 1 รุ่น 67",

        ระเบียบวาระที่3: "เรื่องการจัดค่ายจิตอาสาของสาขาวิศวกรรมคอมพิวเตอร์",
        ระเบียบวาระที่_3_1: "วางแผนการจัดค่าย \n จำนวนโควตาที่ของนักศึกษาที่จะไปค่ายของแต่ชั้นปี นักศึกษาปี 66 sec1 มี 31 คน โควตาไปค่าย 22 คนนักศึกษาปี 66 sec2 มี 43 คน โควตาไปค่าย 25 คนนักศึกษาปี 65 sec1 มี 26 คน โควตาไปค่าย 18 คนนักศึกษาปี 65 sec2 มี 29 คน โควตาไปค่าย 18 คนนักศึกษาปี 64 โควตาไปค่าย 15 คนนักศึกษาปี 63 โควตาไปค่าย 13 คน",

        ระเบียบวาระที่4: "เรื่องเสนอเพื่อพิจารณา",
        ระเบียบวาระที่_4_1: "..................................................................................................................",

        ระเบียบวาระที่5:"เรื่องอื่นๆ (ถ้ามี)",
        ระเบียบวาระที่_5_1: "..................................................................................................................",

      });

      const [agenda2, setAgenda2] = useState({
    
        เรื่อง: "",
        วันที่: "",
        สถานที่: "",

        ผู้เข้าร่วมการประชุม: "",
        ผู้ไม่เข้าร่วมการประชุม: "",
        
        ระเบียบวาระที่1: "",
        ระเบียบวาระที่_1_1: "",

        ระเบียบวาระที่2: "",
        ระเบียบวาระที่_2_1: "",

        ระเบียบวาระที่3: "",
        ระเบียบวาระที่_3_1: "",

        ระเบียบวาระที่4: "",
        ระเบียบวาระที่_4_1: "",

        ระเบียบวาระที่5:"",
        ระเบียบวาระที่_5_1: "",

      });

    const handleGenerateDocx = async (e) => {
        e.preventDefault();
        try {
          // เรียก API เพื่อดึงข้อมูลเทมเพลต DOCX
          const response = await axios.get("https://project-in-back.vercel.app/api/gettqf7", {
            params: { id: "6" },
            responseType: "arraybuffer",
          });
          const userFormData = agenda;
    
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
          link.download = `ฟอร์มระเบียบวาระการประชุม.docx`;
          link.click();
        } catch (error) {
          console.error("Error generating document:", error);
        }
      };
      let doc;

    const handleChange = (event, property) => {
        setAgenda((prevData) => ({
          ...prevData,
          [property]: event.target.value,
        }));
        if (doc) {
          doc.setData(agenda);
        }
      };

    return (
        <form onSubmit={handleGenerateDocx}>
          <div style={{ width: "1600px",height:'1000px', marginLeft: "10px",fontFamily: "Kanit, sans-serif" }}>
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
              <ScrollPanel style={{ width: "100%", height: "100vh", overflowY:'auto' }}>
              {/*///////////////////////////////////////////////////////////////*/}
              <Panel
          style={{ fontFamily: "Kanit, sans-serif" }}
          header="หัวเรื่อง"
        >
          <div className="field col-12 md:col-4">
            <div style={{ marginBottom: "10px", width: "100px" }}>
              <span style={{ color: "black" }}>เรื่อง</span>
              <InputText
                placeholder=""
                value={agenda.เรื่อง}
                onChange={(e) => handleChange(e, "เรื่อง")}
                style={{ fontFamily: "Kanit, sans-serif", width: '500px' }}
              />
              <br />
              <span style={{ color: "black" }}>วันที่</span>
              <InputText
                value={agenda.วันที่}
                onChange={(e) => handleChange(e, "วันที่")}
                style={{ fontFamily: "Kanit, sans-serif", width: '500px' }}
              />
              <br />
              <span style={{ color: "black" }}>เวลา</span>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Dropdown
                  optionLabel="label"
                  optionValue="value"
                  value={agenda.เวลาชั่วโมง}
                  options={[
                    { label: '00', value: '00' }, { label: '01', value: '01' }, { label: '02', value: '02' },
                    { label: '03', value: '03' }, { label: '04', value: '04' }, { label: '05', value: '05' },
                    { label: '06', value: '06' }, { label: '07', value: '07' }, { label: '08', value: '08' },
                    { label: '09', value: '09' }, { label: '10', value: '10' }, { label: '11', value: '11' },
                    { label: '12', value: '12' }, { label: '13', value: '13' }, { label: '14', value: '14' },
                    { label: '15', value: '15' }, { label: '16', value: '16' }, { label: '17', value: '17' },
                    { label: '18', value: '18' }, { label: '19', value: '19' }, { label: '20', value: '20' },
                    { label: '21', value: '21' }, { label: '22', value: '22' }, { label: '23', value: '23' },
                    { label: '24', value: '24' },
                  ]}
                  onChange={(e) => handleChange(e, "เวลาชั่วโมง")}
                  style={{ width: '100px', fontFamily: "Kanit, sans-serif", marginRight: '10px' }}
                  placeholder="ชั่วโมง"
                />
                <span style={{ color: "black", marginRight: '5px' }}>:</span>
                <Dropdown
                  optionLabel="label"
                  optionValue="value"
                  value={agenda.เวลานาที}
                  options={[
                    { label: '00', value: '00' }, { label: '01', value: '01' }, { label: '02', value: '02' },
                    { label: '03', value: '03' }, { label: '04', value: '04' }, { label: '05', value: '05' },
                    { label: '06', value: '06' }, { label: '07', value: '07' }, { label: '08', value: '08' },
                    { label: '09', value: '09' }, { label: '10', value: '10' }, { label: '11', value: '11' },
                    { label: '12', value: '12' }, { label: '13', value: '13' }, { label: '14', value: '14' },
                    { label: '15', value: '15' }, { label: '16', value: '16' }, { label: '17', value: '17' },
                    { label: '18', value: '18' }, { label: '19', value: '19' }, { label: '20', value: '20' },
                    { label: '21', value: '21' }, { label: '22', value: '22' }, { label: '23', value: '23' },
                    { label: '24', value: '24' },
                    { label: '25', value: '25' }, { label: '26', value: '26' }, { label: '27', value: '27' },
                    { label: '28', value: '28' }, { label: '29', value: '29' }, { label: '30', value: '30' },
                    { label: '31', value: '31' }, { label: '32', value: '32' }, { label: '33', value: '33' },
                    { label: '34', value: '34' }, { label: '35', value: '35' }, { label: '36', value: '36' },
                    { label: '37', value: '37' }, { label: '38', value: '38' }, { label: '39', value: '39' },
                    { label: '40', value: '40' }, { label: '41', value: '41' }, { label: '42', value: '42' },
                    { label: '43', value: '43' }, { label: '44', value: '44' }, { label: '45', value: '45' },
                    { label: '46', value: '46' }, { label: '47', value: '47' }, { label: '48', value: '48' },
                    { label: '49', value: '49' }, { label: '50', value: '50' }, { label: '51', value: '51' },
                    { label: '52', value: '52' }, { label: '53', value: '53' }, { label: '54', value: '54' },
                    { label: '55', value: '55' }, { label: '56', value: '56' }, { label: '57', value: '57' },
                    { label: '58', value: '58' }, { label: '59', value: '59' },
                  ]}
                  onChange={(e) => handleChange(e, "เวลานาที")}
                  style={{ width: '100px', fontFamily: "Kanit, sans-serif" }}
                  placeholder="นาที"
                />
                <span style={{ color: "black", marginLeft: '5px' }}>น.</span>
              </div>
              <br />
              <span style={{ color: "black" }}>สถานที่</span>
              <InputText
                value={agenda.สถานที่}
                onChange={(e) => handleChange(e, "สถานที่")}
                style={{ fontFamily: "Kanit, sans-serif", width: '500px' }}
              />
            </div>
          </div>
        </Panel><br />
    {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="ผู้เข้าร่วมการประชุม"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "100px" }}>
                    <span style={{ color: "black" }}>รายชื่อผู้เข้าร่วมการประชุม</span>
                    <InputTextarea
                      value={agenda.ผู้เข้าร่วมการประชุม}
                      onChange={(e) => handleChange(e, "ผู้เข้าร่วมการประชุม")}
                      rows={5}
                      cols={100}
                      style={{ fontFamily: "Kanit, sans-serif",width:'700px',height:'460px' }}
                    />
                    <span style={{ color: "black" }}>รายชื่อผู้ไม่เข้าร่วมการประชุม</span>
                    <InputTextarea
                      value={agenda.ผู้ไม่เข้าร่วมการประชุม}
                      onChange={(e) => handleChange(e, "ผู้ไม่เข้าร่วมการประชุม")}
                      rows={5}
                      cols={100}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />

                  </div>
                </div>
              </Panel><br/>
    {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="ระเบียบวาระที่  1"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "100px" }}>
                  <span style={{ color: "black" }}>หัวเรื่อง ระเบียบวาระที่ 1</span>
                    <InputText
                      placeholder=""
                      value={agenda.ระเบียบวาระที่1}
                      onChange={(e) => handleChange(e, "ระเบียบวาระที่1")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br />
                    <span style={{ color: "black" }}>รายระเอียดระเบียบวาระที่ 1</span>
                    <InputTextarea
                      value={agenda.ระเบียบวาระที่_1_1}
                      onChange={(e) => handleChange(e, "ระเบียบวาระที่_1_1")}
                      rows={5}
                      cols={100}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px',height:'400px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
    {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="ระเบียบวาระที่  2"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "100px" }}>
                  <span style={{ color: "black" }}>หัวเรื่อง ระเบียบวาระที่ 2</span>
                    <InputText
                      value={agenda.ระเบียบวาระที่2}
                      onChange={(e) => handleChange(e, "ระเบียบวาระที่2")}
                      rows={5}
                      cols={100}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <span style={{ color: "black" }}>รายระเอียดระเบียบวาระที่ 2</span>
                    <InputTextarea
                      value={agenda.ระเบียบวาระที่_2_1}
                      onChange={(e) => handleChange(e, "ระเบียบวาระที่_2_1")}
                      rows={5}
                      cols={100}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px',height:'200px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
    {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="ระเบียบวาระที่  3"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "100px" }}>
                  <span style={{ color: "black" }}>หัวเรื่อง ระเบียบวาระที่ 3</span>
                    <InputText
                      value={agenda.ระเบียบวาระที3}
                      onChange={(e) => handleChange(e, "ระเบียบวาระที่3")}
                      rows={5}
                      cols={100}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <span style={{ color: "black" }}>รายระเอียดระเบียบวาระที่ 3</span>
                    <InputTextarea
                      value={agenda.ระเบียบวาระที่_3_1}
                      onChange={(e) => handleChange(e, "ระเบียบวาระที่_3_1")}
                      rows={5}
                      cols={100}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px',height:'200px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
    {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="ระเบียบวาระที่  4"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "100px" }}>
                  <span style={{ color: "black" }}>หัวเรื่อง ระเบียบวาระที่ 4</span>
                    <InputText
                      value={agenda.ระเบียบวาระที่4}
                      onChange={(e) => handleChange(e, "ระเบียบวาระที่4")}
                      rows={5}
                      cols={100}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <span style={{ color: "black" }}>รายระเอียดระเบียบวาระที่ 4</span>
                    <InputTextarea
                      value={agenda.ระเบียบวาระที่_4_1}
                      onChange={(e) => handleChange(e, "ระเบียบวาระที่_4_1")}
                      rows={5}
                      cols={100}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
    {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="ระเบียบวาระที่  5"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "100px" }}>
                  <span style={{ color: "black" }}>หัวเรื่อง ระเบียบวาระที่ 5</span>
                    <InputText
                      value={agenda.ระเบียบวาระที่5}
                      onChange={(e) => handleChange(e, "ระเบียบวาระที่5")}
                      rows={5}
                      cols={100}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <span style={{ color: "black" }}>รายระเอียดระเบียบวาระที่ 5</span>
                    <InputTextarea
                      value={agenda.ระเบียบวาระที่_5_1}
                      onChange={(e) => handleChange(e, "ระเบียบวาระที่_5_1")}
                      rows={5}
                      cols={100}
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

export default Agenda