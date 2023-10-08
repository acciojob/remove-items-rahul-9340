
let select = document.getElementById("colorSelect");
let button = document.getElementsByTagName("input")[0];

button.addEventListener("click", () => {
let selectedOption = select.options[select.selectedIndex];
selectedOption.remove();
	
});












