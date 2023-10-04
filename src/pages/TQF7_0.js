import React, { useState } from 'react'

import 'primereact/resources/themes/saga-blue/theme.css'; // เลือก theme ตามที่คุณต้องการ
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Panel } from 'primereact/panel';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


function TQF7_0() {

  const [dates2, setDates2] = useState(null);
  const [date10, setDate10] = useState(null);

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
  
  return (
    <div>
      <Panel header="สร้างผลการดำเนินงาน">
        {/***********************************************/}
        <div className="field col-12 md:col-4">
          <label htmlFor="range">ระยะเวลาดำเนินงาน <br/><br/></label>
            <Calendar
            id="range"
            value={dates2}
            onChange={(e) => setDates2(e.value)} // ใช้ setDates2 เพื่ออัปเดตค่า dates2
            selectionMode="range"
            readOnlyInput
          />
        </div>
        <br/>
        {/***********************************************/}
        <div className="field col-12 md:col-4">
          <label htmlFor="yearpicker">ปีการศึกษา<br/><br/></label>
          <Calendar id="yearpicker" 
          value={date10} 
          onChange={(e) => setDate10(e.value)} 
          view="year" 
          dateFormat="yy" />
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="เลือกหลักสูตร">
        {/***********************************************/}
        <div>
          <span>ชื่อหลักสูตร(ภาษาไทย)</span>
          <InputText value='วิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร'/>
          <span>หลักสูตรปรับปรุงปี</span>
          <InputText value='2563'/>
        </div>
        {/***********************************************/}
        <div>
          <span>ชื่อหลักสูตร(ภาษาอังกฤษ)</span>
          <InputText value='Bachelor of Engineering Program in Computer Engineering'/>
          <span>ชื่อย่อ</span>
          <InputText value='วศ.บ.(วิศวกรรมคอมพิวเตอร์)'/>
        </div>
        {/***********************************************/}
        <div>
          <span>คณะ</span>
          <InputText value='คณะเทคโนโลยีอุตสาหกรรม'/>
          <span>มหาวิทยาลัย</span>
          <InputText value='มหาวิทยาลัยราชภัฏสวนสุนันทา'/>
        </div>
        {/***********************************************/}
        <div>
          <span>ปีเกณฑ์มาตรฐานหลักสูตร</span>
          <InputText value='2558'/>
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="บทสรุปผู้บริหาร">
        {/***********************************************/}
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <InputTextarea autoResize rows={4} cols={80}  value='' />
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="สรุปผลการประเมินตนเองตามองค์ประกอบ">
        {/***********************************************/}
        <div className="datatable-wrapper">
        <DataTable value={tableData}>
          <Column field="องค์ประกอบ" header="องค์ประกอบ" />
          <Column
            field="คะแนนการประเมินเฉลี่ย"
            header="คะแนนการประเมินเฉลี่ย"
            editor={(props) => (
              <InputText
                type="number"
                {...props}
                onFocus={(e) => onEditorOpen(props)}
                onBlur={onEditorClose}
              ></InputText>
            )}
          />
          <Column field="ระดับคุณภาพ" header="ระดับคุณภาพ" />
          <Column field="หมายเหตุ" header="หมายเหตุ" />
        </DataTable>
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="คำนำ">
        {/***********************************************/}
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <span>คำนำ</span>
        <InputTextarea autoResize rows={4} cols={80}  value='หลักสูตรวิศวกรรมศาสตรบัณฑิตสาขาวิชาวิศวกรรมคอมพิวเตอร์คณะเทคโนโลยีอุตสาหกรรมมหาวิทยาลัยราชภัฏสวนสุนันทา จัดท ารายงานผลการด าเนินงานของหลักสูตร (มคอ. 7) ที่เป็นรายงาน การประเมินตนเอง(SelfAssessmentReport) ฉบับนี้ขึ้นมาเพื่อวิเคราะห์และประเมินผลการด าเนินงานตามเกณฑ์คุณภาพการศึกษาภายใน ประจ าปีการศึกษา 2564 (1 สิงหาคม 2564-31กรกฎาคม2565)ภายใต้ระบบและกลไกการประกันคุณภาพ6องค์ประกอบ14ตัวบ่งชี้โดยการรวบรวมและสังเคราะห์ผลการด าเนินงานของหลักสูตร ประจ าปีการศึกษา 2564 หวังเป็นอย่างยิ่งว่ารายงานผลการด าเนินงานของหลักสูตร (มคอ. 7) ที่เป็นรายงานการประเมินตนเอง (Self-Assessment Report) ฉบับนี้ จะสะท้อนผลการด าเนินงาน จุดเด่น จุดที่ควรพัฒนา เพื่อเป็นโอกาสให้หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์คณะเทคโนโลยีอุตสาหกรรมมหาวิทยาลัยราชภัฏสวนสุนันทาน าไปพัฒนาปรับปรุงคุณภาพการจัดการศึกษาสู่ความเป็นเลิศในอนาคตรวมทั้งเป็นการให้ความเชื่อมั่นแก่ผู้รับบริการและผู้มีส่วนได้ส่วนเสียตลอดจนประชาชนทั่วไปต่อคุณภาพการจัดการศึกษาของหลักสูตรวิศวกรรมศาสตรบัณฑิตสาขาวิชาวิศวกรรมคอมพิวเตอร์คณะเทคโนโลยีอุตสาหกรรมมหาวิทยาลัยราชภัฏสวนสุนันทาท้ายนี้ขอขอบคุณผู้บริหารคณาจารย์และบุคลากรทุกฝ่ายที่ให้ความร่วมมือในการปฏิบัติงานและมีความมุ่งมั่นที่จะร่วมกันพัฒนาคุณภาพมาอย่างต่อเนื่องจนท าให้การด าเนินงานด้านการประกันคุณภาพการศึกษาภายในของหลักสูตรวิศวกรรมศาสตรบัณฑิตสาขาวิชาวิศวกรรมคอมพิวเตอร์คณะเทคโนโลยีอุตสาหกรรมมหาวิทยาลัยราชภัฏสวนสุนันทา สำเร็จไปได้ด้วยดี
        '/>
        </div>
        {/***********************************************/}
        <span>ลงชื่อ</span>
        {/***********************************************/}
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <InputTextarea autoResize rows={4} cols={80}  value='อาจารย์ ผศ.ดร.รวิ อุตตมธนินทร์ประธานหลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์วันที่ 31 กรกฎาคม พ.ศ. 2564'/>
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="ประวัติความเป็นมาของหลักสูตร">
        {/***********************************************/}
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <InputTextarea autoResize rows={4} cols={80}  value='' />
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="ผลการปรับปรุงตามข้อเสนอแนะของผลการประเมินปีที่ผ่านมา">
        {/***********************************************/}
        <div>
          ต้องเป็นตาราง ขก. อยู่
        </div>
        {/***********************************************/}
      </Panel>
    </div>
  )
}

export default TQF7_0
