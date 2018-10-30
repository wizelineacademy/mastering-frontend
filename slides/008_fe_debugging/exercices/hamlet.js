var x = 8;
var hamlet = "To be or not to be";

/* -------------- PART 1 ----------------- */

// How can you adjust this if / else statement to make sure it prints 
// out " - that is the question"?


if (x > 9) {
  hamlet += " - that is the question\n";
} else 
  hamlet += " - roses are red\n";
}

// How can you adjust this code to make sure it prints "Whether tis nobler in the mind to suffer"?
x = x + 2;

if (x == 15 {
  hamlet += "Whether tis nobler in the mind to suffer\n";
}



// If you finish the items above, move on to the stuff below
// by uncommenting out each piece at a time and debugging!

/* --------------------- PART 2 -------------------------- */

/*
hamlet += "violets are blue";
x = x - 9;

if (x != 6) {
  hamlet += "the cat in the hat";
}
else {
  hamlet += "The slings and arrows of outrageous fortune,\n";
}

*/

/* --------------------- PART 3 -------------------------- */

/*
var hamletArray = "Or ", "to ", "take ", "arms"];

hamlet += hamletArray[1] + hamletArray3] + hamletArray[0] + hamletArray[2];

hamlet += " against a sea of troubles\n";

*/

/* --------------------- PART 4 -------------------------- */

/*
var words = "sleep";
if (words == "daisy") {
  hamlet += "the cat in the hat";
}
else if (words == "water") {
  hamlet += "And, by opposing, end them. To die, to sleep-\n";
}
else
  hamlet += "green eggs and ham";
}

hamlet = "No more-and by a sleep to say we end\n";

*/

/* --------------------- PART 5 -------------------------- */
/*
var anotherWordArray = ["natural", "heartache", "thousand", "shocks"];

hamlet += "The " + anotherWordArray[1] + " and the " + anotherWordArray[1] + anotherWordArray[3] + " " + anotherWordArray[1] + "\n";

*/

/* --------------------- PART 6 -------------------------- */
/*

var loopArray = ["That", "flesh", "is", "heir", "to -", "tis", "a", "consummation\n"];

for (i = 1; i < 4; i++) {
  hamlet += loopArray[i];
  hamlet += " ";
}

hamlet += "Devoutly to be wished.\n"

*/

console.log(hamlet);

/*
To be, or not to be, that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune,
Or to take arms against a sea of troubles
And by opposing end them. To die—to sleep,
No more; and by a sleep to say we end
The heart-ache and the thousand natural shocks
That flesh is heir to: 'tis a consummation
Devoutly to be wished.
*/