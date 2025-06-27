document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formKontak");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const nama = document.getElementById("nama").value;
            alert(`Terima kasih, ${nama}! Pesanmu sudah kami terima.`);
            form.reset();
        });
    } else {
        console.log("Form tidak ditemukan");
    }
});
