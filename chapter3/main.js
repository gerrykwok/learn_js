//console.log('main.js loaded')

function test01()
{
	var varTest;
	let letTest;
	console.log(varTest); //输出undefined
	console.log(letTest); //输出undefined
}

function test02()
{
	console.log(varTest); //输出undefined(注意要注释掉下面一行才能运行)
//	console.log(letTest); //直接报错：ReferenceError: letTest is not defined

	var varTest = 'test var OK.';
//	let letTest = 'test let OK.';
}

function test03()
{
//	Array arr;
//	console.log("arr="+arr);
	let a = 0.1
	let b = 0.2
	let c = a + b
	console.log("a="+a)
	console.log("b="+b)
	console.log("a+b="+c)

	let d = 022
	console.log("d="+d)
	let e = NaN
	console.log("e="+e)
	let f = Number.EPSILON;
	console.log("f="+f)
	let g = `abc`
	console.log("g="+g)
	let h = "12\u00b0C"
	console.log("h="+h)
}

function test04()
{
	let curTemp = 37
	let str = `current temp:${curTemp}\u00b0C`
	console.log(str)

	let multiline = "line1\n\
line2"
	console.log(`multiline=${multiline}`)
	let multi2 = `line1
line2`
	console.log(`multi2=${multi2}`)

	const RRR = Symbol()
	console.log("RRR="+RRR)
}

function test05()
{
	const obj = {}
//	obj.color = 1
	console.log("obj.color="+obj.color)
}

function test06()
{
	const s = "hello"
	const d = s.toUpperCase()
	console.log(`s=${s},d=${d}`)
	s.rating = 3
//	s.rating;
	console.log(`s.rating=${s.rating}`)
}

function test07()
{
	const a1 = [1, 2, 3]
	a1.abc = 3
	let len = a1.length
//	const a2 = {abc:1,def:2}
//	len = a2.length
	console.log(`len=${len},a1.abc=${a1.abc}`)
	for(let s of a1)
	{
		console.log(`item=${s}`)
	}
	for(let s in a1)
	{
		console.log(`a1[${s}]=${a1[s]}`)
	}
}

function test08()
{
	let now = new Date(2019, 9, 1, 2, 3, 4)
	console.log(`date=${now}`)
	now = new Date()
	let timestamp_ms = now.valueOf()
	let timestamp = timestamp_ms / 1000
	console.log(`ms=${timestamp_ms},now=${timestamp}`)

	let obj = {
		toString : function()
		{
			return "my obj"
		}
	}
	console.log(`obj=${obj}`)

	const arr = [1, 'two', 3]
	console.log(`arr=${arr}`)
}

function test09()
{
	const n = -100;
	if(!n)
		console.log("false")
	else
		console.log("true")

	const obj = {
		field1 : 1,
		field2 : 2,
	}
	obj.field1 = 10
	console.log(`field1=${obj.field1}`)
}

function test10()
{
	const player = {name : 'steven', rank : '1234', age : 27}
	for(let prop in player)
	{
		//if(!player.hasOwnProperty(prop)) continue
		console.log(prop + ":" + player[prop])
	}
	//以下语句不行
//	for(let s of player)
//	{
//		console.log(`s=${s}`)
//	}
}

function test11()
{
//	let a = 3 + 5 + "8"
//	console.log(`a=${a}`)
	let x = true, y = 1
	let z = x && y
	console.log(`z=${z}`)

	let val = 1
	let t = typeof val;
	console.log(`type is ${t}`)

	//解构赋值
	const obj = {b : 2, c : 3, d : 4}
	let {a, b, c} = obj;
	console.log(`a=${a},b=${b},c=${c}`)
}

$(document).ready(function() {
	'use strict';

	console.log("main.js loaded")
	test11()
})
