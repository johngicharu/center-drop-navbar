const navBar = document.querySelector(".navBar");
const navTrigger = document.querySelector(".nav-trigger");

navTrigger.addEventListener("click", e => {
  e.preventDefault();
  navBar.classList.toggle("nav-open");
  if ((navBar.classList.contains = "nav-open")) {
    setTimeout(() => {
      navTrigger.classList.toggle("trigger-drop");
    }, 300);
  }
});
