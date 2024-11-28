import $ from "jquery";
import swal from "sweetalert";

$("#form-callback").on("submit", function (e) {
	e.preventDefault();
	const url = "/ajax/callback";

	$.ajax({
		url: url,
		type: "POST",
		dataType: "json",
		data: new FormData($(this)[0]),
		success: function (e) {
			if (e.status == true) {
				$("#callback-modal").fadeOut(0);
				swal(
					"Ваша заявка успешно отправлена",
					"Специалист свяжется с вами в ближайшее время.",
					"success",
				);
			}
		},
	});
});
