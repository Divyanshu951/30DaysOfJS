const toggleBtn = document.getElementById("theme-toggle");
const gitIcon = document.querySelector(".git-logo");
const icon = toggleBtn.querySelector("i");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  gitIcon.classList.toggle("dark-mode");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});
