import inputmask from "inputmask";

const els = document.querySelectorAll("#phoneInput");

if (els) {
	els.forEach((e) => {
		let im = new Inputmask("+7(999)999-99-99");
		im.mask(e);
	});
}
