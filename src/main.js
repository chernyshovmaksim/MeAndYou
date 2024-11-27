import "./style.css";

import $ from "jquery";
import feather from "feather-icons";

import "./js/mobile-menu";
import "./js/swiper-init";
import "./js/fancyapps-init";

import bottomBar from "./js/bottom-bar";
import callbackModals from "./js/modals";
import imaskInit from "./js/imask-init";
import cartInit from "./js/cart";

$(document).ready((e) => {
	feather.replace();

	bottomBar();
	callbackModals();
	imaskInit();
	cartInit();
});
