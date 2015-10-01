// function canDrive(name, age) {
// 	if (age > 16) {
// 		return name + " is able to drive."
// 	} else {
// 		return name + " cannot drive yet."
// 	}
// }

// alert(canDrive(prompt("Type your name here"), prompt("How old are you?")));

// var text = prompt("Write something and I'll reverse it")
// function reverse(text) {
// 	var output = "";
// 	for (var i = text.length(); i >= 0; i--) {
// 		output += text.charAt(i);
// 	}
// 	return output;
// }

// alert(reverse(text));

function reverse(text) {
	var output = "";
	for (var i = text.length - 1; i >= 0; i--){
		output += text.charAt(i);
	}
	return output;
}

// alert(reverse(prompt("I'll reverse anything you type here")));