function startArcade() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");
}

function startGame(game) {
  alert("Starte " + game);
  // window.location.href = game + ".html";
}