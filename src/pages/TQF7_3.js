import React, { useState } from 'react'

import { Panel } from 'primereact/panel'
import { InputTextarea } from 'primereact/inputtextarea'
import { ScrollPanel } from 'primereact/scrollpanel';

function TQF7_3() {

  const [dataTqf7_3, setDateTqf7_3] = useState({

    การรับนักศึกษา : "",

  });

  return (
    <div style={{ width: '100%',marginLeft: '10px' }}>
      <ScrollPanel style={{ width: '100%', height: '950px' }}>
      <Panel header="การรับนักศึกษา">
        {/***********************************************/}
        <div>
            <span>การรับนักศึกษา</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{การรับนักศึกษา}'/><br/><br/>
            <span>ระบบกลไก</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }}value='{ระบบกลไก.การรับนักศึกษา}'/><br/><br/>
            <span>ผลการดำเนินงาน</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{ผลการดำเนินงาน.การรับนักศึกษา}'/><br/><br/>
            <span>การประเมินกระบวนการ</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{การประเมินกระบวนการ.การรับนักศึกษา}'/><br/><br/>
            <span>การปรับปรุงกระบวนการ</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{การปรับปรุงกระบวนการ.การรับนักศึกษา}'/><br/><br/>
        </div>
        {/***********************************************/}
      </Panel><br/><br/>

      <Panel header="3.1.1 การรับนักศึกษา">
        {/***********************************************/}
        <div>
            <span>ระบบกลไก</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{ระบบกลไก.การเตรียมความพร้อมก่อนเข้าศึกษา}'/><br/><br/>
            <span>ผลการดำเนินงาน</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{ผลการดำเนินงาน.การเตรียมความพร้อมก่อนเข้าศึกษา}'/><br/><br/>
            <span>การประเมินกระบวนการ</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{การประเมินกระบวนการ.การเตรียมความพร้อมก่อนเข้าศึกษา}'/><br/><br/>
            <span>การปรับปรุงกระบวนการ</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{การปรับปรุงกระบวนการ.การเตรียมความพร้อมก่อนเข้าศึกษา}'/><br/><br/>
            <span>*เดี๋ยวกลับมาทำ*เป็นตาราง.การประเมินตนเองจากผลการดำเนินงาน</span><br/><br/>
            <span>*เดี๋ยวกลับมาทำ*เป็นตาราง.รายการหลักฐานอ้างอิง</span><br/><br/>
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="3.1.2 การเตรียมความพร้อมก่อนเข้าศึกษา">
        {/***********************************************/}
        <div>
            <span>ระบบกลไก</span>
            <InputTextarea autoResize style={{ width: '100%' }} value='การเตรียมความพร้อมก่อนเข้าศึกษาของหลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์ มีระบบกลไก ดังนี้ 
		1. สาขาวิชาประชุมเพื่อวางแผนการเตรียมความพร้อมก่อนเข้าศึกษาให้กับนักศึกษา และกําหนดและแต่งตั้ง อาจารย์ที่ปรึกษา
		2. สาขาวิชากําหนดแผนโครงการในการเตรียมความพร้อมให้กับนักศึกษา เสนอต่อคณะ
		3. ดําเนินการตามแผนโครงการเพื่อเตรียมความพร้อมให้กับนักศึกษา
		4. สาขาวิชาประเมินผล และวิเคราะห์กระบวนการการเตรียมความพร้อมก่อนเข้าศึกษาของนักศึกษา เพื่อปรับปรุงแก้ไขกระบวนการ'/><br/><br/>
            <span>ผลการดำเนินงาน</span>
            <InputTextarea autoResize style={{ width: '100%' }} value='1. สาขาวิชาประชุมเพื่อวางแผนการเตรียมความพร้อมก่อนเข้าศึกษาให้กับนักศึกษา พบว่านักศึกษาใหม่มีความหลากหลาย ซึ่งเกิดจากการรับนักศึกษาจากทั้งสายวิทย์และสายศิลป์ ทำให้นักศึกษามีพื้นความรู้ทางด้านเทคโนโลยีไม่เท่ากัน โดยเฉพาะทางด้านการเขียนโปรแกรมเบื้องต้น จึงได้มีการจัดให้มีการเรียนปรับพืนฐานในส่วนของการเขียนโปรแกรมเบื้องต้นให้กับผู้เรียนก่อนเปิดภาคเรียน โดยมี ผศ.ขวัญเรือน รัศมี เป็นผู้รับผิดชอบดําเนินโครงการปรับพื้นฐานการเขียนโปรแกรมเบื้องต้น 
		2. กําหนดอาจารย์ที่ปรึกษาตามหลักเกณฑ์ คือ เป็นอาจารย์ประจําหลักสูตร หรืออาจารย์ผู้สอนในหลักสูตรและปัจจุบันไม่ได้ทําหน้าที่เป็นที่อาจารย์ที่ปรึกษาของนักศึกษาชั้นปีที่ 2 – 4 คือ ผศ.ดร.รวิ อุตตมธนินทร์ เป็นอาจารย์ที่ปรึกษา 
		2. สาขาวิชากําหนดแผนโครงการในการเตรียมความพร้อมให้กับนักศึกษา 1 โครงการ ได้แก่ โครงการปฐมนิเทศนักศึกษา
		3. ดําเนินการตามแผนโครงการการจัดปฐมนิเทศนักศึกษาให้กับนักศึกษาใหม่ โดยช่วง เช้าจะเป็นภาพรวมของมหาวิทยาลัยและคณะ  ส่วนช่วงบ่ายเป็นของสาขาวิชา เพื่อแนะนํานักศึกษาเกี่ยวกับ โครงสร้างหลักสูตร แนะนําอาจารย์ การปฏิบัติตัวของนักศึกษา กฎระเบียบ และนักศึกษาเข้าร่วมโครงการปรับ พื้นฐานก่อนเปิดภาคเรียน และเนื่องจากอยู่ในภาวะการระบาดของโรคโควิด-19 ทำให้ต้องจัดการปฐมนิเทศในรูปแบบ online ด้วย'/><br/><br/>
            <span>การประเมินกระบวนการ</span>
            <InputTextarea autoResize style={{ width: '100%' }} value='สาขาวิชาประเมินผล และวิเคราะห์กระบวนการการเตรียมความพร้อมก่อนเข้าศึกษาของนักศึกษา เพื่อ ปรับปรุงแก้ไขกระบวนการในปีการศึกษา 2564 พบว่า การกําหนดแผนโครงการเขียนโปรแกรมเบื้องต้นมีประโยชน์ต่อนักศึกษาในชั้นปีที่ 1'/><br/><br/>
            <span>การปรับปรุงกระบวนการ</span>
            <InputTextarea autoResize style={{ width: '100%' }} value='ในปีการศึกษา 2564 คาดว่ายังคงจะเกิดสถานการโรคระบาดโควิด-19 ต่อไปทำให้ทางสาขาวิชามีการประชุมหารือ เพื่อกำหนดแนวทางแก้ไข และได้จัดเตรียมสำหรับการสอน online ทำให้ไม่สามารถใช้สถานที่ในมหาวิทยาลัยสำหรับจัดการเรียนการสอนได้ ทางสาขาวิชาจึงมีแนวทางร่วมกับทางคณะโดยเน้นไปที่การจัดการเรียนการสอนในแบบ online ซึ่งทางสาขาวิชามีการประชุมหารือ เพื่อกําหนดแนวทางแก้ไข และปรับปรุงกระบวนการเตรียมความพร้อม เพื่อให้บรรลุตามเป้าหมายที่หลักสูตรกําหนดในปีการศึกษาถัดไป (2564) โดยมีระบบ กลไกและกระบวนการในการ เตรียมความพร้อมก่อนเข้าศึกษา ใหม่ ดังนี้
		1. สาขาวิชาตรวจสอบปฏิทินวิชาการ และกิจกรรมของมหาวิทยาลัย ก่อนการวางแผนเตรียมความพร้อมก่อนเข้าศึกษา 
		2. สาขาวิชาวางแผนการดําเนินโครงการการเตรียมความพร้อมก่อนเข้าศึกษาให้กับนักศึกษา และกําหนด และคัดเลือกอาจารย์ที่ปรึกษาตามหลักเกณฑ์ เพื่อเสนอต่อคณะ 
		3.ดําเนินการตามแผนการดําเนินโครงการการเตรียมความพร้อมก่อนเข้าศึกษาให้กับนักศึกษา และแต่งตั้ง อาจารย์ที่ปรึกษา
		4. ประเมินผลโครงการการเตรียมความพร้อมก่อนเข้าศึกษา และประเมินผลการทํางานของอาจารย์ที่ปรึกษา
		5. สาขาวิชาประเมินผล และวิเคราะห์กระบวนการการเตรียมความพร้อมก่อนเข้าศึกษาของนักศึกษา เพื่อปรับปรุงแก้ไขกระบวนการ'/><br/><br/>
            <span>การประเมินตนเองจากผลการดำเนินงาน</span>
            <table className='TA'>
            <thead>
              <tr>
                <th className='TH'>เป้าหมาย</th>
                <th className='TH'>ผลการดำเนินงาน</th>
                <th className='TH'>คะแนนการประเมินตนเอง</th>
                <th className='TH'>การบรรลุเป้าหมาย</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='TD'>ระดับ 3 </td>
                <td className='TD'>3</td>
                <td className='TD'>3</td>
                <td className='TD'>บรรลุ</td>
              </tr>
            </tbody>
          </table><br/><br/>
            <span>รายการหลักฐานอ้างอิง</span>
            <table className='TA'>
            <thead>
              <tr>
                <th className='TH'>รหัสเอกสาร</th>
                <th className='TH'>รายการเอกสารหลักฐาน</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='TD'>B.ENG 3.1-2-01</td>
                <td className='TD'>โครงการปรับพื้นฐาน</td>
              </tr>
              <tr>
                <td className='TD'>B.ENG 3.1-2-02</td>
                <td className='TD'>คําสั่งแต่งตั้งอาจารย์ที่ปรึกษา</td>
              </tr>
            </tbody>
          </table><br/><br/>
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="3.2.1 การควบคุมการดูแลการให้คําปรึกษาวิชาการและแนะแนวแก่นิสิตปริญญาตรี">
        {/***********************************************/}
        <div>
            <span>การควบคุมการดูแลการให้คําปรึกษาวิชาการและแนะแนวแก่นิสิตปริญญาตรี</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{การควบคุมการดูแลการให้คําปรึกษาวิชาการและแนะแนวแก่นิสิตปริญญาตรี}'/><br/><br/>
            <span>ผลการดำเนินงาน</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{ผลการดำเนินงาน.การควบคุมการดูแลการให้คําปรึกษาวิชาการและแนะแนวแก่นิสิตปริญญาตรี}'/><br/><br/>
            <span>การประเมินกระบวนการ</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{การประเมินกระบวนการ.การควบคุมการดูแลการให้คําปรึกษาวิชาการและแนะแนวแก่นิสิตปริญญาตรี}'/><br/><br/>
            <span>การปรับปรุงกระบวนการ</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{การปรับปรุงกระบวนการ.การควบคุมการดูแลการให้คําปรึกษาวิชาการและแนะแนวแก่นิสิตปริญญาตรี}'/><br/><br/>
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="3.2.2 กิจกรรมการพัฒนาศักยภาพของนิสิตและการเสริมสร้างทักษะการเรียนรู้ในศตวรรษที่ 21">
        {/***********************************************/}
        <div>
            <span>ระบบกลไก</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{ระบบกลไก.กิจกรรมการพัฒนาศักยภาพของนิสิตและการเสริมสร้างทักษะการเรียนรู้ในศตวรรษที่ 21}'/><br/><br/>
            <span>ผลการดําเนินงาน</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{ผลการดําเนินงาน.กิจกรรมการพัฒนาศักยภาพของนิสิตและการเสริมสร้างทักษะการเรียนรู้ในศตวรรษที่ 21}'/><br/><br/>
            <span>การประเมินกระบวนการ</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{การประเมินกระบวนการ.กิจกรรมการพัฒนาศักยภาพของนิสิตและการเสริมสร้างทักษะการเรียนรู้ในศตวรรษที่ 21}'/><br/><br/>
            <span>การปรับปรุงกระบวนการ</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{การปรับปรุงกระบวนการ.กิจกรรมการพัฒนาศักยภาพของนิสิตและการเสริมสร้างทักษะการเรียนรู้ในศตวรรษที่ 21}'/><br/><br/>
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="3.2.3 การควบคุมดูแลการให้คําปรึกษาวิทยานิพนธ์ แก่บัณฑิตศึกษา">
        {/***********************************************/}
        <div>
            <span>*เดี๋ยวกลับมาทำ*เป็นตาราง.การประเมินตนเองจากผลการดำเนินงาน</span><br/><br/>
            <span>*เดี๋ยวกลับมาทำ*เป็นตาราง.รายการหลักฐานอ้างอิง</span><br/><br/>
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="ผลที่เกิดกับนักศึกษา">
        {/***********************************************/}
        <div>
            <span>*เดี๋ยวกลับมาทำ*เป็นตาราง.ข้อมูลนักศึกษา และจำนวนผู้สำเร็จการศึกษาตามแผน การศึกษาและจำนวนผู้สำเร็จการศึกษา</span><br/><br/>
            <span>ปัจจัยที่ส่งผลกระทบต่อจำนวนนักศึกษา</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{ปัจจัยที่ส่งผลกระทบต่อจำนวนนักศึกษา}'/><br/><br/>
            <span>การประเมินความพึงพอใจของนักศึกษา</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{การประเมินความพึงพอใจของนักศึกษา}'/><br/><br/>
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="การจัดการข้อร้องเรียนของนักศึกษา">
        {/***********************************************/}
        <div>
            <span>ระบบกลไก</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{ระบบกลไก.การจัดการข้อร้องเรียนของนักศึกษา}'/><br/><br/>
            <span>ผลการดําเนินงาน</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{ผลการดําเนินงาน.การจัดการข้อร้องเรียนของนักศึกษา}'/><br/><br/>
            <span>การประเมินกระบวนการ</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{การประเมินกระบวนการ.การจัดการข้อร้องเรียนของนักศึกษา}'/><br/><br/>
            <span>การปรับปรุงกระบวนการ</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{การปรับปรุงกระบวนการ.การจัดการข้อร้องเรียนของนักศึกษา}'/><br/><br/>
            <span>การคงอยู่</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{การคงอยู่}'/><br/><br/>
            <span>การสำเร็จการศึกษา</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{การสำเร็จการศึกษา}'/><br/><br/>
            <span>ความพึงพอใจและผลการจัดการข้อร้องเรียนของนักศึกษา</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{ความพึงพอใจและผลการจัดการข้อร้องเรียนของนักศึกษา}'/><br/><br/>
            <span>*เดี๋ยวกลับมาทำ*เป็นตาราง.การประเมินตนเองจากผลการดำเนินงาน</span><br/><br/>
            <span>*เดี๋ยวกลับมาทำ*เป็นตาราง.รายการหลักฐานอ้างอิง</span><br/><br/>
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="บัณฑิต">
        {/***********************************************/}
        <div>
            <span>ผลการดำเนินงาน</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{ผลการดำเนินงาน.บัณฑิต}'/><br/><br/>
            <span>*เดี๋ยวกลับมาทำ*เป็นตาราง.ข้อมูลประกอบการคำนวณคุณภาพของบัณฑิตหลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์</span><br/><br/>
            <span>*เดี๋ยวกลับมาทำ*เป็นตาราง.การประเมินตนเองจากผลการดำเนินงาน</span><br/><br/>
            <span>*เดี๋ยวกลับมาทำ*เป็นตาราง.รายการหลักฐานอ้างอิง</span><br/><br/>
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="ตัวบ่งชี้ที่ 2.2 ร้อยละของบัณฑิตปริญญาตรีที่ได้งานทําหรือประกอบอาชีพอิสระภายใน 1 ปี">
        {/***********************************************/}
        <div>
            <span>ผลการดำเนินงาน</span><br/><br/>
            <InputTextarea style={{ width: '500px',height:'100px' }} value='{ผลการดำเนินงาน.ร้อยละของบัณฑิตปริญญาตรีที่ได้งานทําหรือประกอบอาชีพอิสระภายใน 1 ปี}'/><br/><br/>
            <span>*เดี๋ยวกลับมาทำ*เป็นตาราง.ข้อมูลประกอบการคำนวณภาวะการมีงานทำหรือประกอบอาชีพอิสระของบัณฑิตที่สำเร็จการศึกษา</span><br/><br/>
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      <Panel header="สรุปผลการประเมินตนเององค์ประกอบที่ 2 บัณฑิต และองค์ประกอบที่ 3 นักศึกษา">
        {/***********************************************/}
        <div>
            <span>*เดี๋ยวกลับมาทำ*เป็นตาราง.บัณฑิต.ผลการประเมินตนเองตามองค์ประกอบ</span><br/><br/>
            <span>*เดี๋ยวกลับมาทำ*เป็นตาราง.นักศึกษา.ผลการประเมินตนเองตามองค์ประกอบ</span><br/><br/>
            <span>*เดี๋ยวกลับมาทำ*เป็นตาราง.การประเมินตนเองจากผลการดำเนินงาน</span><br/><br/>
            <span>*เดี๋ยวกลับมาทำ*เป็นตาราง.รายการหลักฐานอ้างอิง</span><br/><br/>
        </div>
        {/***********************************************/}
      </Panel><br/><br/>
      </ScrollPanel>
    </div>
  )
}

export default TQF7_3