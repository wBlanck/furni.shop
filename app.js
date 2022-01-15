const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > navbar.scrollHeight) {
    navbar.style.backgroundColor = "black";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
