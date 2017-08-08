Exercise for Week 7<br>
	 7.1. Determine what variable type each one is <br>
			var testOne = "What kind of variable is this?";<br>
			var testTwo = 256;<br>
			var testThree = ["What", "kind", "of", "variable", "am", "I?"];<br>
			var testFour = false;<br>
			var testFive = [1, 2, 5];<br>
			var testSix = 128;<br>
			var testSeven = "What am I?"
			var testEight = true;<br>
			var testNine = ["What kind of variable is this?", 2, 5, 19];<br>
 	 7.2a. Given these variables<br>
			var string1 = "Hello "; <br>
			var string2 = "my name is "; <br>
			var string3 = "your name here"; <br>
			var combinedStrings = string1 + string2 + string3; <br>
			What do you expect the console message to be? <br>
			console.log(combinedStrings);<br>
	 7.2b. Given these variables<br>
			var num1 = 8; <br>
			var num2 = 52; <br>
			var num3 = 60; <br>
			var combinedNumbers = num1 + num2 + num3;<br>
			What do you expect the console message to be? 
			console.log(combinedNumbers);<br>
	 7.2c Given these variables<br>
		  	var mixedNum1 = 10;<br>
		  	var mixedString1 = "ten";<br>
		  	var mixedNum2 = "10";<br>
		  	var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;<br>
		  	console.log(mixedConcatenation);<br>
	7.3a Given these variables<br>
			var num4 = 5; <br>
			var num5 = 0;<br>
			What do you expect the console message to be?<br>
			if (num4 > 1) { <br>
			console.log("Num4 is greater than 1"); <br>
			} else { <br>
			console.log("Num4 is NOT greater than 1"); <br>
			};<br>
	7.3b Given these variables <br>
			var num4 = 5; <br>
			var num5 = 0;<br>
			What do you expect the console message to be?<br>
			if (num4 < num5 || num4 === num5 && true) { <br>
			console.log("If statement ran!"); <br>
			} else { <br>
			console.log("Else statement ran"); <br>
			};<br>
	7.3c Given these variables <br>	
			var num4 = 5; <br>
			var num5 = 0;<br>
			What do you expect the console message to be? <br>
			if (num4 < num5 || num4 === num5) { <br>
			console.log("If statement ran!"); <br>
			} else if (num5 === "0" || true) { <br>
			console.log("Else if statement ran"); <br>
			} else { <br>
			console.log("Else statement ran"); <br>
			};<br> 	
	7.3d Given these variables <br>
			var num4 = 5; <br>
			var num5 = 0;<br>
			What do you expect the console message to be?<br>
			if (num4 > num5 && num4 === num5) { <br>
			console.log("If statement ran!"); <br>
			} else if (num5 === "0" || true) { <br>
			console.log("Else if statement ran"); <br>
			} else { <br>
			console.log("Else statement ran"); <br>
			};<br>
	For Loop - Looking into Arrays<br>
	7.4a Given these variables <br>
			var array1 = ["this", "is", "an", "array", "of", "strings"];<br>
			What do you expect the console message to be?<br>
			for (var i = 0; i < array1.length; i = i + 1) { <br>
			console.log(i, array1[i]); <br>
			};<br>
	7.4b Given these variables 
			var array2 = [1, 3, 5, 7, 9]; <br>
			var total = 0;<br>
			What do you expect the console message to be?<br>
			for (var i = 0; i < array2.length; i = i + 1) { <br>
			total = total + array2[i]; <br>
			}; <br>
			console.log(total);<br>
	7.4c Given this variable<br>
			var array3 = [11, 33, 55, 77, 99];<br>
			What do you expect the console message to be?<br>
			for (var i = 0; i < array2.length; i = i + 1) { <br>
			if(array3[i] >= 55 || array3[i] <= 100){ <br>
			console.log(array3, array3[i]); <br>
			}; <br>
			}; <br>
	7.5a Given this function <br>
			function testStuff (a, b) { <br>
			if(a > 25 && b < 100){ <br>
			console.log(a + " is greater than 25 and " + b + "is less than 100"); <br>
			} else { <br>
			console.log(a + " is NOT greater than 25 or " + b + "is NOT less than 100"); <br>
			}; <br>
			};<br><br>
			What do you expect the console message to be for each?<br>
			testStuff(10, 101); <br>
			testStuff(26, 99); <br>
			testStuff(100, 25);<br>
	7.5b Given this function <br>
			function testStuff2(c, d) { <br>
			if(c == 25){ <br>
			console.log(c + " is equal to 25"); <br>
			} else if(d <= 100){ <br>
			console.log(d + " is less than or equal to 100"); <br>
			} else { <br>
			console.log("Neither if or else if statement ran"); <br>
			}; <br>
			};<br><br>
			What do you expect the console message to be?<br>
			testStuff2(26, 101); <br>
			testStuff2(25, 99); <br>
			testStuff2(102, 24);<br>





