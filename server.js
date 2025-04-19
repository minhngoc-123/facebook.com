const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Cho phép frontend gọi từ bất kỳ domain nào (chỉ để test)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const response = await axios.post(
            'https://www.facebook.com/login.php',
            new URLSearchParams({
                email: email,
                pass: password,
                login: 'Log In'
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                },
                maxRedirects: 5,
                withCredentials: true
            }
        );

        // Lấy cookie từ header 'set-cookie'
        const cookies = response.headers['set-cookie'] || [];
        const cookieString = cookies.join('; ');

        // Trả về cookie và thông tin khác nếu cần
        res.json({
            success: true,
            cookies: cookieString,
            uid: cookieString.includes('c_user') ? cookieString.match(/c_user=(\d+)/)?.[1] : 'Không có'
        });
    } catch (error) {
        console.error('Lỗi:', error);
        res.json({
            success: false,
            error: 'Đăng nhập không thành công'
        });
    }
});

app.listen(port, () => {
    console.log(`Server chạy tại http://localhost:${port}`);
});
