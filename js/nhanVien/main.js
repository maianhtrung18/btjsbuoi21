var danhSachNhanVien = new DanhSachNhanVien();
const validation = new Validation();

function getELE(id){
    return document.getElementById(id);
}

function setLocalStorge(){
    localStorage.setItem("DSNV", JSON.stringify(danhSachNhanVien.danhSachNhanVien));
}

function getLocalStorage(){
    danhSachNhanVien.danhSachNhanVien = JSON.parse(localStorage.getItem("DSNV"));
    hienThiTable(danhSachNhanVien.danhSachNhanVien);
}

function updateMemory(){
    setLocalStorge();
    getLocalStorage();
}

function xoaNhanVien(taiKhoan){
    danhSachNhanVien.xoaNhanVien(taiKhoan);
    updateMemory();
}

function xemNhanVien(taiKhoan){
    var viTri = danhSachNhanVien.timViTri(taiKhoan);
    getELE("tknv").value = danhSachNhanVien.danhSachNhanVien[viTri].taiKhoan;
    getELE("name").value = danhSachNhanVien.danhSachNhanVien[viTri].hoTen;
    getELE("email").value = danhSachNhanVien.danhSachNhanVien[viTri].email;
    getELE("password").value = danhSachNhanVien.danhSachNhanVien[viTri].matKhau;
    getELE("datepicker").value = danhSachNhanVien.danhSachNhanVien[viTri].ngayLam;
    getELE("luongCB").value = danhSachNhanVien.danhSachNhanVien[viTri].luongCoBan;
    getELE("chucvu").value = danhSachNhanVien.danhSachNhanVien[viTri].chucVu;
    getELE("gioLam").value = danhSachNhanVien.danhSachNhanVien[viTri].gioLam;

    getELE("tknv").disabled = true;
}

function themNhanVien(){
    var taiKhoan = getELE("tknv").value;
    var hoTen = getELE("name").value;
    var email = getELE("email").value;
    var password = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCoBan = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var isValid = validationField(hoTen, email, password, luongCoBan, gioLam);

    isValid &= validation.checkEmpty(taiKhoan, "Không được để trống field này", "tbTKNV");
    if(isValid){
        isValid &= validation.checkTaiKhoan(taiKhoan, "Tài khoản phải gồm 4 đến 6 ký tự số", "tbTKNV");
    }
    if(isValid){
        isValid &= validation.checkUnique(taiKhoan, "Tài khoản đã được đăng ký", "tbTKNV", danhSachNhanVien.danhSachNhanVien);
    }

    if(isValid){
        var nhanVien = new NhanVien(taiKhoan, hoTen, email, password, ngayLam, luongCoBan, chucVu, gioLam);
        nhanVien.tinhTongLuong();
        nhanVien.xepLoaiNhanVien()
        danhSachNhanVien.themNhanVien(nhanVien);
        updateMemory();
    }
}

function validationField(hoTen, email, password, luongCoBan, gioLam){
    isValid = true;

   

    if(validation.checkEmpty(hoTen, "Họ tên không được để trống", "tbTen")){
        isValid &= validation.checkHoTen(hoTen, "Họ tên phải là chữ", "tbTen");
    }
    else{
        isValid = false;
    }

    if(validation.checkEmpty(email, "Email không được để trống", "tbEmail")){
        isValid &= validation.checkEmail(email, "Email không hợp lệ", "tbEmail");
    }
    else{
        isValid = false;
    }

    if(validation.checkEmpty(password, "Mật khẩu không được để trống", "tbMatKhau")){
        isValid &= validation.checkPassword(password, "Mật khẩu phải chứa 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt, 6-10 ký tự", "tbMatKhau");
    }
    else{
        isValid = false;
    }

    if(validation.checkEmpty(luongCoBan, "Lương cơ bản không được để trống", "tbLuongCB")){
        isValid &= validation.checkLuongCoBan(luongCoBan, "Lương cơ bản từ 1,000,000 đến 20,000,000", "tbLuongCB");
    }
    else{
        isValid = false;
    }

    isValid &= validation.checkChucVu("Hãy chọn chức vụ", "tbChucVu");

    if(validation.checkEmpty(gioLam, "Giờ làm không được để trống", "tbGiolam")){
        isValid &= validation.checkGioLam(gioLam, "Giờ làm phải từ 80 đến 200 giờ", "tbGiolam");
    }
    else{
        isValid = false;
    }
    return isValid;
    
}
getLocalStorage();
getELE("btnThemNV").onclick = themNhanVien;

function hienThiTable(danhSachNV){
    danhSach = ""
    danhSachNV.map(function(item){
        danhSach += `
        <tr>
            <td>${item.taiKhoan}</td>
            <td>${item.hoTen}</td>
            <td>${item.email}</td>
            <td>${item.ngayLam}</td>
            <td>${item.chucVu}</td>
            <td>${item.tongLuong}</td>
            <td>${item.loaiNhanVien}</td>
            <td>
                <a name="" id="" data-target="#myModal" data-toggle="modal" onclick="xemNhanVien('${item.taiKhoan}')" class="btn btn-primary" href="#" role="button">Xem</a>
                <a name="" id="" onclick="xoaNhanVien('${item.taiKhoan}')" class="btn btn-danger" href="#" role="button">Xoá</a>
            <td/>
        </tr>
        `;
        
    });
    document.getElementById("tableDanhSach").innerHTML = danhSach;
}

document.getElementById("btnCapNhat").onclick = capNhatNhanVien;
function capNhatNhanVien(){
    var taiKhoan = getELE("tknv").value;
    var hoTen = getELE("name").value;
    var email = getELE("email").value;
    var password = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCoBan = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;
    var isValid = validationField(hoTen, email, password, luongCoBan, gioLam);

    if(isValid){
        var nhanVien = new NhanVien(taiKhoan, hoTen, email, password, ngayLam, luongCoBan, chucVu, gioLam);
        nhanVien.tinhTongLuong();
        nhanVien.xepLoaiNhanVien()
        danhSachNhanVien.danhSachNhanVien[danhSachNhanVien.timViTri(taiKhoan)] = nhanVien;
        updateMemory();
    }
}

document.getElementById("btnTimNV").onclick = timNhanVien;
function timNhanVien(){
    var loaiNhanVien = document.getElementById("searchName").value;
    if(loaiNhanVien!=""){
        var result = danhSachNhanVien.danhSachNhanVien.filter(function(nhanVien){
            return loaiNhanVien == nhanVien.loaiNhanVien;
        });
        hienThiTable(result);
    }
    else{
        getLocalStorage();
    }
}
document.getElementById("btnDong").onclick = resetForm;
function resetForm(){
    document.querySelector([role="form"]).reset();
    getELE("tknv").disabled = false;

}