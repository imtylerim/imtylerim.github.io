/*	Room choices	*/

function work() {

	var para = document.createElement("p");
	var node;
	var times = Number(localStorage.getItem("timesWorked"));
	console.log(times);

	switch (times) {

		case 0:
		case 1:
		case 2:
			node = document.createTextNode("You work for 20 minutes.");
			break;

		case 3:
			node = document.createTextNode("You work for 20 minutes. The work is never ending.");
			break;

		case 4:
			node = document.createTextNode("You work for 20 minutes. Your hand aches. Your head is swimming.");
			break;

		case 5:
			node = document.createTextNode("You work for 20 minutes. You'll never finish. You decide to stop working for tonight.");
			break;
	}

	para.appendChild(node);
	var element = document.getElementById("text");
	element.appendChild(para);
	localStorage.setItem("timesWorked", times + 1);
	increment(20);
}

function masturbate() {

	var para = document.createElement("p");
	var node;
	var times = Number(localStorage.getItem("timesMasturbated"));
	console.log(times);

	switch(times) {

		case 0:
		case 1:
		case 2: 
			node = document.createTextNode("You idly masturbate for 15 minutes.");
			break;

		case 3:
			node = document.createTextNode("You masturbate for 15 more minutes. Your genitals feel irritated.");
			break;

		case 4:
			node = document.createTextNode("You masturbate for another 15 minutes. Your genitals are painful to touch. You should probably stop.");
			break;

		case 5:
			node = document.createTextNode("You still masturbate again for 15 minutes. Your ravaged genitals cry out in pain. They have been rendered unusable.")
			break;

	}

	para.appendChild(node);
		
	var element = document.getElementById("text");
	element.appendChild(para);
	localStorage.setItem("timesMasturbated", times + 1);
	increment(15);

}

function watchTV() {

	var para = document.createElement("p");
	var node;
	var times = Number(localStorage.getItem("timesWatched"));

	if (times < 2)
		node = document.createTextNode("You watch Adventure Time for 30 minutes.");
	else 
		node = document.createTextNode("You watch Adventure Time for 30 minutes. There are no more new episodes.");

	para.appendChild(node);
	var element = document.getElementById("text");
	element.appendChild(para);
	localStorage.setItem("timesWatched", times + 1);
	increment(30);

}


/*	Party choices	*/

function goLivingRoom() {

}

function goDiningRoom() {

}

function goUpstairs() {

}

function masturbateAtParty() {

}