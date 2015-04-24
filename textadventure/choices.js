/*	Room choices	*/

function work() {

	var times = Number(localStorage.getItem("timesWorked"));

	if (times < 5) {
		var para = document.createElement("p");
		var string;

		switch (times) {
			case 0:
			case 1:
				string = "You work for 20 minutes.";
				break;
			case 2:
				string = "You work for 20 minutes. Your hand aches. The work is never ending.";
				break;
			case 3:
				string = "You work for 20 minutes. The room is spinning.";
				string += "You begin to lose sense of what is and isn't real.";
				break;
			case 4:
				string = "You work for 20 minutes. You'll never finish."
				string += " You decide to stop working for tonight.";
				break;
		}

		var node = document.createTextNode(string);
		para.appendChild(node);

		var element = document.getElementById("text");
		element.appendChild(para);
		localStorage.setItem("timesWorked", times + 1);
		increment(20);
	}
}

function masturbate() {

	var times = Number(localStorage.getItem("timesMasturbated"));

	if (times < 6) {
		var para = document.createElement("p");
		var string;

		switch(times) {
			case 0:
			case 1:
			case 2: 
				string = "You idly masturbate for 15 minutes.";
				break;
			case 3:
				string = "You masturbate for 15 more minutes.";
				string += " Your genitals feel irritated.";
				break;
			case 4:
				string = "You masturbate for another 15 minutes."
				string += " Your genitals are painful to touch. You should probably stop.";
				break;
			case 5:
				string = "And yet, you choose to masturbate again.";
				string += " Your ravaged genitals cry out in pain. They have been rendered unusable.";
				string += " Hopefully you won't need them later";
				localStorage.setItem("genitalsIntact", false);
				break;
		}

		var node = document.createTextNode(string);
		para.appendChild(node);

		var element = document.getElementById("text");
		element.appendChild(para);
		localStorage.setItem("timesMasturbated", times + 1);
		increment(15);
	}
}

function watchTV() {
	
	var times = Number(localStorage.getItem("timesWatched"));

	if (times < 3) {
		var para = document.createElement("p");
		var string;

		switch (time) {
			case 0:
				string = "You watch Adventure Time for 30 minutes.";
				string += " Finn and Jake are such bros. It is a pleasure to watch.";
				break;
			case 1:
				string = "You watch Louie for 30 minutes.";
				string += " Hahaha! Poor Louie. He never learns.";
				string += " You realize suddenly that you're a lazy piece of shit."
				break;
			case 2:
				string = "You watch Steven Universe for 15 minutes.";
				string += " Out of nowhere, a short circuit causes your TV to break. Oh no!"
				string += " You cry for another 15 minutes. When will it all end, you wonder.";
				break;
		}

		var node = document.createTextNode(string);
		para.appendChild(node);
		var element = document.getElementById("text");
		element.appendChild(para);
		localStorage.setItem("timesWatched", times + 1);
		increment(30);
	}
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