const btnLocation = document.querySelector('.header__location-link');
const locationMask = document.querySelector('.nav-mask');
const locationMaskClose = document.querySelector('.nav-maskClose');
const btnLocationText = document.querySelector('.header__location-link > p');
const submenuLocation = document.querySelector('.submenu__location');
const locationCity = document.querySelectorAll('input[name="locationCity"]');

btnLocation.addEventListener("click", (e) => {
    submenuLocation.classList.toggle("submenu__location-active");
    submenuLocation.classList.contains("submenu__location-active");
    locationMask.style.opacity = '1';
    locationMask.style.transform = 'scaleY(1)';
    locationMaskClose.style.opacity = '1';
    locationMaskClose.style.transform = 'scaleY(1)';
});
locationMask.addEventListener("click", (e) => {
    submenuLocation.classList.remove("submenu__location-active");
    locationMask.style.opacity = '0';
    locationMask.style.transform = 'scaleY(0)';
    locationMaskClose.style.opacity = '0';
    locationMaskClose.style.transform = 'scaleY(0)';
});

for (const item of locationCity) {
    item.addEventListener("click", () => {
        if (item.checked) {
            btnLocationText.innerHTML = item.value;
            submenuLocation.classList.remove("submenu__location-active");
            locationMask.style.opacity = '0';
            locationMask.style.transform = 'scaleY(0)';
            locationMaskClose.style.opacity = '0';
            locationMaskClose.style.transform = 'scaleY(0)';
        }
    });
}