/*	Room choices	*/

function work() {

	var parent = document.getElementById("body");
	var textNode = document.getElementById("text");
	var newNode = document.createElement("text");
	var newTextNode = document.createTextNode("You work for twenty minutes.")

	newNode.appendChild(newTextNode);
	
	parent.replaceChild(newNode, textNode);
	increment(20);
	console.log(textNode);
	console.log(newTextNode);
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