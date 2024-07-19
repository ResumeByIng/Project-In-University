import React, { useEffect, useState } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Paginator } from 'primereact/paginator';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';

function EditDataAllUser() {
    const [allUserData, setAllUserData] = useState({ studentData: [], graduateData: [] });
    const [searchStudentText, setSearchStudentText] = useState('');
    const [searchGraduateText, setSearchGraduateText] = useState('');
    const [firstStudent, setFirstStudent] = useState(0);
    const [firstGraduate, setFirstGraduate] = useState(0);
    const [rows, setRows] = useState(5);
    const [selectedUserData, setSelectedUserData] = useState(null);
    const [visibleEditDialog, setVisibleEditDialog] = useState(false);
    const [selectedYear, setSelectedYear] = useState(""); // เก็บค่าปีที่เลือกจาก Dropdown
    const [options, setOptions] = useState([]); // เก็บค่า options สำหรับ Dropdown


    useEffect(() => {
        // สร้าง options สำหรับ Dropdown โดยให้เริ่มต้นจาก พ.ศ. 2558 ถึง 2567
        const currentYear = new Date().getFullYear() + 543; // แปลงเป็น พ.ศ.
        const yearOptions = [];
        for (let year = currentYear - 9; year <= currentYear + 1; year++) {
            yearOptions.push({ label: `${year}`, value: `${year}` });
        }
        setOptions(yearOptions);
    }, []); // useEffect นี้จะทำงานเมื่อ component ถูกโหลดครั้งแรกเท่านั้น



    const onEditClick = (data) => {
        setSelectedUserData(data);
        setVisibleEditDialog(true);
    };

    const onHideEditDialog = () => {
        setVisibleEditDialog(false);
    };  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://project-in-back.vercel.app/api/all-user-data');
            if (!response.ok) {
              throw new Error('Failed to fetch all user data');
            }
            const allUserData = await response.json();
            setAllUserData(allUserData);
          } catch (error) {
            console.error('Error fetching all user data:', error);
          }
        };
    
        fetchData();
      }, [selectedUserData]);

    const paginateStudent = (event) => {
        setFirstStudent(event.first);
    };

    const paginateGraduate = (event) => {
        setFirstGraduate(event.first);
    };

    const onSearchStudent = (e) => {
        setSearchStudentText(e.target.value);
    };

    const onSearchGraduate = (e) => {
        setSearchGraduateText(e.target.value);
    };

    const filteredStudentData = allUserData.studentData.filter((data) => {
        return (
            data.first_name.toLowerCase().includes(searchStudentText.toLowerCase()) ||
            data.last_name.toLowerCase().includes(searchStudentText.toLowerCase()) ||
            data.id_student.toLowerCase().includes(searchStudentText.toLowerCase()) ||
            data.faculty.toLowerCase().includes(searchStudentText.toLowerCase()) ||
            data.branch.toLowerCase().includes(searchStudentText.toLowerCase()) ||
            data.class_year.toString().includes(searchStudentText.toLowerCase()) ||
            data.gender.toLowerCase().includes(searchStudentText.toLowerCase())
        );
    });

    const filteredGraduateData = allUserData.graduateData.filter((data) => {
        return (
            data.first_name.toLowerCase().includes(searchGraduateText.toLowerCase()) ||
            data.last_name.toLowerCase().includes(searchGraduateText.toLowerCase()) ||
            data.id_graduate.toLowerCase().includes(searchGraduateText.toLowerCase()) ||
            data.faculty.toLowerCase().includes(searchGraduateText.toLowerCase()) ||
            data.branch.toLowerCase().includes(searchGraduateText.toLowerCase()) ||
            data.class_year.toString().includes(searchGraduateText.toLowerCase()) ||
            data.gender.toLowerCase().includes(searchGraduateText.toLowerCase()) ||
            data.work_place.toLowerCase().includes(searchGraduateText.toLowerCase()) ||
            data.salary.toString().includes(searchGraduateText.toLowerCase()) ||
            data.work_about.toLowerCase().includes(searchGraduateText.toLowerCase())
        );
    });

    const handleSave = async (fetchData) => {
        try {
            const response = await fetch('https://project-in-back.vercel.app/api/update-user-data', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selectedUserData)
            });
            if (!response.ok) {
                throw new Error('Failed to update user data');
            }
            console.log('User data updated successfully');
            onHideEditDialog();
            fetchData(); // โหลดข้อมูลใหม่หลังจากที่ข้อมูลถูกอัปเดตเรียบร้อยแล้ว
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    return (
        <div style={{ width: '100%', marginLeft: '20px', marginTop: '20px' }}>
                  <ScrollPanel style={{ width: '100%', height: '100%' }}>
            <h1>ข้อมูล นักศึกษาทั้งหมด</h1>
            <div className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText style={{ fontFamily: 'Kanit, sans-serif',width:'200px',marginTop:'10px' }} type="search" value={searchStudentText} onChange={onSearchStudent} placeholder="ค้นหาข้อมูลนักศึกษา" />
            </div>
            <DataTable value={filteredStudentData.slice(firstStudent, firstStudent + rows)} style={{ fontFamily: 'Kanit, sans-serif' }} className="p-datatable-striped">
                <Column field="first_name" header="First Name" />
                <Column field="last_name" header="Last Name" />
                <Column field="id_student" header="Student ID" />
                <Column field="faculty" header="Faculty" />
                <Column field="branch" header="Branch" />
                <Column field="class_year" header="Class Year" />
                <Column field="gender" header="Gender" />
                <Column body={(rowData) => <Button icon="pi pi-pencil" onClick={() => onEditClick(rowData)} />} />
            </DataTable>
            <Paginator first={firstStudent} rows={rows} totalRecords={filteredStudentData.length} onPageChange={paginateStudent} />

            <h1>ข้อมูล บัณฑิตทั้งหมด</h1>
            <div className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText style={{ fontFamily: 'Kanit, sans-serif',width:'200px',marginTop:'10px'  }} type="search" value={searchGraduateText} onChange={onSearchGraduate} placeholder="ค้นหาข้อมูลบัณฑิต" />
            </div>
            <DataTable value={filteredGraduateData.slice(firstGraduate, firstGraduate + rows)} style={{ fontFamily: 'Kanit, sans-serif' }} className="p-datatable-striped">
                <Column field="first_name" header="First Name" />
                <Column field="last_name" header="Last Name" />
                <Column field="id_graduate" header="Graduate ID" />
                <Column field="faculty" header="Faculty" />
                <Column field="branch" header="Branch" />
                <Column field="class_year" header="Class Year" />
                <Column field="gender" header="Gender" />
                <Column field="work_place" header="Work Place" />
                <Column field="salary" header="Salary" />
                <Column field="work_about" header="Work About" />
                <Column body={(rowData) => <Button icon="pi pi-pencil" onClick={() => onEditClick(rowData)} />} />
</DataTable>
            <Paginator first={firstGraduate} rows={rows} totalRecords={filteredGraduateData.length} onPageChange={paginateGraduate} />


<Dialog visible={visibleEditDialog} style={{ fontFamily: 'Kanit, sans-serif',width:'500px',marginTop:'10px' }} onHide={onHideEditDialog}>
    <h2>Edit User Data</h2> 
    {selectedUserData && (
        <div>                        
            <InputText disabled value={selectedUserData.user_id} style={{ fontFamily: 'Kanit, sans-serif',width:'100%',marginTop:'10px' }} onChange={(e) => setSelectedUserData({...selectedUserData, user_id: e.target.value})} />
            <InputText value={selectedUserData.first_name} style={{ fontFamily: 'Kanit, sans-serif',width:'100%',marginTop:'10px' }} onChange={(e) => setSelectedUserData({...selectedUserData, first_name: e.target.value})} />
            <InputText value={selectedUserData.last_name} style={{ fontFamily: 'Kanit, sans-serif',width:'100%',marginTop:'10px' }} onChange={(e) => setSelectedUserData({...selectedUserData, lastname: e.target.value})} />
            {selectedUserData.hasOwnProperty('id_student') && (
                <InputText  value={selectedUserData.id_student} style={{ fontFamily: 'Kanit, sans-serif',width:'100%',marginTop:'10px' }} onChange={(e) => setSelectedUserData({...selectedUserData, id_student: e.target.value})} />
            )}
            {selectedUserData.hasOwnProperty('id_graduate') && (
                <InputText  value={selectedUserData.id_graduate} style={{ fontFamily: 'Kanit, sans-serif',width:'100%',marginTop:'10px' }} onChange={(e) => setSelectedUserData({...selectedUserData, id_graduate: e.target.value})} />
            )}
            <Dropdown 
                value={selectedUserData.faculty} 
                options={[
                    { label: 'วิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม', value: 'วิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม' }
                ]}
                onChange={(e) => setSelectedUserData({...selectedUserData, faculty: e.value})} 
                placeholder="Select a faculty"
                style={{ fontFamily: 'Kanit, sans-serif',width:'100%',marginTop:'10px',textAlign:'center' }}
            />
            <Dropdown 
                value={selectedUserData.branch} 
                options={[
                    { label: 'วิศวกรรมคอมพิวเตอร์', value: 'วิศวกรรมคอมพิวเตอร์' }
                ]}
                onChange={(e) => setSelectedUserData({...selectedUserData, branch: e.value})} 
                placeholder="Select a branch"
                style={{ fontFamily: 'Kanit, sans-serif',width:'100%',marginTop:'10px',textAlign:'center' }}
            />
            <Dropdown
                value={selectedYear}
                options={options}
                onChange={(e) => {
                    setSelectedYear(e.value);
                    setSelectedUserData({...selectedUserData, class_year: e.value}); // เพิ่มบรรทัดนี้เพื่ออัปเดตค่าปีที่เลือกใน selectedUserData
                }}
                placeholder={selectedUserData ? selectedUserData.class_year : "Select a year"} // ให้แสดงปีที่มีอยู่ใน rowData หากมี ไม่งั้นแสดง "Select a year"
                style={{ fontFamily: 'Kanit, sans-serif', width:'100%', marginTop:'10px', textAlign:'center' }}
            />
            <Dropdown 
                value={selectedUserData.gender} 
                options={[
                    { label: 'Male', value: 'Male' },
                    { label: 'Female', value: 'Female' }
                ]}
                onChange={(e) => setSelectedUserData({...selectedUserData, gender: e.value})} 
                placeholder="Select a gender"
                style={{ fontFamily: 'Kanit, sans-serif',width:'100%',marginTop:'10px',textAlign:'center' }}
            />
        </div>
    )}
            <Button className="p-button-danger" style={{ fontFamily: 'Kanit, sans-serif', width:'30%', marginTop:'10px', marginRight: '40%'  }} label="Cancel" onClick={onHideEditDialog} />
            <Button className="p-button-success" style={{ fontFamily: 'Kanit, sans-serif', width:'30%', marginTop:'10px'}} label="Save" onClick={handleSave} />
</Dialog>

            </ScrollPanel>
        </div>
    );
}

export default EditDataAllUser;