function kontrolEt() {
  var dogruSifre = "22 Aralık 2025 19:47";
  var girilenSifre = document.getElementById("sifre").value;
        
  if (girilenSifre === dogruSifre) {
    window.location.href = "main/album.html"; 
  } else {
    alert("Hatalı şifre girişi!");
  }
}
