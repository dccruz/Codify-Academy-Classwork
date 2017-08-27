// #9.3 Change that element's background-color.
document.getElementsByClassName("class1")[0].style.backgroundColor = "red";

// #9.4 Create an h1 and then use innerText to add some text to it
var newH1 = document.createElement("h1");
newH1.innerText = "test content, added to an h1";

// #9.5 Add that h1 to the div in your HTML
document.getElementById("divId1").appendChild(newH1);