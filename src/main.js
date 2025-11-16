fetch("/footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.querySelector(".footer-placeholder").innerHTML = html;
  })
  .catch((err) => {
    console.error("Fehler beim Laden des Footers:", err);
  });
fetch("/navbar.html")
  .then((response) => response.text())
  .then((html) => {
    document.querySelector(".header-placeholder").innerHTML = html;
  })
  .catch((err) => {
    console.error("Fehler beim Laden des Headers:", err);
  });
