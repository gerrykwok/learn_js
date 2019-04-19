//console.log('main.js loaded')

$(document).ready(function() {
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));

	//画一个圆
//	var c = Shape.Circle(0, 100, 50);
//	c.fillColor = '#ff00ff';

	//for循环画N个圆
//	var c;
//	for(var x = 25; x < 400; x += 50)
//	{
//		for(var y = 25; y < 400; y += 50)
//		{
//			c = Shape.Circle(x, y, 20);
//			c.fillColor = "#ff00ff";
//		}
//	}

	console.log("paper.view.draw")
	paper.view.draw();

	var tool = new Tool();
	tool.onMouseDown = function(event)
	{
		console.log("mouse down:"+event.point.x+","+event.point.y);
		var x = event.point.x
		var y = event.point.y
		var c = Shape.Circle(x, y, 20);
		c.fillColor = "#ff00ff";

		var text = new PointText(x, y);
		text.justification = 'center';
		text.fillColor = 'black';
		text.fontSize = 20;
		text.content = 'hello world';
	};

	const sentences = ['one', 'two', 'three'];
	//es6特性: for..of
	for(let s of sentences)
	{
		console.log(s);
	}

	console.log("main.js loaded")
})
