document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    fetch("YOUR_WEB_APP_URL", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" }
    }).then(response => response.text())
      .then(data => alert("Form submitted successfully!"))
      .catch(error => console.error("Error:", error));
});
