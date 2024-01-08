import React, { useState } from 'react'

import 'primereact/resources/themes/saga-blue/theme.css'; // เลือก theme ตามที่คุณต้องการ
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Panel } from 'primereact/panel';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { ScrollPanel } from 'primereact/scrollpanel';
import axios from 'axios';
import { Button } from 'primereact/button';

function TQF7_1() {

    // const [courseCode,setCoureCode] = useState(null);
    const [dataTqf7_1, setDateTqf7_1] = useState({
      รหัสหลักสูตร : "25531661101735",
      วัตถุประสงค์ของหลักสูตร : "1.เพื่อผลิตบัณฑิตให้มีความรู้ทางด้านคอมพิวเตอร์ทั้งด้านซอฟต์แวร์ฮาร์ดแวร์เครือข่ายคอมพิวเตอร์ความมั่นคงของเครือข่ายคอมพิวเตอร์และระบบสารสนเทศรวมถึงมีความสามารถและทักษะในการประกอบอาชีพทางด้านวิศวกรรมคอมพิวเตอร์เพื่อตอบสนองต่อความต้องกรบุคลากรทางด้านคอมพิวเตอร์ทั้งภาครัฐและเอกชน 2เพื่อผลิตบัณฑิตให้เป็นผู้มีคุณธรรมจริยธรรมศีลธรรมจรรยาบรรณแห่งวิชาชีพรวมทั้งมีความรับผิดชอบต่อหน้าที่และสังคม 3เพื่อให้บัณฑิตมีความคิดริเริ่มสร้างสรรค์สามารถเรียนรู้ได้ด้วยตนเองและติดตามเทคโนโลยีที่ทันสมัยอย่างต่อเนื่องตลอดถึงสามารถนาเทคโนโลยีที่เกี่ยวข้องมาประยุกต์ใช้งานได้อย่างเหมาะสม 4. เพื่อให้บัณฑิตเป็นผู้ตระหนัก มีส่วนร่วมและเป็นผู้ส่งเสริมทำนุบำรุงศิลปวัฒนธรรม",
      คุณลักษณะบัณฑิตที่พึงประสงค์ของหลักสูตร : "1. บัณฑิตมีความพร้อมทางวิชาการเพื่อประกอบวิชาชีพ โดยเน้นทั้งด้านทฤษฎี และปฏิบัติตลอดถึงการประยุกต์การใช้งาน 2. บัณฑิตมีคุณธรรมและจริยธรรม มีจรรยาบรรณของวิศวกร มีความซื่อสัตย์สุจริต และรับผิดชอบต่อตนเองและสังคม",
      ตามมคอ2_1 : "1.นายรวิ อุตตมธนินทร์",
      ตามมคอ2_2 : "2.นายอภิสิทธิ์ รัตนาตรานุรักษ",
      ตามมคอ2_3 : "3.นายเศรษฐกาล โปร่งนุช",
      ตามมคอ2_4 : "4.นางธนภรณ์ พันธุปรีชารัตน์",
      ตามมคอ2_5 : "5.นางสาวขวัญเรือน รัศมี",
      ชุดปัจจุบัน1 : "1.นายรวิ อุตตมธนินทร",
      ชุดปัจจุบัน2 : "2.นางสาวกัลยณัฏฐ์ กุหลาบเพ็ชรทอง",
      ชุดปัจจุบัน3 : "3.นายพรภวิษย์ บุญศรีเมือง",
      ชุดปัจจุบัน4 : "4.นางสาววรณัน วรมงคล",
      ชุดปัจจุบัน5 : "5.นางสาวขวัญเรือน รัศม",
      หมายเหตุ8:"",
      หมายเหตุ9:"",
      หมายเหตุ10:"",
      หมายเหตุ11:"เปลี่ยนชื่อ-นามสกุล",
      หมายเหตุ12:"",
      //คุณวุฒิอาจารย์ผู้รับผิดชอบหลักสูตร
      ชื่อ_นามสกุล1 : "นายรวิ อุตตมธนินทร",
      ชื่อ_นามสกุล2 : "นางสาวกัลยณัฏฐ์ กุหลาบเพ็ชรทอง", 
      ชื่อ_นามสกุล3 : "นายพรภวิษย์ บุญศรีเมือง", 
      ชื่อ_นามสกุล4 : "นางสาวขวัญเรือน รัศม", 
      ชื่อ_นามสกุล5 : "นางสาววรณัน วรมงคล ", 
      ตำแหน่งทางวิชาการ1 : "ผศ.ดร.",
      ตำแหน่งทางวิชาการ2 : "รศ.ดร.",
      ตำแหน่งทางวิชาการ3 : "ผศ.ดร.",
      ตำแหน่งทางวิชาการ4 : "ผู้ช่วยศาสตราจารย์ ",
      ตำแหน่งทางวิชาการ5 : "อาจารย์",
      คุณวุฒิ_สาขาวิชา1 : "วศ.ด. (วิศวกรรมไฟฟ้า)สาขาย่อยวิศวกรรมคอมพิวเตอร์ วศ.ม.(วิศวกรรมไฟฟ้า) วศ.บ.(วิศวกรรมคอมพิวเตอร์)",
      คุณวุฒิ_สาขาวิชา2 : "วทม. (วิทยาการคอมพิวเตอร์) บม.(คอมพิวเตอร์ธุรกิจ)",
      คุณวุฒิ_สาขาวิชา3 : "วศบ. (วิศวกรรมโทรคมนาคม) วศม. (วิศวกรรมโทรคมนาคม)",
      คุณวุฒิ_สาขาวิชา4 : "วศ.ม. (วิศวกรรมสารสนเทศ) บธ.ม. (การจัดการทั่วไป) วศ.บ.(วิศวกรรมคอมพิวเตอร์)",
      คุณวุฒิ_สาขาวิชา5 : "วท.ม. (วิทยาการคอมพิวเตอร์) วท.บ. (สถิติประยุกต์)",
      //รายชื่ออาจารย์ผู้สอน
      อาจารย์ผู้สอน1 : "นายรวิ อุตตมธนินทร์",
      อาจารย์ผู้สอน2 : "นางสาวกัลยณัฏฐ์ กุหลาบเพ็ชรทอง",
      อาจารย์ผู้สอน3 : "นายพรภวิษย์ บุญศรีเมือง",
      อาจารย์ผู้สอน4 : "นางสาวขวัญเรือน รัศมี",
      อาจารย์ผู้สอน5 : "นางสาววรณัน วรมงคล",
      คณวุฒิ1 : "วศ.ด. (วิศวกรรมไฟฟ้า) สาขาย่อยวิศวกรรมคอมพิวเตอร์",
      คณวุฒิ2 : "วทม. (วิทยาการคอมพิวเตอร์) บม.(คอมพิวเตอร์ธุรกิจ)",
      คณวุฒิ3 : "วศบ. (วิศวกรรมโทรคมนาคม) วศม. (วิศวกรรมโทรคมนาคม)",
      คณวุฒิ4 : "วศ.ม. (วิศวกรรมสารสนเทศ)",
      คณวุฒิ5 : "วท.ม. (วิทยาการคอมพิวเตอร์)",
      ประสบการณ์วิจัย1 : "งานวิจัย รวิอตุ ตมธนินทร์(2564) ระบบสนับสนุนการเรียนการสอนออนไลน์ในสถานการณ์COVIV-19 , รวิอตุ ตมธนินทร์(2563)การพัฒนาหุ่นยนต์ประชาสัมพันธ์มหาวิทยาลัยราชภัฏสวนสุนันทา ,การประชุมวิชาการระดับชาติและนานาชาติมหาวิทยาลัยศรีปทุม ครั้งที่ 16 ประจำปี2564(การเร่งความเร็วการตรวจจับใบหน้าและรู้จำใบหน้ามนุษย์บนเว็ปแอปพลิเคชัน โดยใช้หน่วยประมวลผลกราฟิก)อภิสิทธิ์ รัตนาตรานุรักษ์, รวิ อุตตมธนินทร",
      ประสบการณ์วิจัย2 : "งานวิจัย HPFs filtering solutions for reduced the harmonic current generated by SMPS and ac drive systems K.Kularbphettonga , C. Boonsengb,* Energy Reports (Q1) Volume 6, Supplement 2, February 2020, Pages 648-658 Failure Analysis and Investigationof Electrical Insulation of 10 MVA Oil-Type Transformers Damaged due to Direct Lightning Strikes Boonseng, C., Kammaroeng, D.,Kularbphettong, K. 23rd International Conference on Electrical Machines and Systems, ICEMS 2020this link is disabled, 2020, pp. 1358–1363,9291069",
      ประสบการณ์วิจัย3 : "พรภวิษย์บุญศรีเมือง (2564)การออกแบบและปรับปรุงสภาพแวดล้อมทางกายภาพในสถานที่ท่องเที่ยวชุมชนเชิงอนุรักษ์ศิลปะวัฒนธรรมและภูมิปัญญาท้องถิ่นอย่างยั่งยืนจังหวัดอุดรธานี,พรภวิษย์บุญศรีเมือง (2563) การพัฒนาหุ่นยนต์ประชาสัมพันธ์มหาวิทยาลัยราชภัฏสวนสุนันทา",
      ประสบการณ์วิจัย4 : "งานวิจัย ขวัญเรือน รัศมี,ชนมภัทร โตระสะ.(2562) .SATISFACTION WITH COURSE OUTLINE FILING PROCESS TO BE EFFECTIVE TORESPOND THE POLICY OF WEBOMETRICS RANKING OF WORLD UNIVERSITIES AND TO BE IN ACCORDANCE WITH NATIONAL QUALIFICATIONS FRAMEWORK IN EDUCATIONการประชุมวิชาการระดับนานาชาติ ICBTS 2019 : International Academic Multidisciplinary Research Conference ณ กรุงโคเปนเฮเกนราชอาณาจักรเดนมาร์กไกรพ เจริญโสภา,ภาณุพงศ์ จันทน์ผลิน,ศุภวรรณ พันธ์เกาะเลิ่ง,ณฐพร โชติภูรีพงศ์, ขวัญเรือน รัศมี ,วัฒน์ พลอยศรี, (2562),การวิเคราะห์คุณภาพงานพิมพ์จากหมึกพิมพ์ออฟเซตฐานน้ำมันปาล์มใช้แล้ว (รายงาน ผลการวิจัย).กรุงเทพฯ: มหาวิทยาลัยราชภัฏสวนสุนันทา. ขวัญเรือน รัศมี(2560) Building Trust and Globally Promoting Bangkhonthi Indigenous Knowledge Using Information Technology and and advanced Mediaการประชุมวิชาการระดับนานาชาติ Proceeding The IRES 64th International Conference ณ เมืองอ๊อกซฟอร์ด ประเทศอังกฤษ",
      ประสบการณ์วิจัย5 : "ธนภรณ์ พันธุปรีชารัตน์.(2563). ระบบรักษาความปลอดภัยภายในบ้าน.การประชุมวิชาการสำหรับนักศึกษาระดับชาติ ครั้งที่ 3 (The 3rdFIT SSRU Conference 2020) ณ คณะเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยราชภัฏสวนสุนันทา, 1 พฤษภาคม 2563.",
      //องค์ประกอบที่ 1 การกำกับมาตรฐาน
      เกณฑ์การประเมิน1 : "1.จำนวนอาจารย์ผู้รับผิดชอบหลักสูตร 1) นายรวิอุตตมธนินทร์ 2) นางสาวกัลยณัฏฐ์กุหลาบเพ็ชรทอง 3) นายพรภวิษย์ บุญศรีเมือง 4)นางสาวขวัญเรือน รัศมี 5) นางสาววรณัน วรมงคล",
      เกณฑ์การประเมิน2 : "2.คุณสมบัติของอาจารย์ผู้รับผิดชอบหลักสูตร",
      เกณฑ์การประเมิน3 : "3.คุณสมบัติอาจารย์ประจำหลักสูตร",
      เกณฑ์การประเมิน4 : "4.คุณสมบัติอาจารย์ผู้สอน",
      เกณฑ์การประเมิน5 : "5.การปรับปรุงหลักสูตรตามรอบระยะเวลาที่กำหนด",
      ผลการดำเนินงาน7 : "ในปีการศึกษา 2564 หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์ มีอาจารย์ผู้รับผิดชอบหลักสูตรตลอดระยะเวลาที่จัดการศึกษาทั้ง 5 คน",
      ผลการดำเนินงาน8 : "อาจารย์ผู้รับผิดชอบหลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์ มีคุณวุฒิและตำแหน่งทางวิชาการ ดังนี้ 1.อาจารย์ดร.รวิ อุตตมธนินทร์ คุณวุฒิ - วศ.ด. (วิศวกรรมไฟฟ้า สาขาย่อยวิศวกรรมคอมพิวเตอร์) มหาวิทยาลัยเทคโนโลยีมหานคร พ.ศ. 2557 - วศ.ม.(วิศวกรรมไฟฟ้า สาขาย่อยวิศวกรรมคอมพิวเตอร์) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง พ.ศ. 2541 - วศ.บ. (วิศวกรรมคอมพิวเตอร์)สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง พ.ศ. 2533 2. รองศาสตราจารย์ดร.กัลยณัฏฐ์กุหลาบเพ็ชรทอง คุณวุฒิ - ปร.ด.(เทคโนโลยีสารสนเทศ(นานาชาติ))มหาวิทยาลัยเทคโนโลยีพระจอมเกล้า พระนครเหนือพศ. 2555 - วท.ม.(วิทยาการคอมพิวเตอร์)สถาบันบัณฑิตพัฒนบริหารศาสตร์ พศ. 2540 - บธ.บ(คอมพิวเตอร์ธุรกิจ)มหาวิทยาลัยธุรกิจบัณฑิตย์พศ. 2535 1. ผู้ช่วยศาสตราจารย์ดร.พรภวิษย์ บุญศรีเมือง คุณวุฒิ Ph.D. (Communication EngineeringMie University , Japan2013 วศ.ม. (วิศวกรรมโทรคมนาคม)สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง พ.ศ. 2550 วศ.บ. (วิศวกรรมโทรคมนาคมสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง พ.ศ. 2546 2. ผู้ช่วยศาสตราจารย์ขวัญเรือน รัศมี คุณวุฒิ - วศ.ม. (วิศวกรรมสารสนเทศ)สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง พ.ศ. 2558 - บธ.ม. (การจัดการทั่วไป)มหาวิทยาลัยราชภัฏพระนคร พ.ศ. 2547 - วศ.บ.(วิศวกรรมคอมพิวเตอร์)มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรีพ.ศ. 2545 3. นางสาววรณัน วรมงคล (เปลี่ยนชื่อและนามสกุล)คุณวุฒิ - วท.ม.(วิทยาการคอมพิวเตอร์)สถาบันบัณฑิตพัฒนบริหารศาสตร์ พ.ศ. 2542 - วท.บ. (สถิติประยุกต์) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง พ.ศ.2535",
      ผลการดำเนินงาน9 : "อาจารย์ประจำหลักสูตรทุกคนมีคุณวุฒิไม่ต่ำกว่าระดับปริญญาโทหรือเทียบเท่าหรือดำรงตำแหน่งทางวิชาการไม่ต่ำกว่าผู้ช่วยศาสตราจารย์ ในสาขาที่ตรงหรือสัมพันธ์กับสาขาวิชาที่เปิดสอน และมีผลงานทางวิชาการอย่างน้อย 1รายการในรอบ 5 ปีย้อนหลัง",
      ผลการดำเนินงาน10 : "4.1 อาจารย์ผู้สอนทุกคนเป็นอาจารย์ประจำที่มีคุณวุฒิระดับปริญญาโทหรือเทียบเท่าหรือดำรงตำแหน่งทางวิชาการไม่ต่ำกว่าผู้ช่วยศาสตราจารย์ ในสาขาวิชา หรือสาขาวิชาที่สัมพันธ์กัน หรือสาขาวิชาของรายวิชาที่สอน 4.2อาจารย์พิเศษทุกคน มีคุณวุฒิระดับปริญญาโท หรือเทียบเท่า และมีประสบการณ์ทำงานที่เกี่ยวข้องกับวิชาที่สอนไม่น้อยกว่า 6 ปี ทั้งนี้มีชั่วโมงสอนไม่เกินร้อยละ 50 ของรายวิชา โดยมีอาจารย์ประจำเป็นผู้รับผิดชอบรายวิชา นั้น",
      ผลการดำเนินงาน11 : "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์เป็นหลักสูตรปรับปรุง พ.ศ. 2563 ซึ่งจะครบรอบการปรับปรุงหลักสูตรในพ.ศ. 2568 ปัจจุบันมีนักศึกษาก าลังศึกษาในชั้นปีที่ 1-4",
      เอกสารหลักฐาน1 : "B.ENG 1.1-1-02 สมอ 08",
      เอกสารหลักฐาน2 : "ผลงานทางวิชาการ อาจารย์ดร.รวิ อตุ ตมธนินทร์ Boonsrimuang. P., Uttamatanin. R., Intawichai.K., & Boonsrimaung P. (2018).Performance Evaluation on Sub-optimum Algorithm for Trellis-based SLM in FBMC-OQAM System.Proceedings of 96th The IRES InternationalConference, Amsterdam, Netherlands, pp 1-4,Jan. 9-10, 2018.ผลงานทางวิชาการ รองศาสตราจารย์ดร.กัลยณัฏฐ์กุหลาบเพ็ชรทอง HPFs filtering solutionsfor reduced the harmonic current generated by SMPS and ac drive systems K.Kularbphettonga , C. Boonsengb,* Energy Reports (Q1) Volume 6,Supplement 2, February 2020, Pages 648-658 Failure Analysis and Investigation of Electrical Insulation of 10 MVA Oil-Type TransformersDamaged due to Direct Lightning Strikes Boonseng, C., Kammaroeng, D., Kularbphettong,K.23rd International Conference on Electrical Machinesand Systems, ICEMS 2020this link is disabled, 2020, pp. 1358–1363, 9291069 ผลงานทางวิชาการ ผู้ช่วยศาสตราจารย์ดร.พรภวิษย ์บุญศรีเมืองBoonsrimuang. P., Narongrat. N., Thitinaruemit.A., Uttamatanin. R. & Nakyoy, T. (2019). Study on PAPR Reduction Performance of IPTS for FBMCSignals in the Non-Linear Channel, Proceedings of the International Academic Multidisciplinary Research Conference, Switzerland, December23-24, 2019. pp.52-59. Boonsrimuang. P., Uttamatanin. R., Intawichai.K., & Boonsrimuang. P. (2018). Performance Evaluation on Sub-optimumAlgorithm for Trellis-Based SLM in FBMC-OQAM System, Proceedings of the IRES International Conference, Netherlands, January 9-10, 2018. pp114-117.ผลงานทางวิชาการผู้ช่วยศาสตราจารย์ขวัญเรือน รัศมี ขวัญเรือน รัศมี. (2562).การจำแนกหมวดหมู่ภาพผลไม้ด้วยคุณลักษณะรูปร่างในอุตสาหกรรมส่งออก. การประชุมระดับชาติราชภัฏหมู่บ้านจอมบึง วิจัยบูรณาการศาสตร์พัฒนาชาติก้าวไกลสังคมไทยยั่งยืน ครั้งที่7 มหาวิทยาลัยราชภัฏหมู่บ้านจอมบึง. หน้า 91-98. มีนาคม 2562 ผลงานทางวิชาการนางสาววรณัน วรมงคล สุชาดา สิทธิ์จงสถาพรและธนภรณ์ พันธุปรีชารัตน์. (2561). การคำนวณหาความยาวของท่ออบแห้งแบบหมุนในงานอุตสาหกรรมโดยการวิเคราะห์ความไวที่ใช้พารามิเตอร์.วารสารวิชาการคณะเทคโนโลยีอุตสาหกรรม: มหาวิทยาลัยราชภัฏสวนสุนันทา, 6(2) กรกฎาคม-ธันวาคม. 2561, หน้า 81-91",
      เอกสารหลักฐาน3 : "B.ENG 1.1-2-01 ข้อมูลรายบุคคลของอาจารย์ประจำหลักสูตร (รายงานคุณวุฒิการศึกษาและตำแหน่งทางวิชาการ)",
      เอกสารหลักฐาน4 : "B.ENG 1.1-1-01 เล่มหลักสูตร (มคอ.2) ฉบับที่ สกอ.ประทับตรารับทราบ",
      เอกสารหลักฐาน5 : "B.ENG 1.1-1-01 เล่มหลักสูตร (มคอ.2) ฉบับที่ สกอ.ประทับตรารับทราบ",
    });

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
        const userFormData = dataTqf7_1;  // ใช้ dataTqf7_0 ที่ได้จาก state แทน doc.getData()
    
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
        link.download = `มคอ.7 หมวดที่ 1.docx`;
        link.click();
      } catch (error) {
        console.error('Error generating document:', error);
      }
    };
    let doc;
    const handleChange = (event, property) => {
      setDateTqf7_1((prevData) => ({
        ...prevData,
        [property]: event.target.value,
      }));
    
      if (doc) {
        doc.setData(dataTqf7_1);
      }
    };
  
  
      return (
        <form onSubmit={handleGenerateDocx}  >
        <div style={{ width: '100%',marginLeft: '10px' }}>
            <ScrollPanel style={{ width: '100%', height: '950px' }}>
            <Panel header="รหัสหลักสูตร">
            {/***********************************************/}
            <div style={{ marginBottom: '10px' }}>
                <span>รหัสหลักสูตร</span>
                <InputText value={dataTqf7_1.รหัสหลักสูตร} 
                style={{ marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
                /><br/><br/>
                <span>วัตถุประสงค์ของหลักสูตร</span>
                <InputTextarea value={dataTqf7_1.วัตถุประสงค์ของหลักสูตร}
                style={{ display: 'flex', alignItems: 'flex-start',marginTop:'10px',width: '1000px',height:'120px',marginLeft: '10px',marginRight: '10px',padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
                /><br/><br/>
                <span>คุณลักษณะบัณฑิตที่พึงประสงค์ของหลักสูตร</span>
                <InputTextarea value={dataTqf7_1.คุณลักษณะบัณฑิตที่พึงประสงค์ของหลักสูตร}
                style={{ display: 'flex', alignItems: 'flex-start',marginTop:'10px',width: '1000px',marginLeft: '10px',marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ccc'}}
                />
            </div>
            {/***********************************************/}
          </Panel><br/><br/>
          <Panel header="รายชื่ออาจารย์ผู้รับผิดชอบหลักสูตร">
            {/***********************************************/}
            <div>
              <table className='TA'>
                <thead>
                  <tr>
                    <th className='TH'>ตามมคอ.2</th>
                    <th className='TH'>ชุดปัจจุบัน</th>
                    <th className='TH'>หมายเหตุ </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ตามมคอ2_1} onChange={(e) => handleChange(e, 'ตามมคอ2_1')}></InputTextarea></td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ชุดปัจจุบัน1} onChange={(e) => handleChange(e, 'ระดับคุณภาพ1')}></InputTextarea></td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.หมายเหตุ8} onChange={(e) => handleChange(e, 'หมายเหตุ8')}></InputTextarea></td>
                  </tr>
                  <tr>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ตามมคอ2_2} onChange={(e) => handleChange(e, 'ตามมคอ2_2')}></InputTextarea></td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ชุดปัจจุบัน2} onChange={(e) => handleChange(e, 'ชุดปัจจุบัน2')}></InputTextarea></td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.หมายเหตุ9} onChange={(e) => handleChange(e, 'หมายเหตุ9')}></InputTextarea></td>
                  </tr>
                  <tr>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ตามมคอ2_3} onChange={(e) => handleChange(e, 'ตามมคอ2_3')}></InputTextarea></td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ชุดปัจจุบัน3} onChange={(e) => handleChange(e, 'ชุดปัจจุบัน3')}></InputTextarea></td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.หมายเหตุ10} onChange={(e) => handleChange(e, 'หมายเหตุ10')}></InputTextarea></td>
                  </tr>
                  <tr>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ตามมคอ2_4} onChange={(e) => handleChange(e, 'ตามมคอ2_4')}></InputTextarea></td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ชุดปัจจุบัน4} onChange={(e) => handleChange(e, 'ชุดปัจจุบัน4')}></InputTextarea></td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.หมายเหตุ11} onChange={(e) => handleChange(e, 'หมายเหตุ11')}></InputTextarea></td>
                  </tr>
                  <tr>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ตามมคอ2_5} onChange={(e) => handleChange(e, 'ตามมคอ2_5')}></InputTextarea></td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ชุดปัจจุบัน5} onChange={(e) => handleChange(e, 'ชุดปัจจุบัน5')}></InputTextarea></td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.หมายเหตุ12} onChange={(e) => handleChange(e, 'หมายเหตุ12')}></InputTextarea></td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/***********************************************/}
          </Panel><br/><br/>
          <Panel header="คุณวุฒิอาจารย์ผู้รับผิดชอบหลักสูตร">
            {/***********************************************/}
            <div>
              <table className='TA'>
                <thead>
                  <tr>
                  <th className='TH'>ลำดับ</th>
                    <th className='TH'>ชื่อ-นามสกุล</th>
                    <th className='TH'>ตำแหน่งทางวิชาการ</th>
                    <th className='TH'>คุณวุฒิ สาขาวิชา</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td className='TD'>1</td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ชื่อ_นามสกุล1} onChange={(e) => handleChange(e, 'ชื่อ_นามสกุล1')}></InputTextarea></td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ตำแหน่งทางวิชาการ1} onChange={(e) => handleChange(e, 'ตำแหน่งทางวิชาการ1')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'500px'}} value = {dataTqf7_1.คุณวุฒิ_สาขาวิชา1} onChange={(e) => handleChange(e, 'คุณวุฒิ_สาขาวิชา1')}></InputTextarea></td>
                  </tr>
                  <tr>
                    <td className='TD'>2</td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ชื่อ_นามสกุล2} onChange={(e) => handleChange(e, 'ชื่อ_นามสกุล2')}></InputTextarea></td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ตำแหน่งทางวิชาการ2} onChange={(e) => handleChange(e, 'ตำแหน่งทางวิชาการ2')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'500px'}} value = {dataTqf7_1.คุณวุฒิ_สาขาวิชา2} onChange={(e) => handleChange(e, 'คุณวุฒิ_สาขาวิชา2')}></InputTextarea></td>
                  </tr>
                  <tr>
                    <td className='TD'>3</td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ชื่อ_นามสกุล3} onChange={(e) => handleChange(e, 'ชื่อ_นามสกุล3')}></InputTextarea></td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ตำแหน่งทางวิชาการ3} onChange={(e) => handleChange(e, 'ตำแหน่งทางวิชาการ3')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'500px'}} value = {dataTqf7_1.คุณวุฒิ_สาขาวิชา3} onChange={(e) => handleChange(e, 'คุณวุฒิ_สาขาวิชา3')}></InputTextarea></td>
                  </tr>
                  <tr>
                    <td className='TD'>4</td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ชื่อ_นามสกุล4} onChange={(e) => handleChange(e, 'ชื่อ_นามสกุล4')}></InputTextarea></td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ตำแหน่งทางวิชาการ4} onChange={(e) => handleChange(e, 'ตำแหน่งทางวิชาการ4')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'500px'}} value = {dataTqf7_1.คุณวุฒิ_สาขาวิชา4} onChange={(e) => handleChange(e, 'คุณวุฒิ_สาขาวิชา4')}></InputTextarea></td>
                  </tr>
                  <tr>
                    <td className='TD'>5</td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ชื่อ_นามสกุล5} onChange={(e) => handleChange(e, 'ชื่อ_นามสกุล5')}></InputTextarea></td>
                    <td className='TD'><InputTextarea value = {dataTqf7_1.ตำแหน่งทางวิชาการ5} onChange={(e) => handleChange(e, 'ตำแหน่งทางวิชาการ5')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'500px'}} value = {dataTqf7_1.คุณวุฒิ_สาขาวิชา5} onChange={(e) => handleChange(e, 'คุณวุฒิ_สาขาวิชา5')}></InputTextarea></td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/***********************************************/}
          </Panel><br/><br/>
          <Panel header="รายชื่ออาจารย์ผู้สอน">
            {/***********************************************/}
            <div>
              <table className='TA'>
                <thead>
                  <tr>
                    <th className='TH'>อาจารย์ผู้สอน</th>
                    <th className='TH'>คุณวุฒิ</th>
                    <th className='TH'>ประสบการณ์วิจัย </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='TD'><InputTextarea style={{height:'150px'}} value = {dataTqf7_1.อาจารย์ผู้สอน1} onChange={(e) => handleChange(e, 'อาจารย์ผู้สอน1')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{height:'150px'}} value = {dataTqf7_1.คณวุฒิ1} onChange={(e) => handleChange(e, 'คณวุฒิ1')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'600px',height:'150px'}} value = {dataTqf7_1.ประสบการณ์วิจัย1} onChange={(e) => handleChange(e, 'ประสบการณ์วิจย1')}></InputTextarea></td>
                  </tr>
                  <tr>
                    <td className='TD'><InputTextarea style={{height:'170px'}} value = {dataTqf7_1.อาจารย์ผู้สอน2} onChange={(e) => handleChange(e, 'อาจารย์ผู้สอน2')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{height:'170px'}} value = {dataTqf7_1.คณวุฒิ2} onChange={(e) => handleChange(e, 'คณวุฒิ2')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'600px',height:'170px'}} value = {dataTqf7_1.ประสบการณ์วิจัย2} onChange={(e) => handleChange(e, 'ประสบการณ์วิจย2')}></InputTextarea></td>
                  </tr>
                  <tr>
                    <td className='TD'><InputTextarea style={{height:'110px'}} value = {dataTqf7_1.อาจารย์ผู้สอน3} onChange={(e) => handleChange(e, 'อาจารย์ผู้สอน3')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{height:'110px'}} value = {dataTqf7_1.คณวุฒิ3} onChange={(e) => handleChange(e, 'คณวุฒิ3')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'600px',height:'110px'}} value = {dataTqf7_1.ประสบการณ์วิจัย3} onChange={(e) => handleChange(e, 'ประสบการณ์วิจย3')}></InputTextarea></td>
                  </tr>
                  <tr>
                    <td className='TD'><InputTextarea style={{height:'295px'}} value = {dataTqf7_1.อาจารย์ผู้สอน4} onChange={(e) => handleChange(e, 'อาจารย์ผู้สอน4')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{height:'295px'}} value = {dataTqf7_1.คณวุฒิ4} onChange={(e) => handleChange(e, 'คณวุฒิ4')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'600px',height:'295px'}} value = {dataTqf7_1.ประสบการณ์วิจัย4} onChange={(e) => handleChange(e, 'ประสบการณ์วิจย4')}></InputTextarea></td>
                  </tr>
                  <tr>
                    <td className='TD'><InputTextarea style={{height:'100px'}} value = {dataTqf7_1.อาจารย์ผู้สอน5} onChange={(e) => handleChange(e, 'อาจารย์ผู้สอน5')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{height:'100px'}} value = {dataTqf7_1.คณวุฒิ5} onChange={(e) => handleChange(e, 'คณวุฒิ5')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'600px',height:'100px'}} value = {dataTqf7_1.ประสบการณ์วิจัย5} onChange={(e) => handleChange(e, 'ประสบการณ์วิจย5')}></InputTextarea></td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/***********************************************/}
          </Panel><br/><br/>
          <Panel header="องค์ประกอบที่ 1 การกำกับมาตรฐาน">
          <span>ตัวบ่งชี้ที่ 1.1  การบริหารจัดการหลักสูตรตามเกณฑ์มาตรฐานหลักสูตรที่กําหนดโดยสํานักงานคณะกรรมการการอุดมศึกษา</span><br/><br/>
            {/***********************************************/}
            <div>
              <table className='TA'>
                <thead>
                  <tr>
                    <th className='TH'>เกณฑ์การประเมิน</th>
                    <th className='TH'>ผลการดำเนินงาน</th>
                    <th className='TH'>เอกสารหลักฐาน</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='TD'><InputTextarea style={{width:'300px',height:'130px'}} value = {dataTqf7_1.เกณฑ์การประเมิน1} onChange={(e) => handleChange(e, 'เกณฑ์การประเมิน1')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'800px',height:'130px'}} value = {dataTqf7_1.ผลการดำเนินงาน7} onChange={(e) => handleChange(e, 'ผลการดำเนินงาน7')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'450px',height:'130px'}} value = {dataTqf7_1.เอกสารหลักฐาน1} onChange={(e) => handleChange(e, 'เอกสารหลักฐาน1')}></InputTextarea></td>
                  </tr>
                  <tr>
                    <td className='TD'><InputTextarea style={{width:'300px',height:'200px'}} value = {dataTqf7_1.เกณฑ์การประเมิน2} onChange={(e) => handleChange(e, 'เกณฑ์การประเมิน2')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'800px',height:'200px'}} value = {dataTqf7_1.ผลการดำเนินงาน8} onChange={(e) => handleChange(e, 'ผลการดำเนินงาน8')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'450px',height:'200px'}} value = {dataTqf7_1.เอกสารหลักฐาน2} onChange={(e) => handleChange(e, 'เอกสารหลักฐาน2')}></InputTextarea></td>
                  </tr>
                  <tr>
                    <td className='TD'><InputTextarea style={{width:'300px',height:'100px'}} value = {dataTqf7_1.เกณฑ์การประเมิน3} onChange={(e) => handleChange(e, 'เกณฑ์การประเมิน3')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'800px',height:'100px'}} value = {dataTqf7_1.ผลการดำเนินงาน9} onChange={(e) => handleChange(e, 'ผลการดำเนินงาน9')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'450px',height:'100px'}} value = {dataTqf7_1.เอกสารหลักฐาน3} onChange={(e) => handleChange(e, 'เอกสารหลักฐาน3')}></InputTextarea></td>
                  </tr>
                  <tr>
                    <td className='TD'><InputTextarea style={{width:'300px',height:'120px'}} value = {dataTqf7_1.เกณฑ์การประเมิน4} onChange={(e) => handleChange(e, 'เกณฑ์การประเมิน4')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'800px',height:'120px'}} value = {dataTqf7_1.ผลการดำเนินงาน10} onChange={(e) => handleChange(e, 'ผลการดำเนินงาน10')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'450px',height:'120px'}} value = {dataTqf7_1.เอกสารหลักฐาน4} onChange={(e) => handleChange(e, 'เอกสารหลักฐาน4')}></InputTextarea></td>
                  </tr>
                  <tr>
                    <td className='TD'><InputTextarea style={{width:'300px',height:'100px'}} value = {dataTqf7_1.เกณฑ์การประเมิน5} onChange={(e) => handleChange(e, 'เกณฑ์การประเมิน5')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'800px',height:'100px'}} value = {dataTqf7_1.ผลการดำเนินงาน11} onChange={(e) => handleChange(e, 'ผลการดำเนินงาน11')}></InputTextarea></td>
                    <td className='TD'><InputTextarea style={{width:'450px',height:'100px'}} value = {dataTqf7_1.เอกสารหลักฐาน5} onChange={(e) => handleChange(e, 'เอกสารหลักฐาน5')}></InputTextarea></td>
                  </tr>
                </tbody>
              </table>

                <br/><br/>
                <span>ผลการดำเนินงาน</span>
                <br/><br/>
                <InputTextarea style={{width:'700px'}} value='ผลการประเมินตัวบ่งชี้ที่ 1.1 หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์ “ผ่าน” ตามเกณฑ์มาตรฐานหลักสูตร พ.ศ. 2558 และกรอบมาตรฐานคุณวุฒิระดับอุดมศึกษาแห่งชาติ พ.ศ. 2558'/><br/><br/>
            </div>
            {/***********************************************/}
          </Panel><br/><br/>
          </ScrollPanel>
          <Button type="submit" style={{ marginLeft: '50%' }} label="ยืนยัน" onClick={handleGenerateDocx} />
        </div>
        </form>
      )
    }

    export default TQF7_1
