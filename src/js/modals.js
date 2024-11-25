import $ from "jquery";
const callbackModals = () => {
	$("#callback-modal-init").on("click", (e) => {
		// $("#callback-modal").removeClass("hidden");
		$("#callback-modal").fadeIn();
	});
	$("#callback-modal").on("click", (e) => {
		if (e.target.closest(".modal-bg") == null) {
			$("#callback-modal").fadeOut();
		}
	});
	$("#close-modal").on("click", (e) => {
		$("#callback-modal").fadeOut();
	});
};

export default callbackModals;
