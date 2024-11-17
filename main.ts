const toggleBtn = document.getElementById("toggleButton") as HTMLButtonElement | null;
const certify = document.getElementById("certificates") as HTMLElement | null;

if (toggleBtn && certify) {
    toggleBtn.addEventListener("click", () => {
        if (certify.style.display === "none" || certify.style.display === "") {
            
            certify.style.display = "block";
            toggleBtn.textContent = "Hide";
        } else {
            
            certify.style.display = "none";
            toggleBtn.textContent = "Show";
        }
    });
} else {
    console.error("toggleButton or certificates element not found in the DOM.");
}
