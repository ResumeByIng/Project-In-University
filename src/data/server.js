const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');

const app = express();
const port = 3000; // ปรับ port ตามต้องการ

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [
  { id: 1, email: 's62122519025@ssru.ac.th', password: '1234' },
];

const otps = {};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 's62122519025@ssru.ac.th',
    pass: 'SSRU62122519025',
  }
});

function sendOTP(email, otp) {
  const mailOptions = {
    from: 's62122519025@ssru.ac.th',
    to: email,
    subject: 'Your OTP for Login',
    text: `Your OTP is: ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

app.post('/', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const otp = randomstring.generate({ length: 6, charset: 'numeric' });
  otps[email] = otp;

  // Send OTP to email (you may want to customize this part)
  sendOTP(email, otp);

  res.json({ message: 'Login successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
