import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import PropTypes from 'prop-types';
import axios from 'axios';

const HP_professorComponent = ({ open, onClose, onSave, product, fetchData}) => {
    console.log('open:', open);
    const [, setCode] = useState('');
    const [headlines, setHeadlines] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(new Date());
    const [content,setContent] = useState('');

    useEffect(() => {
        if (product) {
            setHeadlines(product.headlines || '');
            setContent(product.content || '');
            setName(`${product.professor_first_name || ''} ${product.professor_last_name || ''}`.trim() || ''); // ใช้ชื่อและนามสกุล และ trim() เพื่อลบช่องว่างหน้าและหลัง
            setQuantity(product.quantity || new Date());
        } else {
            // รีเซ็ตค่าทั้งหมดเมื่อไม่มี product ในกรณีเพิ่มหัวข้อข่าว
            const userData = JSON.parse(localStorage.getItem('userData')) || {};
            setHeadlines('');
            setContent(''); // แก้ไขที่นี่เป็น setContent แทน setHeadlines
            setName(`${userData.professor_first_name || ''} ${userData.professor_last_name || ''}`.trim() || ''); // ใช้ชื่อและนามสกุล และ trim() เพื่อลบช่องว่างหน้าและหลัง
            setQuantity(new Date());
        }
    }, [product, open]);

    const resetForm = () => {
        setCode('');
        setHeadlines('');
        setContent(''); 
        setName('');
        setQuantity(new Date());
    };

    const handleSave = () => {
        const moment = require('moment');
        const formattedQuantity = moment(quantity).format('YYYY-MM-DD');
        // const formattedQuantity = new Date(quantity).toISOString().split('T')[0];
        console.log('Quantity:', quantity);
        console.log('Formatted Quantity:', formattedQuantity);
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

        // fetch('https://project-in-back.vercel.app/api/create-news', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(newProduct),
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));
        
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
