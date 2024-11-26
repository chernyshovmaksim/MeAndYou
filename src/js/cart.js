import $ from "jquery";

const cartInit = () => {
	let cartWrapper = $("#cart-wrapper");
	let cartIconInHeader = $("#cart-icon-in-header");
	let cartIconInBottomBar = $("#cart-icon-in-bottom-bar");
	let cartClose = $("#cart-close");

	const openCart = () => {
		cartWrapper.removeClass("-right-full");
		cartWrapper.addClass("right-0");
		cartWrapper.find("#cart").removeClass("-right-full");
		cartWrapper.find("#cart").addClass("right-0");
	};
	const closeCart = () => {
		cartWrapper.find("#cart").removeClass("right-0");
		cartWrapper.find("#cart").addClass("-right-full");

		setTimeout(() => {
			cartWrapper.removeClass("right-0");
			cartWrapper.addClass("-right-full");
		}, 200);
	};

	cartWrapper.on("click", (e) => {
		// e.preventDefault();
		if ($(e.target).attr("id") == "cart-wrapper") {
			closeCart();
		}
	});

	cartIconInHeader.on("click", (e) => {
		// e.preventDefault();
		openCart();
	});

	cartIconInBottomBar.on("click", (e) => {
		e.preventDefault();
		openCart();
	});

	cartClose.on("click", (e) => {
		// e.preventDefault();
		closeCart();
	});
};

export default cartInit;
