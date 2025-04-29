document.addEventListener("DOMContentLoaded", () => {
  window.showCustomAlert = function (content) {

    // Create the alert element
    const overlay = document.createElement("div");
    overlay.className = "custom-alert-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "9";

    // Create the alert element
    const alert = document.createElement("div");
    alert.className = "custom-alert";
    alert.innerHTML = content;
    
    alert.style.position = "fixed";
    alert.style.top = "50%";
    alert.style.left = "50%";
    alert.style.transform = "translate(-50%, -50%)";
    alert.style.backgroundColor = "white";
    alert.style.padding = "30px";
    alert.style.borderRadius = "15px";
    alert.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    //width and height in the styles.css file    

    // Add the close button
    const closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.innerHTML = "close";
    
    closeButton.style.display = "block";
    closeButton.style.padding = "10px 20px";
    closeButton.style.position = "fixed";
    closeButton.style.bottom = "10px";
    closeButton.style.right = "10px";
    closeButton.style.background = "linear-gradient(135deg, var(--primary-color), var(--secondary-color))";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "15px";
    closeButton.style.fontSize = "15px";
    closeButton.style.cursor = "pointer";
    closeButton.style.outline = "none";
    closeButton.style.zIndex = "1";


    closeButton.addEventListener("click", () => {
      alert.remove();
      overlay.remove();
    });

    overlay.appendChild(alert);
    alert.appendChild(closeButton);
    document.body.appendChild(overlay);
  };
});
