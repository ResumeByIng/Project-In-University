import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import HP_professorComponent from './HP_professorComponent';
import axios from 'axios'; // ต้องติดตั้ง axios ถ้ายังไม่ได้ทำ


const HP_professor = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);

    // ในฟังก์ชั่น fetchData() หรือใด ๆ ที่ทำการอ่านข้อมูลเวลา
    const fetchData = () => {
        axios.get('https://project-in-back.vercel.app/api/get-news')
            .then(response => {
                // แปลงวันที่ในข้อมูลเป็นรูปแบบที่ต้องการ
                const formattedProducts = response.data.map(product => {
                    return {
                        ...product,
                        // แปลงวันที่ในรูปแบบ ISO 8601 เป็นรูปแบบที่ต้องการ "YYYY-MM-DD"
                        date_created: new Date(product.date_created).toISOString().substring(0, 10)
                    };
                });
                setProducts(formattedProducts);
            })
            .catch(error => {
                console.error('Error fetching news:', error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setOpenDialog(true);
    };

    const handleAdd = () => {
        setSelectedProduct(null);
        setOpenDialog(true);
    };

    const handleSave = (newProduct) => {
        const maxCode = Math.max(...products.map((product) => parseInt(product.code, 10)), 0);
        const newCode = (maxCode + 1).toString();
        

    if (selectedProduct) {
        const updatedProducts = products.map((product) =>
            product.code === selectedProduct.code ? { ...product} : product
        );
        setProducts(updatedProducts);
    } else {
        setProducts([...products]);
    }

    setOpenDialog(false);
};
const [deleteConfirmation, setDeleteConfirmation] = useState({
    showDialog: false,
    selectedProduct: null,
  });
  const handleDelete = (selectedProduct) => {
    setDeleteConfirmation({
      showDialog: true,
      selectedProduct: selectedProduct,
    });
  };
  
  const handleConfirmDelete = (selectedProduct) => {
    axios.delete(`https://project-in-back.vercel.app/api/delete-news/${selectedProduct.news_id}`)
      .then(response => {
        console.log('News deleted successfully:', response.data);
        setProducts(products.filter(news => news.news_id !== selectedProduct.news_id));
        fetchData();
        setDeleteConfirmation({ showDialog: false, selectedProduct: null });
      })
      .catch(error => {
        console.error('Error deleting news:', error);
        setDeleteConfirmation({ showDialog: false, selectedProduct: null });
      });
  };
    return (
        <div style={{ width: '100%', marginLeft: '10px'}}>
        <DataTable value={products} style={{fontFamily: 'Kanit, sans-serif'}}>
            <Column header="หัวข้อข่าว" field="title"></Column>
            <Column header="เนื้อหา" field="content"></Column>
            <Column style={{ width: '200px'}} header="สร้างโดย" field="author"></Column>
            <Column style={{ width: '150px'}}header="สร้างขึ้นเมื่อวันที่" field="date_created"></Column>
            <Column style={{ width: '120px'}}header="Actions" body={(rowData) => (
                <div  style={{ width: '100%'}} >
                    <Button style={{ width: '60px', textAlign: 'center',fontFamily: 'Kanit, sans-serif',marginBottom:'10px',marginLeft:'10px',backgroundColor:'#D51E1E', border: '0px'}} 
                    onClick={() => setDeleteConfirmation({ showDialog: true, selectedProduct: rowData })}>ลบ</Button>
                </div>
            )}></Column>
        </DataTable>
            <Button style={{ width: '135px',marginTop: '20px',marginLeft:'90%', textAlign: 'center',fontFamily: 'Kanit, sans-serif',backgroundColor:'#469303', border: '0px'}} onClick={handleAdd} >เพิ่มหัวข้อข่าว</Button>
        <HP_professorComponent fetchData={fetchData} open={openDialog} onClose={() => setOpenDialog(false)} onSave={handleSave} product={selectedProduct} />
        <Dialog visible={deleteConfirmation.showDialog} onHide={() => setDeleteConfirmation({ showDialog: false, selectedProduct: null })} 
            style={{ width: '550px', display: 'flex', flexDirection: 'column', alignItems: 'center',fontFamily: 'Kanit, sans-serif' }} 
            header={<div style={{ width: '438px',display: 'flex', justifyContent: 'center', color: 'red',marginLeft:'30px' }}>
                ยืนยันการลบ
            </div>} footer={<div style={{ width: '500px',display: 'flex', justifyContent: 'center' }}>
            <Button style={{fontFamily: 'Kanit, sans-serif', border: '0px',backgroundColor:'red' }} label="ยกเลิก" onClick={() => setDeleteConfirmation({ showDialog: false, selectedProduct: null })} />
            <Button style={{fontFamily: 'Kanit, sans-serif', border: '0px',backgroundColor:'green' }} label="ยืนยัน" onClick={() => handleConfirmDelete(deleteConfirmation.selectedProduct)} autoFocus />
            </div>} modal={true} maximizable={false} resizable={false} draggable={false}>
            <div style={{ width: '500px',textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
                <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem', color: 'red' }}></i>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '20px',fontFamily: 'Kanit, sans-serif' }}>
                คุณแน่ใจที่ต้องการลบหัวข้อข่าวนี้?
            </div>
        </Dialog>
        </div>
    );
};

export default HP_professor;
