function Validation(){

    this.checkEmpty = function(value, msgErr, spanID){
        if(value.trim() == ""){
            document.getElementById(spanID).innerHTML = msgErr;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        return true;
    }
    this.checkTaiKhoan = function(value, msgErr, spanID){
        var pattern = /^\d{4,6}$/;
        if(value.match(pattern)){
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkNgayThangNam = function(valInput, msgErr, spanID){
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if(valInput.match(pattern)){
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }

    this.checkUnique = function(value, msgErr, spanID, array){
        if(array.some(function(element){
            return value == element.taiKhoan;
        })){
            document.getElementById(spanID).innerHTML = msgErr;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        return true;
        
    }

    this.checkHoTen = function(value, msgErr, spanID){
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if(value.match(pattern)){
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkEmail = function(value, msgErr, spanID){
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(value.match(pattern)){
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkPassword = function(value, msgErr, spanID){
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if(value.match(pattern)){
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkLuongCoBan = function(value, msgErr, spanID){
        if(value<1000000 || value>20000000){
            document.getElementById(spanID).innerHTML = msgErr;
            document.getElementById(spanID).style.display = "block";
            return false
        }
        document.getElementById(spanID).innerHTML = "";
        return true;
    }
    this.checkChucVu = function(msgErr, spanID){
        var index = document.getElementById("chucvu").selectedIndex;
        if(index >= 1 && index <= 3){
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false
    }
    this.checkGioLam = function(value, msgErr, spanID){
        if(value>=80 && value<=200){
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false
    }
}  