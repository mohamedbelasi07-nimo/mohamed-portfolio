const button = document.getElementById("toggle-archive");
const archive = document.getElementById("archive");
const first = document.querySelector(".announcement[data-posted]");
document.getElementById("posted-date").textContent =
  `Posted: ${first.dataset.posted}`;
button.addEventListener("click", () => {
  archive.hidden = !archive.hidden;
  button.textContent = archive.hidden ? "Show archive" : "Hide archive";
  button.setAttribute("aria-expanded", String(!archive.hidden));
});
