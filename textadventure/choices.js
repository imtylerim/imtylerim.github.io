/*	Room choices	*/

function work() {

	var para = document.createElement("p");
	var node = document.createTextNode("You work for twenty minutes");
	para.appendChild(node);

	var element = document.getElementById("text");
	element.appendChild(para);

	increment(20);
}

function masturbate() {

	var parent = document.getElementById("body");
	var textNode = document.getElementById("text");
	var newTextNode = document.createTextNode("You masturbate for fifteen minutes.\n\n")
	parent.appendChild(newTextNode);
	parent.replaceChild(newTextNode, textNode);
	increment(15);

}

function watchTV() {

	var parent = document.getElementById("body");
	var textNode = document.getElementById("text");
	var newTextNode = document.createTextNode("You watch Adventure Time for thirty minutes.\n\n")
	parent.appendChild(newTextNode);
	parent.replaceChild(newTextNode, textNode);
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