import React, { useState } from 'react';

function ResetPasswordPage() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // ส่งข้อมูลไปยังเซิร์ฟเวอร์สำหรับการรีเซ็ตรหัสผ่าน
        // โดยอาจใช้ fetch หรือ axios เพื่อส่งข้อมูลไปยังเซิร์ฟเวอร์
    };

    return (
        <div>
            <h2>Reset Password</h2><br/>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email@ssru.ac.th" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
}

export default ResetPasswordPage;
