(function() {
  var header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header--active");
    }
  };
})();

(function() {
  var burgerItem = document.querySelector(".burger");
  var menu = document.querySelector(".header__nav");
  var menuCloseItem = document.querySelector(".header__nav-close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav--active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav--active");
  });
})();
