window.onload = function() 
{
var check = 0;

var endover =0;
var statuss = document.getElementById('status');
var start = document.getElementById('start');
var boundaries = document.querySelectorAll('.boundary');
var ending = document.getElementById('end');
var rest= 

start.onmouseover = function(){
	check = 1;
}


for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = function()
		{
		endover =1;
			
		if (check === 1){
		
			for (var q = 0; q < boundaries.length; q++) {
		  
			boundaries[q].style.backgroundColor = "#ff8888";
			}
		}
}
}
		

ending.onmouseover = function(){
	
 if (endover === 0 && check===1 )
{
	
	  statuss.innerHTML = "You Won Bruh"	
}


}

  
      
      
     
       start.addEventListener("click",function(){
           
          
           for (var i = 0; i < boundaries.length; i++)
               {
                   boundaries[i].style.backgroundColor = "#eeeeee"; 
           				   
               } 
			endover = 0;
			statuss.innerHTML = "Move your mouse over the \"S\" to begin";			   
			   
			   
           
           
           
       });
}