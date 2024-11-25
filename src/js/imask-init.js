import IMask from "imask";

const imaskInit = () => {
	IMask(document.getElementById("phoneInput"), {
		mask: "+{7}(000)000-00-00",
	});

	IMask(document.getElementById("actionInput"), {
		mask: "+{7}(000)000-00-00",
	});
};
// phoneInput

export default imaskInit;
