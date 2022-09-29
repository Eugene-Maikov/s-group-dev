ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [56.304903, 43.992027],
    zoom: 15
  }, {
    searchControlProvider: 'yandex#search'
  }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="background: #fff; display: flex; justify-content: center; align-items: center; border-radius: 10px; box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); width:133px; height: 30px; color: #262728; font-weight: 700; letter-spacing: 0.02em; line-height: 140%; font-size: 14px;">$[properties.iconContent]</div>'
    ),

    myPlacemarkWithContent = new ymaps.Placemark([56.310483, 43.992027], {
      iconContent: 'ул. Костина, 6к1'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/location.svg',
      // Размеры метки.
      iconImageSize: [56, 80],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-24, -24],
      // Смещение слоя с содержимым относительно слоя с картинкой.
      iconContentOffset: [60, 10],
      // Макет содержимого.
      iconContentLayout: MyIconContentLayout
    });

  myMap.geoObjects
    .add(myPlacemarkWithContent);
});


ymaps.ready(function () {
  var myMap = new ymaps.Map('map-tablet', {
    center: [56.310483, 43.992027],
    zoom: 15
  }, {
    searchControlProvider: 'yandex#search'
  }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="background: #fff; display: flex; justify-content: center; align-items: center; border-radius: 3px; box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); width:109px; height: 20px; color: #262728; font-weight: 700; letter-spacing: 0.02em; line-height: 140%; font-size: 11px;">$[properties.iconContent]</div>'
    ),

    myPlacemarkWithContent = new ymaps.Placemark([56.310483, 43.992027], {
      iconContent: 'ул. Костина, 6к1'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/location.svg',
      // Размеры метки.
      iconImageSize: [35, 50],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-24, -24],
      // Смещение слоя с содержимым относительно слоя с картинкой.
      iconContentOffset: [-40, -32],
      // Макет содержимого.
      iconContentLayout: MyIconContentLayout
    });

  myMap.geoObjects
    .add(myPlacemarkWithContent);
});
