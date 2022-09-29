
const contactItems = document.querySelectorAll('.contacts__item');
contactItems.forEach((item, i, a) => {
  item.addEventListener('click', () => {
    a.forEach(m => m.classList.toggle('active', m === item))
  });
});
