// GRABBING THE ELEMENTS FORM HTML
let dayInput = document.querySelector("#day-insert");
let monthInput = document.querySelector("#month-insert");
let yearInput = document.querySelector("#year-insert");

// USING BUILT-IN FINCTIONS FOR DEFINING CURRENT TIME
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

// THE FUNCTION FOR FINDING THE LAST DAY OF A MONTH
var lastday = function (y, m) {
	return new Date(y, m + 1, 0).getDate();
};

// VALIDATING THE INPUT FOR A 'DAY'
if (dayInput) {
	dayInput.addEventListener("keyup", checkDay);
	function checkDay() {
		if (dayInput.value !== "" && dayInput.value >= 1 && dayInput.value <= 31) {
			dayMissing.style.display = "none";
			wrongDay.style.display = "none";
			dayInput.style.border = "1px solid gainsboro";
			return true;
		} else if (dayInput.value === "") {
			dayMissing.style.display = "inline";
			wrongDay.style.display = "none";
			dayInput.style.border = "1px solid red";
			return false;
		} else {
			wrongDay.style.display = "inline";
			dayMissing.style.display = "none";
			dayInput.style.border = "1px solid red";
			return false;
		}
	}
}

// VALIDATING THE INPUT FOR A 'MONTH'
if (monthInput) {
	monthInput.addEventListener("keyup", checkMonth);
	function checkMonth() {
		if (monthInput.value !== "" && monthInput.value >= 1 && monthInput.value <= 12) {
			monthMissing.style.display = "none";
			wrongMonth.style.display = "none";
			monthInput.style.border = "1px solid gainsboro";
			return true;
		} else if (monthInput.value === "") {
			monthMissing.style.display = "inline";
			wrongMonth.style.display = "none";
			monthInput.style.border = "1px solid red";
			return false;
		} else {
			wrongMonth.style.display = "inline";
			monthMissing.style.display = "none";
			monthInput.style.border = "1px solid red";
			return false;
		}
	}
}

// VALIDATING THE INPUT FOR A 'YEAR'
if (yearInput) {
	yearInput.addEventListener("keyup", checkYear);
	function checkYear() {
		if (yearInput.value !== "" && yearInput.value >= 0 && yearInput.value <= year) {
			yearMissing.style.display = "none";
			wrongYear.style.display = "none";
			yearInput.style.border = "1px solid gainsboro";
			return true;
		} else if (yearInput.value === "") {
			yearMissing.style.display = "inline";
			wrongYear.style.display = "none";
			yearInput.style.border = "1px solid red";
			return false;
		} else {
			wrongYear.style.display = "inline";
			yearMissing.style.display = "none";
			yearInput.style.border = "1px solid red";
			return false;
		}
	}
}

// CREATING THE EVENT LISTENER FOT THE ARROW
const submit = document.querySelector("#arrow img");
if (submit) {
	submit.addEventListener("click", function (e) {
		if (checkDay() === true && checkMonth() === true && checkYear() === true) {
			if (dayInput.value > day && monthInput.value < month) {
				// CASE 1: INPUT IS GREATER THAN THE CURRENT DAY BUT MONTH IS LESS
				dayResult = day + lastday(yearInput.value, monthInput.value) - 1 - dayInput.value;
				monthResult = month - monthInput.value - 1;
				yearResult = year - yearInput.value;
			} else if (dayInput.value < day && monthInput.value > month) {
				// CASE 2: MONTH INPUT IS GREATER THAN THE CURRENT MONTH BUT DAY IS LESS
				dayResult = day - dayInput.value;
				monthResult = month + 12 - monthInput.value;
				yearResult = year - 1 - yearInput.value;
			} else if (dayInput.value > day && monthInput.value > month) {
				// CASE 3: BOTH DAY AND MONTH ARE GREATER THAN THE CURRENT ONES
				dayResult = day + lastday(yearInput.value, monthInput.value) - dayInput.value;
				monthResult = month + 11 - monthInput.value;
				yearResult = year - 1 - yearInput.value;
			} else if (dayInput.value == day && monthInput.value > month) {
				// CASE 4: DAY INPUT IS THE SAME AS THE CURRENT DAY BUT MONTH IS GREATER
				dayResult = day - dayInput.value;
				monthResult = month + 12 - monthInput.value;
				yearResult = year - 1 - yearInput.value;
			} else if (dayInput.value > day && monthInput.value == month) {
				// CASE 5: MONTH INPUT IS THE SAME AS THE CURRENT MONTH BUT DAY IS GREATER
				dayResult = lastday(yearInput.value, monthInput.value) + day - dayInput.value + 1;
				monthResult = month + 11 - monthInput.value;
				yearResult = year - 1 - yearInput.value;
			} else {
				// ALL OTHER CASES
				dayResult = day - dayInput.value;
				monthResult = month - monthInput.value;
				yearResult = year - yearInput.value;
			}

			// REPLACING THE INITIAL TEXT WITH THE RESULTS WITH THE HELP OF TERNERY FUNCTIONS
			dayDisplay.innerHTML = dayResult == 1 ? dayResult + " day" : dayResult + " days";
			monthDisplay.innerHTML = monthResult == 1 ? monthResult + " month" : monthResult + " months";
			yearDisplay.innerHTML = yearResult == 1 ? yearResult + " year" : yearResult + " years";
		} else {
			e.preventDefault;
			checkDay();
			checkMonth();
			checkYear();
		}
	});
}
