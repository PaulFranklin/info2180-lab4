window.onload = function() 
{
var check = 0;
var endover =0;
var start = document.getElementById('start');
var boundaries = document.querySelectorAll('.boundary');
var ending = document.getElementById('end');

start.onmouseover = function(){
	check = 1;
}


for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = function()
		{
		endover =1;
			
		if (check === 1){
		
			for (var j = 0; j < boundaries.length; j++) {
		  
			boundaries[j].style.backgroundColor = "#ff8888";
			}
			}
		}
		}


ending.onmouseover = function(){
	
 if (endover === 0 && check===1 )
{
	 console.log("hit")
	alert("You Win Bruh");	
}


}
}

