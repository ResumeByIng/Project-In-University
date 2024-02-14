import React, { useState, useRef } from 'react';
import Axios from 'axios';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
function UpdateButton({ rowData , setReloadTable  }) {
    const [file, setFile] = useState(null);
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };
    const showDialog = () => {
        setVisible(true);
    }
    const hideDialog = () => {
        setVisible(false);
    }
    const handleUpload = async () => {
        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append('docxFile', file);
        formData.append('id_TQF', rowData.id_TQF);

        try {
            const response = await Axios.post('https://api-bhusin-unthatharns-projects.vercel.app/upload/45Sfcc78SF-p77Zxc', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'อัพโหลดเอกสารสำเร็จ!', life: 3000 });
                setReloadTable(true);
            } else {

                console.error('Error uploading file:', response.statusText);
            }
        } catch (error) {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'อัพโหลดเอกสารไม่สำเร็จ', life: 3000 });
            console.error('Error uploading file:', error.message);
        }
    };
    return (
        <>
            <Button onClick={showDialog} size="small">เพิ่มเอกสาร</Button>
            <Dialog
                header="เพิ่มเอกสาร"
                visible={visible}
                onHide={hideDialog}
            >
                <div className='card'>
                    <Toast ref={toast} position="top-center" />
                    <input type="file" accept='.jpg' onChange={handleFileChange} /><br />
                    <Button onClick={handleUpload}>อัพโหลด</Button>
                </div>
            </Dialog>
        </>
    );
}

export default UpdateButton;