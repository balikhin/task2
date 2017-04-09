var rus = ["Москва", "Санкт-Петербург", "Казань"];
var ukr = ["Киев", "Днепропетровск", "Донецк"];
var kaz = ["Алматы", "Астана", "Караганда"];

function showCities(v){
	switch(v) {
		case 'rus' : 
			var arr = rus;
			break;
		case 'ukr' :
			var arr = ukr;
			break;
		case 'kaz' :
			var arr = kaz;
	}

	var el = document.getElementById('city');
   	while(el.childNodes.length>0){
        el.removeChild(el.childNodes[el.childNodes.length-1]);
    } 

    for(var i=0;i<3;i++){
        var opt = document.createElement("option");
        opt.innerHTML=arr[i];
        el.appendChild(opt);
    }
}