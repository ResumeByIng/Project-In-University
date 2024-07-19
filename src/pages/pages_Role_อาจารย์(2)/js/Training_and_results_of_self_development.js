import { InputTextarea } from 'primereact/inputtextarea';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container } from "react-bootstrap";
import { CSVLink} from 'react-csv';



function Training_and_results_of_self_development() {
   

    const [agenda, setAgenda] = useState([
{
    ชื่ออาจารย์:'1. นายรวิ  อุตตมธนินทร์',
	ตำแหน่งทางวิชาการ:'ผู้ช่วยศาสตราจารย์',
    ผลงานทางวิชาการ:'Charernburanopas, P., Rusmee, K. and Uttamatanin R. (2023). Enhancing Forex Trading With Reinforcement Learnning : A Stablebaselines3 Approach. Proceedings of The 19th International and National conference in Applied Computer Technology and Information System. Bangkok : Southeast Bangkok University, pp 366-373, 31 March 2023',
},{
    ชื่ออาจารย์:'2. นางสาวขวัญเรือน รัศมี',
	ตำแหน่งทางวิชาการ:'ผู้ช่วยศาสตราจารย์',
    ผลงานทางวิชาการ:'Charernburanopas, P., Rusmee, K. and Uttamatanin R. (2023). Enhancing Forex Trading With Reinforcement Learnning : A Stablebaselines3 Approach. Proceedings of  The 19th International and National conference in Applied Computer Technology and Information System. Bangkok : Southeast Bangkok University,pp.366-373, 31 March 2023. /n ฉัตรชัย ไชยโชค, มัทธนา มาตย์วงศ์, ขวัญเรีอน รัศมี, เศรษฐกาล โปร่งนุช. (2566). โมไบล์แอปพลิเคชันนำทางแสดงความเป็นจริงเสริม เพื่อศึกษาสถาปัตยกรรมอาคารตำหนักในมหาวิทยาลัยราชภัฏสวนสุนันทา, Journal of EngineeringSiam University Vol. 24 No.46 ปีที่ 24 ฉบับที่ 1ลำดับที่ 46 หน้า 12-23, มกราคม-มิถุนายน 2566.(TCI กลุ่มที่ 2)',
},{
    ชื่ออาจารย์:'',
	ตำแหน่งทางวิชาการ:'',
    ผลงานทางวิชาการ:'',
},{
    ชื่ออาจารย์:'',
	ตำแหน่งทางวิชาการ:'',
    ผลงานทางวิชาการ:'',
},{
    ชื่ออาจารย์:'',
	ตำแหน่งทางวิชาการ:'',
    ผลงานทางวิชาการ:'',
}
    ]);

      useEffect( ()=>{
        const getuserdata= async ()=>{
          const userreq= await fetch("");
          const userres= await userreq.json();
          console.log(userres);
          setAgenda(userres);
        }
    getuserdata();
     },[]);


    return (
        <React.Fragment>
      <Container>
        <div className="row">
          <div className="col-sm-8">
            <h4 className="mt-3 mb-3">Export Data in Excel using React Js </h4>

          <CSVLink  data={ agenda} filename="RegisterUserData"  className="btn btn-success mb-3">Export User Data</CSVLink>

            <table className="table table-bordered text-white">
              <thead>
                <tr>
                <th scope="col">Sr. No.</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                </tr>
              </thead>
              <tbody>
            
               {
                 agenda.map( (getuser, index)=>(
                <tr key={index}>
                  <td > {index+1} </td>
                  <td >{agenda.ชื่ออาจารย์} </td>
                  <td >{agenda.ตำแหน่งทางวิชาการ} </td>
                  <td >{agenda.ผลงานทางวิชาการ} </td>           
           
                </tr>
                  ) )
                   }
                    
          
              </tbody>
            </table>
          </div>

        

        </div>
      </Container>
    </React.Fragment>
  );
}

export default Training_and_results_of_self_development