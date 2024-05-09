function validateForm(){
    const hoten = document.getElementById("hoten");
    const masv = document.getElementById("masv");
    const email = document.getElementById("email");
    const dienthoai = document.getElementById("dienthoai");
    const lop = document.getElementById("lop");

    // Kiểm tra Họ Tên
    const Hoten = document.getElementById("hoten");
    if (Hoten.value.length === 0) {
        Hoten.focus();
        console.error("Không để trống Họ Tên");
        return false;
    }
    // Kiểm tra Mã SV
    var Masv = document.getElementById("masv").value;
    var masvhople = /^21\d{8}$/;
    if (!masvhople.test(Masv)) {
        console.error("Ma sv khong hop le");
        return false;
    }


    // Kiểm tra Email
    var Email = document.getElementById('email').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(Email)) {
        console.error("Email khong hợp lệ");
        return false;
        }
  // kiem tra dt
    var sdtktra = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var Dienthoai = document.getElementById("dienthoai").value;
    if (!sdtktra.test(Dienthoai)) {
        console("Số điện thoại khong  hợp lệ");
        return false;
    }
    // Kiểm tra Lớp
    var Lop = document.getElementById("lop").value;
    var Lophople = /^CCQ.{5,6}\w{1,2}$/;
    if (!Lophople.test(Lop)) {
       console.error("Ma lop khong hop le")
        return false;
    
    }
}