/*  Displays time.
	Time is calculated in 24-hour format,
	but is displayed in 12-hour format.	 */
function displayTime() {
				var hours = Number(localStorage.getItem("HOURS"));
				var minutes = Number(localStorage.getItem("MINUTES"));
				var timeString = "";

				/*  Since hours need to be %'d by 12, both 0 and 12 need 
					special cases, or else they would be displayed as 0:00.	*/ 
				if (hours == 0 || hours == 12)
					timeString += 12;
				else
					timeString += hours % 12;
				timeString += ":";

				/*	Ensure time isn't printed as 8:9, but 8:09.	*/
				if (minutes == 0 || minutes < 10)
					timeString += "0";
				timeString += minutes;

				/*	Prints am or pm, depending	*/
				if (hours < 12)
					timeString += " am"
				else
					timeString += " pm"

				/*	Modify HTML to display timeString	*/
				document.getElementById("time").innerHTML = timeString;
			}

			/*	Increments minutes, then calls displayTime()to reflect time change.	*/
			function increment(minutes) {
				
				/*	Set default number of minutes to 15.	*/
				if (minutes == null)
					minutes = 15;
				var numMinutes = Number(localStorage.getItem("MINUTES")) + minutes;
				var numHours = Number(localStorage.getItem("HOURS"));

				/*	If minutes exceeds 60, add 1 to hours and % minutes 
					by 60. If hours exceeds 24, reset it 0.				*/
				if (numMinutes >= 60)
				{
					numMinutes %= 60;
					numHours++;
				}
				if (numHours == 24)
				{
					numHours = 0;
				}

				/*	Make sure to modify localStorage, and call displayTime().	*/
				localStorage.setItem("MINUTES", numMinutes);
				localStorage.setItem("HOURS", numHours);
				displayTime();
			}