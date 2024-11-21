import $ from "jquery";

const BottomBar = () => {
	$(document).on("scroll", () => {
		// console.log($(document).scrollTop()); //if > 80 then visible bottom bar
		// console.log($(".footer").offset().top - $(document).scrollTop());
		let footerHeight = $(".footer").outerHeight();
		let bottomBarHeight = $(".bottom-bar").outerHeight();

		let sumElHeight = footerHeight + bottomBarHeight;

		console.log($(".footer").offset().top);

		// if (
		// 	$(document).scrollTop() > 80 &&
		// 	$(".bottom-bar").offset().top > sumElHeight
		// ) {
		// 	$(".bottom-bar").removeClass("hidden");
		// } else {
		// 	$(".bottom-bar").addClass("hidden");
		// }
	});
};

export default BottomBar;
