let currentQuestion = 1;
const totalQuestions = 4;
const answers = ["pink", "10-01-2023", "deanda", "bioskop"]; // Jawaban yang benar

// Fungsi untuk menampilkan umpan balik berdasarkan jawaban pengguna
function showFeedback(message) {
    document.getElementById(`feedback${currentQuestion}`).innerText = message;
}

function nextQuestion() {
    const userAnswer = document.getElementById(`answer${currentQuestion}`).value.toLowerCase();
    
    if (userAnswer !== answers[currentQuestion - 1]) {
        showFeedback("Salahh Cayanggg Coba Lagiiii");
        return;
    } else {
        showFeedback("Betul Ayanggg, Hebatttt!");
    }

    document.getElementById(`question${currentQuestion}`).style.display = 'none';
    currentQuestion++;

    if (currentQuestion <= totalQuestions) {
        document.getElementById(`question${currentQuestion}`).style.display = 'block';
        document.getElementById('nextBtn').style.display = currentQuestion === totalQuestions ? 'none' : 'inline';
        document.getElementById('submitBtn').style.display = currentQuestion === totalQuestions ? 'inline' : 'none';
    }

    // Hapus umpan balik setelah berpindah ke pertanyaan berikutnya
    document.getElementById(`feedback${currentQuestion - 1}`).innerText = '';
}

function checkAnswers() {
    let correctAnswers = 0;

    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = document.getElementById(`answer${i}`).value.toLowerCase();
        if (userAnswer === answers[i - 1]) {
            correctAnswers++;
        }
    }

    if (correctAnswers === totalQuestions) {
        window.location.href = 'spesial.html'; // Mengarahkan ke halaman galeri kenangan
    } else {
        alert("Jawaban Ayang bener semuaaakan cayangkuuu gak ada yang salahkannn?????");
    }
}

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
