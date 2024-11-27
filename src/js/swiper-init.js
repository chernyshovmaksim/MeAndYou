import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
	autoplay: true,
	slidesPerView: 1.3,
	spaceBetween: "10px",
	breakpoints: {
		480: {
			slidesPerView: 2.3,
		},
		640: {
			slidesPerView: 3.3,
		},
	},
	// configure Swiper to use modules
	modules: [Pagination],
});
const productGallery = new Swiper("#product-gallery", {
	slidesPerView: 1.2,
	spaceBetween: "10px",
	loop: true,
	modules: [Pagination],
	pagination: {
		el: ".swiper-pagination",
	},
});
