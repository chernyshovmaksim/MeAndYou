import "./style.css";
import "mmenu-light/dist/mmenu-light.css";

import $ from "jquery";
import "mmenu-light/dist/mmenu-light";

$(document).ready((e) => {
	console.log("Page is loadded");

	const menu = new MmenuLight(
		document.querySelector("#menu"),
		"(max-width: 600px)"
	);

	const navigator = menu.navigation();
	const drawer = menu.offcanvas({
		position: "right",
	});

	document
		.querySelector("a[href='#menu']")
		.addEventListener("click", (evnt) => {
			evnt.preventDefault();
			drawer.open();
		});
});
