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

DanhSachNhanVien.prototype.timNhanVien = function(value){
   mangNV = [];
   var tuKhoa = value.toLowerCase().replace(/\s/g, "");

   this.danhSachNhanVien.map(function(nhanVien){
      if(nhanVien.loaiNhanVien.toLowerCase().replace(/\s/g, "").indexOf(tuKhoa) > -1){
         mangNV.push(nhanVien);
      }
   });

   return mangNV;
}