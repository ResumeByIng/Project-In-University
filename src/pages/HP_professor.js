import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import HP_professorComponent from './HP_professorComponent';

const HP_professor = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [sequence, setSequence] = useState(1);

    const resetForm = () => {
        console.log('Resetting form...');
    };

    const resetSequence = (newSequence) => {
        setSequence(newSequence || 1);
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setOpenDialog(true);
    };

    const handleAdd = () => {
        setSelectedProduct(null);
        setOpenDialog(true);
    };

    const handleSave = (newProduct) => {
         // หาลำดับที่มากที่สุดจากหัวข้อข่าวทั้งหมด
         const maxCode = Math.max(...products.map((product) => parseInt(product.code, 10)), 0);
        
         // เพิ่ม 1 เข้าไปในลำดับใหม่
         const newCode = (maxCode + 1).toString();
 
         const formattedQuantity = new Date(newProduct.quantity).toLocaleDateString('en-GB');
         const updatedProduct = {
             ...newProduct,
             code: newCode,
             quantity: formattedQuantity,
         };
        if (selectedProduct) {
            const updatedProducts = products.map((product) =>
                product.code === selectedProduct.code ? { ...product, ...newProduct } : product
            );
            setProducts(updatedProducts);
        } else {
            setProducts([...products, newProduct]);
        }
        setOpenDialog(false);
        resetForm();
        resetSequence();
    };

    const handleDelete = () => {
        if (selectedProduct) {
            const updatedProducts = products.filter((product) => product.code !== selectedProduct.code);
            setProducts(updatedProducts);
            setOpenDialog(false);
             // หาลำดับที่มากที่สุดจากหัวข้อข่าวทั้งหมด
             const maxCode = Math.max(...updatedProducts.map((product) => parseInt(product.code, 10)), 0);
             // เรียกใช้ resetSequence และส่งลำดับที่มากที่สุด + 1
             resetSequence(maxCode + 1);
            setSelectedProduct(null);
        }
    };

    return (
        <div style={{ width: '100%', marginLeft: '10px' }}>
            <DataTable value={products}>
                <Column header="ลำดับ" field="code"></Column>
                <Column header="หัวข้อข่าว" field="headlines"></Column>
                <Column header="สร้างโดย" field="name"></Column>
                <Column header="สร้างขึ้นเมื่อวันที่" field="quantity"></Column>
                <Column header="ยอดวิว" field="visit"></Column>
                <Column header="ตอบกลับ" field="reply"></Column>
                <Column header="Actions" body={(rowData) => (
                    <div>
                        <Button style={{marginRight:'10px'}} onClick={() => handleEdit(rowData)}>แก้ไข</Button>
                        <Button style={{marginLeft:'10px'}} onClick={() => {setSelectedProduct(rowData);
                            handleDelete();
                        }}>ลบ</Button>
                    </div>
                )}></Column>
            </DataTable>
            <Button style={{ width: '135px',marginTop: '20px',marginLeft:'90%'}} onClick={handleAdd} >เพิ่มหัวข้อข่าว</Button>

            <HP_professorComponent
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                onSave={handleSave}
                product={selectedProduct}
                resetSequence={resetSequence} // ส่งฟังก์ชัน resetSequence เข้าไป
            />

        </div>
    );
};

export default HP_professor;
