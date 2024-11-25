import IMask from "imask";

const imaskInit = () => {
	const element = document.getElementById("phoneInput");
	const maskOptions = {
		mask: "+{7} (000) 000-00-00",
	};
	const mask = IMask(element, maskOptions);
};
// phoneInput

export default imaskInit;
