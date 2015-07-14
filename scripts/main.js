function canDrive(name, age) {
	if (age > 16) {
		return name + " is able to drive."
	} else {
		return name + " cannot drive yet."
	}
}

alert(canDrive(prompt("Type your name here"), prompt("How old are you?")));
