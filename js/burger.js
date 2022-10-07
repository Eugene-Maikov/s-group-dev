(function () {
  const burger = document?.querySelector("[data-burger]");
  const menu = document?.querySelector("[data-menu]");
  const menuItems = document?.querySelectorAll("[data-menu-item]");
  const overlay = document?.querySelector("[data-menu-overlay]");
  const body = document.body;

  burger?.addEventListener("click", (e) => {
    burger?.classList.toggle("burger--active");
    menu?.classList.toggle("menu--active");
    body.classList.add("dis-scroll");

    if (menu?.classList.contains("menu--active")) {
      burger?.setAttribute("aria-expanded", "true");
      burger?.setAttribute("aria-label", "Закрыть меню");
      body.classList.add("dis-scroll");
    } else {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      body.classList.remove("dis-scroll");
    }
  });

  overlay?.addEventListener("click", () => {
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
    body.classList.remove("dis-scroll");
  });

  menuItems?.forEach((el) => {
    el.addEventListener("click", () => {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("burger--active");
      menu.classList.remove("menu--active");
      body.classList.remove("dis-scroll");
    });
  });
})();

const submenuLinks = document.querySelectorAll('.nav__list > li');
const submenuLink = document.querySelector('.submenu-link');
const submenu = document.querySelector('.submenu');
console.log(submenuLinks);


// Menu mobile
for (const item of submenuLinks) {
  item.children[0].addEventListener("click", () => {
    item.children[1].classList.toggle('submenu--active');
    item.children[0].classList.toggle('submenu-link--active');
    item.children[0].children[0].classList.toggle('arrow-nav--active');
  });
}