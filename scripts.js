document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input[type='text'], input[type='email'], textarea");

    inputs.forEach(input => {
        input.addEventListener("focus", function() {
            this.style.backgroundColor = "#e0f7fa"; // Change to desired color
        });

        input.addEventListener("blur", function() {
            this.style.backgroundColor = ""; // Reset to original background color
        });
    });
});
