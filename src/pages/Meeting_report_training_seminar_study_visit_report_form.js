import React, { useEffect, useState } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { ScrollPanel } from "primereact/scrollpanel";
import { InputTextarea } from "primereact/inputtextarea";


function Meeting_report_training_seminar_study_visit_report_form() {
  const [professors, setProfessors] = useState([]);
  const PizZip = require("pizzip");
  const Docxtemplater = require("docxtemplater");
  const options = [
    { value: 'mrtssvrf', label: 'mrtssvrf' },
    { value: 'mrtssvrf1', label: 'mrtssvrf1' }
  ];

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

  const [mrtssvrf, setMrtssvrf] = useState({
    
    ชื่อนามสกุล: "นายเศรษฐกาล โปร่งนุช",
    ตำแหน่ง: "อาจารย์",
    กลุ่มบุคลากร: "สายวิชาการ",
    เนื้อหาหลักสูตร: "๒.๑ งานประชุมวิชาการทางวิศวกรมไฟฟ้าครั้งที่๓๙(EECON-39)",
    เนื้อหาวิทยากร: "๓.๑ Prof.Somsak Panykeow, Chulalongkorn University \n ๓.๒ Prof.Masayuki Ikebe, Hokkaido University, Japan \n ๓.๓ Mr.Chaiyot Piyawannarat, ABB Thailand \n Mr.Phongsak Al-Umaree, Siemens",
    เนื้อหาสถาบันหรือหน่วยงาน: "๔.๑ ภาควิชาวิศกรรมไฟฟ้าคณะวิศกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
    เนื้อหาระยะเวลา: "วันที่ ๒ -๔พฤศจิกายน๒๕๕๙ณโรงแรมเดอะรีเจ้นท์ ชะอําบีชรีสอร์ทจังหวัดเพชรบุรี",
    เนื้อหางบประมาณ: "๔,๔๐๐ บาท",
    เนื้อหาวัตถุประสงค์: "การประชุมวิชาการทางวิศวกรรมไฟฟ้า (Electrical Engineering Conference หรือ EECON) เป็นการประชุมทางวิชาการระดับชาติ ที่จัดขึ้นเพื่อพัฒนาความเข้มแข็งทางวิทยาศาสตร์และเทคโนโลยี โดยเฉพาะอย่างยิ่งการเพิ่มขีดความสามารถในด้านการวิจัยในศาสตร์สาขาทางวิศวกรรมไฟฟ้าของคณาจารย์ นิสิต นักศึกษา นักวิจัย รวมถึงวิศวกร และผู้ปฏิบัติงานในสาขาวิศวกรรมไฟฟ้า และสาขาอื่น ๆ ที่เกี่ยวข้องจากสถาบันการศึกษา และ หน่วยงานต่าง ๆ เพื่อนำเสนอผลงานวิจัย แลกเปลี่ยนความคิดเห็นทางด้านงานวิจัยและเสริมสร้างความสัมพันธ์อันดีระหว่างกันทั้งยังช่วยให้เกิดความร่วมมือระหว่างสถาบันการศึกษาภาครัฐและภาคผู้ประกอบการ",
    เนื้อหาสรุปสาระของการประชุม: "ได้นำเสนอผลงานวิจัยของคณาจารย์ที่เป็นตัวแทนมหาวิทยาลัยราชภัฏสวนสุนันทา รวมทั้งได้แลกเปลี่ยนความคิดเห็นทางด้านงานวิจัย และเสริมสร้างความสัมพันธ์อันดีระหว่างกัน",
    เนื้อหาปัญหาอุปสรรค: "ไม่มี",
    เนื้อหาประโยชน์ที่ได้รับต่อตนเอง: "ได้รู้จักเทคโนโลยีใหม่ๆ และการวิจัยในศาสตร์สาขาทางวิศวกรรมไฟฟ้า อีกทั้งรับฟัง \n ความคิดเห็นและข้อเสนอแนะจากผู้เข้าร่วมประชุมในครั้งนี้เพื่อนำไปปรับ/พัฒนาตนเองในการวิจัยต่อไป",
    เนื้อหาประโยชน์ที่ได้รับต่อมหาวิทยาลัย: "สร้างชื่อเสียงให้มหาวิทยาลัยราชภัฏสวนสุนันทาเป็นที่รู้จักในระดับประเทศ",
    เนื้อหาเอกสารหรืออื่นๆ:"เอกสารประกอบการประชุมการนําเสนอผลงานวิชาการทางวิศวกรรมไฟฟ้าครั้งที่๓๙(EECON-39)",
    เนื้อหาสำเนาประกาศนียบัตรวุฒิบัตร: "ประกาศนียบัตรจากการเข้าร่วมการประ ชุมและproceeding",
    เนื้อหาความคิดเห็นและข้อเสนอแนะอื่นๆ: "เป็นการประชุมที่น่าสนใจเป็นอย่างยิ่งควรสนับสนุนให้สาขาวิชาภายในมหาวิทยาลัยที่เกี่ยวข้องไปเข้าร่วมการประชุมต่อไป",
  });

    const [mrtssvrf1, setMrtssvrf1] = useState({
    ชื่อนามสกุล: "ขวัญเรือน รัศมี",
    ตำแหน่ง: "อาจารย์",
    กลุ่มบุคลากร: "",
    เนื้อหาหลักสูตร: "โครงการอบรมเรื่อง “โปรแกรม Minitab วิเคราะห์สถิติเพื่อการวิจัย”",
    เนื้อหาวิทยากร: "รศ.ดร.ยุทธ  ไกยวรรณ	",
    เนื้อหาสถาบันหรือหน่วยงาน: "มหาวิทยาลัยราชภัฏพระนคร",
    เนื้อหาระยะเวลา: "วันที่ ๒๖ มีนาคม ๒๕๖๑",
    เนื้อหางบประมาณ: "๓,๐๐๐  บาท",
    เนื้อหาวัตถุประสงค์: "เพื่อให้บุคลากรมีความรู้ความสามารถทางด้านการวิเคราะข้อมูลสถิติเพื่อการวิจัย",
    เนื้อหาสรุปสาระของการประชุม: "เป็นการอบรมหลักสูตร “โปรแกรม Minitab วิเคราะห์สถิติเพื่อการวิจัย” ทำให้ผู้เข้าอบรมมีความสามารถในการใช้โปรแกรม Minitab และผู้เข้าอบรมสามารถนำทักษะไปใช้ในการวิเคราะห์ข้อมูลในด้านต่างๆๆให้มีความเชี่ยวชาญมากยิ่งขึ้น",
    เนื้อหาปัญหาอุปสรรค: "-",
    เนื้อหาประโยชน์ที่ได้รับต่อตนเอง: "ทำให้มีความรู้ในการใช้โปรแกรม Minitab",
    เนื้อหาประโยชน์ที่ได้รับต่อมหาวิทยาลัย: "สามารถนำทักษะการใช้โปรแกรม Minitab เพื่อการวิเคราะห์ข้อมูลในด้านต่างๆ",
    เนื้อหาเอกสารหรืออื่นๆ:"หนังสือการใช้โปรแกรม Minitab",
    เนื้อหาสำเนาประกาศนียบัตรวุฒิบัตร: "ประกาศนียบัตรการใช้โปรแกรม Minitab",
    เนื้อหาความคิดเห็นและข้อเสนอแนะอื่นๆ: "-",
    วันที่ลงชื่อ: "",
  });

  const [mrtssvrf2, setMrtssvrf2] = useState({
    ชื่อนามสกุล: "",
    ตำแหน่ง: "",
    กลุ่มบุคลากร: "",
    เนื้อหาหลักสูตร: "",
    เนื้อหาวิทยากร: "",
    เนื้อหาสถาบันหรือหน่วยงาน: "",
    เนื้อหาระยะเวลา: "",
    เนื้อหางบประมาณ: "",
    เนื้อหาวัตถุประสงค์: "",
    เนื้อหาสรุปสาระของการประชุม: "",
    เนื้อหาปัญหาอุปสรรค: "",
    เนื้อหาประโยชน์ที่ได้รับต่อตนเอง: "",
    เนื้อหาประโยชน์ที่ได้รับต่อมหาวิทยาลัย: "",
    เนื้อหาเอกสารหรืออื่นๆ:"",
    เนื้อหาสำเนาประกาศนียบัตรวุฒิบัตร: "",
    เนื้อหาความคิดเห็นและข้อเสนอแนะอื่นๆ: "",
    วันที่ลงชื่อ: "",
  });


  const handleGenerateDocx = async (e) => {
    e.preventDefault();
    try {
      // เรียก API เพื่อดึงข้อมูลเทมเพลต DOCX
      const response = await axios.get("https://project-in-back.vercel.app/api/gettqf7", {
        params: { id: "5" },
        responseType: "arraybuffer",
      });
      const userFormData = mrtssvrf;

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
      link.download = `ฟอร์มแบบรายงานการประชุม.docx`;
      link.click();
    } catch (error) {
      console.error("Error generating document:", error);
    }
  };
  let doc;

  const handleChange = (event, property) => {
    setMrtssvrf((prevData) => ({
      ...prevData,
      [property]: event.target.value,
    }));
    if (doc) {
      doc.setData(mrtssvrf);
    }
  };
  return (
    <form onSubmit={handleGenerateDocx}>
      <div style={{ width: "1600px", marginLeft: "10px" }}>
        <ScrollPanel style={{ width: "100%", height: "1000px" }}>
          {/*///////////////////////////////////////////////////////////////*/}
          <Panel
            style={{ fontFamily: "Kanit, sans-serif" }}
            header="๑.ข้อมูลส่วนบุคคล"
          >
            <div className="field col-12 md:col-4">
              <div style={{ marginBottom: "10px", width: "100px" }}>
                <span style={{ color: "black" }}>ชื่อ - สกุล</span>
                <Dropdown
                  optionLabel="label"
                  value={mrtssvrf.ชื่อนามสกุล}
                  options={professors}
                  onChange={(e) => handleChange(e, "ชื่อนามสกุล")}
                  style={{ fontFamily: "Kanit, sans-serif", width: '200px', marginTop: '10px' }}
                  placeholder="เลือกชื่อ - นามสกุล"
                  placeholderStyle={{ fontFamily: "Kanit, sans-serif" }}
                />
              </div>
            </div>
          </Panel><br/>
{/*///////////////////////////////////////////////////////////////*/}
          <Panel
            style={{ fontFamily: "Kanit, sans-serif" }}
            header="๒.หลักสูตรหรือเรื่องที่เข้าร่วมประชุม/ฝึกอบรม/สัมนา/ศึกษาดูงาน"
          >
            <div className="field col-12 md:col-4">
              <div style={{ marginBottom: "10px", width: "100px" }}>
                <InputTextarea
                  value={mrtssvrf.เนื้อหาหลักสูตร}
                  onChange={(e) => handleChange(e, "เนื้อหาหลักสูตร")}
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
            header="๓.วิทยากรในการประชุม/ฝึกอบรม/สัมนา/ศึกษาดูงาน"
          >
            <div className="field col-12 md:col-4">
              <div style={{ marginBottom: "10px", width: "100px" }}>
                <InputTextarea
                  value={mrtssvrf.เนื้อหาวิทยากร}
                  onChange={(e) => handleChange(e, "เนื้อหาวิทยากร")}
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
            header="๔.สถาบันหรือหน่วยงานที่จัดประชุม/ฝึกอบรม/สัมนา/ศึกษาดูงาน"
          >
            <div className="field col-12 md:col-4">
              <div style={{ marginBottom: "10px", width: "100px" }}>
                <InputTextarea
                  value={mrtssvrf.เนื้อหาสถาบันหรือหน่วยงาน}
                  onChange={(e) => handleChange(e, "เนื้อหาสถาบันหรือหน่วยงาน")}
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
            header="๕.ระยะเวลาที่เข้ารับการประชุม/ฝึกอบรม/สัมมนา/ศึกษาดูงาน"
          >
            <div className="field col-12 md:col-4">
              <div style={{ marginBottom: "10px", width: "100px" }}>
                <InputTextarea
                  value={mrtssvrf.เนื้อหาระยะเวลา}
                  onChange={(e) => handleChange(e, "เนื้อหาระยะเวลา")}
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
            header="๖.งบประมาณที่ใช้ในการประชุม/ฝึกอบรม/สัมมนา/ศึกษาดูงาน"
          >
            <div className="field col-12 md:col-4">
              <div style={{ marginBottom: "10px", width: "100px" }}>
                <InputTextarea
                  value={mrtssvrf.เนื้อหางบประมาณ}
                  onChange={(e) => handleChange(e, "เนื้อหางบประมาณ")}
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
            header="๗.วัตถุประสงค์ของการประชุม/ฝึกอบรม/สัมนา/ศึกษาดูงาน"
          >
            <div className="field col-12 md:col-4">
              <div style={{ marginBottom: "10px", width: "100px" }}>
                <InputTextarea
                  value={mrtssvrf.เนื้อหาวัตถุประสงค์}
                  onChange={(e) => handleChange(e, "เนื้อหาวัตถุประสงค์")}
                  rows={5}
                  cols={100}
                  style={{ fontFamily: "Kanit, sans-serif",width:'700px',height:'200px' }}
                />
              </div>
            </div>
          </Panel><br/>
{/*///////////////////////////////////////////////////////////////*/}
          <Panel
            style={{ fontFamily: "Kanit, sans-serif" }}
            header="๘.สรุปเนื้อหาสาระของการประชุม/ฝึกอบรม/สัมนา/ศึกษาดูงาน"
          >
            <div className="field col-12 md:col-4">
              <div style={{ marginBottom: "10px", width: "100px" }}>
                <InputTextarea
                  value={mrtssvrf.เนื้อหาสรุปสาระของการประชุม}
                  onChange={(e) =>
                    handleChange(e, "เนื้อหาสรุปสาระของการประชุม")
                  }
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
            header="๙.ปัญหาอุปสรรคในการประชุม/ฝึกอบรม/สัมนา/ศึกษาดูงาน"
          >
            <div className="field col-12 md:col-4">
              <div style={{ marginBottom: "10px", width: "100px" }}>
                <InputTextarea
                  value={mrtssvrf.เนื้อหาปัญหาอุปสรรค}
                  onChange={(e) => handleChange(e, "เนื้อหาปัญหาอุปสรรค")}
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
            header="๑๐.ประโยชน์ที่ได้รับจาการประชุม/ฝึกอบรม/สัมมนา/ศึกษาดูงาน"
          >
            <div className="field col-12 md:col-4">
              <div style={{ marginBottom: "10px", width: "500px" }}>
                <span> เนื้อหาประโยชน์ที่ได้รับต่อตนเอง </span>
                <InputTextarea
                  value={mrtssvrf.เนื้อหาประโยชน์ที่ได้รับต่อตนเอง}
                  onChange={(e) => handleChange(e, "เนื้อหาประโยชน์ที่ได้รับต่อตนเอง")}
                  rows={5}
                  cols={100}
                  style={{ fontFamily: "Kanit, sans-serif",width:'500px',marginTop:'10px' }}
                />
                <span> เนื้อหาประโยชน์ที่ได้รับต่อมหาวิทยาลัย </span>
                <InputTextarea
                  value={mrtssvrf.เนื้อหาประโยชน์ที่ได้รับต่อมหาวิทยาลัย}
                  onChange={(e) => handleChange(e, "เนื้อหาประโยชน์ที่ได้รับต่อมหาวิทยาลัย")}
                  rows={5}
                  cols={100}
                  style={{ fontFamily: "Kanit, sans-serif",width:'500px',marginTop:'10px' }}
                />
              </div>
            </div>
          </Panel><br/>
{/*///////////////////////////////////////////////////////////////*/}
          <Panel
            style={{ fontFamily: "Kanit, sans-serif" }}
            header="๑๑.เอกสารหรืออื่นๆที่เกี่ยวข้องที่ได้รับจากการประชุม/ฝึกอบรม/สัมมนา/ศึกษาดูงาน"
          >
            <div className="field col-12 md:col-4">
              <div style={{ marginBottom: "10px", width: "100px" }}>
                <InputTextarea
                  value={mrtssvrf.เนื้อหาเอกสารหรืออื่นๆที่เกี่ยวข้อง}
                  onChange={(e) =>
                    handleChange(e, "เนื้อหาเอกสารหรืออื่นๆที่เกี่ยวข้อง")
                  }
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
            header="๑๒. สำเนาประกาศนียบัตร/วุฒิบัตรที่ได้รับจากการประชุม/ฝึกอบรม/สัมมนา/ศึกษาดูงาน"
          >
            <div className="field col-12 md:col-4">
              <div style={{ marginBottom: "10px", width: "100px" }}>
                <InputTextarea
                  value={mrtssvrf.เนื้อหา}
                  onChange={(e) => handleChange(e, "เนื้อหาวิทยากร")}
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
            header="ความคิดเห็นและข้อเสนอแนะ อื่นๆ"
          >
            <div className="field col-12 md:col-4">
              <div style={{ marginBottom: "10px", width: "100px" }}>
                <InputTextarea
                  value={mrtssvrf.เนื้อหาวิทยากร}
                  onChange={(e) => handleChange(e, "เนื้อหาวิทยากร")}
                  rows={5}
                  cols={100}
                  style={{ fontFamily: "Kanit, sans-serif",width:'500px' }}
                />
              </div>
              <button style={{ width: "100px",marginLeft:'1300px',backgroundColor:'green' }} type="button" onClick={handleGenerateDocx}>
                ยืนยัน            
            </button>
            </div>
          </Panel>
        </ScrollPanel>
      </div>
    </form>
  );
}

export default Meeting_report_training_seminar_study_visit_report_form;
