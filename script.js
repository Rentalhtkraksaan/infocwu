// Inject konten ke dalam #app
document.getElementById("app").innerHTML = `
  <div class="max-w-6xl w-full">
    <!-- Header -->
    <div class="text-center mb-10">
      <img src="logo1.jpg" alt="Logo Organisasi" class="mx-auto w-28 h-28 rounded-full border-4 border-white shadow-xl">
      <h1 class="text-4xl font-bold text-white mt-4">CLUB WIRAUSAHA UNUJA</h1>
      <p class="text-gray-300 mt-2 flex flex-col sm:flex-row justify-center items-center gap-2">
        <span>Ketua: <span class="text-white font-semibold">Rica Rachmawati</span></span>
        <span class="sm:before:content-['|'] sm:before:mx-2">Periode 2025 - 2026</span>
      </p>
    </div>

    <!-- Deskripsi -->
    <div class="text-center mb-12">
      <p class="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
        Club Wirausaha UNUJA adalah wadah mahasiswa untuk mengembangkan 
        <span class="text-white font-semibold">jiwa kepemimpinan, keterampilan bisnis, inovasi, serta jejaring kewirausahaan</span>. 
        Kami percaya bahwa setiap mahasiswa memiliki potensi untuk menjadi entrepreneur muda yang mampu menciptakan peluang dan berkontribusi bagi masyarakat.
      </p>
    </div>

    <!-- Diagram Values -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16 text-center">
  ${[
    {
      title:"Leadership",
      img:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      desc:"Latih kemampuan memimpin dengan memahami cara mengatur strategi, mengelola tim, serta mengambil keputusan yang tepat. Leadership juga mengajarkan bagaimana menjadi inspirasi bagi orang lain agar bersama-sama mencapai tujuan besar."
    },
    {
      title:"Mentoring",
      img:"https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
      desc:"Dapatkan bimbingan langsung dari mentor yang berpengalaman di bidangnya. Melalui mentoring, kamu bisa memperoleh insight berharga, mempercepat proses belajar, dan menghindari kesalahan umum yang sering dialami pemula."
    },
    {
      title:"Networking",
      img:"https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
      desc:"Bangun relasi dengan mahasiswa dari berbagai jurusan, komunitas, maupun profesional di luar kampus. Networking membuka banyak peluang, mulai dari kolaborasi, project bersama, hingga kesempatan kerja di masa depan."
    },
    {
      title:"Innovation",
      img:"https://cdn-icons-png.flaticon.com/512/1055/1055644.png",
      desc:"Kembangkan ide-ide kreatif menjadi solusi nyata yang bermanfaat untuk masyarakat. Innovation tidak hanya tentang berpikir out of the box, tapi juga bagaimana mengimplementasikan gagasan agar berdampak luas."
    },
    {
      title:"Business Skills",
      img:"https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
      desc:"Kuasi keterampilan praktis seperti manajemen, pemasaran, hingga pengelolaan keuangan. Dengan business skills yang baik, kamu dapat mengembangkan usaha secara profesional dan berkelanjutan."
    }
  ].map(val => `
    <div onclick="openModal('${val.title}','${val.desc}')" 
         class="cursor-pointer bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl hover:scale-105 transition">
      <img src="${val.img}" class="w-12 h-12 mx-auto mb-3" alt="${val.title}">
      <h3 class="text-white font-semibold">${val.title}</h3>
    </div>
  `).join("")}
</div>


    <!-- Grid Sosial Media -->
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Instagram -->
      <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" class="w-10 h-10" alt="Instagram">
            <h2 class="text-xl font-bold text-white">Instagram</h2>
          </div>
          <a href="https://www.instagram.com/clubwirausaha.unuja" target="_blank" class="shine-btn px-3 py-1 rounded-lg bg-gradient-to-r from-pink-400 to-purple-500 text-white text-sm font-semibold hover:scale-105 transition">Kunjungi</a>
        </div>
        <p class="text-gray-300 text-sm mb-4">Ikuti aktivitas terbaru kami di Instagram.</p>
        <a href="https://www.instagram.com/reel/DOTmJHnAe7B/" target="_blank" class="shine-btn block w-full text-center py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:scale-105 transition">Tonton Stories</a>
      </div>

      <!-- WhatsApp -->
      <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
  <div class="flex items-center justify-between mb-4">
    <div class="flex items-center gap-3">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" class="w-10 h-10" alt="WhatsApp">
      <h2 class="text-xl font-bold text-white">WhatsApp</h2>
    </div>
    <!-- Tombol Admin langsung ke WA dengan pesan otomatis -->
    <a href="https://wa.me/6285385518248?text=Halo%20Admin%2C%20saya%20ingin%20mendaftar%20Club%20Wirausaha%20UNUJA.%0A%0ABisa%20dijelaskan%20program%20kerja%20atau%20kegiatan%20yang%20akan%20dijalankan%3F
" 
       target="_blank" 
       class="shine-btn px-3 py-1 rounded-lg bg-green-500 text-white text-sm font-semibold hover:scale-105 transition">
       Admin
    </a>
  </div>
  <p class="text-gray-300 text-sm mb-4">
    Terhubung langsung dengan admin untuk pendaftaran, informasi program kerja, dan kegiatan terbaru.
  </p>
  <a href="https://whatsapp.com/channel/0029Vb6W0kvFSAsvm6ozaY36" 
     target="_blank" 
     class="shine-btn block w-full text-center py-2 rounded-lg bg-green-600 text-white font-semibold hover:scale-105 transition">
     Saluran WA
  </a>
</div>


      <!-- TikTok -->
      <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <img src="https://cdn-icons-png.flaticon.com/512/3046/3046120.png" class="w-10 h-10" alt="TikTok">
            <h2 class="text-xl font-bold text-white">TikTok</h2>
          </div>
          <a href="https://www.tiktok.com/@cwu.unuja" target="_blank" class="shine-btn px-3 py-1 rounded-lg bg-gray-800 text-white text-sm font-semibold hover:scale-105 transition">Kunjungi</a>
        </div>
        <p class="text-gray-300 text-sm mb-4">Tonton konten kreatif kami di TikTok.</p>
        <a href="https://www.tiktok.com/@cwu.unuja/video/7544419677225733381" target="_blank" class="shine-btn block w-full text-center py-2 rounded-lg bg-black text-white font-semibold hover:scale-105 transition">Tonton Video</a>
      </div>

      <!-- Gmail -->
      <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" class="w-10 h-10" alt="Gmail">
            <h2 class="text-xl font-bold text-white">Gmail</h2>
          </div>
          <a href="#" onclick="event.preventDefault();alert('Fitur Belum Diaktifkan');" class="shine-btn px-3 py-1 rounded-lg bg-red-600 text-white text-sm font-semibold hover:scale-105 transition">Email</a>
        </div>
        <p class="text-gray-300 text-sm mb-4">Kirimkan pertanyaan atau kerja sama ke email resmi kami.</p>
      </div>

      <!-- Tombol Daftar -->
      <div class="col-span-full flex justify-center mt-6">
        <a href="#" class="relative block w-full text-center py-3 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300 ease-out overflow-hidden group">
          <span class="relative z-10">DAFTAR</span>
          <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
        </a>
    </div>
  </div>

  <!-- Modal -->
  <div id="modal" class="hidden fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div class="bg-white rounded-2xl max-w-md w-full p-6 relative text-center shadow-2xl">
      <button onclick="closeModal()" class="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold">&times;</button>
      <h2 id="modalTitle" class="text-2xl font-bold mb-3"></h2>
      <p id="modalDesc" class="text-gray-700"></p>
    </div>
  </div>
`;

// Modal function
function openModal(title, desc) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDesc').innerText = desc;
  document.getElementById('modal').classList.remove('hidden');
}
function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}



