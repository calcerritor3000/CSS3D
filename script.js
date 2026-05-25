const ring = document.getElementById("ring");
const pauseBtn = document.getElementById("pauseBtn");
const speedBtn = document.getElementById("speedBtn");
const info = document.getElementById("info");
const panels = Array.from(document.querySelectorAll(".panel"));

let paused = false;
let fast = false;

pauseBtn.addEventListener("click", () => {
  paused = !paused;
  ring.style.animationPlayState = paused ? "paused" : "running";
  pauseBtn.textContent = paused ? "Reanudar" : "Pausar";
});

speedBtn.addEventListener("click", () => {
  fast = !fast;
  ring.style.animationDuration = fast ? "8s" : "16s";
  speedBtn.textContent = fast ? "Velocidad normal" : "Velocidad x2";
});

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panels.forEach((item) => item.classList.remove("active"));
    panel.classList.add("active");
    info.textContent = `Etapa activa: ${panel.textContent}`;
  });
});
