import React, { useState, useEffect, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';
import PropTypes from 'prop-types';
import axios from 'axios';

const HP_professorComponent = ({ open, onClose, onSave, product, fetchData}) => {
    console.log('open:', open);
    const [headlines, setHeadlines] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(new Date());
    const [content,setContent] = useState('');

    useEffect(() => {
        if (product) {
            setHeadlines(product.headlines || '');
            setContent(product.content || '');
            setName(`${product.professor_first_name || ''} ${product.professor_last_name || ''}`.trim() || '');
            setQuantity(product.quantity || new Date());
        } else {
            const userData = JSON.parse(localStorage.getItem('userData')) || {};
            setHeadlines('');
            setContent('');
            setName(`${userData.professor_first_name || ''} ${userData.professor_last_name || ''}`.trim() || '');
            setQuantity(new Date());
        }
    }, [product, open]);

    const toast = useRef(null);
    const validateForm = () => {
        let isValid = true;
    
        if (!headlines || !content || !name || !quantity) {
            toast.current.show({ severity: 'error', summary: 'กรุณากรอกข้อมูลให้ครบถ้วน', detail: 'โปรดตรวจสอบข้อมูลที่กรอก', life: 3000});            
            isValid = false;
        }
    
        return isValid;
    };

    const resetForm = () => {
        setHeadlines('');
        setContent(''); 
        setName('');
        setQuantity(new Date());
    };

    const handleSave = () => {
        if (!validateForm()) {
            return;
        }
         // ฟอร์แมตวันที่ในรูปแบบ "วัน เดือน ปี"
    const formattedQuantity = quantity.toLocaleDateString('en-GB');
    console.log('quantity:', quantity);
    console.log('formattedQuantity:', formattedQuantity);
    
    const newProduct = {
        title: headlines,
        content,
        date_created: formattedQuantity,
        author: name
    };
    
        axios.post('https://project-in-back.vercel.app/api/create-news', newProduct)
          .then(response => {
            console.log(response.data);
            fetchData();
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
    
        onSave(newProduct);
        onClose();
        resetForm();
      };
    return (
        <Dialog visible={open} onHide={onClose} header="เพิ่ม/แก้ไข หัวข้อข่าว" modal style={{ width: '50%',textAlign:'center',fontFamily: 'Kanit, sans-serif' }}>
            <div className="p-grid p-fluid"style={{fontFamily: 'Kanit, sans-serif' }}>
                <div className="p-col-12">
                    <InputText type="text" value={headlines} onChange={(e) => setHeadlines(e.target.value)} placeholder="หัวข้อข่าว" style={{ width: '50%', marginLeft: '25%', textAlign: 'center', marginTop: '10px', alignItems: 'center',fontFamily: 'Kanit, sans-serif'}}/>
                </div>
                <div className="p-col-12">
                    <InputText type="text" value={content} onChange={(e) => setContent(e.target.value)}placeholder="เนื้อหาข่าว"  style={{ width: '50%', marginLeft: '25%', textAlign: 'center', marginTop: '10px', alignItems: 'center',fontFamily: 'Kanit, sans-serif'}}/>
                </div>
                <div className="p-col-12">
                    <InputText readOnly type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="ชื่อ" style={{ width: '50%', marginLeft: '25%', textAlign: 'center', marginTop: '10px', alignItems: 'center',fontFamily: 'Kanit, sans-serif'}}/>
                </div>
                <div className="p-col-12">
                    <Calendar disabled value={quantity} onChange={(e) => setQuantity(e.value)} dateFormat="dd/mm/yy" showIcon style={{ width: '50%', marginLeft: '25%', textAlign: 'center', marginTop: '10px', alignItems: 'center',fontFamily: 'Kanit, sans-serif'}}/>
                </div>
                <div className="p-col-12">
                    <Button label="บันทึก" icon="pi pi-check" onClick={handleSave} style={{ width: '25%',textAlign:'center' ,marginTop:'20px',alignItems:'center',fontFamily: 'Kanit, sans-serif'}} />
                    <Button label="ยกเลิก" icon="pi pi-times" onClick={onClose} className="p-button-secondary" style={{ width: '25%',textAlign:'center' ,marginTop:'20px',marginLeft:'10px',alignItems:'center',fontFamily: 'Kanit, sans-serif'}} />
                </div>
                <Toast style={{fontFamily: 'Kanit, sans-serif'}} ref={toast} />
            </div>
        </Dialog>
    );
};
HP_professorComponent.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    product: PropTypes.shape({
        code: PropTypes.string,
        headlines: PropTypes.string,
        name: PropTypes.string,
        quantity: PropTypes.instanceOf(Date),  // เปลี่ยน prop type เป็น instanceOf(Date)
    }),
};

export default HP_professorComponent;
