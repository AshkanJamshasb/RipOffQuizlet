//Change the image
	function changeImage(row, column, maxVal) {
		if (column <= maxVal && column >=0) {
			var frontBack
			var imageLocation = cardsArray[row][column].src;
			document.getElementById("image").setAttribute("src", imageLocation);
			(row==0)?frontBack="Front> Card: ":frontBack="Back > Card: ";
			document.getElementById("location").innerHTML = frontBack + (Number(column) + 1) + "/" + (maxVal + 1);
		}
	}
//
//Use the arrow keys
	// Use "onkeydown":
	//	left	= 37
	//	up		= 38
	//	right 	= 39
	//	down	= 40
	document.onkeydown = checkKey;
	function checkKey(e) {

		e = e || window.event;

		if (e.keyCode == '38') {
			flip++;
			row=flip%2;
			changeImage(row, column, maxVal);
		}
		else if (e.keyCode == '40') {
			flip++;
			row=flip%2;
			changeImage(row, column, maxVal);
		}
		else if (e.keyCode == '37') {
			column>0?column--:column=column;
			row=0;
			flip=0;
			changeImage(row, column, maxVal);
		}
		else if (e.keyCode == '39') {
			column<maxVal?column++:column=column;
			row=0;
			flip=0;
			changeImage(row, column, maxVal);
		}
	}
//