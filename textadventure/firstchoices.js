function action(string, item, minutes) {

	var parent = document.createElement("p");
	var node = document.createTextNode(string);
	parent.appendChild(node);

	var element = document.getElementById("text");
	element.appendChild(parent);

	var times = Number(localStorage.getItem(item));
	localStorage.setItem(item, times + 1);
	increment(minutes);

}

/*	Room choices	*/

function work() {

	var times = Number(localStorage.getItem("timesWorked"));
	var string;

	if (times < 5) {

		switch (times) {
			case 0:
				string = "You work for 20 minutes.";
				break;
			case 1:
				string = "You work for another 20 minutes. You haven't gotten very far.";
				break;
			case 2:
				string = "You work for another 20 minutes.";
				string += " Your hand aches. The room is spinning. The work is never ending.";
				break;
			case 3:
				string = "You work for 20 more minutes. ";
				string += " You begin to lose sense of what is and isn't real.";
				break;
			case 4:
				string = "You work for 20 more minutes." 
				string += " Your hand will be sore for the rest of the night."
				string += " You decide to stop working for tonight.";
				localStorage.setItem("soreHand", true);
				break;
		}

		action(string, "timesWorked", 20);
	}
}

function masturbate() {

	var times = Number(localStorage.getItem("timesMasturbated"));
	var string;

	if (times < 5) {
		var string;

		switch(times) {
			case 0:
			case 1: 
				string = "You idly masturbate for 15 minutes.";
				break;
			case 2:
				string = "You masturbate for 15 more minutes.";
				string += " Your genitals feel irritated.";
				break;
			case 3:
				string = "You masturbate for another 15 minutes.\r\n"
				string += " Your genitals are painful to touch. You should probably stop.";
				break;
			case 4:
				string = "And yet, you choose to masturbate again.";
				string += " Your ravaged genitals cry out in pain. They have been rendered unusable.\r\n";
				string += " Hopefully you won't need them later.";
				localStorage.setItem("genitalsIntact", false);
				break;
		}

		action(string, "timesMasturbated", 15);
	}
}

function watchTV() {
	
	var times = Number(localStorage.getItem("timesWatched"));
	var string;

	if (times < 3) {

		switch (times) {
			case 0:
				string = "You watch Adventure Time for 30 minutes.\n";
				string += " Finn and Jake are such bros. It is a pleasure to watch.";
				break;
			case 1:
				string = "You watch Louie for 30 minutes.\n";
				string += " Hahaha! Poor Louie. He never learns.\n";
				string += " You realize suddenly that you're a lazy piece of shit."
				break;
			case 2:
				string = "You watch Steven Universe for 15 minutes.\n";
				string += " Out of nowhere, a short circuit causes your TV to break. Oh no!\n"
				string += " You cry for another 15 minutes. When will it all end, you wonder.";
				break;
		}

		action(string, "timesWatched", 30);
	}
}