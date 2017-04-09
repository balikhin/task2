function addPerson() {

	var prntElem = document.getElementById ('persons');
	var trElem = document.createElement ("tr");
	prntElem.appendChild (trElem);

	var tdElem = document.createElement("td");
	tdElem.innerHTML = document.forms[0].name.value + " | " + document.forms[0].email.value + " |";
	trElem.appendChild (tdElem);

	var tdDelButtonElem = document.createElement("td");
	tdDelButtonElem.innerHTML = "Удалить";
	tdDelButtonElem.onclick = function(){
		prntElem.removeChild(trElem);
	}
	trElem.appendChild (tdDelButtonElem);

}