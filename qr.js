const storedProfile = localStorage.getItem("lifelinkProfile");

if (!storedProfile) {

    document.getElementById("emergencyData").innerHTML =
        "<p>No emergency profile found.</p>";

} else {

    const profile = JSON.parse(storedProfile);

    // Show emergency information
    document.getElementById("emergencyData").innerHTML = `
        <div class="info-card">
            <strong>👤 Name</strong>
            ${profile.name}
        </div>

        <div class="info-card">
            <strong>🩸 Blood Group</strong>
            ${profile.blood}
        </div>

        <div class="info-card">
            <strong>⚠️ Allergies</strong>
            ${profile.allergy || "None provided"}
        </div>

        <div class="info-card">
            <strong>🏥 Medical Condition</strong>
            ${profile.condition || "None provided"}
        </div>

        <div class="info-card">
            <strong>💊 Important Medication</strong>
            ${profile.medicine || "None provided"}
        </div>

        <div class="info-card">
            <strong>📞 Emergency Contact</strong>
            ${profile.contact}
        </div>
    `;

    // Create QR code
    const qrBox = document.getElementById("qrcode");

    if (typeof QRCode !== "undefined") {

        new QRCode(qrBox, {
            text: window.location.href,
            width: 200,
            height: 200
        });

    } else {

        qrBox.innerHTML =
            "<p>⚠️ QR library could not be loaded.</p>";
    }

    // Access history
    const log = document.getElementById("accessLog");

    const currentTime = new Date().toLocaleString();

    log.innerHTML = `
        🟢 Emergency profile accessed
        <br>
        <small>${currentTime}</small>
    `;
}