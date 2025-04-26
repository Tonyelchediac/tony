document.addEventListener("DOMContentLoaded", () => {
  window.showCustomAlert = function () {
    if (document.querySelector(".custom-alert")) return;

    const overlay = document.createElement("div");
    overlay.className = "custom-alert-overlay";
    Object.assign(overlay.style, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      zIndex: 9,
    });

    const alertBox = document.createElement("div");
    alertBox.className = "custom-alert";
    Object.assign(alertBox.style, {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      padding: "20px 30px",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      fontFamily: "sans-serif",
      zIndex: 10,
      minWidth: "300px",
    });

    document.body.style.overflow = "hidden";

    const content = document.createElement("div");
    Object.assign(content.style, {
      marginBottom: "20px",
      fontSize: "16px",
      color: "#333",
    });
    content.textContent = "The policy prevents you from using this feature because it uses real-time data.";

    const buttonContainer = document.createElement("div");
    Object.assign(buttonContainer.style, {
      textAlign: "right",
    });

    const okButton = document.createElement("button");
    okButton.textContent = "OK";
    Object.assign(okButton.style, {
      padding: "8px 16px",
      backgroundImage: "linear-gradient(135deg, #2563eb, #4f46e5)",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "14px",
      cursor: "pointer",
      outline: "none",
      transition: "background 0.3s",
    });

    okButton.addEventListener("click", () => {
      alertBox.remove();
      overlay.remove();
      document.body.style.overflow = ""; // Restore scroll
    });

    buttonContainer.appendChild(okButton);
    alertBox.appendChild(content);
    alertBox.appendChild(buttonContainer);
    document.body.appendChild(overlay);
    document.body.appendChild(alertBox);
  };
});
