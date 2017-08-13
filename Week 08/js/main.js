// #8.1 Using JavaScript, put some text into that element.
var divEl = document.getElementById("div1");
divEl.textContent = "This is content for the div!";


// #8.2 Make a string variable and use that to put some text into an H1 using JavaScript.
var stringVar = "Content for my Heading 1";
var h1El = document.getElementById("heading1");
h1El.textContent = stringVar;

// #8.3 Make a function that takes a user's input (value) and then console.logs the value. Initialize the function (make it start) when you click a button.
function getUserData() {
  var username = document.getElementById("username");
  console.log(username.value);
}

// #8.4 Make an array with five entries. Using a loop, console.log each entry.
var newArray = [1, 2, 3, 4, 5];
for (var i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}

// #8.5 Create an object with at least three properties. Console.log each property.
var newObj = {
  name : "Chris",
  age : 300,
  hair : "black"
};
console.log(newObj.name + " " + newObj.age + " " + newObj.hair);
