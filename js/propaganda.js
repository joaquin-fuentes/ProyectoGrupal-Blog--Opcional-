let propaganda = document.getElementById("propaganda");

setTimeout(() => {
  propaganda.classList.remove("desaparece");
  propaganda.classList.add("aparece");
}, 4000);

setTimeout(() => {
  propaganda.classList.remove("aparece");
  propaganda.classList.add("desaparece");
}, 10000);