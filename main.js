var toggleBtn = document.getElementById("toggleButton");
var certify = document.getElementById("certificates");
if (toggleBtn && certify) {
    toggleBtn.addEventListener("click", function () {
        if (certify.style.display === "none" || certify.style.display === "") {
            certify.style.display = "block";
            toggleBtn.textContent = "Hide";
        }
        else {
            certify.style.display = "none";
            toggleBtn.textContent = "Show";
        }
    });
}
else {
    console.error("toggleButton or certificates element not found in the DOM.");
}
