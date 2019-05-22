
function test01()
{
	console.log("test01");
	console.log(`x1=${x}`);
//	console.log(`z1=${z}`);//会报错
	if(x !== 3)
	{
		console.log(`y1=${y}`);
		var y = 5;
		if(y === 5)
		{
			var x = 3;
		}
		console.log(`y2=${y}`);
	}
	if(x === 3)
	{
		console.log(`y3=${y}`);
	}
}

function test02()
{
	console.log(`f=${f}`);
	f();
	function f()
	{
		console.log(`f`);
	}
}

$(document).ready(function() {
	'use strict';
	test02()
})
