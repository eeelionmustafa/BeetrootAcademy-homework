
// Request a three-digit number from a user and display it backward. You will need the % operator (the remainder in division) for this task.

var n = prompt("Enter a three-digit number:");
var thirdDigit = n % 10;      
var secondDigit = (n % 100 - thirdDigit) / 10; 
var firstDigit = (n - n % 100) / 100;        
var nbackwards = thirdDigit * 100 + secondDigit * 10 + firstDigit;

alert("The number backward is: " + nbackwards);


// Request current time from a user (hh:mm), and display how many hours and minutes are left until tomorrow.
// Ask the user for the current time as hhmm (numbers only)
var time = prompt("Enter the current time as hhmm(example:1230):");
var hours = (time - time % 100) / 100; 
var minutes = time % 100;          
var Minutes = 24 * 60;
var passed = hours * 60 + minutes;
var left = Minutes - passed;
var hoursLeft = (left - left % 60) / 60;
var minutesLeft = left % 60;

alert("Time left until tomorrow: " + hoursLeft + " hours and " + minutesLeft + " minutes.");


// Request a three-digit number from a user and type out its second digit. Use the % operator (the remainder in division) for this task.

var threeDigitNumber=prompt("Enter a three digit number:");
var last=threeDigitNumber%10;
var second = (threeDigitNumber % 100 - last) / 10;
alert("The second digit is:"+second);

// Request a five-digit number from a user and move the last digit to the beginning (so if the user typed in 12345, the result should be 51234).
var fiveDigitN=prompt("Enter a five digit number:");
var fifthDigit=fiveDigitN%10;
var other=(fiveDigitN-fifthDigit)/10;
var finalN=fifthDigit*10000+other;
alert("The final number is:"+ finalN);



// Request a year from a user and check whether it is a leap year. A leap year is either divisible by 400 or by 4, and not divisible by 100.
// 3:42
var year1 = prompt("Enter a year:");

year1 = year1 * 1;
var leap = (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0));

leap = (leap > 0) * 1;
alert(year + " is " + (leap * "a leap year" + (1 - leap) * "not a leap year"));



// // Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, new year, and also leap years.

var date=prompt("Write a date:");
var d1=date.charAt(0);
var d2=date.charAt(1);
var m1=date.charAt(3);
var m2=date.charAt(4);
var y1=date.charAt(8);
var y2=date.charAt(9);

var day=d1*10+d2*1;
var month=m1*10+m2*1;
var year=y1*10+y2*1;

var leap_year=0;
leap_year=((year%4==0)&&(year%100!=0)||(year%400==0));
leap_year=leap_year?1:0;

var days=31;
days=days-((month==2)*(3+(1-leap_year)));

days = days - (((month == 4) || (month == 6) || (month == 9) || (month == 11)) * 1);

day = day + 1;

var muaji = (day > days);
day = day - (muaji * days);
month = month + muaji;
var viti = (month > 12);
month = month - (viti * 12);
year = year + viti;

alert("The next date is: " + day + ":" + month + ":" + year);


