const logoWidth = `${document.querySelector(".header__logo").clientWidth}px`;
document.querySelector(".contact__time").style.width = logoWidth;
document.querySelector(".rules__copyright").style.width = logoWidth;
document
  .querySelectorAll(".info__block-title")
  .forEach((item) => (item.style.minWidth = logoWidth));

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu-curtain");

  burgerMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("mobile-menu--active");

    this.classList.toggle("burger--active");
  });
});
