let menu = document.querySelector("#menu-toggle");
menu.addEventListener("click", () => {
  document.querySelector("#nav-menu").classList.remove("hidden");
});

let closeButtons = document.querySelectorAll(".menu-close");
closeButtons.forEach((btn) => {
  btn.addEventListener("click", () =>
    document.querySelector("#nav-menu").classList.add("hidden")
  );
});
