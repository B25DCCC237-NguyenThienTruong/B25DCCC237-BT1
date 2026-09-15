// Lấy nút Đổi màu nền
let nutDoiMau = document.getElementById("doiMau");

let loiChao = document.getElementById("loiChao");

// Ngày giờ
let ngayGio = new Date();

// Lấy giờ hiện tại
let gio = ngayGio.getHours();

///Hiển thị lời chào theo buổi
if (gio >= 5 && gio < 12) {
    loiChao.innerText = "Chào buổi sáng.";
}
else if (gio >= 12 && gio < 18) {
    loiChao.innerText = "Chào buổi chiều.";
}
else if (gio >= 18 && gio < 23) {
    loiChao.innerText = "Chào buổi tối.";
}
else {
    loiChao.innerText = "Chào buổi đêm.";
}


// Đổi màu 
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