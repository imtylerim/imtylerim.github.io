function work() {
	var parent = document.getElementById("body");
	var textNode = document.getElementById("text");
	var newTextNode = document.createTextNode("You worked for fifteen minutes.")
	parent.appendChild(newTextNode);
	parent.replaceChild(newTextNode, textNode);
	increment(15);
}

function goToParty() {

}

function masturbate() {

}

function watchTV() {

}