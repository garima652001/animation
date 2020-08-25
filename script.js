
	var canvas = document.getElementById("canvas"); 

	canvas.width = window.innerWidth; 
	canvas.height = window.innerHeight; 

	var ball = canvas.getContext('2d'); 

	// x and y are coordinates of the circle 
	var x = Math.floor(Math.random() * innerWidth); 
	var y = Math.floor(Math.random() * innerHeight);   

	// rx and ry are the relative speeds 
	var rx = Math.floor(Math.random() * 10); 
	var ry = Math.floor(Math.random() * 10); 
	var radius = 60; 

	animate(); 
	
	//animation fn
	function animate() { 
		requestAnimationFrame(animate); 

		
		ball.clearRect(0, 0, innerWidth, innerHeight); 

		// Creating circle 
		ball.beginPath(); 
		ball.strokeStyle = "grey"; 
		ball.arc(x, y, radius, 0, Math.PI * 2, false); 
		ball.stroke(); 

	//Condition for edges
		if (radius + x > innerWidth) 
			 rx = 0 - rx;
		    
		if (x - radius < 0) 
		 	rx = 0 - rx; 

		if (radius + y > innerHeight) 
			ry = 0 - ry; 

		if (y - radius < 0) 
			ry = 0 - ry; 

		x = x + rx; 
		y = y + ry;

		//Condition for fillstyle
		if (radius + x == innerWidth || radius+ x == 60)
		{
	       ball.fillStyle = "black"; 
		   ball.fill(); 
		}
		if (radius + y == innerHeight || radius+ y == 60)
		{
	       ball.fillStyle = "black"; 
		   ball.fill(); 
		}
    }

