        // Fungsi untuk menampilkan loading
        function showLoading() {
            document.getElementById('loading').style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Mencegah scroll saat loading
        }

        // Fungsi untuk menyembunyikan loading
        function hideLoading() {
            document.body.classList.add('loaded'); // Menambahkan kelas untuk efek transisi
            setTimeout(function() {     
                document.getElementById('loading').style.display = 'none';
                document.body.style.overflow = 'auto'; // Mengizinkan scroll setelah loading
            }, 500); // Durasi transisi sama dengan waktu opacity transition
        }

        // Fungsi untuk mencoba memutar audio
        function playAudio() {
            var audio = document.getElementById("backgroundAudio");
            audio.play().catch(function() {
                console.log("Autoplay tidak diizinkan. Pengguna harus melakukan interaksi terlebih dahulu.");
            });
        }

        // Memulai audio setelah loading
        window.onload = function() {
            showLoading();

            // Memulai pemutaran audio setelah halaman dimuat
            setTimeout(function() {
                hideLoading();
                playAudio();
            }, 2000); // Menghilangkan loading setelah 2 detik
        };

        // Memainkan audio saat pengguna mengklik di mana saja pada halaman
        document.body.addEventListener('click', function() {
            playAudio();
        });