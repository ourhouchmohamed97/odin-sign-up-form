const form = document.getElementById("signup-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (form.checkValidity()) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log("Sign-up submitted:", data);
        alert("Account created successfully! (This is a demo)");
    } else {
        form.reportValidity();
    }
});