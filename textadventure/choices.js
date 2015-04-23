/*	Room choices	*/

function work() {
	var parent = document.getElementById("body");
	var textNode = document.getElementById("text");
	var newTextNode = document.createTextNode("You work for fifteen minutes.")
	parent.appendChild(newTextNode);
	parent.replaceChild(newTextNode, textNode);
	increment(15);
}

function masturbate() {
	var parent = document.getElementById("body");
	var textNode = document.getElementById("text");
	var newTextNode = document.createTextNode("You masturbate for fifteen minutes.")
	parent.appendChild(newTextNode);
	parent.replaceChild(newTextNode, textNode);
	increment(15);
}

function watchTV() {
	var parent = document.getElementById("body");
	var textNode = document.getElementById("text");
	var newTextNode = document.createTextNode("You watch Adventure Time for fifteen minutes.")
	parent.appendChild(newTextNode);
	parent.replaceChild(newTextNode, textNode);
	increment(15);
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