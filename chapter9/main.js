
function test01()
{
	const SYM = Symbol();
	const o = {
		a: 1,
		b: 2,
		c: 3,
		[SYM]: 4,
	}
//	for(let prop in o) {
//		if(!o.hasOwnProperty(prop))
//			continue;
//		console.log(`${prop}:${o[prop]}`);
//	}
	let arr = [
		"focus",
		"on",
		"javascript",
	];

	console.log(`keys0=${Object.keys(arr)}`);

	let keys = Object.keys(o)
	console.log(`keys=${keys}`);
	keys.forEach(prop => console.log(`${prop}: ${o[prop]}`));
}

function test_9_2_1()
{
	class Car {
		constructor() {
			console.log(`Car.ctor`);
		}
		shift(gear)
		{
			console.log(`shift,this=${this}`);
		}
	}
	for(let k in Car)
	{
		console.log(`k=${k}`);
	}
	const car1 = new Car();
	car1.shift("P");
	const car2 = new Car();
	car2.shift("D");
	let func = car1.shift;
	func("a");

	console.log(`type of Car is ${typeof(Car)}`);
//	let clsName = getClassName(car1);
//	console.log(`clsName=${clsName}`);
}

$(document).ready(function() {
	'use strict';
	test_9_2_1();
})
