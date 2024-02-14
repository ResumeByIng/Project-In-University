import React, { useEffect, useState } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Paginator } from 'primereact/paginator';

function Data_AllUser() {
    const [allUserData, setAllUserData] = useState({ studentData: [], graduateData: [] });
    const [searchStudentText, setSearchStudentText] = useState('');
    const [searchGraduateText, setSearchGraduateText] = useState('');
    const [firstStudent, setFirstStudent] = useState(0);
    const [firstGraduate, setFirstGraduate] = useState(0);
    const [rows, setRows] = useState(5);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch all user data
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
      }, []);

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
            </DataTable>
            <Paginator first={firstGraduate} rows={rows} totalRecords={filteredGraduateData.length} onPageChange={paginateGraduate} />
            </ScrollPanel>
        </div>
    );
}

export default Data_AllUser;