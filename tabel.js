// Data Dummy
const data = [];
for (let i = 1; i <= 24; i++) {
    data.push({ Jam: `${i}`, Kode: `${20 + i}`, MataKuliah: `Mata Kuliah ${i}`, Ruangan: `Ruangan ${i}`, Dosen: `Dosen ${i}` });
}

const rowsPerPage = 8;
let currentIndex = 0;
const tbody = document.getElementById("table-body");
const loadingBar = document.getElementById("loading-bar");

function updateTable() {
    tbody.innerHTML = ""; 

    for (let i = currentIndex; i < currentIndex + rowsPerPage && i < data.length; i++) {
        let row = `<tr>
            <td>${data[i].Jam}</td>
            <td>${data[i].Kode}</td>
            <td>${data[i].MataKuliah}</td>
            <td>${data[i].Ruangan}</td>
            <td>${data[i].Dosen}</td>
        </tr>`;
        tbody.innerHTML += row;
    }

    currentIndex += rowsPerPage;
    if (currentIndex >= data.length) {
        currentIndex = 0;
    }

    loadingBar.style.transition = "none";
    loadingBar.style.width = "0%";

    setTimeout(() => {
        loadingBar.style.transition = "width 20s linear";
        loadingBar.style.width = "100%";
    }, 100);
}

updateTable();

setInterval(updateTable, 20000);