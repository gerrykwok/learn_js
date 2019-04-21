
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

function func01()
{
	console.log(`x=${x}`)
}

function test04()
{
	const x = 300
	func01()
}

function my_closure()
{
	let count = 0
	return function()
	{
		count++
		console.log(`count=${count}`)
	}
}

function test_closure()
{
	let f = my_closure()
	f()
	f()
}

function test05()
{
	myfunc_1()
}

function myfunc_1()
{
	console.log("myfunc_1")
}

$(document).ready(function() {
	'use strict';
//	test04()
//	test_closure()
	test05()
})
