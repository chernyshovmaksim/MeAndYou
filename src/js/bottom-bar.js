import $ from "jquery";

const BottomBar = () => {
	$(document).on("scroll", () => {
		let footerHeight = $(".footer").outerHeight();
		let bottomBarHeight = $(".bottom-bar").outerHeight();

		if ($(document).scrollTop() > 80) {
			$(".bottom-bar").removeClass("hidden");
		} else {
			$(".bottom-bar").addClass("hidden");
		}
		if (
			$(".bottom-bar").offset().top + $(".bottom-bar").outerHeight() >
			$(".footer").offset().top
		) {
			$(".bottom-bar").addClass("hidden");
		}
	});
};

export default BottomBar;
