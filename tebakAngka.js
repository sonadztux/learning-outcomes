// Game sederhana untuk menebak sebuah angka random
// menggunakan JavaScript

// Dibuat karena gabut (Made it because boredom) 
// oleh: sonadztux https://github.com/sonadztux/
// Idea: Web Programming UNPAS ( https://www.youtube.com/watch?v=Mmf3SXHifBw )

// Hubungkan fail JavaScript ini ke fail HTML dengan 
// menambahkan <script src="tebakAngka.js"></script>
// tepat di atas tag </body>

alert('Selamat datang di game Tebak Angka.'
      +  '\nKamu memiliki 3 kesempatan untuk menebak sebuah angka 1-10.');

let replay = true; // variabel untuk looping
let message = ''; // variabel untuk menyimpan pesan hasil tebakan

while (replay) {
    // Membuat jawaban tebakan angka secara random 1-10
    const answer = Math.floor(Math.random() * 10 + 1); 

    // Perulangan untuk memberikan 3x kesempatan
    let i = 3;
    while (i > 0) {
        // Meminta tebakan angka dari user
        let guess = parseInt(prompt('Masukkan angka tebakan! (1-10)'));

        // Mencocokkan tebakan user dengan jawaban yang benar
        if (guess <= 0 || guess > 10){
            message = 'Hanya boleh memasukkan angka 1-10 !!';
        }else if (isNaN(guess)) { // Seleksi apabila masukkan bukan bertipe number
            message = 'Masukkan tidak dikenali !!';  
        }else {
            if (guess < answer) {
                message = 'Tebakan kamu terlalu rendah !!\n'
                +'Coba lagi kamu masih memiliki ' +(i-1)+ ' kesempatan.';
            }else if (guess > answer) {
                message = 'Tebakan kamu terlalu tinggi !!\n'
                +'Coba lagi kamu masih memiliki ' +(i-1)+ ' kesempatan.';
            }else if (guess == answer) {
                message = 'Selamat! Tebakan kamu benar.';
                i = 0;
            }
            i--;
        }

        // Kesempatan sudah 3x (habis)
        if (i == 0) {
            message = 'Duh....\nTebakan kamu salah semua, kesempatan kamu telah habis.\n'
            + 'Jawaban yang benar adalah: '+answer;
        }
        alert(message);
    }

    // Menanyakan user untuk bermain lagi
    replay = confirm('Apa kamu ingin bermain lagi?');
}

// Keluar dari game
alert('Terima kasih sudah bermain.')