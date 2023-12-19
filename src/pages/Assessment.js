import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';
// import 
import React, { useState, useEffect, useRef  } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { AssessmentService } from '../data/AssessmentService';
import { ProductService } from '../data/ProductService';
import { Checkbox } from "primereact/checkbox";
import { Toast } from 'primereact/toast';


function Assessment() {
    const [Assessment, setAssessment] = useState([]);
    const [products, setProducts] = useState([]);
    const [rowClick, setRowClick] = useState(true);
    const [open, setOpen] = React.useState(false);
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    
    //ฟังก์ในส่วนของการปิดหน้าต่าง
    const handleClose = () => {
      setOpen(false);
    };
    //////////////////////////////////////////////////////////////////////////////////    การโชว์เมื่อกดบันทึกสำเร็จ    //////////////////////////////////////////////////////////////////////////
    const ShowToastSuccess = () => {
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
      setVisible(false);
    };
    //////////////////////////////////////////////////////////////////////////////   ปุ่ม ประเมิน    ///////////////////////////////////////////////////////////////////////////// 
    const actionTemplate = () => (
      <Button label="ประเมิน" onClick={() => setVisible(true)} />
    );
  
    /////////////////////////////////////////////////////////////////////////////   กล่องติ๊กถูก     //////////////////////////////////////////////////////////////////////////////
    const actionTemplate1 = (rowData, fieldName) => (
      <Checkbox
        onChange={() => handleCheckboxChange(rowData, fieldName)}
        checked={rowData[fieldName]}
      />
    );
    const handleCheckboxChange = (rowData, fieldName) => {
      const updatedData = Assessment.map((item) => {
        const updatedItem = { ...item };
        if (item === rowData) {
          updatedItem[fieldName] = !updatedItem[fieldName]; // สลับค่าฟิลด์ที่ต้องการติ๊ก
        } else if (updatedItem[fieldName]) {
          updatedItem[fieldName] = false; // ยกเลิกติ๊กฟิลด์ในแถวนั้นทั้งหมด
        }
        return updatedItem;
      });
    
      setAssessment(updatedData);
    };
      useEffect(() => {
        AssessmentService.getAssessmentMini().then(data => setAssessment(data));
      }, []);
      useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
      <div style={{ width: '100%',marginLeft: '10px' }}>  
            <div className="card">
              <DataTable value={products} paginator rows={10} tableStyle={{ minWidth: '40rem', textAlign: 'center'}}>
                  <Column field="code" header="ปีการศึกษา" ></Column>
                  <Column field="headlines" header="ภาคการศึกษา"></Column>
                  <Column field="name" header="รหัสวิชา"></Column>
                  <Column field="visit" header="อาจารย์"></Column>
                  <Column field="reply" header="ดำเนินงาน" body={actionTemplate}></Column>
              </DataTable>
              <Dialog  header="ประเมินการเรียนการสอน มหาวิทยาลัยราชภัฎสวนสุนันทา ปีการศึกษา : 2566 ภาคการศึกษา 1 " visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}> 
            <div style={{ width: '100%'}}>
          <DataTable value={Assessment} showGridlines tableStyle={{ minWidth: '50rem' , textAlign: 'center'}}>
                  <Column field="clause" header="ข้อ"></Column>
                  <Column field="list" header="รายการประเมิน"></Column>
                  <Column field="very good" header="ดีมาก" body={(rowData) => actionTemplate1(rowData, 'very good')}></Column>
                  <Column field="good" header="ดี" body={(rowData) => actionTemplate1(rowData, 'good')}></Column>
                  <Column field="moderate" header="ปานกลาง" body={(rowData) => actionTemplate1(rowData, 'moderate')}></Column>
                  <Column field="fair" header="พอใช้" body={(rowData) => actionTemplate1(rowData, 'fair')}></Column>
                  <Column field="amend" header="ปรับปรุง" body={(rowData) => actionTemplate1(rowData, 'amend')}></Column>
          </DataTable>
            </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                     <Toast ref={toast} />
              <div className="flex flex-wrap gap-2">
                  <Button label="บันทึก" className="p-button-success" onClick={()=>{
               handleClose();
               ShowToastSuccess();
              }} />
              </div>
          </div>
             </Dialog>
          </div>
        </div>
        )}

  export default Assessment;