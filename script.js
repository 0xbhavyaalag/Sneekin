

document.addEventListener("DOMContentLoaded", () => {
    const iconCards = document.querySelectorAll(".icon-card");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close-btn");
    const downloadPng = document.getElementById("downloadPng");
    const downloadSvg = document.getElementById("downloadSvg");

    // Open modal with larger preview
    iconCards.forEach(card => {
        card.addEventListener("click", () => {
            const imgSrc = card.querySelector("img").src;
            modalImage.src = imgSrc;
            modal.style.display = "flex";
        });
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Download PNG
    downloadPng.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = modalImage.src;
        link.download = "icon.png";
        link.click();
    });

    // Download SVG (ensure it exists)
    downloadSvg.addEventListener("click", () => {
        let svgUrl = modalImage.src.replace(".png", ".svg");
        if (!svgUrl.includes(".svg")) {
            console.error("SVG not found.");
            return;
        }
        const link = document.createElement("a");
        link.href = svgUrl;
        link.download = "icon.svg";
        link.click();
    });
});

// Filter icons
function filterIcons(category) {
    const iconCards = document.querySelectorAll(".icon-card");

    iconCards.forEach(card => {
        if (category === 'all') {
            card.classList.remove("hidden");
        } else if (card.classList.contains(category)) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
}

// Add download button functionality to icons
document.querySelectorAll(".download-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        const iconImage = e.target.closest(".icon-card").querySelector("img").src;
        const link = document.createElement("a");
        link.href = iconImage;
        link.download = iconImage.split("/").pop();
        link.click();
    });
});
