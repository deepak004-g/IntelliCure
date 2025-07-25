document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("fileUpload");
  const uploadStatus = document.getElementById("uploadStatus");

  if (fileInput && uploadStatus) {
    fileInput.addEventListener("change", function () {
      const file = this.files[0];

      if (!file) {
        uploadStatus.textContent = "No file selected.";
        uploadStatus.style.color = "gray";
        return;
      }

      const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
      const maxSize = 10 * 1024 * 1024; // 10MB

      if (!allowedTypes.includes(file.type)) {
        uploadStatus.textContent = "❌ Invalid file type. Only PDF, JPG, PNG allowed.";
        uploadStatus.style.color = "red";
        return;
      }

      if (file.size > maxSize) {
        uploadStatus.textContent = "❌ File is too large. Max 10MB allowed.";
        uploadStatus.style.color = "red";
        return;
      }

      // Success
      uploadStatus.textContent = `✅ ${file.name} uploaded successfully.`;
      uploadStatus.style.color = "green";
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const centerFileInput = document.getElementById('centerFileInput');

  if (centerFileInput) {
    centerFileInput.addEventListener('change', function () {
      if (centerFileInput.files.length > 0) {
        showToast(`${centerFileInput.files.length} file(s) Uploaded successfully.`);
      }
    });
  }
});

function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.right = '20px';
  toast.style.backgroundColor = '#4ade80';
  toast.style.color = '#000';
  toast.style.padding = '12px 18px';
  toast.style.borderRadius = '8px';
  toast.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
  toast.style.zIndex = '9999';
  toast.style.fontSize = '15px';
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
