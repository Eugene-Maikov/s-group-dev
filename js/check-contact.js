
const contactItems = document.querySelectorAll('.contacts__item');
contactItems.forEach((item, i, a) => {
  item.addEventListener('click', () => {
    a.forEach(m => m.classList.toggle('active', m === item))
  });
});


const contactList = document.querySelector('.contacts__list');
const contactMenu = document.querySelector('.contacts__menu ');
const btnContactTop = document.querySelectorAll('.contacts__top');
const contactListItem = document.querySelectorAll('.contacts__list-item');
const body = document.body;

for (const item of btnContactTop) {
  item.addEventListener("click", () => {
    contactMenu.classList.add('contacts__menu-active');
    body.classList.add("no-scroll");
  });
}
for (const item of contactListItem) {
  item.addEventListener("click", () => {
    if (item.classList.contains("contacts__list-item--active")) {
      item.classList.add('contacts__list-item--active');
    } else {
      item.classList.remove('contacts__list-item--active');
    }

    contactMenu.classList.remove('contacts__menu-active');
    body.classList.remove("no-scroll");
  });
}