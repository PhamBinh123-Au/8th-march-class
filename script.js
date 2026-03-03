const database = {
    "quynhtien": {
        pass: "2008", 
        name: "Quỳnh Tiên",
        wish: "Chào Tiên, chúc cậu một ngày 8/3 rực rỡ và đỗ vào trường đại học mơ ước nhé! ✨",
        images: ["img/tien1.jpg", "img/tien2.jpg"] // Nhớ up ảnh vào folder img
    },
    "hoangyen": {
        pass: "832026",
        name: "Hoàng Yến",
        wish: "Gửi Yến, chúc cậu luôn xinh đẹp và giữ mãi nụ cười tỏa sáng này! 🌸",
        images: ["img/yen1.jpg", "img/yen2.jpg"]
    }
    // Thêm các bạn khác tại đây theo mẫu trên
};

function checkAccess() {
    const user = document.getElementById('username').value.toLowerCase().trim();
    const pass = document.getElementById('password').value;
    const error = document.getElementById('error-msg');

    if (database[user] && database[user].pass === pass) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('private-content').style.display = 'block';
        
        document.getElementById('welcome-name').innerText = "Chào mừng " + database[user].name;
        document.getElementById('personal-wish').innerText = database[user].wish;
        
        const gallery = document.getElementById('photo-gallery');
        gallery.innerHTML = ""; 
        database[user].images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            gallery.appendChild(img);
        });
        error.style.display = 'none';
    } else {
        error.style.display = 'block';
    }
}
