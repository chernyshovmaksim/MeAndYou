import inputmask from "inputmask";

const inputmaskInit = () => {
	const els = document.querySelectorAll("#phoneInput");

	if (els) {
		els.forEach((e) => {
			let im = new Inputmask("+7(999)999-99-99");
			im.mask(e);
		});
	}

	if (document.querySelector("#order-phone")) {
		let orderPhoneMask = new Inputmask("+7(999)999-99-99");
		orderPhoneMask.mask(document.querySelector("#order-phone"));
	}
};

export default inputmaskInit;
