function kontrolEt() {
  var dogruSifre = "22 Aralık 2025 19:47";
  var girilenSifre = document.getElementById("sifre").value;
        
  if (girilenSifre === dogruSifre) {
    window.location.href = "main/album.html"; 
  } else {
    alert("Hatalı şifre girişi!");
  }
}

// Müzik Kontrolü
        const music = document.getElementById('bg-music');
        function toggleMusic() {
            if (music.paused) {
                music.play();
                document.getElementById('music-toggle').innerHTML = '⏸️';
            } else {
                music.pause();
                document.getElementById('music-toggle').innerHTML = '🎵';
            }
        }

        // Büyütme Fonksiyonu
        function zoomImg(card) {
            const modal = document.getElementById('modal');
            const fullImg = document.getElementById('full-img');
            const clickedSrc = card.querySelector('img').src;
            
            fullImg.src = clickedSrc;
            modal.classList.add('active');
        }

        // Sayfaya ilk tıklandığında müziği başlat (Tarayıcı koruması için)
        window.onclick = () => {
            if(music.paused) {
                // music.play(); // İstersen burayı aktif edebilirsin
            }
        }
        
window.addEventListener("load", ()=>{
    const preloader = document.getElementById("preloader");
    setTimeout(()=>{
        preloader.classList.add("hide");
    }, 800); // küçük dramatik bekleme 😏
});
