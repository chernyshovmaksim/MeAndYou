import "mmenu-light/dist/mmenu-light";
import "mmenu-light/dist/mmenu-light.css";

const menu = new MmenuLight(document.querySelector("#mmenu"));

const navigator = menu.navigation({
	title: "ME&YOU",
	theme: "dark",
});
const drawer = menu.offcanvas({
	position: "right",
});

document.querySelector("a[href='#menu']").addEventListener("click", (evnt) => {
	evnt.preventDefault();
	drawer.open();
});
