const hourHand = document.querySelector('.hour-hand'); //8.pobranie elementu o klasie .hour-hand
const secondHand = document.querySelector('.second-hand'); //3. pobranie elementu o klasie .second-hand
const minsHand = document.querySelector('.min-hand'); //7.pobranie elementu o klasie .min-hand

function setDate() {
	// console.log('Hi');
	const now = new Date(); //1. Tworzy nową instancję obiektu, 
	//przechowującego podaną datę i czas, określoną w lokalnej strefie czasowe
	//brak argumentów Date oznacza dziejszą datę i czas stosowne do czasy lokalnego, dlatego zmienna nazywa się now
	//Date(year, month, day), Date(milisekundy), 
	const seconds = now.getSeconds(); //2. metoda zwraca sekundy (0-59)określonej daty i godziny.
	const secondsDegrees = ((seconds / 60) * 360 ) + 90; //2a.//4. dodanie 90 przesunęło o 90 stopni wskazówkę 
	//i teraz właściwie chodzi zegar z lokalnym czasem
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	//console.log(seconds);

	const mins = now.getMinutes(); //5.
	const minutesDegrees = ((mins / 60) * 360) + 90; //6.
	minsHand.style.transform = `rotate(${minutesDegrees}deg)`; //9.
	console.log(mins);

	const hours = now.getHours(); //5.
	const hourDegrees = ((hours / 12) * 360) + 90; //6.
	hourHand.style.transform = `rotate(${hourDegrees}deg)`; //9.
	console.log(hours);

}

setInterval(setDate, 1000); //metoda setInterval wywołuje funkcje w okreslonych odstępach czasu (w milisek.)