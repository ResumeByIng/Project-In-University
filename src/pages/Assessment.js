import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Checkbox } from 'primereact/checkbox';  // Import Checkbox component
import { Toast } from 'primereact/toast';
import axios from "axios";

function Assessment() {
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedList, setSelectedList] = useState(null);
    const [assessmentData, setAssessmentData] = useState([]);
    const toast = useRef(null);

    useEffect(() => {
        // Fetch data here for products
        axios.get('https://project-in-back.vercel.app/api/data_assessment')
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleClose = () => {
        setVisible(false);
    };

    const handleCheckboxChange1 = (rowData, value) => {
      // บันทึกค่าคะแนนลงในข้อมูลการประเมิน
      const updatedData = { ...rowData };
      updatedData.rating = value ? 5 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
      setAssessmentData(prevData => {
          const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
          return updatedList;
      });
  };
    const handleCheckboxChange2 = (rowData, value) => {
      // บันทึกค่าคะแนนลงในข้อมูลการประเมิน
      const updatedData = { ...rowData };
      updatedData.rating = value ? 4 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
      setAssessmentData(prevData => {
          const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
          return updatedList;
      });
  };
  const handleCheckboxChange3 = (rowData, value) => {
    // บันทึกค่าคะแนนลงในข้อมูลการประเมิน
    const updatedData = { ...rowData };
    updatedData.rating = value ? 3 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
    setAssessmentData(prevData => {
        const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
        return updatedList;
    });
};
const handleCheckboxChange4 = (rowData, value) => {
  // บันทึกค่าคะแนนลงในข้อมูลการประเมิน
  const updatedData = { ...rowData };
  updatedData.rating = value ? 2 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
  setAssessmentData(prevData => {
      const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
      return updatedList;
  });
};
const handleCheckboxChange5 = (rowData, value) => {
  // บันทึกค่าคะแนนลงในข้อมูลการประเมิน
  const updatedData = { ...rowData };
  updatedData.rating = value ? 1 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
  setAssessmentData(prevData => {
      const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
      return updatedList;
  });
};

const handleCheckboxChange6  = (rowData, value) => {
  // บันทึกค่าคะแนนลงในข้อมูลการประเมิน
  const updatedData = { ...rowData };
  updatedData.rating1 = value ? 5 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
  setAssessmentData(prevData => {
      const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
      return updatedList;
  });
};
const handleCheckboxChange7 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating1 = value ? 4 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
    const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
    return updatedList;
});
};
const handleCheckboxChange8 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating1 = value ? 3 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
  const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
  return updatedList;
});
};
const handleCheckboxChange9 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating1 = value ? 2 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};
const handleCheckboxChange10 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating1 = value ? 1 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};


const handleCheckboxChange11  = (rowData, value) => {
  // บันทึกค่าคะแนนลงในข้อมูลการประเมิน
  const updatedData = { ...rowData };
  updatedData.rating2 = value ? 5 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
  setAssessmentData(prevData => {
      const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
      return updatedList;
  });
};
const handleCheckboxChange12 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating2 = value ? 4 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
    const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
    return updatedList;
});
};
const handleCheckboxChange13 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating2 = value ? 3 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
  const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
  return updatedList;
});
};
const handleCheckboxChange14 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating2 = value ? 2 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};
const handleCheckboxChange15 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating2 = value ? 1 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};


const handleCheckboxChange16  = (rowData, value) => {
  // บันทึกค่าคะแนนลงในข้อมูลการประเมิน
  const updatedData = { ...rowData };
  updatedData.rating3 = value ? 5 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
  setAssessmentData(prevData => {
      const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
      return updatedList;
  });
};
const handleCheckboxChange17 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating3 = value ? 4 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
    const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
    return updatedList;
});
};
const handleCheckboxChange18 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating3 = value ? 3 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
  const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
  return updatedList;
});
};
const handleCheckboxChange19 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating3 = value ? 2 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};
const handleCheckboxChange20 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating3 = value ? 1 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};


const handleCheckboxChange21  = (rowData, value) => {
  // บันทึกค่าคะแนนลงในข้อมูลการประเมิน
  const updatedData = { ...rowData };
  updatedData.rating4 = value ? 5 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
  setAssessmentData(prevData => {
      const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
      return updatedList;
  });
};
const handleCheckboxChange22 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating4 = value ? 4 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
    const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
    return updatedList;
});
};
const handleCheckboxChange23 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating4 = value ? 3 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
  const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
  return updatedList;
});
};
const handleCheckboxChange24 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating4 = value ? 2 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};
const handleCheckboxChange25 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating4 = value ? 1 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};

const handleCheckboxChange26  = (rowData, value) => {
  // บันทึกค่าคะแนนลงในข้อมูลการประเมิน
  const updatedData = { ...rowData };
  updatedData.rating5 = value ? 5 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
  setAssessmentData(prevData => {
      const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
      return updatedList;
  });
};
const handleCheckboxChange27 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating5 = value ? 4 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
    const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
    return updatedList;
});
};
const handleCheckboxChange28 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating5 = value ? 3 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
  const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
  return updatedList;
});
};
const handleCheckboxChange29 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating5 = value ? 2 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};
const handleCheckboxChange30 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating5 = value ? 1 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};
const handleCheckboxChange31  = (rowData, value) => {
  // บันทึกค่าคะแนนลงในข้อมูลการประเมิน
  const updatedData = { ...rowData };
  updatedData.rating6 = value ? 5 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
  setAssessmentData(prevData => {
      const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
      return updatedList;
  });
};
const handleCheckboxChange32 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating6 = value ? 4 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
    const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
    return updatedList;
});
};
const handleCheckboxChange33 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating6 = value ? 3 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
  const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
  return updatedList;
});
};
const handleCheckboxChange34 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating6 = value ? 2 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};
const handleCheckboxChange35 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating6 = value ? 1 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};
const handleCheckboxChange36  = (rowData, value) => {
  // บันทึกค่าคะแนนลงในข้อมูลการประเมิน
  const updatedData = { ...rowData };
  updatedData.rating7 = value ? 5 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
  setAssessmentData(prevData => {
      const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
      return updatedList;
  });
};
const handleCheckboxChange37 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating7 = value ? 4 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
    const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
    return updatedList;
});
};
const handleCheckboxChange38 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating7 = value ? 3 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
  const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
  return updatedList;
});
};
const handleCheckboxChange39 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating7 = value ? 2 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};
const handleCheckboxChange40 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating7 = value ? 1 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};
const handleCheckboxChange41  = (rowData, value) => {
  // บันทึกค่าคะแนนลงในข้อมูลการประเมิน
  const updatedData = { ...rowData };
  updatedData.rating8 = value ? 5 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
  setAssessmentData(prevData => {
      const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
      return updatedList;
  });
};
const handleCheckboxChange42 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating8 = value ? 4 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
    const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
    return updatedList;
});
};
const handleCheckboxChange43 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating8 = value ? 3 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
  const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
  return updatedList;
});
};
const handleCheckboxChange44 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating8 = value ? 2 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};
const handleCheckboxChange45 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating8 = value ? 1 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};
const handleCheckboxChange46  = (rowData, value) => {
  // บันทึกค่าคะแนนลงในข้อมูลการประเมิน
  const updatedData = { ...rowData };
  updatedData.rating9 = value ? 5 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
  setAssessmentData(prevData => {
      const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
      return updatedList;
  });
};
const handleCheckboxChange47 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating9 = value ? 4 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
    const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
    return updatedList;
});
};
const handleCheckboxChange48 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating9 = value ? 3 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
  const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
  return updatedList;
});
};
const handleCheckboxChange49 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating9 = value ? 2 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};
const handleCheckboxChange50 = (rowData, value) => {
// บันทึกค่าคะแนนลงในข้อมูลการประเมิน
const updatedData = { ...rowData };
updatedData.rating9 = value ? 1 : null; // ถ้า checkbox ถูกเลือกให้ค่าเป็น 5 ถ้าไม่ให้ค่าเป็น 0
setAssessmentData(prevData => {
const updatedList = prevData.map(item => (item.id === updatedData.id ? updatedData : item));
return updatedList;
});
};



const renderAssessmentTable = () => {
  return (
      <div style={{ fontFamily: 'Kanit, sans-serif' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
              <thead>
                  <tr>
                      <th style={{ border: '1px solid black', padding: '8px' }}>ข้อ</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>เนื้อหา</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>ดีมาก</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>ดี</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>ปานกลาง</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>พอใช้</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>ปรับปรุง</th>
                  </tr>
              </thead>
              <tbody>
                  {assessmentData.map((rowData, index) => (
                    rowData.list_1 && (
                      <tr key={index}>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{index + 1}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{rowData.list_1}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating === 5} onChange={(e) => handleCheckboxChange1(rowData, e.checked, 5)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating === 4} onChange={(e) => handleCheckboxChange2(rowData, e.checked, 4)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating === 3} onChange={(e) => handleCheckboxChange3(rowData, e.checked, 3)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating === 2} onChange={(e) => handleCheckboxChange4(rowData, e.checked, 2)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating === 1} onChange={(e) => handleCheckboxChange5(rowData, e.checked, 1)} />
                          </td>
                      </tr>
                      )
                  ))}
              </tbody>
              <tbody>
                  {assessmentData.map((rowData, index) => (
                    rowData.list_2 && (
                      <tr key={index}>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{index + 2}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{rowData.list_2}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating1 === 5} onChange={(e) => handleCheckboxChange6(rowData, e.checked, 5)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating1 === 4} onChange={(e) => handleCheckboxChange7(rowData, e.checked, 4)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating1 === 3} onChange={(e) => handleCheckboxChange8(rowData, e.checked, 3)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating1 === 2} onChange={(e) => handleCheckboxChange9(rowData, e.checked, 2)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating1 === 1} onChange={(e) => handleCheckboxChange10(rowData, e.checked, 1)} />
                          </td>
                      </tr>
                    )
                  ))}
              </tbody>
              <tbody>
                  {assessmentData.map((rowData, index) => (
                    rowData.list_3 && (
                      <tr key={index}>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{index + 3}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{rowData.list_3}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating2 === 5} onChange={(e) => handleCheckboxChange11(rowData, e.checked, 5)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating2 === 4} onChange={(e) => handleCheckboxChange12(rowData, e.checked, 4)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating2 === 3} onChange={(e) => handleCheckboxChange13(rowData, e.checked, 3)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating2 === 2} onChange={(e) => handleCheckboxChange14(rowData, e.checked, 2)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating2 === 1} onChange={(e) => handleCheckboxChange15(rowData, e.checked, 1)} />
                          </td>
                      </tr>
                    )
                  ))}
              </tbody>
              <tbody>
                  {assessmentData.map((rowData, index) => (
                    rowData.list_4 && (
                      <tr key={index}>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{index + 4}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{rowData.list_4}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating3 === 5} onChange={(e) => handleCheckboxChange16(rowData, e.checked, 5)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating3 === 4} onChange={(e) => handleCheckboxChange17(rowData, e.checked, 4)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating3 === 3} onChange={(e) => handleCheckboxChange18(rowData, e.checked, 3)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating3 === 2} onChange={(e) => handleCheckboxChange19(rowData, e.checked, 2)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating3 === 1} onChange={(e) => handleCheckboxChange20(rowData, e.checked, 1)} />
                          </td>
                      </tr>
                     )
                  ))}
              </tbody>
              <tbody>
                  {assessmentData.map((rowData, index) => (
                    rowData.list_5 && (
                      <tr key={index}>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{index + 5}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{rowData.list_5}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating4 === 5} onChange={(e) => handleCheckboxChange21(rowData, e.checked, 5)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating4 === 4} onChange={(e) => handleCheckboxChange22(rowData, e.checked, 4)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating4 === 3} onChange={(e) => handleCheckboxChange23(rowData, e.checked, 3)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating4 === 2} onChange={(e) => handleCheckboxChange24(rowData, e.checked, 2)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating4 === 1} onChange={(e) => handleCheckboxChange25(rowData, e.checked, 1)} />
                          </td>
                      </tr>
                      )
                  ))}
              </tbody>
              <tbody>
                  {assessmentData.map((rowData, index) => (
                    rowData.list_6 && (
                      <tr key={index}>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{index + 6}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{rowData.list_6}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating5 === 5} onChange={(e) => handleCheckboxChange26(rowData, e.checked, 5)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating5 === 4} onChange={(e) => handleCheckboxChange27(rowData, e.checked, 4)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating5 === 3} onChange={(e) => handleCheckboxChange28(rowData, e.checked, 3)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating5 === 2} onChange={(e) => handleCheckboxChange29(rowData, e.checked, 2)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating5 === 1} onChange={(e) => handleCheckboxChange30(rowData, e.checked, 1)} />
                          </td>
                      </tr>
                    )
                  ))}
              </tbody>
              <tbody>
                  {assessmentData.map((rowData, index) => (
                    rowData.list_7 && (
                      <tr key={index}>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{index + 7}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{rowData.list_7}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating6 === 5} onChange={(e) => handleCheckboxChange31(rowData, e.checked, 5)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating6 === 4} onChange={(e) => handleCheckboxChange32(rowData, e.checked, 4)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating6 === 3} onChange={(e) => handleCheckboxChange33(rowData, e.checked, 3)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating6 === 2} onChange={(e) => handleCheckboxChange34(rowData, e.checked, 2)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating6 === 1} onChange={(e) => handleCheckboxChange35(rowData, e.checked, 1)} />
                          </td>
                      </tr>
                    )
                  ))}
              </tbody>
              <tbody>
                  {assessmentData.map((rowData, index) => (
                    rowData.list_8 && (
                      <tr key={index}>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{index + 8}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{rowData.list_8}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating7 === 5} onChange={(e) => handleCheckboxChange36(rowData, e.checked, 5)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating7 === 4} onChange={(e) => handleCheckboxChange37(rowData, e.checked, 4)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating7 === 3} onChange={(e) => handleCheckboxChange38(rowData, e.checked, 3)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating7 === 2} onChange={(e) => handleCheckboxChange39(rowData, e.checked, 2)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating7 === 1} onChange={(e) => handleCheckboxChange40(rowData, e.checked, 1)} />
                          </td>
                      </tr>
                    )
                  ))}
              </tbody>
              <tbody>
                  {assessmentData.map((rowData, index) => (
                    rowData.list_9 && (
                      <tr key={index}>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{index + 9}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{rowData.list_9}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating8 === 5} onChange={(e) => handleCheckboxChange41(rowData, e.checked, 5)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating8 === 4} onChange={(e) => handleCheckboxChange42(rowData, e.checked, 4)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating8 === 3} onChange={(e) => handleCheckboxChange43(rowData, e.checked, 3)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating8 === 2} onChange={(e) => handleCheckboxChange44(rowData, e.checked, 2)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating8 === 1} onChange={(e) => handleCheckboxChange45(rowData, e.checked, 1)} />
                          </td>
                      </tr>
                    )
                  ))}
              </tbody>
              <tbody>
                  {assessmentData.map((rowData, index) => (
                    rowData.list_10 && (
                      <tr key={index}>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{index + 10}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>{rowData.list_10}</td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating9 === 5} onChange={(e) => handleCheckboxChange46(rowData, e.checked, 5)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating9 === 4} onChange={(e) => handleCheckboxChange47(rowData, e.checked, 4)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating9 === 3} onChange={(e) => handleCheckboxChange48(rowData, e.checked, 3)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating9 === 2} onChange={(e) => handleCheckboxChange49(rowData, e.checked, 2)} />
                          </td>
                          <td style={{ border: '1px solid black', padding: '8px' }}>
                              <Checkbox checked={rowData.rating9 === 1} onChange={(e) => handleCheckboxChange50(rowData, e.checked, 1)} />
                          </td>
                      </tr>
                    )
                  ))}
              </tbody>
          </table>
      </div>
  );
};

const userData = JSON.parse(localStorage.getItem('userData'));
const sendDataToServer = (assessmentData) => {
    // แปลงค่าว่างใน assessmentData เป็น null
    // const updatedAssessmentData = assessmentData.map(rowData => ({
    //   ...rowData,
    //   rating: rowData.rating || null,
    //   rating1: rowData.rating1 || null,
    //   rating2: rowData.rating2 || null,
    //   rating3: rowData.rating3 || null,
    //   rating4: rowData.rating4 || null,
    //   rating5: rowData.rating5 || null,
    //   rating6: rowData.rating6 || null,
    //   rating7: rowData.rating7 || null,
    //   rating8: rowData.rating8 || null,
    //   rating9: rowData.rating9 || null,
    // }));
  
    console.log('ข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์:', ); // เพิ่มบันทึก log นี้
  
    const dataToSend = assessmentData.map(rowData => ({
      user_id: userData.user_id,
      assessment_id: rowData.id,
      vote_value_1: rowData.rating,
      vote_value_2: rowData.rating1,
      vote_value_3: rowData.rating2,
      vote_value_4: rowData.rating3,
      vote_value_5: rowData.rating4,
      vote_value_6: rowData.rating5,
      vote_value_7: rowData.rating6,
      vote_value_8: rowData.rating7,
      vote_value_9: rowData.rating8,
      vote_value_10: rowData.rating9
    }));
  
    console.log('ข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์:', dataToSend); // เพิ่มบันทึก log นี้
  
    axios.post('http://localhost:3001/submit-assessment', dataToSend)
      .then(response => {
        console.log('ส่งข้อมูลสำเร็จ');
        console.log('รับข้อมูลตอบกลับจากเซิร์ฟเวอร์:', response.data);
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', error);
      });
  };
  

const showSuccessToast = () => {
  toast.current.show({
    severity: 'success',
    summary: 'บันทึกข้อมูลเสร็จสิ้น',
    life: 3000,
    style: {
      fontFamily: 'Kanit',
      fontSize: '16px'
    }
  });

// เรียกใช้ฟังก์ชัน sendDataToServer เพื่อส่งข้อมูลไปยังเซิร์ฟเวอร์
sendDataToServer(assessmentData);

  handleClose();
};




    const handleAssessmentButtonClick = (rowData) => {
        setVisible(true);
        setSelectedList(rowData);
        setAssessmentData([rowData]);
    };

    return (
        <div style={{ width: '100%', marginLeft: '10px' }}>  
            <div className="card">
                <DataTable style={{ fontFamily: 'Kanit, sans-serif' }} value={products} paginator rows={10} tableStyle={{ minWidth: '40rem', textAlign: 'center' }}>
                    <Column field="class_year" header="ปีการศึกษา" />
                    <Column field="header" header="ภาคการศึกษา" />
                    <Column field="course_code" header="รหัสวิชา" />
                    <Column field="name_professor" header="อาจารย์" />
                    <Column field="id" header="ดำเนินงาน" body={(rowData) => <Button style={{ width: '100px', backgroundColor: 'green', border: '0px', fontFamily: 'Kanit, sans-serif' }} label="ประเมิน" onClick={() => handleAssessmentButtonClick(rowData)} />} />
                </DataTable>

                <Dialog header={`${selectedList ? selectedList.header : ''}`} visible={visible} style={{ width: '50vw', fontFamily: 'Kanit, sans-serif' }} onHide={handleClose}>
                    <div style={{ width: '100%' }}>
                        {renderAssessmentTable()}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                        <Toast ref={toast} />
                        <div className="flex flex-wrap gap-2">
                            <Button style={{ width: '100px', fontFamily: 'Kanit, sans-serif' }} label="บันทึก" className="p-button-success" onClick={showSuccessToast} />
                        </div>
                    </div>
                </Dialog>
            </div>
        </div>
    );
}

export default Assessment;