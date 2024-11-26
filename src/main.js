import "./style.css";

import $ from "jquery";
import feather from "feather-icons";

import "./js/mobile-menu";
import "./js/swiper-init";
import "./js/map";
import BottomBar from "./js/bottom-bar";
import callbackModals from "./js/modals";
import imaskInit from "./js/imask-init";

$(document).ready((e) => {
	feather.replace();

	BottomBar();
	callbackModals();
	imaskInit();
});
