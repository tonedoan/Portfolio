// Load header and footer dynamically
document.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch("components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("afterbegin", data);
    })
    .catch((error) => console.error("Error loading header:", error));

  // Load footer
  fetch("components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("main").insertAdjacentHTML("afterend", data);
    })
    .catch((error) => console.error("Error loading footer:", error));

  // Load about section (if placeholder exists)
  const aboutPlaceholder = document.getElementById("about-placeholder");
  if (aboutPlaceholder) {
    fetch("components/about-section.html")
      .then((response) => response.text())
      .then((data) => {
        aboutPlaceholder.outerHTML = data;
      })
      .catch((error) => console.error("Error loading about section:", error));
  }

  // Load projects section (if placeholder exists)
  const projectsPlaceholder = document.getElementById("projects-placeholder");
  if (projectsPlaceholder) {
    fetch("components/projects-section.html")
      .then((response) => response.text())
      .then((data) => {
        projectsPlaceholder.outerHTML = data;
      })
      .catch((error) => console.error("Error loading projects:", error));
  }
});
