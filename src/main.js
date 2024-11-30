import "./style.css";

import $ from "jquery";
import feather from "feather-icons";
import swal from "sweetalert";

import "./js/forms-init";

import bottomBar from "./js/bottom-bar";
import callbackModals from "./js/modals";

import cartInit from "./js/cart";

import mmenuInit from "./js/mobile-menu";
import swiperInit from "./js/swiper-init";
import fancyboxInit from "./js/fancyapps-init";
import inputmaskInit from "./js/inputmask-init";
import formsInit from "./js/forms-init";

window.$ = $;
window.jQuery = $;

$(document).ready((e) => {
	feather.replace();

	bottomBar();
	callbackModals();
	mmenuInit();
	swiperInit();
	fancyboxInit();
	inputmaskInit();
	formsInit();
	cartInit();

	$(document).on("action-complete.commerce", function (e, params) {
		feather.replace();

		bottomBar();
		callbackModals();
		mmenuInit();
		swiperInit();
		fancyboxInit();
		inputmaskInit();
		formsInit();
		cartInit();
	});

	$(document).on("cart-add-complete.commerce", function (e, { data }) {
		if (data.cart.instance == "products") {
			swal("Товар успешно добавлен в корзину", "", "success");
		}
		if (data.cart.instance == "wishlist") {
			swal("Товар успешно добавлен в избранное", "", "success");
		}
	});
});
