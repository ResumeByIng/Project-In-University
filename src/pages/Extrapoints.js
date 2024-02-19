import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { ExtrapointsService } from "../data/ExtrapointsService";
import { FileUpload } from "primereact/fileupload";
import { ScrollPanel } from "primereact/scrollpanel";
import axios from "axios";
import { Dialog } from 'primereact/dialog';

function Extrapoints() {
  const [Extrapoints, setExtrapoints] = useState([]);
  const [selectedExtrapoints, setSelectedExtrapoints] = useState([]);
  const [data2, setData2] = useState([]);
  const [reloadTable, setReloadTable] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [rowClick, setRowClick] = useState(true);
  const [dialogVisible, setDialogVisible] = useState(false);

  const showDialog = () => {
    setDialogVisible(true);
  };
  
  const hideDialog = () => {
    setDialogVisible(false);
  };
  
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB in bytes
  

  
  

  const isImageFileValid = (file) => {
    const allowedTypes = ["image/jpeg", "image/png"];
    return allowedTypes.includes(file.type) && file.size <= MAX_FILE_SIZE;
  };

  const uploadImage = (event, rowData) => {
    const file = event.files[0];
    if (!file || !isImageFileValid(file)) {
      console.error(
        "Invalid file. Please upload a valid image file (jpg or png) not exceeding 10 MB."
      );
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const fileContent = reader.result;
      handleSubmit(rowData, file);
    };
    reader.readAsDataURL(file);
  };

  // const pdfUploadTemplate = (rowData) => {
  //   return (
  //     <div>
  //       <FileUpload
  //         mode="basic"
  //         chooseLabel="อัปโหลดไฟล์ PDF"
  //         className="p-button-rounded p-button-outlined p-button-secondary"
  //         customUpload={true}
  //         uploadHandler={(e) => uploadPDF(e, rowData)}
  //         accept="application/pdf"
  //         maxFileSize={MAX_FILE_SIZE}
  //         style={{ fontFamily: "Kanit, sans-serif" }}
  //       />
  //     </div>
  //   );
  // };


  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  const userData = JSON.parse(localStorage.getItem('userData'));


  // const handleSubmit = (rowData, fileContent) => {
  //   const formData = new FormData();
  //   formData.append("imageFile", fileContent); // เพิ่มไฟล์รูปภาพลงใน FormData
  
  //   // เพิ่มโค้ดส่วนที่ต้องการให้ส่งไปยังเซิร์ฟเวอร์ ตามความเหมาะสม
  
  //   axios.post("https://project-in-back.vercel.app/upload/", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })
  //   .then((response) => {
  //     console.log("Image uploaded successfully!", response.data);
  //     // เพิ่มโค้ดเพื่อทำสิ่งที่คุณต้องการหลังจากการอัปโหลดรูปภาพเสร็จสิ้น
  //   })
  //   .catch((error) => {
  //     console.error("Error uploading image:", error);
  //   });
  // };
  const handleSubmit = (rowData, fileContent) => {
    console.log('imageFile', fileContent);
    // สร้าง FormData เพื่อเก็บข้อมูลและไฟล์ที่จะส่งไปที่เซิร์ฟเวอร์
    const formData = new FormData();
    formData.append("image", fileContent);
  
    // manage file
    // formData.append("pdfFile", fileContent); // เพิ่มไฟล์ PDF ลงใน FormData

    formData.append("first_name", userData.student_first_name); // เพิ่มชื่อจาก userData
    formData.append("last_name", userData.student_last_name); // เพิ่มนามสกุลจาก userData
    formData.append("clause", rowData.clause); // เพิ่มข้อมูล clause จากตาราง
    formData.append("list", rowData.list); // เพิ่มข้อมูล list จากตาราง
    formData.append("points", rowData.points); // เพิ่มข้อมูล points จากตาราง
    formData.append("id_student", userData.student_id_student); // เพิ่ม id_student จาก userData

    // axios.post("https://project-in-back.vercel.app/upload/", formData, {
    axios.post("https://project-in-back.vercel.app/upload/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log("File uploaded successfully!", response.data);
    })
    .catch((error) => {
      console.error("Error uploading file:", error);
    });
  };

  const imageUploadTemplate = (rowData) => {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {rowData.picture ? (
          <img src={rowData.picture} alt="รูปภาพ" style={{ width: "100px" }} />
        ) : (
          <FileUpload
            mode="basic"
            chooseLabel="อัปโหลดไฟล์ภาพ"
            className="p-button-rounded p-button-outlined p-button-secondary"
            customUpload={true}
            uploadHandler={(e) => uploadImage(e, rowData)}
            accept="image/jpeg, image/png, .jpg, .JPG"
            maxFileSize={MAX_FILE_SIZE}
            style={{ fontFamily: "Kanit, sans-serif" }}
          />
        )}
      </div>
    );
  };

  // const formattedData = data2.map((item) => {
  //   return {};
  // });

  useEffect(() => {
    ExtrapointsService.getExtrapoints()
    .then((data) => {
      setExtrapoints(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
    if (dialogVisible) {
      // เมื่อเปิด dialog
      axios.get(`https://project-in-back.vercel.app/api/get-extrapoints?id_student=${userData.student_id_student}`)
        .then((response) => {
          setData2(response.data);
          setReloadTable(false);
          console.log(response.data);
          console.log(userData.student_id_student);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [dialogVisible],[reloadTable]);

  // const handleCheckboxToggle = (e, rowData) => {
  //   const selectedItems = [...selectedExtrapoints];
  //   if (e.checked) {
  //     selectedItems.push(rowData);
  //   } else {
  //     const index = selectedItems.findIndex((item) => item === rowData);
  //     if (index !== -1) {
  //       selectedItems.splice(index, 1);
  //     }
  //   }
  //   setSelectedExtrapoints(selectedItems);
  // };
  

  // const uploadPDF = (event, rowData) => {
  //   const file = event.files[0];


  //   if (!file || file.type !== "application/pdf" || file.size > MAX_FILE_SIZE) {
  //     console.error(
  //       "Invalid file. Please upload a valid PDF file not exceeding 10 MB."
  //     );
  //     return;
  //   }

  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     const fileContent = reader.result;
  //     // setFile(fileContent);
  //     handleSubmit(rowData, fileContent);
  //   };
    
  //   // reader.onerror = (error) => console.error(error);

  //   // ใส่โค้ดที่ต้องการให้ทำงานเมื่อมีการอัปโหลดไฟล์ PDF ที่ถูกต้อง
  //   console.log("Uploading PDF for row:", rowData);
  // };
  const statusTemplate = (rowData) => {
    switch (rowData.Check_id) {
        case 0:
            return <span>รอตรวจสอบ</span>;
        case 1:
            return <span>ผ่าน</span>;
        case 2:
            return <span>ไม่ผ่าน</span>;
        default:
            return null;
    }
};



  return (
    <div style={{ width: "100%", marginLeft: "10px" }}>
      <ScrollPanel style={{ width: "100%", height: "100%" }}>
      <span style={{ fontSize: '2rem', fontFamily: 'Arial, sans-serif', color: 'black' }}>คะแนนพิเศษ</span>
        <p>Content of Extrapoints</p>
        <div className="card">
          <DataTable
            value={Extrapoints}
            selectionMode={rowClick ? null : "checkbox"}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="clause"
            tableStyle={{ minWidth: "50rem" }}
          >

            <Column key={"clause"} field="clause" header="ลำดับ"></Column>
            <Column key={"list"} field="list" header="หัวข้อ"></Column>
            <Column key={"points"} field="points" header="คะแนน"></Column>
            <Column key={"add_document"} header="เพิ่มเอกสาร" body={imageUploadTemplate} />
          </DataTable><br/><br/>
          <span style={{ fontSize: '2rem', fontFamily: 'Arial, sans-serif', color: 'red' }}>***ใส่รูปภาพ อัปโหลดไฟล์ แล้วกดส่งอีกรอบ***</span><br/><br/>
          <Button label="เช็คแบบประเมิน" className="p-button-success" onClick={showDialog} />

        </div>
        <Dialog visible={dialogVisible} onHide={hideDialog}><br/><br/>
        <span style={{ fontSize: '2rem', fontFamily: 'Arial, sans-serif'}}>สถานะแบบประเมิน</span><br/><br/>
          <DataTable value={data2} tableStyle={{ minWidth: "50rem" }}>
            <Column key={"list"} field="list" header="หัวข้อ"></Column>
            <Column key={"points"} field="points" header="คะแนน"></Column>
            <Column key={"Check_id"} field="Check_id" header="สถานะ" body={statusTemplate}></Column>
            <Column field="professor_check" header="อาจารย์ที่ประเมิน"></Column>
          </DataTable>
          
        </Dialog>
        </ScrollPanel>
    </div>
  );
}

export default Extrapoints;
