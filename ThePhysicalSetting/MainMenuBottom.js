function showModal(title, description) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");

  modalTitle.textContent = title;
  modalDescription.textContent = description;

  modal.style.display = "flex"; // Show the modal
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none"; // Hide the modal
}

function showImageModal(imageSrc) {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");

  if (modal && modalImage) {
    modalImage.src = imageSrc; // Set the image source
    modal.style.display = "flex"; // Show the modal
  } else {
    console.error("Modal or modal image element not found.");
  }
}

function closeImageModal() {
  const modal = document.getElementById("image-modal");
  if (modal) {
    modal.style.display = "none"; // Hide the modal
  } else {
    console.error("Modal element not found.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");

  // Hide the loading screen after 3 seconds
  setTimeout(() => {
    loadingScreen.style.display = "none"; // Hide the loading screen
    mainContent.style.display = "block"; // Show the main content

    // Run the highlightNavLink function after the main content is displayed
    highlightNavLink();
  }, 3000); // 3 seconds
});
