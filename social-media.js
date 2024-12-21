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

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Download options
    downloadPng.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = modalImage.src;
        link.download = "icon.png";
        link.click();
    });

    downloadSvg.addEventListener("click", () => {
        const svgUrl = modalImage.src.replace(".png", ".svg");
        const link = document.createElement("a");
        link.href = svgUrl;
        link.download = "icon.svg";
        link.click();
    });
});

function filterIcons(category) {
    const iconCards = document.querySelectorAll(".icon-card");

    iconCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else if (card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Download button functionality
document.querySelectorAll(".download-btn").forEach(button => {
    button.addEventListener("click", () => {
        const iconImage = button.previousElementSibling.src;
        const link = document.createElement("a");
        link.href = iconImage;
        link.download = iconImage.split("/").pop();
        link.click();
    });
});
