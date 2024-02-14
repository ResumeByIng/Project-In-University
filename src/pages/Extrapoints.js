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
import { Checkbox } from "primereact/checkbox";
import extra from "./extra";
import axios from "axios";
import { InputSwitch } from "primereact/inputswitch";
function Extrapoints() {
  const [Extrapoints, setExtrapoints] = useState([]);
  const [selectedExtrapoints, setSelectedExtrapoints] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [reloadTable, setReloadTable] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [rowClick, setRowClick] = useState(true);
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

    reader.onload = (e) => {
      console.log("Uploading image for row:", rowData);
      console.log("Image data:", e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const imageUploadTemplate = (rowData) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {rowData.picture ? (
          <img src={rowData.picture} alt="รูปภาพ" style={{ width: "100px" }} />
        ) : (
          <FileUpload
            mode="basic"
            chooseLabel="เลือกรูปภาพ"
            className="p-button-rounded p-button-outlined p-button-secondary"
            customUpload={true}
            uploadHandler={(e) => uploadImage(e, rowData)}
            accept="image/jpeg, image/png"
            maxFileSize={MAX_FILE_SIZE}
            style={{ fontFamily: "Kanit, sans-serif" }}
          />
        )}
        <Checkbox
          checked={selectedExtrapoints.includes(rowData)}
          onChange={(e) => handleCheckboxToggle(e, rowData)}
          style={{ marginLeft: "10px" }}
        />
      </div>
    );
  };
  const formattedData = data2.map((item) => {
    return {};
  });
  useEffect(() => {
    ExtrapointsService.getExtrapoints()
      .then((data) => {
        setExtrapoints(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    // ดึงข้อมูลจาก MySQL
    axios
      .get("http://localhost:3001/api/get-extrapoints")
      .then((response) => {
        setData2(response.data);
        setReloadTable(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reloadTable]);

  const handleCheckboxToggle = (e, rowData) => {
    const selectedItems = [...selectedExtrapoints];
    if (e.checked) {
      selectedItems.push(rowData);
    } else {
      const index = selectedItems.findIndex((item) => item === rowData);
      if (index !== -1) {
        selectedItems.splice(index, 1);
      }
    }
    setSelectedExtrapoints(selectedItems);
  };

  return (
    <div style={{ width: "100%", marginLeft: "10px" }}>
      <ScrollPanel style={{ width: "100%", height: "950px" }}>
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
            <Column key={'checkbox'}
              selectionMode="multiple"
              headerStyle={{ width: "3rem" }}
            ></Column>
            <Column key={"clause"} field="clause" header="ลำดับ"></Column>
            <Column key={"list"} field="list" header="หัวข้อ"></Column>
            <Column key={"points"} field="points" header="คะแนน"></Column>
            <Column key={"add_document"} header="เพิ่มเอกสาร"></Column>
          </DataTable>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              type="submit"
              label="ส่งแบบประเมิน"
              style={{ fontFamily: "Kanit, sans-serif" }}
              className="w-full md:w-14rem"
            />
          </div>
        </div>
      </ScrollPanel>
    </div>
  );
}

export default Extrapoints;
