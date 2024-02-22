import React, { useState } from "react";
import axios from "axios";

function UploadFile() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("pdfFile", file);

    axios.post("/upload/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log("File uploaded successfully!", response.data);
      // เพิ่มโค้ดเพื่อทำสิ่งที่คุณต้องการหลังจากการอัปโหลดไฟล์เสร็จสิ้น
    })
    .catch((error) => {
      console.error("Error uploading file:", error);
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadFile;
