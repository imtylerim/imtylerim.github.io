/*	Room choices	*/

function work() {
	var parent = document.getElementById("body");
	var textNode = document.getElementById("text");
	var newTextNode = document.createTextNode("You work for fifteen minutes.")
	parent.appendChild(newTextNode);
	parent.replaceChild(newTextNode, textNode);
	increment(15);
}

function goParty() {

}

function masturbate() {

}

function watchTV() {

}


/*	Party choices	*/

function goLivingRoom() {

}

function goDiningRoom() {

}

function goUpstairs() {

}