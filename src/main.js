import "./style.css";

import $ from "jquery";
import feather from "feather-icons";

import "./js/mobile-menu";
import "./js/swiper-init";
import "./js/fancyapps-init";
import "./js/inputmask-init";
import "./js/forms-init";

import bottomBar from "./js/bottom-bar";
import callbackModals from "./js/modals";
import cartInit from "./js/cart";

$(document).ready((e) => {
	feather.replace();

	bottomBar();
	callbackModals();
	cartInit();
});
