import "./style.css";

import $ from "jquery";
import feather from "feather-icons";

import "./js/mobile-menu";
import "./js/swiper-init";
import BottomBar from "./js/bottom-bar";

$(document).ready((e) => {
	console.log("Page is loadded");
	feather.replace();

	BottomBar();
});
