import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Checkbox } from 'primereact/checkbox';  // Import Checkbox component
import { Toast } from 'primereact/toast';
import axios from "axios";

function Assessment() {
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedList, setSelectedList] = useState(null);
    const [assessmentData, setAssessmentData] = useState([]);
    const toast = useRef(null);

    useEffect(() => {
        // Fetch data here for products
        axios.get('https://project-in-back.vercel.app/api/data_assessment')
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleClose = () => {
        setVisible(false);
    };

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

 // Function to handle checkbox change and log rating
 const handleCheckboxChange = (rowData, value, rating, listNumber) => {
  // Save rating in assessment data
  const updatedData = { ...rowData };
  updatedData.rating = value ? rating : null;
  setAssessmentData(prevData => {
    const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
    return updatedList;
  });

  // Check if checkbox is checked and log corresponding message
  if (value) {
    switch(rating) {
      case 5:
        console.log(`เราได้ให้คะแนนดีมากกับ ${rowData[`list_${listNumber}`]}`);
        break;
      case 4:
        console.log(`เราได้ให้คะแนนดีกับ ${rowData[`list_${listNumber}`]}`);
        break;
      case 3:
        console.log(`เราได้ให้คะแนนปานกลางกับ ${rowData[`list_${listNumber}`]}`);
        break;
      case 2:
        console.log(`เราได้ให้คะแนนพอใช้กับ ${rowData[`list_${listNumber}`]}`);
        break;
      case 1:
        console.log(`เราได้ให้คะแนนปรับปรุงกับ ${rowData[`list_${listNumber}`]}`);
        break;
      default:
        break;
    }
  }
};

// Function to render assessment table
const renderAssessmentTable = () => {
  return (
    <div style={{ fontFamily: 'Kanit, sans-serif' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>ข้อ</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>เนื้อหา</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>ดีมาก</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>ดี</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>ปานกลาง</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>พอใช้</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>ปรับปรุง</th>
          </tr>
        </thead>
        <tbody>
          {assessmentData.map((rowData, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{index + 1}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{rowData.list_1}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <Checkbox
                  checked={rowData.rating === 5}
                  onChange={(e) => handleCheckboxChange(rowData, e.checked, 5, 1)}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <Checkbox
                  checked={rowData.rating === 4}
                  onChange={(e) => handleCheckboxChange(rowData, e.checked, 4, 1)}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <Checkbox
                  checked={rowData.rating === 3}
                  onChange={(e) => handleCheckboxChange(rowData, e.checked, 3, 1)}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <Checkbox
                  checked={rowData.rating === 2}
                  onChange={(e) => handleCheckboxChange(rowData, e.checked, 2, 1)}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <Checkbox
                  checked={rowData.rating === 1}
                  onChange={(e) => handleCheckboxChange(rowData, e.checked, 1, 1)}
                />
              </td>
            </tr>
          ))}
        </tbody>
        {[...Array(9)].map((_, i) => (
          <tbody key={i}>
            {assessmentData.map((rowData, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{index + 1}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{rowData[`list_${i + 2}`]}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <Checkbox
                    checked={rowData.rating === 5}
                    onChange={(e) => handleCheckboxChange(rowData, e.checked, 5, i + 2)}
                  />
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <Checkbox
                    checked={rowData.rating === 4}
                    onChange={(e) => handleCheckboxChange(rowData, e.checked, 4, i + 2)}
                  />
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <Checkbox
                    checked={rowData.rating === 3}
                    onChange={(e) => handleCheckboxChange(rowData, e.checked, 3, i + 2)}
                  />
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <Checkbox
                    checked={rowData.rating === 2}
                    onChange={(e) => handleCheckboxChange(rowData, e.checked, 2, i + 2)}
                  />
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <Checkbox
                    checked={rowData.rating === 1}
                    onChange={(e) => handleCheckboxChange(rowData, e.checked, 1, i + 2)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
};





    const handleAssessmentButtonClick = (rowData) => {
        setVisible(true);
        setSelectedList(rowData);
        setAssessmentData([rowData]);
    };

    return (
        <div style={{ width: '100%', marginLeft: '10px' }}>  
            <div className="card">
                <DataTable style={{ fontFamily: 'Kanit, sans-serif' }} value={products} paginator rows={10} tableStyle={{ minWidth: '40rem', textAlign: 'center' }}>
                    <Column field="class_year" header="ปีการศึกษา" />
                    <Column field="header" header="ภาคการศึกษา" />
                    <Column field="course_code" header="รหัสวิชา" />
                    <Column field="name_professor" header="อาจารย์" />
                    <Column field="id" header="ดำเนินงาน" body={(rowData) => <Button style={{ width: '100px', backgroundColor: 'green', border: '0px', fontFamily: 'Kanit, sans-serif' }} label="ประเมิน" onClick={() => handleAssessmentButtonClick(rowData)} />} />
                </DataTable>

                <Dialog header={`${selectedList ? selectedList.header : ''}`} visible={visible} style={{ width: '50vw', fontFamily: 'Kanit, sans-serif' }} onHide={handleClose}>
                    <div style={{ width: '100%' }}>
                        {renderAssessmentTable()}
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



// const showSuccessToast = () => {
//   // ส่งข้อมูลการประเมินไปยังเซิร์ฟเวอร์เพื่อบันทึกลงในฐานข้อมูล
//   axios.post('https://project-in-back.vercel.app/api/assessment_votes', assessmentData , userData)
//       .then(response => {
//           // แสดง toast แจ้งเตือนว่าบันทึกข้อมูลเสร็จสิ้น
//           toast.current.show({
//               severity: 'success',
//               summary: 'บันทึกข้อมูลเสร็จสิ้น',
//               life: 3000,
//               style: {
//                   fontFamily: 'Kanit',
//                   fontSize: '16px'
//               }
//           });
//           // ปิด Dialog
//           handleClose();
//       })
//       .catch(error => {
//           console.error('Error saving assessment data:', error);
//           // แสดง toast แจ้งเตือนว่ามีข้อผิดพลาดเกิดขึ้นในการบันทึกข้อมูล
//           toast.current.show({
//               severity: 'error',
//               summary: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล',
//               life: 3000,
//               style: {
//                   fontFamily: 'Kanit',
//                   fontSize: '16px'
//               }
//           });
//         console.log('user :',userData.user_id);
//       });
// };