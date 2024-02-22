import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Panel } from 'primereact/panel';
import { ScrollPanel } from 'primereact/scrollpanel';
import React, { useEffect , useState } from 'react'
import axios from 'axios';
import { Dropdown } from "primereact/dropdown";

function Research() {
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

    const positions = [
      { label: "ผู้ช่วยศาสตราจารย์", value: "ผู้ช่วยศาสตราจารย์" },
      // เพิ่มตำแหน่งอื่น ๆ ตามความเหมาะสม
    ];

    const [agenda, setAgenda] = useState({

    ชื่ออาจารย์1:'1. นายรวิ อุตตมธนินทร์',
	ตำแหน่งทางวิชาการ1:'ผู้ช่วยศาสตราจารย์',
    ผลงานทางวิชาการ1:'Charernburanopas, P., Rusmee, K. and Uttamatanin R. (2023). Enhancing Forex Trading With Reinforcement Learnning : A Stablebaselines3 Approach. Proceedings of The 19th International and National conference in Applied Computer Technology and Information System. Bangkok : Southeast Bangkok University, pp 366-373, 31 March 2023',

    ชื่ออาจารย์2:'2. นางสาวขวัญเรือน รัศมี',
	ตำแหน่งทางวิชาการ2:'ผู้ช่วยศาสตราจารย์',
    ผลงานทางวิชาการ2:'Charernburanopas, P., Rusmee, K. and Uttamatanin R. (2023). Enhancing Forex Trading With Reinforcement Learnning : A Stablebaselines3 Approach. Proceedings of  The 19th International and National conference in Applied Computer Technology and Information System. Bangkok : Southeast Bangkok University,pp.366-373, 31 March 2023. /n ฉัตรชัย ไชยโชค, มัทธนา มาตย์วงศ์, ขวัญเรีอน รัศมี, เศรษฐกาล โปร่งนุช. (2566). โมไบล์แอปพลิเคชันนำทางแสดงความเป็นจริงเสริม เพื่อศึกษาสถาปัตยกรรมอาคารตำหนักในมหาวิทยาลัยราชภัฏสวนสุนันทา, Journal of EngineeringSiam University Vol. 24 No.46 ปีที่ 24 ฉบับที่ 1ลำดับที่ 46 หน้า 12-23, มกราคม-มิถุนายน 2566.(TCI กลุ่มที่ 2)',

    ชื่ออาจารย์3:'',
	ตำแหน่งทางวิชาการ3:'',
    ผลงานทางวิชาการ3:'',

    ชื่ออาจารย์4:'',
	ตำแหน่งทางวิชาการ4:'',
    ผลงานทางวิชาการ4:'',

    ชื่ออาจารย์5:'',
	ตำแหน่งทางวิชาการ5:'',
    ผลงานทางวิชาการ5:'',
    
      });

    const handleGenerateDocx = async (e) => {
        e.preventDefault();
        try {
          // เรียก API เพื่อดึงข้อมูลเทมเพลต DOCX
          const response = await axios.get("https://project-in-back.vercel.app/api/gettqf7", {
            params: { id: "7" },
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
          link.download = `ฟอร์มวิจัย.docx`;
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
          <ScrollPanel style={{ width: "100%", height: "100vh", overflowY:'auto' }}>
              {/*///////////////////////////////////////////////////////////////*/}
              <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="FORM 1"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "500px" }}>
                    <span style={{ color: "black" }}>ชื่อ-นามสกุล</span>
                    <Dropdown
                      optionLabel="label"
                      value={agenda.ชื่ออาจารย์1}
                      options={professors}
                      onChange={(e) => handleChange(e, "ชื่ออาจารย์1")}
                      placeholder="เลือกชื่อ - สกุล"
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px',marginTop:'10px'}}
                    />
                    <br/><br/>
                    <span style={{ color: "black" }}>ตำแหน่งทางวิชาการ</span>
                    <Dropdown
                      optionLabel="label"
                      value={agenda.ตำแหน่งทางวิชาการ1}
                      options={positions}
                      onChange={(e) => handleChange(e, "ตำแหน่งทางวิชาการ1")}
                      placeholder="เลือกตำแหน่งทางวิชาการ"
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px',marginTop:'10px' }}
                    />
                    <br/><br/>
                    <span style={{ color: "black" }}>ผลงานทางวิชาการ/การวิจัย/การแต่งตำรา</span>
                    <InputTextarea
                    autoResize
                      value={agenda.ผลงานทางวิชาการ1}
                      onChange={(e) => handleChange(e, "ผลงานทางวิชาการ1")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px',height:'200px',marginTop:'10px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
    {/*///////////////////////////////////////////////////////////////*/}
    <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="FORM 2"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "500px" }}>
                    <span style={{ color: "black" }}>ชื่อ-นามสกุล</span>
                    <Dropdown
                      optionLabel="label"
                      value={agenda.ชื่ออาจารย์2}
                      options={professors}
                      onChange={(e) => handleChange(e, "ชื่ออาจารย์2")}
                      placeholder="เลือกชื่อ - สกุล"
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br/><br/>
                    <span style={{ color: "black" }}>ตำแหน่งทางวิชาการ</span>
                    <Dropdown
                      optionLabel="label"
                      value={agenda.ตำแหน่งทางวิชาการ2}
                      options={positions}
                      onChange={(e) => handleChange(e, "ตำแหน่งทางวิชาการ2")}
                      placeholder="เลือกตำแหน่งทางวิชาการ"
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br/><br/>
                    <span style={{ color: "black" }}>ผลงานทางวิชาการ/การวิจัย/การแต่งตำรา</span>
                    <InputTextarea
                    autoResize
                      value={agenda.ผลงานทางวิชาการ2}
                      onChange={(e) => handleChange(e, "ผลงานทางวิชาการ2")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px',height:'200px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
    {/*///////////////////////////////////////////////////////////////*/}
    <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="FORM 3"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "500px" }}>
                    <span style={{ color: "black" }}>ชื่อ-นามสกุล</span>
                    <Dropdown
                      optionLabel="label"
                      value={agenda.ชื่ออาจารย์3}
                      options={professors}
                      onChange={(e) => handleChange(e, "ชื่ออาจารย์3")}
                      placeholder="เลือกชื่อ - สกุล"
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br/><br/>
                    <span style={{ color: "black" }}>ตำแหน่งทางวิชาการ</span>
                    <Dropdown
                      optionLabel="label"
                      value={agenda.ตำแหน่งทางวิชาการ3}
                      options={positions}
                      onChange={(e) => handleChange(e, "ตำแหน่งทางวิชาการ3")}
                      placeholder="เลือกตำแหน่งทางวิชาการ"
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br/><br/>
                    <span style={{ color: "black" }}>ผลงานทางวิชาการ/การวิจัย/การแต่งตำรา</span>
                    <InputTextarea
                    autoResize
                      value={agenda.ผลงานทางวิชาการ3}
                      onChange={(e) => handleChange(e, "ผลงานทางวิชาการ3")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px',height:'200px' }}
                    />
                  </div>
                </div>
              </Panel><br/>
    {/*///////////////////////////////////////////////////////////////*/}
    <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="FORM 4"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "500px" }}>
                    <span style={{ color: "black" }}>ชื่อ-นามสกุล</span>
                    <Dropdown
                      optionLabel="label"
                      value={agenda.ชื่ออาจารย์4}
                      options={professors}
                      onChange={(e) => handleChange(e, "ชื่ออาจารย์4")}
                      placeholder="เลือกชื่อ - สกุล"
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br/><br/>
                    <span style={{ color: "black" }}>ตำแหน่งทางวิชาการ</span>
                    <Dropdown
                      optionLabel="label"
                      value={agenda.ตำแหน่งทางวิชาการ4}
                      options={positions}
                      onChange={(e) => handleChange(e, "ตำแหน่งทางวิชาการ4")}
                      placeholder="เลือกตำแหน่งทางวิชาการ"
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br/><br/>
                    <span style={{ color: "black" }}>ผลงานทางวิชาการ/การวิจัย/การแต่งตำรา</span>
                    <InputTextarea
                    autoResize
                      value={agenda.ผลงานทางวิชาการ4}
                      onChange={(e) => handleChange(e, "ผลงานทางวิชาการ4")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' ,height:'200px'}}
                    />
                  </div>
                </div>
              </Panel><br/>
    {/*///////////////////////////////////////////////////////////////*/}
    <Panel
                style={{ fontFamily: "Kanit, sans-serif" }}
                header="FORM 5"
              >
                <div className="field col-12 md:col-4">
                  <div style={{ marginBottom: "10px", width: "500px" }}>
                    <span style={{ color: "black" }}>ชื่อ-นามสกุล</span>
                    <Dropdown
                      optionLabel="label"
                      value={agenda.ชื่ออาจารย์5}
                      options={professors}
                      onChange={(e) => handleChange(e, "ชื่ออาจารย์5")}
                      placeholder="เลือกชื่อ - สกุล"
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br/><br/>
                    <span style={{ color: "black" }}>ตำแหน่งทางวิชาการ</span>
                    <Dropdown
                      optionLabel="label"
                      value={agenda.ตำแหน่งทางวิชาการ5}
                      options={positions}
                      onChange={(e) => handleChange(e, "ตำแหน่งทางวิชาการ5")}
                      placeholder="เลือกตำแหน่งทางวิชาการ"
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                    />
                    <br/><br/>
                    <span style={{ color: "black" }}>ผลงานทางวิชาการ/การวิจัย/การแต่งตำรา</span>
                    <InputTextarea
                    autoResize
                      value={agenda.ผลงานทางวิชาการ5}
                      onChange={(e) => handleChange(e, "ผลงานทางวิชาการ5")}
                      style={{ fontFamily: "Kanit, sans-serif",width:'500px',height:'200px' }}
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

export default Research