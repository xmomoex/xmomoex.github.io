function openNav() {
  document.getElementById("menu-mobile").style.width = "100%";
}
function closeNav() {
  document.getElementById("menu-mobile").style.width = "0%";
}

let searchBtn = document.querySelector(".searchBtn");
let closehBtn = document.querySelector(".closeBtn");
let buscadorbox = document.querySelector(".buscadorbox");

searchBtn.onclick = function () {
  buscadorbox.classList.add("active");
  closehBtn.classList.add("active");
  searchBtn.classList.add("active");
};

closehBtn.onclick = function () {
  buscadorbox.classList.remove("active");
  closehBtn.classList.remove("active");
  searchBtn.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal(".content", { delay: 200, origin: "top" });
sr.reveal(".boton", { delay: 200, origin: "left" });
sr.reveal(".boton2", { delay: 200, origin: "left" });
sr.reveal(".logo", { delay: 200, origin: "left" });
sr.reveal(".ayuda", { delay: 200, origin: "left" });
sr.reveal(".menu", { delay: 200, origin: "left" });
sr.reveal(".sesion", { delay: 200, origin: "left" });
sr.reveal(".buscador", { delay: 200, origin: "left" });
sr.reveal(".sub", { delay: 200, origin: "left" });
