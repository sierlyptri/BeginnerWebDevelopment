// 6. Function untuk membaca isi dari 5 input dan mengembalikan objek
function handleGetFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;
    
    return {
        name: name,
        email: email,
        city: city,
        zipCode: zipCode,
        status: status
    };
}

// 7. Function untuk validasi apakah string berisi angka saja
function isNumber(string) {
    return !isNaN(string);
}

// 8. Function untuk mengecek apakah checkbox dicentang
function checkboxIsChecked() {
    const statusCheckbox = document.getElementById("status");
    return statusCheckbox.checked;
}

// 9. Function untuk validasi data form
function validateFormData(data) {
    // Cek apakah objek tidak null dan semua properti terisi
    const isDataValid = data !== null && 
                       data.name && 
                       data.email && 
                       data.city && 
                       data.zipCode;
    
    // Cek apakah zipCode adalah angka
    const isZipCodeNumber = isNumber(data.zipCode);
    
    // Cek apakah checkbox dicentang
    const isStatusChecked = checkboxIsChecked();
    
    // Kembalikan true jika semua kondisi terpenuhi
    return isDataValid && isZipCodeNumber && isStatusChecked;
}

// 10. Function untuk submit form
function submit() {
    const formData = handleGetFormData();
    const warning = document.getElementById("warning");
    
    // Validasi data form
    if (validateFormData(formData)) {
        // Jika validasi berhasil, hapus teks warning
        warning.textContent = "";
    } else {
        // Jika validasi gagal, tampilkan pesan error
        warning.textContent = "Periksa form anda sekali lagi";
    }
}

// Menghubungkan function submit dengan form menggunakan addEventListener
const form = document.querySelector("form");
form.addEventListener("submit", submit);