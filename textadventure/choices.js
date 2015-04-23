/*	Room choices	*/

function work() {

	var para = document.createElement("p");
	var node = document.createTextNode("You work for 20 minutes.");
	para.appendChild(node);

	var element = document.getElementById("text");
	element.appendChild(para);

	increment(20);
}

function masturbate() {

	var para = document.createElement("p");
	var node = document.createTextNode("You masturbate for 15 minutes.");
	para.appendChild(node);

	var element = document.getElementById("text");
	element.appendChild(para);

	increment(15);

}

function watchTV() {

	var para = document.createElement("p");
	var node = document.createTextNode("You watch Adventure Time for 30 minutes");
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