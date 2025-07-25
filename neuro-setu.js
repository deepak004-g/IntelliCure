document.getElementById("fileInput").addEventListener("change", function () {
  const file = this.files[0];
  const feedback = document.getElementById("uploadFeedback");

  if (file) {
    if (file.size > 50 * 1024 * 1024) {
      feedback.textContent = "File too large. Max size is 50MB.";
      feedback.style.color = "#f87171"; // red
    } else {
      feedback.textContent = `✔️ ${file.name} uploaded successfully!`;
      feedback.style.color = "#4ade80"; // green
    }
  } else {
    feedback.textContent = "";
  }
});
