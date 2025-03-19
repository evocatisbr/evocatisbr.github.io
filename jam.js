function updateJam() {
    const now = new Date();
    const jam = now.getHours().toString().padStart(2, '0');
    const menit = now.getMinutes().toString().padStart(2, '0');
    const detik = now.getSeconds().toString().padStart(2, '0');
    const tanggal = now.getDate().toString().padStart(2, '0');
    const bulan = (now.getMonth() + 1).toString().padStart(2, '0');
    const tahun = now.getFullYear();

    const waktu = `${jam}:${menit}:${detik} | ${tanggal}-${bulan}-${tahun}`;
    document.getElementById("jam-digital").innerText = waktu;
}

setInterval(updateJam, 1000);
updateJam();