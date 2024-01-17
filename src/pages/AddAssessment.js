import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function AddAssessment({ visible, onHide }) {
  const [assessmentData, setAssessmentData] = useState({
    header: '',
    clauses: [],
  });

  const handleSave = () => {
    // ทำการบันทึก assessmentData หรือทำตามต้องการ
    console.log('บันทึกแบบประเมิน:', assessmentData);
    onHide(); // ปิดหน้าต่างหลังจากบันทึก
  };

  const handleAddClause = () => {
    const newClause = { clause: '', list: '' };
    setAssessmentData({
      ...assessmentData,
      clauses: [...assessmentData.clauses, newClause],
    });
  };

  const handleRemoveClause = (index) => {
    const updatedClauses = [...assessmentData.clauses];
    updatedClauses.splice(index, 1);
    setAssessmentData({ ...assessmentData, clauses: updatedClauses });
  };

  return (
    <Dialog header="สร้างแบบประเมิน" visible={visible} style={{ width: '50vw' }} onHide={onHide}>
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-12">
          <label htmlFor="header">หัวข้อ:</label>
          <InputText
            id="header"
            value={assessmentData.header}
            onChange={(e) => setAssessmentData({ ...assessmentData, header: e.target.value })}
          />
        </div>
        <div className="p-field p-col-12">
          <label htmlFor="clauses">ข้อและรายการประเมิน:</label>
          <DataTable value={assessmentData.clauses} editable>
            <Column field="clause" header="ข้อ" editor={(props) => <InputText {...props} />} />
            <Column field="list" header="รายการประเมิน" editor={(props) => <InputText {...props} />} />
            <Column
              body={(rowData) => (
                <Button
                  icon="pi pi-trash"
                  onClick={() => handleRemoveClause(assessmentData.clauses.indexOf(rowData))}
                  className="p-button-danger"
                />
              )}
            />
          </DataTable>
          <Button label="เพิ่มข้อและรายการประเมิน" onClick={handleAddClause} />
        </div>
      </div>
      <div className="p-d-flex p-jc-between">
        <Button label="บันทึก" onClick={handleSave} />
        <Button label="ยกเลิก" onClick={onHide} className="p-button-secondary" />
      </div>
    </Dialog>
  );
}

export default AddAssessment;
