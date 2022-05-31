document.getElementById("open-modal").addEventListener("click", () => {
  document.getElementById("overlay").style.display = "block";
});

document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("overlay").style.display = "none";
});

document.getElementById("overlay").addEventListener("click", () => {
  document.getElementById("overlay").style.display = "none";
});
