const form = document.getElementById('formPesan');
const tempatData = document.getElementById('dataDikirim');

let semuaData = [];

function tampilkanSemuaData() {
    if (semuaData.length === 0) {
        tempatData.innerHTML = '<div class="kosong">Belum ada data. Isi form di atas!</div>';
        return;
    }

    let html = '<h4>Data yang sudah dikirim:</h4>';
    
    for (let i = semuaData.length - 1; i >= 0; i--) {
        let d = semuaData[i];
        html += `
            <div class="data-item">
                <div class="label">Nama:</div>
                <div class="value">${d.nama}</div>
                <div class="label">Alamat:</div>
                <div class="value">${d.alamat}</div>
                <div class="label">Tempat/Tgl Lahir:</div>
                <div class="value">${d.tempatLahir} / ${d.tanggalLahir}</div>
                <div class="label">Telepon:</div>
                <div class="value">${d.nomorTelepon}</div>
                <div class="label">Email:</div>
                <div class="value">${d.email}</div>
                <div class="label">Password:</div>
                <div class="value">●●●●●●●●</div>
                <div class="label">Jenis Kelamin:</div>
                <div class="value">${d.jenisKelamin}</div>
                <div class="label">Agama:</div>
                <div class="value">${d.agama}</div>
                <div class="label">Hobi:</div>
                <div class="value">${d.hobi.join(', ') || '-'}</div>
            </div>
        `;
    }
    tempatData.innerHTML = html;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let nama = document.getElementById('nama').value;
    let alamat = document.getElementById('alamat').value;
    let tempatLahir = document.getElementById('tempatLahir').value;
    let tanggalLahir = document.getElementById('tanggalLahir').value;
    let nomorTelepon = document.getElementById('nomorTelepon').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');
    jenisKelamin = jenisKelamin ? jenisKelamin.value : '';
    let agama = document.getElementById('agama').value;
    let hobi = getHobiTerpilih();

    function getHobiTerpilih() {
    let semuaHobi = document.querySelectorAll('input[name="hobi"]:checked');
    let hobiArray = [];
    semuaHobi.forEach(function(hobi) {
        hobiArray.push(hobi.value);
    });
    return hobiArray;
}

    if (nama === '' || alamat === '' || tempatLahir === '' || tanggalLahir === '' || 
        nomorTelepon === '' || email === '' || password === '' || jenisKelamin === '' || agama === '' || hobi.length === 0) {
        alert('Semua kolom harus diisi!'); 
        return;
    }

    semuaData.push({
        nama: nama, alamat: alamat, tempatLahir: tempatLahir,
        tanggalLahir: tanggalLahir, nomorTelepon: nomorTelepon,
        email: email, password: password, jenisKelamin: jenisKelamin, agama: agama, hobi: hobi
    });


    alert(` Data berhasil dikirim! Terima kasih ${nama}.`);

    form.reset();

tampilkanSemuaData();
});