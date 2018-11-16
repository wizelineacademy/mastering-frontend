console.todo = function(msg) {
	console.log('%c %s %s %s', 
		'color:yellow; background-color:black;', 
		'–', 
		msg, 
		'–'
	);
}
 
console.important = function(msg) {
	console.log('%c %s %s %s', 
		'color:brown; font-weight:bold; text-decoration:underline;', 
		'–', 
		msg, 
		'–'
	);
}
 
console.todo('This is something thats need to be fixed');
console.important('This is an important message');