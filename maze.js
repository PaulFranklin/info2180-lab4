window.onload = function() 
{
var check = 0;
var start = document.getElementById('start');
var boundaries = document.querySelectorAll('.boundary');

start.onmouseover = function(){
	check = 1;
}


for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = function()
		{
			console.log("hit");
		if (check === 1){
		
			for (var j = 0; j < boundaries.length; j++) {
		  
			boundaries[j].style.backgroundColor = "#ff8888";
			}
			}
		}
		}
}

