import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import PropTypes from 'prop-types';

const HP_professorComponent = ({ open, onClose, onSave, product }) => {
    console.log('open:', open);
    const [code, setCode] = useState('');
    const [headlines, setHeadlines] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(new Date());
    const [visit, setVisit] = useState('');
    const [reply, setReply] = useState('');

    useEffect(() => {
        if (product) {
            setCode(product.code || '');
            setHeadlines(product.headlines || '');
            setName(product.name || '');
            setQuantity(product.quantity || new Date());
            setVisit(product.visit || '');
            setReply(product.reply || '');
        }
    }, [product]);

    const handleSave = () => {
        const formattedQuantity = new Date(quantity).toLocaleDateString('en-GB'); // หรือคุณสามารถใส่รูปแบบที่ต้องการเพิ่มเติมได้

        const newProduct = {
            code,
            headlines,
            name,
            quantity: formattedQuantity,
            visit,
            reply
        };

        onSave(newProduct);
        onClose();
    };

    return (
        <Dialog visible={open} onHide={onClose} header="เพิ่ม/แก้ไข หัวข้อข่าว" modal style={{ width: '50%',textAlign:'center' }}>
            <div className="p-grid p-fluid" >
                <div className="p-col-12">
                    <InputText type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="ลำดับ"style={{ width: '50%',textAlign:'center',marginTop:'10px'}}/>
                </div>
                <div className="p-col-12">
                    <InputText type="text" value={headlines} onChange={(e) => setHeadlines(e.target.value)} placeholder="หัวข้อข่าว"style={{ width: '50%',textAlign:'center',marginTop:'10px' }}/>
                </div>
                <div className="p-col-12">
                    <InputText type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="ชื่อ" style={{ width: '50%',textAlign:'center',marginTop:'10px' }}/>
                </div>
                <div className="p-col-12">
                    <Calendar value={quantity} onChange={(e) => setQuantity(e.value)} dateFormat="dd/mm/yy" showIcon style={{ width: '50%',marginTop:'10px',marginLeft:'222px' }}/>
                </div>
                <div className="p-col-12">
                    <InputText type="text" value={visit} onChange={(e) => setVisit(e.target.value)} placeholder="Visit" style={{ width: '50%',textAlign:'center' ,marginTop:'10px'}}/>
                </div>
                <div className="p-col-12">
                    <InputText type="text" value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Reply" style={{ width: '50%',textAlign:'center' ,marginTop:'10px'}}/>
                </div>
                <div className="p-col-12">
                    <Button label="Save" icon="pi pi-check" onClick={handleSave} style={{ width: '25%',textAlign:'center' ,marginTop:'10px'}} />
                    <Button label="Cancel" icon="pi pi-times" onClick={onClose} className="p-button-secondary" style={{ width: '25%',textAlign:'center' ,marginTop:'10px',marginLeft:'10px'}} />
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
