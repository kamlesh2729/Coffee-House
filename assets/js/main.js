const Nav = document.querySelector("[data-nav]");

const HandelScroll = () => {
  if (window.scrollY > 0) {
    Nav.style.position = "sticky";
    Nav.style.top = "0";
    Nav.classList.add("bg-coffee");
  } else {
      Nav.style.position = "relative";
      Nav.classList.remove("bg-coffee");
  }
};


window.addEventListener("scroll", HandelScroll);