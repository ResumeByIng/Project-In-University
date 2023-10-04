import React, { useState } from 'react'

import 'primereact/resources/themes/saga-blue/theme.css'; // เลือก theme ตามที่คุณต้องการ
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Panel } from 'primereact/panel';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';

function TQF7_1() {

    // const [courseCode,setCoureCode] = useState(null);

  
      return (
        <div>
            <Panel header="รหัสหลักสูตร">
            {/***********************************************/}
            <div>
                <span>รหัสหลักสูตร</span>
                <InputText value='25531661101735'/><br/><br/>
                <span>วัตถุประสงค์ของหลักสูตร</span>
                <InputTextarea value=''/><br/><br/>
                <span>คุณลักษณะบัณฑิตที่พึงประสงค์ของหลักสูตร</span>
                <InputTextarea value=''/>
            </div>
            {/***********************************************/}
          </Panel><br/><br/>
          <Panel header="รายชื่ออาจารย์ผู้รับผิดชอบหลักสูตร">
            {/***********************************************/}
            <div>
                <span>*เดี๋ยวกลับมาทำ*เป็นตาราง</span>
            </div>
            {/***********************************************/}
          </Panel><br/><br/>
          <Panel header="คุณวุฒิอาจารย์ผู้รับผิดชอบหลักสูตร">
            {/***********************************************/}
            <div>
                <span>*เดี๋ยวกลับมาทำ*เป็นตาราง</span>
            </div>
            {/***********************************************/}
          </Panel><br/><br/>
          <Panel header="รายชื่ออาจารย์ผู้สอน">
            {/***********************************************/}
            <div>
                <span>*เดี๋ยวกลับมาทำ*เป็นตาราง</span>
            </div>
            {/***********************************************/}
          </Panel><br/><br/>
          <Panel header="ตัวบ่งชี้ที่ 1.1">
            {/***********************************************/}
            <div>
                <span>*เดี๋ยวกลับมาทำ*เป็นตาราง</span>
                <span>ผลการดำเนินงาน</span>
                <InputTextarea value='ผลการประเมินตัวบ่งชี้ที่ 1.1 หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์ “ผ่าน” ตามเกณฑ์มาตรฐานหลักสูตร พ.ศ. 2558 และกรอบมาตรฐานคุณวุฒิระดับอุดมศึกษาแห่งชาติ พ.ศ. 2558'/><br/><br/>
            </div>
            {/***********************************************/}
          </Panel><br/><br/>
        </div>
      )
    }

    export default TQF7_1
