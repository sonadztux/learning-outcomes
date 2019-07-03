// Game sederhana untuk menebak sebuah angka random
// menggunakan JavaScript

// Dibuat karena gabut (Made it because boredom) 
// oleh: sonadztux https://github.com/sonadztux/
// Idea: Web Programming UNPAS ( https://www.youtube.com/watch?v=Mmf3SXHifBw )

alert('Selamat datang di game Tebak Angka.'
      +  '\nKamu memiliki 3 kesempatan untuk menebak sebuah angka 1-10.');


var answer = Math.floor(Math.random() * 10); // Membuat jawaban tebakan angka secara random 1-10
var replay = true; // variabel untuk looping
var message = ''; // variabel untuk menyimpan pesan hasil tebakan

while(replay) {
    // Perulangan untuk memberikan 3x kesempatan
    for(var i=3; i > 0 ; i--) {
        // Meminta tebakan angka dari user
        var guess = prompt('Masukkan angka tebakan!');

        // Mencocokkan tebakan user dengan jawaban yang benar
        if(i == 1) {
            message = 'Duh....\nTebakan kamu salah semua, kesempatan kamu telah habis.\n'
            + 'Jawaban yang benar adalah: '+answer;
        }else if(guess < answer) {
            message = 'Tebakan kamu terlalu rendah !!\n'
            +'Coba lagi kamu masih memiliki ' +(i-1)+ ' kesempatan.';
        }else if(guess > answer) {
            message = 'Tebakan kamu terlalu tinggi !!\n'
            +'Coba lagi kamu masih memiliki ' +(i-1)+ ' kesempatan.';
        }else if(guess == answer) {
            message = 'Selamat! Tebakan kamu benar.';
            i = 0;
        }else {
            message = 'Masukkan tidak dikenali !!';
        }
        alert(message);
    }

    // Menanyakan user untuk bermain lagi
    replay = confirm('Apa kamu ingin bermain lagi?');
}

// Keluar dari game
alert('Terima kasih sudah bermain.')


