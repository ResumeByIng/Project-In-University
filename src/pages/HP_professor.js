import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import HP_professorComponent from './HP_professorComponent';
import axios from 'axios'; // ต้องติดตั้ง axios ถ้ายังไม่ได้ทำ


const HP_professor = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);

    const fetchData = () => {
        axios.get('https://project-in-back.vercel.app/api/get-news')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching news:', error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);


    const resetForm = () => {
        console.log('Resetting form...');
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

        //  const updatedProduct = {
        //      ...newProduct,
        //      code: newCode,
        //      quantity: formattedQuantity,
        //  };
        // if (selectedProduct) {
        //     const updatedProducts = products.map((product) =>
        //         product.code === selectedProduct.code ? { ...product, ...newProduct } : product
        //     );
        //     setProducts(updatedProducts);
        // } else {
        //     setProducts([...products, newProduct]);
        // }
        // setOpenDialog(false);
        // resetForm();
    };

    const handleDelete = (selectedProduct) => {
      
        axios.delete(`https://project-in-back.vercel.app/api/delete-news/${selectedProduct.news_id}`)
          .then(response => {
            console.log('News deleted successfully:', response.data);
            // Update the local state to reflect the deletion
            setProducts(products.filter(news => news.news_id !== selectedProduct.news_id));
            fetchData();
          })
          .catch(error => {
            console.error('Error deleting news:', error);
          });
      };
    return (
        <div style={{ width: '100%', marginLeft: '10px' }}>
                   <DataTable value={products}>
            <Column header="ลำดับ" field="news_id"></Column>
            <Column header="หัวข้อข่าว" field="title"></Column>
            <Column header="เนื้อหา" field="content"></Column>
            <Column header="สร้างโดย" field="author"></Column>
            <Column header="สร้างขึ้นเมื่อวันที่" field="date_created"></Column>
            <Column header="Actions" body={(rowData) => (
                <div>
                    <Button style={{ marginRight: '10px' }} onClick={() => handleEdit(rowData)}>แก้ไข</Button>
                    <Button style={{ marginLeft: '10px' }} onClick={() => {
                        setSelectedProduct(rowData);
                        handleDelete(rowData);
                    }}>ลบ</Button>
                </div>
            )}></Column>
        </DataTable>
            <Button style={{ width: '135px',marginTop: '20px',marginLeft:'90%'}} onClick={handleAdd} >เพิ่มหัวข้อข่าว</Button>
        <HP_professorComponent fetchData={fetchData} open={openDialog} onClose={() => setOpenDialog(false)} onSave={handleSave} product={selectedProduct} />

        </div>
    );
};

export default HP_professor;
