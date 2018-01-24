var today = new Date();
var hourNow = today.getHours();
var greeting;

var day = today.getDay();
var weekDay;

if (day == 3){
	weekDay = "Wednesday";
} else if (day ==4 ) {
	weekDay = "Thursday";
} else if (day == 5) {
	weekDay = "Friday";
}

if (hourNow > 18) {
	greeting = 'Good evening, its ' + weekDay;
} else if (hourNow > 12) {
	greeting = 'Good afternoon Conor! Happy ' + weekDay;
} else if (hourNow > 0) {
	greeting = 'Good morning Conor! Happy ' + weekDay;
} else {
	greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');