let penumpang = [];
let message = '';

const tombolNaik = document.querySelector('.up')
tombolNaik.addEventListener('click', function (penumpang) {
    let namaPenumpang = prompt('Masukkan nama penumpang yang akan naik');

    if (namaPenumpang != null) { return tambahPenumpang(namaPenumpang); }
});

const tambahPenumpang = function (namaPenumpang) {
    const td = document.querySelectorAll('td');
    
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);

        // Get index of namaPenumpang 
        const x = penumpang.indexOf(namaPenumpang)+1;

        // DOM for manipulating value of table       
        td[x].classList.add('block');
        td[x].innerHTML = namaPenumpang;

        // Message success
        return alert('ANGKOT MASIH KOSONG\n' + namaPenumpang + ' berhasil naik ke dalam angkot');
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            console.log(i);
            if(penumpang[i] == namaPenumpang) {
                message = namaPenumpang+' sudah ada di dalam angkot!!';
            }else if(penumpang[i] == null) {
                penumpang[i] = namaPenumpang;


                const x = penumpang.indexOf(namaPenumpang)+1;

                td[x].classList.add('block');
                td[x].innerHTML = namaPenumpang;

                message = namaPenumpang+' menggantikan null';
            }else if(penumpang[i] == 8 || penumpang[i] == 10) {
                penumpang[i] = namaPenumpang;

                const x = penumpang.indexOf(namaPenumpang)+2;

                td[x].classList.add('block');
                td[x].innerHTML = namaPenumpang;

                message = namaPenumpang+' LONCAT menggantikan null';
            }else if(penumpang.length == 13 && !penumpang.includes(null)){
                message = 'Uh Oh... maaf, angkot sudah penuh!!';
            }else{
                penumpang.push(namaPenumpang);

                // Get index of namaPenumpang 
                const x = penumpang.indexOf(namaPenumpang)+1;
   
                td[x].classList.add('block');
                td[x].innerHTML = namaPenumpang;

                message = 'PENUMPANG BARU\n' + namaPenumpang + ' berhasil naik ke dalam angkot';
            }
        }
        return alert(message);
    }
}