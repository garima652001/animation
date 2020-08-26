
	var canvas = document.getElementById("canvas"); 

	canvas.width = window.innerWidth; 
	canvas.height = window.innerHeight; 

	var ball = canvas.getContext('2d'); 
	
	var radius = 60; //radius of ball
	
	var x = Math.floor(Math.random() * innerWidth); 
	var y = Math.floor(Math.random() * innerHeight);
	// x and y are positions of the circle    

	var rx = Math.floor(Math.random() * 9); 
	var ry = Math.floor(Math.random() * 9); 
	// rx and ry are the relative speeds 

	animate(); 
	
	//animation fn
	function animate() { 
		requestAnimationFrame(animate); //animate fn calls itself  thereby creating a request to next frame

		ball.clearRect(0, 0, innerWidth, innerHeight); //Clears canvas acc to specified dimensions

		// Creating circle 
		ball.beginPath(); 
		ball.fillStyle = "black"; 
		ball.arc(x, y, radius, 0, Math.PI * 2, false); 
		ball.fill(); 
		ball.strokeStyle="white";
		ball.stroke();
	
	 //Condition for edges
		if (radius + x > innerWidth) 
			 rx = 0 - rx;
		    
		if (x - radius < 0) 
		 	rx = 0 - rx; 

		if (radius + y >innerHeight ) 
			ry = 0 - ry; 

		if (y - radius < 0) 
			ry = 0 - ry; 

		x = x + rx; 
		y = y + ry;

		//Condition for collision with edges
		if (radius + x == innerWidth || x - radius == 0)
		{
	       ball.fillStyle = "white"; 
		   ball.fill(); 
		}
		if (radius + y == innerHeight || y - radius == 0)
		{
	       ball.fillStyle = "white"; 
		   ball.fill(); 
		}
    }

