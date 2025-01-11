function findVowels() {
    const name = document.getElementById('nameInput').value;  // Ambil input nama
    const vowels = ['a', 'e', 'i', 'o', 'u'];  // Daftar huruf vokal
    let vowelLetters = [];  // Array untuk menyimpan vokal yang ditemukan

    // Cek setiap huruf dalam nama dan apakah itu vokal
    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i].toLowerCase())) {
            vowelLetters.push(name[i]);
        }
    }

    // Tampilkan vokal dalam elemen #vowelResult
    if (vowelLetters.length > 0) {
        document.getElementById('vowelResult').innerText = 'Vokal: ' + vowelLetters.join(', ');
    } else {
        document.getElementById('vowelResult').innerText = 'Tidak ada huruf vokal ditemukan.';
    }
}
