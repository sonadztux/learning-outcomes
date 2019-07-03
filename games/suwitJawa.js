// Game Suwit Jawa sederhana menggunakan JavaScript
// Referensi: Web Programming UNPAS ( https://www.youtube.com/watch?v=Mmf3SXHifBw )

// Hubungkan fail JavaScript ini ke fail HTML dengan 
// menambahkan <script src="suwitJawa.js"></script>
// tepat di atas tag </body>

var replay = 'true'; // variabel untuk looping

while(replay) {
    // Meminta pilihan dari player (user)
    var playerChoice = prompt('Pilih: gajah, semut, orang, atau ketik keluar untuk menutup permainan');

    // Menentukan pilihan komputer secara random
    var compChoice = Math.random();

    if(compChoice < 0.34) {
        compChoice = 'gajah';
    }else if(compChoice >= 0.34 && compChoice < 0.67){
        compChoice = 'semut';
    }else {
        compChoice = 'orang';
    }

    // Menentukan peraturan untuk membandingkan pilihan 
    // player dengan komputer

    var result = ''; // Variabel penampung hasil perbandingan

    // Pesan hasil pertandingan
    var message = 'Kamu memilih ' +playerChoice+ ' dan komputer memilih ' +compChoice+ '\nMaka hasil suwit: KAMU ' +result; 

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
        alert('Duh.. pilihan kamu salah.')
    }
}

// Keluar dari game
alert('Terima kasih sudah bermain.')

