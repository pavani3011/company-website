document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting us!");
  this.reset();
});

const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
