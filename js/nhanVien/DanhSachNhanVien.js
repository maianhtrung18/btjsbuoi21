function DanhSachNhanVien(){
 this.danhSachNhanVien = [];
 this.themNhanVien = function(nhanVien){
    this.danhSachNhanVien.push(nhanVien);
 };

 this.xoaNhanVien = function(taiKhoan){
    var viTri = this.timViTri(taiKhoan);
    this.danhSachNhanVien.splice(viTri,1);
 }

 this.timViTri = function(taiKhoan){
    var viTri = this.danhSachNhanVien.findIndex(function(nhanVien){
        return nhanVien.taiKhoan == taiKhoan;
    });
    return viTri;
 }

}