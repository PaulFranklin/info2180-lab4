window.onload = function() 
{
	var boundary = document.querySelector('#boundary1');
	boundary.onmouseover = function() {
		color(boundary);
	};

	function color(elementToColor) 
	{
		elementToColor.className = "boundary youlose";
	}
};