let penumpang = [];
let kas_sopir = 0;
let message = '';
const tempatDuduk = document.getElementsByClassName('tempat-duduk');
const button = document.querySelectorAll('button');
const status = document.getElementsByTagName('input')

button.forEach(function (tombol) {
    tombol.addEventListener('click', function () {
        while (true) {
            if (tombol.getAttribute('id') == 'turun') {
                if (penumpang.length === 0) {
                    return alert('Angkot belum memiliki penumpang!')
                }
            } else {
                if (penumpang.length === 9 && !penumpang.includes(undefined)) {
                    alert('Angkot sudah penuh!')
                    return 0;
                }
            }

            const namaPenumpang = prompt('Masukkan nama penumpang');
            if (namaPenumpang === '') {
                alert('Nama penumpang tidak boleh kosong!');
                continue;
            }
            if (namaPenumpang === null) return 0;

            if (tombol.getAttribute('id') == 'naik') {
                if (penumpang.includes(namaPenumpang)) {
                    alert(namaPenumpang + ' sudah ada di dalam angkot!');
                    continue;
                }
                if (namaPenumpang !== null) return tambahPenumpang(namaPenumpang);
            } else {
                if (!penumpang.includes(namaPenumpang)) {
                    alert(namaPenumpang + ' tidak ada di dalam angkot!');
                    continue;
                }
                if (namaPenumpang !== null) return hapusPenumpang(namaPenumpang);
            }
        }
    });
});

const tambahPenumpang = function (namaPenumpang) {
    if (penumpang.length === 0) {
        penumpang.push(namaPenumpang);
        let i = penumpang.indexOf(namaPenumpang);
        tempatDuduk[i].classList.add('booked');
        tempatDuduk[i].textContent = namaPenumpang;
        message = namaPenumpang + ' berhasil naik ke dalam angkot';
    } else {
        if (penumpang.includes(undefined)) {
            i = penumpang.indexOf(undefined);
            penumpang[i] = namaPenumpang;
            tempatDuduk[i].classList.add('booked');
            tempatDuduk[i].textContent = namaPenumpang;
            message = namaPenumpang + ' berhasil naik ke dalam angkot di tempat duduk ' + (i + 1);
        } else {
            penumpang.push(namaPenumpang);
            i = penumpang.indexOf(namaPenumpang);
            tempatDuduk[i].classList.add('booked');
            tempatDuduk[i].textContent = namaPenumpang;
            message = namaPenumpang + ' berhasil naik ke dalam angkot';
        }
    }
    console.log(penumpang)
    if (penumpang.length === 9) {
        status[1].setAttribute('value', 'Penumpang Penuh')
    } else {
        const undef = itemDuplicateCount(penumpang, undefined)
        status[1].setAttribute('value', (penumpang.length-undef) + ' Penumpang')
    }
    return alert(message);
}

const hapusPenumpang = function (namaPenumpang) {
    let i = penumpang.indexOf(namaPenumpang);
    const ongkosPenumpang = parseInt(prompt('Bayar ongkos penumpang!'));

    kas_sopir += ongkosPenumpang;
    penumpang[i] = undefined;
    tempatDuduk[i].classList.remove('booked');
    tempatDuduk[i].textContent = (i + 1);
    console.log(penumpang)

    status[0].setAttribute('value', 'Rp' + kas_sopir)
    const undef = itemDuplicateCount(penumpang, undefined)
    status[1].setAttribute('value', (penumpang.length-undef) + ' Penumpang')
    return alert(namaPenumpang + ' berhasil turun dari angkot.')
}

// Function to counting duplicate item/values in array
// At this case, to counting duplicates from 'undefined' value.
const itemDuplicateCount = function (array, item) {
    let itemLookingFor = [];
    const arrayCopy = [...array];

    arrayCopy.sort()
    for (let i = 0; i < arrayCopy.length; i++) {
        if(arrayCopy[i] === item) itemLookingFor.push(arrayCopy[i]);
    }
    return itemLookingFor.length;
}