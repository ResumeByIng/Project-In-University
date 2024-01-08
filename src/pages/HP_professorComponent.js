import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import PropTypes from 'prop-types';

const HP_professorComponent = ({ open, onClose, onSave, product}) => {
    console.log('open:', open);
    const [code, setCode] = useState('');
    const [sequence, setSequence] = useState(1);
    const [headlines, setHeadlines] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(new Date());
    const [visit, setVisit] = useState('');
    const [reply, setReply] = useState('');


    useEffect(() => {
        if (product) {
            setCode(product.code || sequence.toString());
            setHeadlines(product.headlines || '');
            setName(product.name || '');
            setQuantity(product.quantity || new Date());
            setVisit(product.visit || '');
            setReply(product.reply || '');
        } else {
            // รีเซ็ตค่าทั้งหมดเมื่อไม่มี product ในกรณีเพิ่มหัวข้อข่าว
            setCode(sequence.toString());
            setHeadlines('');
            setName('');
            setQuantity(new Date());
            setVisit('');
            setReply('');
        }
    }, [product, open]);

    const resetForm = () => {
        setCode('');
        setHeadlines('');
        setName('');
        setQuantity(new Date());
        setVisit('');
        setReply('');
    };

    const handleSave = () => {
        const formattedQuantity = new Date(quantity).toLocaleDateString('en-GB'); // หรือคุณสามารถใส่รูปแบบที่ต้องการเพิ่มเติมได้

        const newProduct = {
            code: sequence.toString(), // ใช้ค่าลำดับเป็น code
            headlines,
            name,
            quantity: formattedQuantity,
            visit,
            reply
        };

        onSave(newProduct);
        onClose();
        resetForm();
        setSequence(sequence + 1); // บวกค่าลำดับเพิ่มขึ้น
    };
    return (
        <Dialog visible={open} onHide={onClose} header="เพิ่ม/แก้ไข หัวข้อข่าว" modal style={{ width: '50%',textAlign:'center',fontFamily: 'Kanit, sans-serif' }}>
            <div className="p-grid p-fluid"style={{fontFamily: 'Kanit, sans-serif' }}>
                <div className="p-col-12">
                    <InputText type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="ลำดับ" disabled style={{ width: '50%', marginLeft: '25%', textAlign: 'center', marginTop: '10px', alignItems: 'center',fontFamily: 'Kanit, sans-serif'}}/>
                </div>
                <div className="p-col-12">
                    <InputText type="text" value={headlines} onChange={(e) => setHeadlines(e.target.value)} placeholder="หัวข้อข่าว" style={{ width: '50%', marginLeft: '25%', textAlign: 'center', marginTop: '10px', alignItems: 'center',fontFamily: 'Kanit, sans-serif'}}/>
                </div>
                <div className="p-col-12">
                    <InputText type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="ชื่อ" style={{ width: '50%', marginLeft: '25%', textAlign: 'center', marginTop: '10px', alignItems: 'center',fontFamily: 'Kanit, sans-serif'}}/>
                </div>
                <div className="p-col-12">
                    <Calendar value={quantity} onChange={(e) => setQuantity(e.value)} dateFormat="dd/mm/yy" showIcon style={{ width: '50%', marginLeft: '25%', textAlign: 'center', marginTop: '10px', alignItems: 'center',fontFamily: 'Kanit, sans-serif'}}/>
                </div>
                <div className="p-col-12">
                    <InputText type="text" value={visit} onChange={(e) => setVisit(e.target.value)} placeholder="Visit" disabled style={{ width: '50%', marginLeft: '25%', textAlign: 'center', marginTop: '10px', alignItems: 'center',fontFamily: 'Kanit, sans-serif'}}/>
                </div>
                <div className="p-col-12">
                    <InputText type="text" value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Reply" disabled style={{ width: '50%', marginLeft: '25%', textAlign: 'center', marginTop: '10px', alignItems: 'center',fontFamily: 'Kanit, sans-serif'}}/>
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
        visit: PropTypes.string,
        reply: PropTypes.string,
    }),
};

export default HP_professorComponent;
