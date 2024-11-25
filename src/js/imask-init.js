import IMask from "imask";

const imaskInit = () => {
	if (
		document.getElementById("phoneInput") &&
		document.getElementById("actionInput")
	) {
		IMask(document.getElementById("phoneInput"), {
			mask: "+{7}(000)000-00-00",
		});

		IMask(document.getElementById("actionInput"), {
			mask: "+{7}(000)000-00-00",
		});
	}
};
// phoneInput

export default imaskInit;
