import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ScrollPanel } from 'primereact/scrollpanel';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

  const CheckExtrapoints = () => {
    const [extrapointsData, setExtrapointsData] = useState([]);
    const [checkData, setCheckData] = useState([]);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('');
    const userData = JSON.parse(localStorage.getItem('userData'));
    const professorCheck = `${userData.professor_first_name} ${userData.professor_last_name}`;

    const showDialog = () => {
      setDialogVisible(true);
    };
    
    const hideDialog = () => {
      setDialogVisible(false);
    };
    const getSumPointsData = async () => {
      try {
        const result = await axios.get('https://project-in-back.vercel.app/api/get-sum-points');
        setExtrapointsData(result.data);
      } catch (error) {
        console.error('Error fetching sum of points:', error);
      }
    };
  
    const getCheckExtrapointsData = async () => {
      try {
        const result = await axios.get('https://project-in-back.vercel.app/api/get-check-extrapoints');
        console.log("result",result)
        setCheckData(result.data);
      } catch (error) {
        console.error('Error fetching check extrapoints:', error);
      }
    };
  
    useEffect(() => {
      getSumPointsData();
      getCheckExtrapointsData();
      console.log('checkData',checkData);
      console.log('extrapointsData',extrapointsData);
    }, []);
  

    const imageTemplate = (rowData) => {
      const extrapoint_image = rowData.extrapoint_image;
  
      if (extrapoint_image) {
        return <img src={extrapoint_image} alt="รูปภาพ" style={{ width: '150px', height: '150px' }} />;
      } else {
        return <p>No image available</p>;
      }
    };

  const renderActionButtons = (rowData) => {
  
    const handlePass = async () => {
      try {
        await axios.put(`https://project-in-back.vercel.app/extrapoints/${rowData.extrapoint_id}`, { Check_id: 1, professor_check: professorCheck });
        console.log('Passed');
        // เมื่อผ่านสำเร็จ ต้องเรียกใช้ฟังก์ชัน getExtraPointsData() เพื่อรีเฟรชข้อมูลในตาราง

      } catch (error) {
        console.error('Error updating Check_id:', error);
      }
    };
  
    const handleReject = async () => {
      try {
        await axios.put(`https://project-in-back.vercel.app/extrapoints/${rowData.extrapoint_id}`, { Check_id: 2, professor_check: professorCheck });
        console.log('Rejected');
        // เมื่อไม่ผ่านสำเร็จ ต้องเรียกใช้ฟังก์ชัน getExtraPointsData() เพื่อรีเฟรชข้อมูลในตาราง

      } catch (error) {
        console.error('Error updating Check_id:', error);
      }
    };
  
    return (
      <div>
        <button style={{ width:'100px' , backgroundColor:'green'}} onClick={handlePass}>ผ่าน</button>
        <button style={{ width:'100px' , marginTop:'40px' , backgroundColor:'red'}} onClick={handleReject}>ไม่ผ่าน</button>
      </div>
    );
  };

  return (
    <div style={{ width: '100%', marginLeft: '10px' }}>
      <ScrollPanel style={{ width: "100%", height: "950px" }}>
        <DataTable value={checkData} style={{ fontFamily: 'Kanit, sans-serif' }}>
          <Column field="list" header="ชื่อแบบประเมิน" />
          <Column field="points" header="คะแนน" />
          <Column field="first_name" header="ชื่อ" />
          <Column field="last_name" header="นามสกุล" />
          <Column field="id_student" header="รหัสนักศึกษา" />
          <Column header="รูปภาพ" body={imageTemplate} />
          <Column header='Action' body={renderActionButtons} />

        </DataTable>
        <br/><br/>
        <Button label="รวมคะแนน นักศึกษาที่ผ่านคะแนนพิเศษ" className="p-button-success" onClick={showDialog}/>
        <Dialog visible={dialogVisible} onHide={hideDialog}>
          <DataTable value={extrapointsData} globalFilter={globalFilter} style={{ fontFamily: 'Kanit, sans-serif' }}>
            <Column field="full_name" header="ชื่อ" />
            <Column field="id_student" header="รหัสนักศึกษา" />
            <Column field="sum_points" header="รวมคะแนน" />
          </DataTable><br/><br/>
        <InputText value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} placeholder="ค้นหาข้อมูล" />
        </Dialog>
      </ScrollPanel>
    </div>
  );
};

export default CheckExtrapoints;
