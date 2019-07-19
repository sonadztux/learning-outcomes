// Game Suwit Jawa sederhana menggunakan JavaScript
// Referensi: Web Programming UNPAS ( https://www.youtube.com/watch?v=Mmf3SXHifBw )

// Hubungkan fail JavaScript ini ke fail HTML dengan 
// menambahkan <script src="suwitJawa.js"></script>
// tepat di atas tag </body>

let replay = true; // variabel untuk looping

while (replay){
    // Meminta pilihan dari player (user)
    let playerChoice = prompt('Pilih: gajah, semut, orang, atau ketik keluar untuk menutup permainan.');

    // Menentukan pilihan komputer secara random
    let compChoice = Math.random();

    if (compChoice < 0.34) {
        compChoice = 'gajah';
    }else if (compChoice >= 0.34 && compChoice <= 0.67) {
        compChoice = 'semut';
    }else {
        compChoice = 'orang';
    }

    // Menentukan peraturan untuk membandingkan pilihan 
    // player dengan komputer

    let result = ''; // Variabel penampung hasil perbandingan

    // Pesan untuk menampilkan hasil suwit
    let message = 'Kamu memilih ' +playerChoice+ ' dan komputer memilih ' +compChoice+ '\nMaka hasil suwit: KAMU ' +result;

    if(playerChoice == compChoice) {
        result = 'SERI !!';
    }else if(playerChoice == 'gajah') {
        result = (compChoice == 'orang') ? 'MENANG' : 'KALAH';
        alert(message + result);
    }else if(playerChoice == 'semut') {
        result = (compChoice == 'gajah') ? 'MENANG' : 'KALAH';
        alert(message + result);
    }else if(playerChoice == 'orang') {
        result = (compChoice == 'semut') ? 'MENANG' : 'KALAH';
        alert(message + result);
    }else if(playerChoice == 'keluar') {
        replay = false;
        break;
    }else {
        alert('Duh.. pilihan kamu salah.');
    }
}

// Keluar dari game
alert('Terima kasih sudah bermain.');