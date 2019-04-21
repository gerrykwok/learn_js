
function test01()
{
	console.log("test01")
}

function func(a, b = 2, c = 3)
{
	console.log(`a=${a},b=${b},c=${c}`)
}

function test02()
{
	func(1)

	console.log(`this=${this}`)

	const o = {
		name : "gwj",
		speak()
		{
			console.log(`this=${this}`)
			console.log(`myname is ${this.name}`)
		},
	}
//	o.speak()
	const speak = o.speak
	speak()
}

function test03()
{
	const bruce = { name : "bruce" }
	const madeline = { name : "madeline" }

	function greet()
	{
		console.log(`I am ${this.name}`)
	}
	greet.call(bruce)
}

$(document).ready(function() {
	'use strict';
	test03()
})
