// Simple script to log and manipulate the title
console.log("Lombok Website Loaded");

// Example: add a subtle effect after load
document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  title.style.transition = "transform 1s ease";
  title.style.transform = "scale(1.1)";
});
