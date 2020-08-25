
	var canvas = document.querySelector("canvas"); 

	canvas.width = window.innerWidth; 
	canvas.height = window.innerHeight; 

	var ball = canvas.getContext('2d'); 

	// x and y are the coordinates of the circle 
	// vx and vy are the relative speeds 
	var x = Math.floor(Math.random() * innerWidth); 
	var y = Math.floor(Math.random() * innerHeight); 
	var rx = Math.floor(Math.random() * 5); 
	var ry = Math.floor(Math.random() * 5); 
	var radius = 50; 

	animate(); 
	
	// This function will do the animation 
	function animate() { 
		requestAnimationFrame(animate); 

		// It clears the specified pixels within 
		// the given rectangle 
		ball.clearRect(0, 0, innerWidth, innerHeight); 

		// Creating a circle 
		ball.beginPath(); 
		ball.strokeStyle = "black"; 
		ball.arc(x, y, radius, 0, Math.PI * 2, false); 
		ball.stroke(); 

		// Conditions so that the ball bounces 
		// from the edges 
		if (radius + x > innerWidth) 
			rx = 0 - rx; 

		if (x - radius < 0) 
			rx = 0 - rx; 

		if (y + radius > innerHeight) 
			ry = 0 - ry; 

		if (y - radius < 0) 
			ry = 0 - ry; 

		x = x + rx; 
		y = y + ry; 
    }

