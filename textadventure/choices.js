/*	Room choices	*/

function incrementActivity(activity) {

	var times = localStorage.getItem(activity);
	localStorage.setItem(activity, times + 1);

}

function work() {

	var para = document.createElement("p");
	var node;
	var times = Number(localStorage.getItem("timesWorked"));

	if (times < 6)
		node = document.createTextNode("You work for 20 minutes.");
	else 
		node = document.createTextNode("You work for 20 minutes. All of your work is done!");

	para.appendChild(node);
	var element = document.getElementById("text");
	element.appendChild(para);

	increment(20);
}

function masturbate() {

	var para = document.createElement("p");
	var node = document.createTextNode("hi");
	var times = Number(localStorage.getItem("timesMasturbated"));
	console.log(times);

	switch(times) {

		case (times <= 2): 
			node = document.createTextNode("You idly masturbate for 15 minutes.");

		case (times == 3):
			node = document.createTextNode("You masturbate for 15 more minutes. Your genitals feel irritated.");
		
		case (times == 4):
			node = document.createTextNode("You masturbate for another 15 minutes. Your genitals are painful to touch. You should probably stop.");
		
		case (times >= 5):
			node = document.createTextNode("You still masturbate again for 15 minutes. Your ravaged genitals cry out in pain. They have been rendered unusable.")

	}

	para.appendChild(node);
		
	var element = document.getElementById("text");
	element.appendChild(para);

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