function getEle(id) {
    return document.getElementById(id);
  }
  var mang = [];
  function tinhDien() {
    var soNguyen = getEle("soNguyen").value * 1;
    mang.push(soNguyen);
  
    getEle("nhapMang").innerHTML = "mảng nhập vào: " + mang;
  
    //1.Tổng các số dương trong mảng.
    //lọc số dương
    var laySoDuong = mang.filter(function (item) {
      return item > 0;
    });
    //tính tổng số dương
    var tongSoDuong = 0;
    for (var i = 0; i < laySoDuong.length; i++) {
      tongSoDuong += laySoDuong[i];
    }
    getEle("laySoDuong").innerHTML = "Tổng số Dương là: " + tongSoDuong;
  
  
    //2.Đếm có bao nhiêu số dương trong mảng.
    var demSoDuong = laySoDuong.length;
    getEle("demSoDuong").innerHTML = "có " + demSoDuong + " số dương trong mảng";
  
  
    //3.tìm số nhỏ nhất trong mảng
    function soNhoNhat(mang) {
      min = mang[0];
      for (var i = 1; i < mang.length; i++) {
        if (min > mang[i]) {
          min = mang[i];
        }
      }
      return min;
    }
    var soNhoNhat = soNhoNhat(mang);
    getEle("soNhoNhat").innerHTML = "số nhỏ nhất trong mảng là: " + soNhoNhat;
  
  
    //4.tìm số dương nhỏ nhất trong mảng
    function soDuongNhoNhat(laySoDuong) {
      min = laySoDuong[0];
      for (var i = 1; i < laySoDuong.length; i++) {
        if (min > laySoDuong[i]) {
          min = laySoDuong[i];
        }
      }
      return min;
    }
    var soDuongNhoNhat = soDuongNhoNhat(laySoDuong);
    getEle("soDuongNhoNhat").innerHTML =
      "số dương nhỏ nhất là: " + soDuongNhoNhat;
  
  
    //5.Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
    function check_odd_even(n) {
      //flag = 1 => số lẻ 
      //flag = 0 => số chẵn
  
      let flag = 1;
      if (n % 2 == 0) flag = 0;
      return flag;
    }
    /*Tạo hàm tìm số chẵn cuối cùng trong mảng JavaScript*/
    function soChanCuoiCung(mang) {
      for (let i = mang.length - 1; i >= 0; i--) {
        var soChan = -1;
        if (check_odd_even(mang[i]) == 0) {
          soChan = mang[i];
          break;
        }
      }
      return soChan;
    }
    var soChan = soChanCuoiCung(mang);
    getEle("soChanCuoiCung").innerHTML = "số chẵn cuối cùng là: " + soChan;
  
  }
  
  //6.Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
  function doiViTri() {
    var temp = mang[0];
    mang[0] = mang[2];
    mang[2] = temp;
  
    getEle('doiViTri').innerHTML = mang;
  }
  
  
  //7.Sắp xếp mảng theo thứ tự tăng dần.
  function mangTangDan() {
    function sapXep(mang) {
      for (var i = 0; i < mang.length; i++) {
        var min_index = i;
        for (var j = i + 1; j < mang.length; j++) {
          if (mang[j] < mang[min_index]) {
            min_index = j;
          }
        }
        var temp = mang[i];
        mang[i] = mang[min_index]
        mang[min_index] = temp;
      }
      return mang;
    }
    var sapXepMang = sapXep(mang);
    getEle('kqSapXepTangDan').innerHTML = 'Mảng theo thứ tự tăng dần là: ' + sapXepMang;
  }
  
  
  //8.Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1
  function timSoNguyen() {
    //tìm lấy số nguyên tố đầu tiên, nếu đúng số nguyên thì trả flag về 1
    function laySoNguyenTo(n) {
      let flag = 1;
      if (n < 2) {
        flag = 0;
      } else {
        for (var i = 2; i < n; i++) {
          if (n % 2 == 0) {
            flag = 0;
          }
        }
      }
      return flag;
    }
    //tìm số nguyên tố đầu tiên
    function soNguyenToDauTien(mang) {
      for (var i = 0; i < mang.length; i++) {
        var soDauTien = -1;
        if (laySoNguyenTo(mang[i]) == 1) {
          soDauTien = mang[i];
          break;
        }
      }
      return soDauTien;
    }
    var soNguyenToDauTien = soNguyenToDauTien(mang);
    getEle('kqTimSoNguyen').innerHTML = soNguyenToDauTien;
  }
  //9.Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
  //Nhập số thực
  var soThuc = [];
  function nhapSoThuc() {
    var nhanSoThuc = getEle("soThuc").value * 1;
    soThuc.push(nhanSoThuc);
    getEle("kqSoThuc").innerHTML = soThuc;
  
    //xét điều kiện số nguyên flag = 1, số thực flag = 0
    function dieuKienSoNguyen(n) {
      //flag = 1 là sô nguyên flag = 0 là số thực
      let flag = 1
      if (Math.ceil(n) != Math.floor(n)) flag = 0;
      return flag;
    }
  
    function nhanSoNguyen(soThuc) {
      var soNguyenLa = [];
      for (var i = 0; i < soThuc.length; i++) {
        var check = dieuKienSoNguyen(soThuc[i]);
        if (check == 1) {
          var kq = soThuc[i];
          soNguyenLa.push(kq);
        }
      }
      return soNguyenLa;
    }
    var soNguyenMang = nhanSoNguyen(soThuc).length;
    getEle('kqSoNguyen').innerHTML = "số lượng số nguyên là: " + soNguyenMang;
  
    //10.So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
    //lây số lượng số dương
    var soDuong = nhanSoNguyen(soThuc).filter(function (item) {
      return item > 0;
    })
    var soluongSoDuong = soDuong.length;
    //lấy số lượng số âm
    var soAm = nhanSoNguyen(soThuc).filter(function (item) {
      return item < 0;
    })
    var soLuongSoAm = soAm.length;
    //so sánh số lượng số âm và dương số nào nhiều hơn
    function ketQua(n, m) {
      var ketQua = "";
      if (soluongSoDuong > soLuongSoAm) {
        ketQua = "số lượng số dương: " + soluongSoDuong + " , số lượng số âm: " + soLuongSoAm + " . Vậy số dương nhiều hơn";
      } else if (soluongSoDuong < soLuongSoAm) {
        ketQua = "số lượng số dương: " + soluongSoDuong + " , số lượng số âm: " + soLuongSoAm + " . Vậy số âm nhiều hơn";
      } else if (soluongSoDuong = soLuongSoAm) {
        ketQua = "số lượng số dương: " + soluongSoDuong + " , số lượng số âm: " + soLuongSoAm + " . Vậy hai số bằng nhau";
      }
      return ketQua
    }
    var ketLuan = ketQua(soluongSoDuong, soLuongSoAm);
    getEle('soSanhHaiSo').innerHTML = ketLuan;
  }
  
  
  
  