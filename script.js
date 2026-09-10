const form = document.getElementById("profileForm");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const profile = {
            name: document.getElementById("name").value.trim(),
            blood: document.getElementById("blood").value,
            allergy: document.getElementById("allergy").value.trim(),
            condition: document.getElementById("condition").value.trim(),
            medicine: document.getElementById("medicine").value.trim(),
            contact: document.getElementById("contact").value.trim()
        };

        localStorage.setItem(
            "lifelinkProfile",
            JSON.stringify(profile)
        );

        alert("✅ Emergency profile saved successfully!");

        window.location.href = "emergency.html";
    });
}