// Existing code
console.log("Lombok Website Loaded");

document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  title.style.transition = "transform 1s ease";
  title.style.transform = "scale(1.1)";
});

// Enrollment form submission
const enrollForm = document.getElementById("enrollForm");
if (enrollForm) {
  enrollForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page refresh
    alert("We got you in!");
    // Later: Here you can send form data to a database
    enrollForm.reset(); // Clear the form
  });
}
