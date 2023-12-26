"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnclosemodal = document.querySelectorAll(".close-modal");
const btnopenmodal = document.querySelectorAll(".show-modal");

function show() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function close() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < btnopenmodal.length; i++) {
  btnopenmodal[i].addEventListener("click", show);
}
for (let i = 0; i < btnclosemodal.length; i++) {
  btnclosemodal[i].addEventListener("click", close);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" || event.key === "Esc") {
    close();
  }
});
