import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';
// import 
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Checkbox } from "primereact/checkbox";
import { Toast } from 'primereact/toast';

function Assessment() {
    const [assessment, setAssessment] = useState([]);
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedList, setSelectedList] = useState(null);
    const toast = useRef(null);
    
    // ฟังก์ในส่วนของการปิดหน้าต่าง
    const handleClose = () => {
        setVisible(false);
    };

    // ฟังก์ชันแสดง Toast ข้อความเมื่อบันทึกสำเร็จ
    const showSuccessToast = () => {
        toast.current.show({
            severity: 'success',
            summary: 'บันทึกข้อมูลเสร็จสิ้น',
            life: 3000,
            style: {
                fontFamily: 'Kanit',
                fontSize: '16px'
            }
        });
        handleClose();
    };

    // ฟังก์ชันสำหรับการเปลี่ยนแปลงค่า checkbox
    const handleCheckboxChange = (rowData, fieldName) => {
        const updatedData = assessment.map((item) => ({
            ...item,
            [fieldName]: item === rowData ? !item[fieldName] : false
        }));

        setAssessment(updatedData);
    };
  

    return (
        <div style={{ width: '100%', marginLeft: '10px' }}>  
            <div className="card">
                <DataTable style={{ fontFamily: 'Kanit, sans-serif' }} value={products} paginator rows={10} tableStyle={{ minWidth: '40rem', textAlign: 'center' }}>
                    <Column field="code" header="ปีการศึกษา" ></Column>
                    <Column field="headlines" header="ภาคการศึกษา"></Column>
                    <Column field="name" header="รหัสวิชา"></Column>
                    <Column field="visit" header="อาจารย์"></Column>
                    <Column field="reply" header="ดำเนินงาน" body={() => <Button style={{ width: '100px', backgroundColor: 'green', border: '0px', fontFamily: 'Kanit, sans-serif' }} label="ประเมิน" onClick={() => setVisible(true)} />} />
                </DataTable>

                <Dialog header="ประเมินการเรียนการสอน มหาวิทยาลัยราชภัฎสวนสุนันทา ปีการศึกษา : 2566 ภาคการศึกษา 1 " visible={visible} style={{ width: '50vw', fontFamily: 'Kanit, sans-serif' }} onHide={handleClose}> 
                    <div style={{ width: '100%' }}>
                        <DataTable style={{ fontFamily: 'Kanit, sans-serif' }} value={assessment} showGridlines tableStyle={{ minWidth: '50rem', textAlign: 'center' }}>
                            <Column field="clause" header="หัวข้อที่"></Column>
                            <Column field="list" header="รายการประเมิน"></Column>
                            <Column header="ดีมาก"></Column>
                            <Column header="ดี" ></Column>
                            <Column header="ปานกลาง"></Column>
                            <Column header="พอใช้"></Column>
                            <Column header="ปรับปรุง"></Column>
                        </DataTable>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                        <Toast ref={toast} />
                        <div className="flex flex-wrap gap-2">
                            <Button style={{ width: '100px', fontFamily: 'Kanit, sans-serif' }} label="บันทึก" className="p-button-success" onClick={showSuccessToast} />
                        </div>
                    </div>
                </Dialog>
            </div>
        </div>
    );
}

export default Assessment;
