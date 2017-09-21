function button()
{
	alert("Thank you for Subscribing!");
	return true;
}

function bigtext()
{
	var fname = document.getElementById("firstName");
	fname.value = fname.value.toUpperCase();

	var lname = document.getElementById("lastName");
	lname.value = lname.value.toUpperCase();

}

function highlight(textB) {
    textB.style.background = "#8cf442";
}
