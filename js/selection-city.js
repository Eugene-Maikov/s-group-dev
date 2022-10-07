const btnLocation = document.querySelector(".header__location-link"),
locationMask = document.querySelector(".nav-mask"),
locationMaskClose = document.querySelector(".nav-maskClose"),
btnLocationText = document.querySelector(".header__location-link > p"),
submenuLocation = document.querySelector(".submenu__location"),
locationCity = document.querySelectorAll('input[name="locationCity"]');

btnLocation.addEventListener("click", (e) => {
  submenuLocation.classList.toggle("submenu__location-active");
  submenuLocation.classList.contains("submenu__location-active");
  mask(1, 1);
  maskBtnClose(1, 1);
});
locationMask.addEventListener("click", (e) => {
  submenuLocation.classList.remove("submenu__location-active");
  mask(0, 0);
  maskBtnClose(0, 0);
});

for (const item of locationCity) {
  item.addEventListener("click", () => {
    if (item.checked) {
      btnLocationText.innerHTML = item.value;
      submenuLocation.classList.remove("submenu__location-active");
      mask(0, 0);
      maskBtnClose(0, 0);
    }
  });
}

function maskBtnClose(opacity, scaleY) {
  locationMaskClose.style.opacity = `${opacity}`;
  locationMaskClose.style.transform = `${scaleY}`;
}
function mask(opacity, scaleY) {
  locationMask.style.opacity = `${opacity}`;
  locationMask.style.transform = `${scaleY}`;
}
