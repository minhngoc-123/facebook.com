# Ứng dụng đăng nhập và đăng ký đơn giản

Đây là một ứng dụng web đơn giản hỗ trợ đăng nhập, đăng ký và khôi phục mật khẩu, sử dụng HTML, CSS, JavaScript và EmailJS để gửi thông tin người dùng qua email.

## Tính năng
- **Đăng nhập**: Nhập email/số điện thoại và mật khẩu, thông tin được gửi qua EmailJS.
- **Đăng ký**: Form đầy đủ với họ, tên, email, mật khẩu, ngày sinh, giới tính.
- **Quên mật khẩu**: Gửi yêu cầu khôi phục qua email.
- **Xác thực đầu vào**: Kiểm tra ký tự đặc biệt và trường trống.
- **Giao diện responsive**: Hoạt động tốt trên cả desktop và mobile.

## Công nghệ sử dụng
- **HTML/CSS**: Giao diện đơn giản, trung tính.
- **JavaScript**: Xử lý logic và gửi email.
- **EmailJS**: Gửi thông tin người dùng qua email.
- **Font Awesome**: Icon giao diện.

## Cài đặt
1. **Tải code**:
   - Sao chép file HTML từ Gist hoặc tải xuống.
2. **Cấu hình EmailJS**:
   - Đăng ký tài khoản tại [EmailJS](https://www.emailjs.com/).
   - Lấy **Public Key** từ Dashboard > API Keys > Public Key.
   - Thay `YOUR_PUBLIC_KEY` trong đoạn code:
     ```javascript
     emailjs.init("YOUR_PUBLIC_KEY");
     ```
   - Thay `your-email@gmail.com` bằng email của bạn trong các hàm `login()`, `sendForgotPassword()`, `createAccount()`:
     ```javascript
     to_email: "your-email@gmail.com"
     ```
3. **Chạy ứng dụng**:
   - Mở file HTML trên trình duyệt (Chrome, Firefox, v.v.).
   - Đảm bảo kết nối internet để tải EmailJS và Font Awesome.

## Cách sử dụng
- **Đăng nhập**: Điền email/số điện thoại và mật khẩu, nhấn "Đăng nhập".
- **Đăng ký**: Nhấn "Tạo tài khoản mới", điền đầy đủ thông tin, nhấn "Đăng ký".
- **Quên mật khẩu**: Nhấn "Quên mật khẩu?", nhập email/số điện thoại, nhấn "Gửi".
- Kiểm tra email của bạn để xem thông tin được gửi từ EmailJS.

## Lưu ý
- Đảm bảo cấu hình `service_gibcgh4` và `template_vxfphjh` đúng trong EmailJS.
- Nếu không nhận được email, kiểm tra console (F12) để xem lỗi.

## Tác giả
