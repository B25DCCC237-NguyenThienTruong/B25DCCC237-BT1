// Lấy nút Đổi màu nền
let nutDoiMau = document.getElementById("doiMau");

// Lấy đoạn văn lời chào
let loiChao = document.getElementById("loiChao");

// Tạo đối tượng Date
let ngayGio = new Date();

// Lấy giờ hiện tại
let gio = ngayGio.getHours();

// Hiển thị lời chào theo buổi
if (gio >= 5 && gio < 12) {
    loiChao.innerText = "Chào buổi sáng! Chúc bạn một ngày tốt lành.";
}
else if (gio >= 12 && gio < 18) {
    loiChao.innerText = "Chào buổi chiều! Chúc bạn học tập tốt.";
}
else {
    loiChao.innerText = "Chào buổi tối! Chúc bạn có một buổi tối vui vẻ.";
}


// Đổi màu nền khi nhấn nút
nutDoiMau.addEventListener("click", function() {

    let mauHienTai = document.body.style.backgroundColor;

    if (mauHienTai == "lightblue") {
        document.body.style.backgroundColor = "lightgreen";
    }
    else if (mauHienTai == "lightgreen") {
        document.body.style.backgroundColor = "lightyellow";
    }
    else {
        document.body.style.backgroundColor = "lightblue";
    }

});