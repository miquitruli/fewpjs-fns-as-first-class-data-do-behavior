/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const timeString = parseInt((time.split(":")),10);
  /* The parseInt method parses a value as a string and returns the first integer.
  A radix parameter specifies the number system to use:
  2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.
  parseInt(string, radix) */

  if (timeString < 12) {
    return displayMessage("Good Morning");
  }
  else if (timeString >= 12 && timeString <= 17) {
    return displayMessage("Good Afternoon");
  }
  else {
    return displayMessage("Good Evening");
  }
}
/* Write your implementation of displayMessage() */


function displayMessage(message) {
  const element = document.getElementById("greeting");
  element.innerText = message;
  return message;
}