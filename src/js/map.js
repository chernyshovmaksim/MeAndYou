initMap();

async function initMap() {
	// Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
	await ymaps3.ready;

	const { YMap, YMapDefaultSchemeLayer, YMapMarker } = ymaps3;

	// Иницилиазируем карту
	const map = new YMap(
		// Передаём ссылку на HTMLElement контейнера
		document.getElementById("map"),

		// Передаём параметры инициализации карты
		{
			location: {
				// Координаты центра карты
				center: [37.588144, 55.733842],

				// Уровень масштабирования
				zoom: 10,
			},
		},
	);

	// Добавляем слой для отображения схематической карты
	map.addChild(new YMapDefaultSchemeLayer());

	const markerElement = document.createElement("div");
	markerElement.className = "marker-class";
	markerElement.innerText = "I'm marker!";

	const marker = new YMapMarker(
		{
			source:
				"https://yastatic.net/s3/front-maps-static/maps-front-jsapi-3/3.0.15285770/build/static/s3-cases/marker-custom-icon/squirrels/image16.png",
			coordinates: [37.588144, 55.733842],
			draggable: false,
			mapFollowsOnDrag: true,
		},
		markerElement,
	);

	map.addChild(marker);
}
