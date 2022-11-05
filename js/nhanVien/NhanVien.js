function NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam){
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCoBan;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.loaiNhanVien = "";

    this.tinhTongLuong = function(){
        switch (this.chucVu) {
            case "Giám đốc":
                this.tongLuong = this.luongCoBan * 3;
                break;
            case "Trưởng phòng":
                this.tongLuong = this.luongCoBan * 2;
                break;
            case "Nhân viên":
                this.tongLuong = this.luongCoBan;
            default:
                break;
        }
    };
    this.xepLoaiNhanVien = function(){
        if(this.gioLam >= 192){
            this.loaiNhanVien = "Xuất sắc";
        }else if(this.gioLam >= 176){
            this.loaiNhanVien = "Giỏi";
        }else if(this.gioLam >= 160){
            this.loaiNhanVien = "Khá";
        }else{
            this.loaiNhanVien = "Trung bình";
        }
    }

}