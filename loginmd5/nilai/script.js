// Tangkap elemen penting
const nilaiForm = document.getElementById("nilaiForm");
const nilaiTableBody = document.getElementById("nilaiTableBody");

// Event listener untuk form submit
nilaiForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil nilai dari form
    const nim = document.getElementById("nim").value;
    const nama = document.getElementById("nama").value;
    const fakultas = document.getElementById("fakultas").value;
    const uts = parseFloat(document.getElementById("uts").value);
    const uas = parseFloat(document.getElementById("uas").value);

    // Hitung rata-rata dan grade
    const rataRata = ((uts + uas) / 2).toFixed(2);
    let grade;
    if (rataRata >= 85) grade = "A";
    else if (rataRata >= 75) grade = "B";
    else if (rataRata >= 65) grade = "C";
    else grade = "D";

    // Tambahkan data ke tabel
    const row = `
        <tr>
            <td>${nilaiTableBody.children.length + 1}</td>
            <td>${nim}</td>
            <td>${nama}</td>
            <td>${fakultas}</td>
            <td>${uts}</td>
            <td>${uas}</td>
            <td>${rataRata}</td>
            <td>${grade}</td>
        </tr>
    `;
    nilaiTableBody.innerHTML += row;

    // Reset form
    nilaiForm.reset();
});
