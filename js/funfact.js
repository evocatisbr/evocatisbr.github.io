"use strict";
(function () {
    let faktaDitampilkan = false;

    window.addEventListener("load", init);

    function init() {
        if (typeof faktaMenarik === "undefined" || !Array.isArray(faktaMenarik)) {
            console.error("Variabel 'faktaMenarik' tidak ditemukan atau tidak valid. Harap definisikan di <script> HTML.");
            return;
        }
        
        const tombol = document.getElementById("tombolFakta");
        tombol.addEventListener("click", toggleFakta);
    }

    function getRandomFakta() {
        const randomIndex = Math.floor(Math.random() * faktaMenarik.length);
        return faktaMenarik[randomIndex];
    }

    function toggleFakta() {
        const tombol = document.getElementById("tombolFakta");
        const collapse = document.getElementById("collapseFakta");

        if (!faktaDitampilkan) {
            const fakta = getRandomFakta();
            document.getElementById("fakta").innerText = fakta;
            tombol.innerText = "Tutup";
            faktaDitampilkan = true;
        } else {
            tombol.innerText = "Lagi?";
            faktaDitampilkan = false;
        }

        const bootstrapCollapse = new bootstrap.Collapse(collapse, {
            toggle: true,
        });
    }
})();
