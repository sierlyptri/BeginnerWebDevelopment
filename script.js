function handleGetFormData() {
    const name    = document.getElementById("name").value;
    const email   = document.getElementById("email").value;
    const city    = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const status  = document.getElementById("status").checked;

    return {
        name: name,
        email: email,
        city: city,
        zipCode: zipCode,
        status: status
    };
}

function isNumber(string) {
    return !isNaN(string);
}

function checkboxIsChecked() {
    const statusCheckbox = document.getElementById("status");
    return statusCheckbox.checked;
}

function validateFormData(data) {
    const isDataValid      = data !== null && data.name && data.email && data.city && data.zipCode;
    const isZipCodeNumber  = isNumber(data.zipCode);
    const isStatusChecked  = checkboxIsChecked();

    return isDataValid && isZipCodeNumber && isStatusChecked;
}

function submit(event) {
    event.preventDefault();

    const formData = handleGetFormData();
    const warning  = document.getElementById("warning");

    if (validateFormData(formData)) {
        warning.textContent = "";
    } else {
        warning.textContent = "Periksa form anda sekali lagi";
    }
}

const form = document.querySelector("form");
form.addEventListener("submit", submit);
