// const express = require('express');
// const app = express();
// const port = 3000;

// // Assuming you have PrimeReact components that you want to use
// const PrimeReactComponents = `
//   <!-- Add PrimeReact components here -->
//   <link rel="stylesheet" type="text/css" href="https://unpkg.com/primeicons/primeicons.css" />
//   <link rel="stylesheet" type="text/css" href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css" />
//   <link rel="stylesheet" type="text/css" href="https://unpkg.com/primereact/resources/primereact.css" />
//   <link rel="stylesheet" type="text/css" href="https://unpkg.com/primeflex/primeflex.css" />
// `;

// // Sample data from the database
// const dataFromDatabase = {
//   name: 'John Doe',
//   studentId: '123456',
//   citizenId: '7890123456789',
//   faculty: 'Engineering',
//   major: 'Computer Science',
//   academicYear: '2023',
//   gender: 'Male',
//   birthdate: '1990-01-01',
//   phoneNumber: '1234567890',
// };

// app.get('/', (req, res) => {
//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Student Information</title>
//       ${PrimeReactComponents}
//     </head>
//     <body>
//       <div class='data'>
//         <h3>ชื่อ-นามสกุล: ${dataFromDatabase.name}</h3>
//         <h3>รหัสนักศึกษา: ${dataFromDatabase.studentId}</h3>
//         <h3>รหัสบัตรประชาชน: ${dataFromDatabase.citizenId}</h3>
//         <h3>คณะ: ${dataFromDatabase.faculty}</h3>
//         <h3>สาขา: ${dataFromDatabase.major}</h3>
//         <h3>รุ่นปีการศึกษา: ${dataFromDatabase.academicYear}</h3>
//         <h3>เพศ: ${dataFromDatabase.gender}</h3>
//         <h3>วันเกิด: ${dataFromDatabase.birthdate}</h3>
//         <h3>เบอร์โทรศัพท์: ${dataFromDatabase.phoneNumber}</h3>
//       </div>
//     </body>
//     </html>
//   `);
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
