document.addEventListener("DOMContentLoaded", function() {
  const btnMenu = document.getElementById("btn-menu");
  const menuMobile = document.getElementById("menu-mobile");
  const btnFechar = menuMobile.querySelector(".btn-fechar");
  const overlay = document.getElementById("overlay-menu");

  btnMenu.addEventListener("click", () => {
    menuMobile.classList.add("abrir-menu");
  });

  btnFechar.addEventListener("click", () => {
    menuMobile.classList.remove("abrir-menu");
  });

  overlay.addEventListener("click", () => {
    menuMobile.classList.remove("abrir-menu");
  });
});