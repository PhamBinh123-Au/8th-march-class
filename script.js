const database = {
    "quynhtien": {
        pass: "2008", // Thay bằng mật khẩu em muốn
        name: "Quỳnh Tiên",
        wish: "Chúc Tiên luôn rạng rỡ và đỗ vào trường CNTT giống tớ nhé!",
        images: ["img/tien1.jpg", "img/tien2.jpg"] // Đường dẫn ảnh
    },
    // Em copy đoạn trên để thêm các bạn khác vào đây...
};

function checkAccess() {
    const user = document.getElementById('username').value.toLowerCase().trim();
    const pass = document.getElementById('password').value;
    
    if (database[user] && database[user].pass === pass) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('private-content').style.display = 'block';
        
        document.getElementById('welcome-name').innerText = "Chào " + database[user].name + "!";
        document.getElementById('personal-wish').innerText = database[user].wish;
        
        const gallery = document.getElementById('photo-gallery');
        gallery.innerHTML = ""; 
        database[user].images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            gallery.appendChild(img);
        });
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}
