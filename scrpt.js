var countries = ["Россия", "Украина", "Казахстан"];
var cities = [["Москва", "Санкт-Петербург", "Казань"], ["Киев", "Днепропетровск", "Донецк"], ["Алматы", "Астана", "Караганда"]];
var persons = {};

//======================================================================================================================================

function showCountries(){ //   селектбокс стран

	for (let i = 0; i < countries.length; i++) {
		let el = document.createElement("option");
		el.value = i;
		el.innerHTML = countries[i];
		country.appendChild(el);
	}
	country.addEventListener("change", showCities);
	showCities();
}

function showCities(){ //    селектбокс городов

	while (city.childNodes.length > 0){
		city.removeChild(city.childNodes[city.childNodes.length-1]);
	}

	for (let i = 0; i < cities[country.value].length; i++) {
		let el = document.createElement("option");
		el.value = i;
		el.innerHTML = cities[country.value][i];
		city.appendChild(el);
	}
}

//======================================================================================================================================


function Person(personName, personEmail, personCountry, personCity){  // конструктор пользователя
	this.personName = personName;
	this.personEmail = personEmail;
	this.personCountry = countries[personCountry];
	this.personCity = cities[personCountry][personCity];
}

function addPerson(){
	var personId = '_' + Math.random().toString(36).substr(2, 9);
	persons[personId] = new Person(document.forms[0].personName.value, document.forms[0].email.value, document.forms[0].country.value, document.forms[0].city.value);
	showPerson(personId);

	personName.value = "";
	email.value = "";
	country.value = 0;
	showCities();
}

function deletePerson(personId){
	return function(){
		delete persons[personId];
		table.removeChild(document.getElementById(personId));
	}
}

function showPerson(personId){
	
	let trElem = document.createElement ("tr");
	trElem.id = personId;

	let tdElem = document.createElement("td");
	tdElem.innerHTML = persons[personId].personName;
	tdElem.addEventListener("click", showInformation(personId));
	trElem.appendChild(tdElem);

	tdElem = document.createElement("td");
	tdElem.innerHTML = "| " + persons[personId].personEmail;
	trElem.appendChild(tdElem);

	let tdDelButtonElem = document.createElement("button");
	tdDelButtonElem.innerHTML = "Удалить";
	tdDelButtonElem.addEventListener("click", deletePerson(personId));
	trElem.appendChild (tdDelButtonElem);

	table.appendChild(trElem);		
	
}

function showInformation(personId){
	return function(){
		table.style.display = 'none';

		let divElem = document.createElement ("div");
		divElem.innerHTML = "Имя: " + persons[personId].personName + " | Email: " + persons[personId].personEmail + 
		" | Страна: " + persons[personId].personCountry + " | Город: " + persons[personId].personCity + "<br><br>";

		let buttElem = document.createElement("button");
		buttElem.innerHTML = "Назад";

		buttElem.addEventListener("click", function(){
			document.body.removeChild(divElem);
			table.style.display = 'table';
		})
		divElem.appendChild(buttElem); 

		document.body.appendChild(divElem);
	}
}