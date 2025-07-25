// Redirect from landing page "Get Started" to Index2
function goToDashboard() {
  window.location.href = "index2.html";
}

// Generic page navigator
function goTo(url) {
  window.location.href = url;
}

// Auto-highlight current page in sidebar
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".sidebar nav ul li").forEach((item) => {
    if (
      item.textContent.trim().toLowerCase().replace(/\s/g, "-") + ".html" ===
      currentPage
    ) {
      item.classList.add("active");
    }
  });
});

const dropArea = document.getElementById("drop-area");
const fileElem = document.getElementById("fileElem");
const preview = document.getElementById("preview");
const successMsg = document.getElementById("successMsg");

// Open file dialog on label click
dropArea.addEventListener("click", () => fileElem.click());

// Handle file selection
fileElem.addEventListener("change", handleFiles);

function handleFiles() {
  const file = this.files[0];

  if (!file) return;

  if (file.size > 50 * 1024 * 1024) {
    successMsg.textContent = "❌ File too large. Max 50MB allowed.";
    preview.innerHTML = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    preview.innerHTML = `<img src="${e.target.result}" alt="Uploaded MRI">`;
    successMsg.textContent = "✅ File uploaded successfully!";
  };
  reader.readAsDataURL(file);
}
