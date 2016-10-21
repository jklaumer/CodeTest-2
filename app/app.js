// Display the current day and time with the following format: Today is Sunday. The current time is 9 AM : 50 : 22
// THIS IS THE JAVASCRIPT FOR THE CURRENT DAY AND TIME:

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];

console.log("Today is : " + daylist[day] + ".");

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}

console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);

var answer1 = "Today is " + daylist[day] + ". " + "The current time is " + hour + prepand + " : " + minute + " : " + second; 
    document.getElementById("answer1").innerHTML=answer1;

// Scroll the string 'Origin Code Academy Rocks! ' from left to right by periodically (every 100 miliseconds) 
// removing one letter from the end of the string and attaching it to the front.
// THIS IS THE JAVASCRIPT FOR THE SCROLLING STRING:

var answer2 = "ORIGIN CODE ACADEMY ROCKS! "; 
    document.getElementById("answer2").innerHTML=answer2;

var phraseLength = answer2.length;
var scrollWords = setInterval(timerScroll,1000);

function timerScroll() {
var lastLetter = answer2.charAt(phraseLength - 1); 
var phraseBody = answer2.substring(0 , phraseLength - 1);
answer2 = lastLetter + phraseBody;
    document.getElementById("answer2").innerHTML = answer2;
}

// A bubble sort, sometimes referred to as a sinking sort, is a simple sorting algorithm that works by repeatedly 
// stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in 
// the wrong order. Array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213] 
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1] Output the bubble-sorted 
// result using a console.log statement.
// THIS IS THE JAVASCRIPT FOR THE BUBBLE SORT:

function myFunction() {

var answer3 = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
    
    answer3.sort(function(a, b){return b - a});
    
        console.log(answer3.sort(function(a, b){return b - a}));

    document.getElementById("answer3").innerHTML = answer3;
}







































