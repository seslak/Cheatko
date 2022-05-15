function resettoggle(id) {
	var e = document.getElementById(id);
	e.style.display = 'none';
	}
	function toggle_visibility(id) {
		   var e = document.getElementById(id);
			  e.style.display = 'block';
	}

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
	if (document.getElementById("versions").value == "en") {
		var enList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		if (enList.indexOf(charStr.toUpperCase()) != -1) {
			typeWord(charStr.toUpperCase());
		}
	}
	if (document.getElementById("versions").value == "de") {
		var enList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','Ä', 'Ö', 'Ü', 'ß'];
		if (enList.indexOf(charStr.toUpperCase()) != -1) {
			typeWord(charStr.toUpperCase());
		}
	}
	if (document.getElementById("versions").value == "mk") {
		var enList = ['Ѓ', 'Ѕ', 'Ј', 'Љ', 'Њ', 'Ќ', 'Џ', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш'];
		if (enList.indexOf(charStr.toUpperCase()) != -1) {
			typeWord(charStr.toUpperCase());
		}
	}
	if (document.getElementById("versions").value == "sr") {
		var enList = ['Ђ', 'Ј', 'Љ', 'Њ', 'Ћ', 'Џ', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж','З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф','Х', 'Ц', 'Ч', 'Ш'];
		if (enList.indexOf(charStr.toUpperCase()) != -1) {
			typeWord(charStr.toUpperCase());
		}
	}
	if (document.getElementById("versions").value == "es") {
		var enList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','Á', 'É', 'Í', 'Ñ', 'Ó', 'Ú', 'Ü'];
		if (enList.indexOf(charStr.toUpperCase()) != -1) {
			typeWord(charStr.toUpperCase());
		}
	}
};

document.addEventListener('keydown', function(event) {
    const key = event.key; // const {key} = event; ES6+
    if (key === "Backspace") {
        delWord();
    }
});

function freqLoad() {
	document.getElementById("freqMatrix").innerHTML = "<div id=\"loader\" class=\"lds-facebook\" style=\"display: block\"><div></div><div></div><div></div></div>";
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("freqMatrix").innerHTML = xmlhttp.responseText;
			var myDiv = document.getElementById("freqMatrix");
			var myscripts = myDiv.getElementsByTagName('script');
			for(var i=myscripts.length; i--;){
				eval(myscripts[i].innerHTML);
			}
		}
	};
	xmlhttp.open("GET","freq.php?dict="+arguments[0],true);
	xmlhttp.send();
}

function delay(time) {
	return new Promise(resolve => setTimeout(resolve, time));
  }

function changeKeys() { 
	if (arguments[0] == 'en') {
		resettoggle('keys-mk'); 
		resettoggle('keys-sr'); 
		resettoggle('keys-es');
		resettoggle('keys-de'); 
		toggle_visibility('keys-en');
	}
	if (arguments[0] == 'sr') {
		resettoggle('keys-en'); 
		resettoggle('keys-mk');
		resettoggle('keys-es'); 
		resettoggle('keys-de');  
		toggle_visibility('keys-sr');
	}
	if (arguments[0] == 'mk') {
		resettoggle('keys-en'); 
		resettoggle('keys-sr'); 
		resettoggle('keys-es'); 
		resettoggle('keys-de'); 
		toggle_visibility('keys-mk');
	}
	if (arguments[0] == 'es') {
		resettoggle('keys-en'); 
		resettoggle('keys-sr'); 
		resettoggle('keys-mk'); 
		resettoggle('keys-de'); 
		toggle_visibility('keys-es');
	}
	if (arguments[0] == 'de') {
		resettoggle('keys-en'); 
		resettoggle('keys-sr'); 
		resettoggle('keys-mk'); 
		resettoggle('keys-es'); 
		toggle_visibility('keys-de');
	}
	resetBoard();
	freqLoad(arguments[0]);
}

function showFreq() {
	if (document.getElementById("freqMatrix").style.display = 'none') {
		toggle_visibility('freqMatrix');
	} else if (document.getElementById("freqMatrix").style.display = 'block') {
		resettoggle('freqMatrix'); 
	}
}

function resetBoard() {
	document.getElementById("row1col1").value = "";
	document.getElementById("row1col2").value = "";
	document.getElementById("row1col3").value = "";
	document.getElementById("row1col4").value = "";
	document.getElementById("row1col5").value = "";
	document.getElementById("row2col1").value = "";
	document.getElementById("row2col2").value = "";
	document.getElementById("row2col3").value = "";
	document.getElementById("row2col4").value = "";
	document.getElementById("row2col5").value = "";
	document.getElementById("row3col1").value = "";
	document.getElementById("row3col2").value = "";
	document.getElementById("row3col3").value = "";
	document.getElementById("row3col4").value = "";
	document.getElementById("row3col5").value = "";
	document.getElementById("row4col1").value = "";
	document.getElementById("row4col2").value = "";
	document.getElementById("row4col3").value = "";
	document.getElementById("row4col4").value = "";
	document.getElementById("row4col5").value = "";
	document.getElementById("row5col1").value = "";
	document.getElementById("row5col2").value = "";
	document.getElementById("row5col3").value = "";
	document.getElementById("row5col4").value = "";
	document.getElementById("row5col5").value = "";
	document.getElementById("row1col1").style.backgroundColor = "";
	document.getElementById("row1col2").style.backgroundColor = "";
	document.getElementById("row1col3").style.backgroundColor = "";
	document.getElementById("row1col4").style.backgroundColor = "";
	document.getElementById("row1col5").style.backgroundColor = "";
	document.getElementById("row2col1").style.backgroundColor = "";
	document.getElementById("row2col2").style.backgroundColor = "";
	document.getElementById("row2col3").style.backgroundColor = "";
	document.getElementById("row2col4").style.backgroundColor = "";
	document.getElementById("row2col5").style.backgroundColor = "";
	document.getElementById("row3col1").style.backgroundColor = "";
	document.getElementById("row3col2").style.backgroundColor = "";
	document.getElementById("row3col3").style.backgroundColor = "";
	document.getElementById("row3col4").style.backgroundColor = "";
	document.getElementById("row3col5").style.backgroundColor = "";
	document.getElementById("row4col1").style.backgroundColor = "";
	document.getElementById("row4col2").style.backgroundColor = "";
	document.getElementById("row4col3").style.backgroundColor = "";
	document.getElementById("row4col4").style.backgroundColor = "";
	document.getElementById("row4col5").style.backgroundColor = "";
	document.getElementById("row5col1").style.backgroundColor = "";
	document.getElementById("row5col2").style.backgroundColor = "";
	document.getElementById("row5col3").style.backgroundColor = "";
	document.getElementById("row5col4").style.backgroundColor = "";
	document.getElementById("row5col5").style.backgroundColor = "";
	document.getElementById("row1col1").style.color = "";
	document.getElementById("row1col2").style.color = "";
	document.getElementById("row1col3").style.color = "";
	document.getElementById("row1col4").style.color = "";
	document.getElementById("row1col5").style.color = "";
	document.getElementById("row2col1").style.color = "";
	document.getElementById("row2col2").style.color = "";
	document.getElementById("row2col3").style.color = "";
	document.getElementById("row2col4").style.color = "";
	document.getElementById("row2col5").style.color = "";
	document.getElementById("row3col1").style.color = "";
	document.getElementById("row3col2").style.color = "";
	document.getElementById("row3col3").style.color = "";
	document.getElementById("row3col4").style.color = "";
	document.getElementById("row3col5").style.color = "";
	document.getElementById("row4col1").style.color = "";
	document.getElementById("row4col2").style.color = "";
	document.getElementById("row4col3").style.color = "";
	document.getElementById("row4col4").style.color = "";
	document.getElementById("row4col5").style.color = "";
	document.getElementById("row5col1").style.color = "";
	document.getElementById("row5col2").style.color = "";
	document.getElementById("row5col3").style.color = "";
	document.getElementById("row5col4").style.color = "";
	document.getElementById("row5col5").style.color = "";
	document.getElementById("Xrow1col6").innerHTML = "";
	document.getElementById("Xrow2col6").innerHTML = "";
	document.getElementById("Xrow3col6").innerHTML = "";
	document.getElementById("Xrow4col6").innerHTML = "";
	document.getElementById("Xrow5col6").innerHTML = "";
	document.getElementById("cheatko_load").innerHTML = "<div id=\"loader\" class=\"lds-facebook\" style=\"display: none\"><div></div><div></div><div></div></div>";
	freqLoad(document.getElementById("versions").value);
}
 
function typeWord() {
	wordy = arguments[0]

	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow3col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow4col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow5col6").innerHTML != "<span class=\"glyphicon glyphicon-ok\"></span>") {
		if (document.getElementById("row5col1").value != "" && document.getElementById("row5col2").value != "" && document.getElementById("row5col3").value != "" && document.getElementById("row5col4").value != "" && document.getElementById("row5col5").value == "") {
			document.getElementById("row5col5").value = wordy
		}
		if (document.getElementById("row5col1").value != "" && document.getElementById("row5col2").value != "" && document.getElementById("row5col3").value != "" && document.getElementById("row5col4").value == "") {
			document.getElementById("row5col4").value = wordy
		}
		if (document.getElementById("row5col1").value != "" && document.getElementById("row5col2").value != "" && document.getElementById("row5col3").value == "") {
			document.getElementById("row5col3").value = wordy
		}
		if (document.getElementById("row5col1").value != "" && document.getElementById("row5col2").value == "") {
			document.getElementById("row5col2").value = wordy
		}
		if (document.getElementById("row5col1").value == "") {
			document.getElementById("row5col1").value = wordy
		}
	}

	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow3col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>") {
		if (document.getElementById("row4col1").value != "" && document.getElementById("row4col2").value != "" && document.getElementById("row4col3").value != "" && document.getElementById("row4col4").value != "" && document.getElementById("row4col5").value == "") {
			document.getElementById("row4col5").value = wordy
		}
		if (document.getElementById("row4col1").value != "" && document.getElementById("row4col2").value != "" && document.getElementById("row4col3").value != "" && document.getElementById("row4col4").value == "") {
			document.getElementById("row4col4").value = wordy
		}
		if (document.getElementById("row4col1").value != "" && document.getElementById("row4col2").value != "" && document.getElementById("row4col3").value == "") {
			document.getElementById("row4col3").value = wordy
		}
		if (document.getElementById("row4col1").value != "" && document.getElementById("row4col2").value == "") {
			document.getElementById("row4col2").value = wordy
		}
		if (document.getElementById("row4col1").value == "") {
			document.getElementById("row4col1").value = wordy
		}
	}

	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>") {
		if (document.getElementById("row3col1").value != "" && document.getElementById("row3col2").value != "" && document.getElementById("row3col3").value != "" && document.getElementById("row3col4").value != "" && document.getElementById("row3col5").value == "") {
			document.getElementById("row3col5").value = wordy
		}
		if (document.getElementById("row3col1").value != "" && document.getElementById("row3col2").value != "" && document.getElementById("row3col3").value != "" && document.getElementById("row3col4").value == "") {
			document.getElementById("row3col4").value = wordy
		}
		if (document.getElementById("row3col1").value != "" && document.getElementById("row3col2").value != "" && document.getElementById("row3col3").value == "") {
			document.getElementById("row3col3").value = wordy
		}
		if (document.getElementById("row3col1").value != "" && document.getElementById("row3col2").value == "") {
			document.getElementById("row3col2").value = wordy
		}
		if (document.getElementById("row3col1").value == "") {
			document.getElementById("row3col1").value = wordy
		}
	}

	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>") {
		if (document.getElementById("row2col1").value != "" && document.getElementById("row2col2").value != "" && document.getElementById("row2col3").value != "" && document.getElementById("row2col4").value != "" && document.getElementById("row2col5").value == "") {
			document.getElementById("row2col5").value = wordy
		}
		if (document.getElementById("row2col1").value != "" && document.getElementById("row2col2").value != "" && document.getElementById("row2col3").value != "" && document.getElementById("row2col4").value == "") {
			document.getElementById("row2col4").value = wordy
		}
		if (document.getElementById("row2col1").value != "" && document.getElementById("row2col2").value != "" && document.getElementById("row2col3").value == "") {
			document.getElementById("row2col3").value = wordy
		}
		if (document.getElementById("row2col1").value != "" && document.getElementById("row2col2").value == "") {
			document.getElementById("row2col2").value = wordy
		}
		if (document.getElementById("row2col1").value == "") {
			document.getElementById("row2col1").value = wordy
		}
	}
	if (document.getElementById("Xrow1col6").innerHTML != "<span class=\"glyphicon glyphicon-ok\"></span>") {
		if (document.getElementById("row1col1").value != "" && document.getElementById("row1col2").value != "" && document.getElementById("row1col3").value != "" && document.getElementById("row1col4").value != "" && document.getElementById("row1col5").value == "") {
			document.getElementById("row1col5").value = wordy
		}
		if (document.getElementById("row1col1").value != "" && document.getElementById("row1col2").value != "" && document.getElementById("row1col3").value != "" && document.getElementById("row1col4").value == "") {
			document.getElementById("row1col4").value = wordy
		}
		if (document.getElementById("row1col1").value != "" && document.getElementById("row1col2").value != "" && document.getElementById("row1col3").value == "") {
			document.getElementById("row1col3").value = wordy
		}
		if (document.getElementById("row1col1").value != "" && document.getElementById("row1col2").value == "") {
			document.getElementById("row1col2").value = wordy
		}
		if (document.getElementById("row1col1").value == "") {
			document.getElementById("row1col1").value = wordy
		}
	}
}

function delWord() {

	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow3col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow4col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow5col6").innerHTML != "<span class=\"glyphicon glyphicon-ok\"></span>") {
		if (document.getElementById("row5col1").value != "" && document.getElementById("row5col2").value != "" && document.getElementById("row5col3").value != "" && document.getElementById("row5col4").value != "" && document.getElementById("row5col5").value != "") {
			document.getElementById("row5col5").value = "";
			document.getElementById("row5col5").style.backgroundColor = "";
			document.getElementById("row5col5").style.color = "";
		}
		else if (document.getElementById("row5col1").value != "" && document.getElementById("row5col2").value != "" && document.getElementById("row5col3").value != "" && document.getElementById("row5col4").value != "") {
			document.getElementById("row5col4").value = "";
			document.getElementById("row5col4").style.backgroundColor = "";
			document.getElementById("row5col4").style.color = "";
		}
		else if (document.getElementById("row5col1").value != "" && document.getElementById("row5col2").value != "" && document.getElementById("row5col3").value != "") {
			document.getElementById("row5col3").value = "";
			document.getElementById("row5col3").style.backgroundColor = "";
			document.getElementById("row5col3").style.color = "";
		}
		else if (document.getElementById("row5col1").value != "" && document.getElementById("row5col2").value != "") {
			document.getElementById("row5col2").value = "";
			document.getElementById("row5col2").style.backgroundColor = "";
			document.getElementById("row5col2").style.color = "";
		}
		else if (document.getElementById("row5col1").value != "") {
			document.getElementById("row5col1").value = "";
			document.getElementById("row5col1").style.backgroundColor = "";
			document.getElementById("row5col1").style.color = "";
		}
	}

	else if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow3col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>") {
		if (document.getElementById("row4col1").value != "" && document.getElementById("row4col2").value != "" && document.getElementById("row4col3").value != "" && document.getElementById("row4col4").value != "" && document.getElementById("row4col5").value != "") {
			document.getElementById("row4col5").value = "";
			document.getElementById("row4col5").style.backgroundColor = "";
			document.getElementById("row4col5").style.color = "";
		}
		else if (document.getElementById("row4col1").value != "" && document.getElementById("row4col2").value != "" && document.getElementById("row4col3").value != "" && document.getElementById("row4col4").value != "") {
			document.getElementById("row4col4").value = "";
			document.getElementById("row4col4").style.backgroundColor = "";
			document.getElementById("row4col4").style.color = "";
		}
		else if (document.getElementById("row4col1").value != "" && document.getElementById("row4col2").value != "" && document.getElementById("row4col3").value != "") {
			document.getElementById("row4col3").value = "";
			document.getElementById("row4col3").style.backgroundColor = "";
			document.getElementById("row4col3").style.color = "";
		}
		else if (document.getElementById("row4col1").value != "" && document.getElementById("row4col2").value != "") {
			document.getElementById("row4col2").value = "";
			document.getElementById("row4col2").style.backgroundColor = "";
			document.getElementById("row4col2").style.color = "";
		}
		else if (document.getElementById("row4col1").value != "") {
			document.getElementById("row4col1").value = "";
			document.getElementById("row4col1").style.backgroundColor = "";
			document.getElementById("row4col1").style.color = "";
		}
	}

	else if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>") {
		if (document.getElementById("row3col1").value != "" && document.getElementById("row3col2").value != "" && document.getElementById("row3col3").value != "" && document.getElementById("row3col4").value != "" && document.getElementById("row3col5").value != "") {
			document.getElementById("row3col5").value = "";
			document.getElementById("row3col5").style.backgroundColor = "";
			document.getElementById("row3col5").style.color = "";
		}
		else if (document.getElementById("row3col1").value != "" && document.getElementById("row3col2").value != "" && document.getElementById("row3col3").value != "" && document.getElementById("row3col4").value != "") {
			document.getElementById("row3col4").value = "";
			document.getElementById("row3col4").style.backgroundColor = "";
			document.getElementById("row3col4").style.color = "";
		}
		else if (document.getElementById("row3col1").value != "" && document.getElementById("row3col2").value != "" && document.getElementById("row3col3").value != "") {
			document.getElementById("row3col3").value = "";
			document.getElementById("row3col3").style.backgroundColor = "";
			document.getElementById("row3col3").style.color = "";
		}
		else if (document.getElementById("row3col1").value != "" && document.getElementById("row3col2").value != "") {
			document.getElementById("row3col2").value = "";
			document.getElementById("row3col2").style.backgroundColor = "";
			document.getElementById("row3col2").style.color = "";
		}
		else if (document.getElementById("row3col1").value != "") {
			document.getElementById("row3col1").value = "";
			document.getElementById("row3col1").style.backgroundColor = "";
			document.getElementById("row3col1").style.color = "";
		}
	}

	else if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>") {
		if (document.getElementById("row2col1").value != "" && document.getElementById("row2col2").value != "" && document.getElementById("row2col3").value != "" && document.getElementById("row2col4").value != "" && document.getElementById("row2col5").value != "") {
			document.getElementById("row2col5").value = "";
			document.getElementById("row2col5").style.backgroundColor = "";
			document.getElementById("row2col5").style.color = "";
		}
		else if (document.getElementById("row2col1").value != "" && document.getElementById("row2col2").value != "" && document.getElementById("row2col3").value != "" && document.getElementById("row2col4").value != "") {
			document.getElementById("row2col4").value = "";
			document.getElementById("row2col4").style.backgroundColor = "";
			document.getElementById("row2col4").style.color = "";
		}
		else if (document.getElementById("row2col1").value != "" && document.getElementById("row2col2").value != "" && document.getElementById("row2col3").value != "") {
			document.getElementById("row2col3").value = "";
			document.getElementById("row2col3").style.backgroundColor = "";
			document.getElementById("row2col3").style.color = "";
		}
		else if (document.getElementById("row2col1").value != "" && document.getElementById("row2col2").value != "") {
			document.getElementById("row2col2").value = "";
			document.getElementById("row2col2").style.backgroundColor = "";
			document.getElementById("row2col2").style.color = "";
		}
		else if (document.getElementById("row2col1").value != "") {
			document.getElementById("row2col1").value = "";
			document.getElementById("row2col1").style.backgroundColor = "";
			document.getElementById("row2col1").style.color = "";
		}
	}
	else if (document.getElementById("Xrow1col6").innerHTML != "<span class=\"glyphicon glyphicon-ok\"></span>") {
		if (document.getElementById("row1col1").value != "" && document.getElementById("row1col2").value != "" && document.getElementById("row1col3").value != "" && document.getElementById("row1col4").value != "" && document.getElementById("row1col5").value != "") {
			document.getElementById("row1col5").value = "";
			document.getElementById("row1col5").style.backgroundColor = "";
			document.getElementById("row1col5").style.color = "";
		}
		else if (document.getElementById("row1col1").value != "" && document.getElementById("row1col2").value != "" && document.getElementById("row1col3").value != "" && document.getElementById("row1col4").value != "") {
			document.getElementById("row1col4").value = "";
			document.getElementById("row1col4").style.backgroundColor = "";
			document.getElementById("row1col4").style.color = "";
		}
		else if (document.getElementById("row1col1").value != "" && document.getElementById("row1col2").value != "" && document.getElementById("row1col3").value != "") {
			document.getElementById("row1col3").value = "";
			document.getElementById("row1col3").style.backgroundColor = "";
			document.getElementById("row1col3").style.color = "";
		}
		else if (document.getElementById("row1col1").value != "" && document.getElementById("row1col2").value != "") {
			document.getElementById("row1col2").value = "";
			document.getElementById("row1col2").style.backgroundColor = "";
			document.getElementById("row1col2").style.color = "";
		}
		else if (document.getElementById("row1col1").value != "") {
			document.getElementById("row1col1").value = "";
			document.getElementById("row1col1").style.backgroundColor = "";
			document.getElementById("row1col1").style.color = "";
		}
	}
}

function getSolution() {
	n = 0
	document.getElementById("cheatko_load").innerHTML = "<div id=\"loader\" class=\"lds-facebook\" style=\"display: block\"><div></div><div></div><div></div></div>";
	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow3col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow4col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow5col6").innerHTML != "<span class=\"glyphicon glyphicon-ok\"></span>") {
		if (document.getElementById("row5col1").value != "") {
		n = n + 1
		}
		if (document.getElementById("row5col2").value != "") {
		n = n + 1
		}
		if (document.getElementById("row5col3").value != "") {
		n = n + 1
		}
		if (document.getElementById("row5col4").value != "") {
		n = n + 1
		}
		if (document.getElementById("row5col5").value != "") {
		n = n + 1
		}	
	}
	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow3col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow4col6").innerHTML != "<span class=\"glyphicon glyphicon-ok\"></span>") {
		if (document.getElementById("row4col1").value != "") {
		n = n + 1
		}
		if (document.getElementById("row4col2").value != "") {
		n = n + 1
		}
		if (document.getElementById("row4col3").value != "") {
		n = n + 1
		}
		if (document.getElementById("row4col4").value != "") {
		n = n + 1
		}
		if (document.getElementById("row4col5").value != "") {
		n = n + 1
		}	
	}
	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow3col6").innerHTML != "<span class=\"glyphicon glyphicon-ok\"></span>") {
		if (document.getElementById("row3col1").value != "") {
		n = n + 1
		}
		if (document.getElementById("row3col2").value != "") {
		n = n + 1
		}
		if (document.getElementById("row3col3").value != "") {
		n = n + 1
		}
		if (document.getElementById("row3col4").value != "") {
		n = n + 1
		}
		if (document.getElementById("row3col5").value != "") {
		n = n + 1
		}	
	}
	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML != "<span class=\"glyphicon glyphicon-ok\"></span>") {
		if (document.getElementById("row2col1").value != "") {
		n = n + 1
		}
		if (document.getElementById("row2col2").value != "") {
		n = n + 1
		}
		if (document.getElementById("row2col3").value != "") {
		n = n + 1
		}
		if (document.getElementById("row2col4").value != "") {
		n = n + 1
		}
		if (document.getElementById("row2col5").value != "") {
		n = n + 1
		}	
	}
	if (document.getElementById("Xrow1col6").innerHTML != "<span class=\"glyphicon glyphicon-ok\"></span>") {
		if (document.getElementById("row1col1").value != "") {
			n = n + 1
		}
		if (document.getElementById("row1col2").value != "") {
			n = n + 1
		}
		if (document.getElementById("row1col3").value != "") {
			n = n + 1
		}
		if (document.getElementById("row1col4").value != "") {
			n = n + 1
		}
		if (document.getElementById("row1col5").value != "") {
			n = n + 1
		}
	}
    if (n < 5) {
        document.getElementById("cheatko_load").innerHTML = "";
        return; 
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("cheatko_load").innerHTML = xmlhttp.responseText;
                var myDiv = document.getElementById("cheatko_load");
                var myscripts = myDiv.getElementsByTagName('script');
                for(var i=myscripts.length; i--;){
                    eval(myscripts[i].innerHTML);
                }
            }
        };
        xmlhttp.open("GET","cheatko.php",true);
        xmlhttp.send();
    }
	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow3col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow4col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>"  && document.getElementById("Xrow5col6").innerHTML != "<span class=\"glyphicon glyphicon-ok\"></span>") {
		document.getElementById("Xrow5col6").innerHTML = "<span class=\"glyphicon glyphicon-ok\"></span>";
	}
	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow3col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>") {
		document.getElementById("Xrow4col6").innerHTML = "<span class=\"glyphicon glyphicon-ok\"></span>";
	}
	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>") {
		document.getElementById("Xrow3col6").innerHTML = "<span class=\"glyphicon glyphicon-ok\"></span>";
	}
	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>") {
		document.getElementById("Xrow2col6").innerHTML = "<span class=\"glyphicon glyphicon-ok\"></span>";
	}
	if (document.getElementById("Xrow1col6").innerHTML != "<span class=\"glyphicon glyphicon-ok\"></span>") {
		document.getElementById("Xrow1col6").innerHTML = "<span class=\"glyphicon glyphicon-ok\"></span>";
	}
	buildWordContainer(arguments[0]);
}
function colorThis() {
	object = arguments[0]

	objectColor = document.getElementById(object).style.backgroundColor;
	if (document.getElementById(object).value != "") {
		if (objectColor == "rgb(197, 181, 95)") {
			document.getElementById(object).style.backgroundColor = "#7aa867";
			document.getElementById(object).style.color = "white";
		}

		if (objectColor == "") {
			document.getElementById(object).style.backgroundColor = "#c5b55f";
			document.getElementById(object).style.color = "white";
		}

		if (objectColor == "rgb(122, 168, 103)") {
			document.getElementById(object).style.backgroundColor = "";
			document.getElementById(object).style.color = "";
		}
	}
}
function buildWordContainer() {
	freq_id = Math.floor((Math.random() * 10000) + 1);
	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML != "<span class=\"glyphicon glyphicon-ok\"></span>") {
		word1 = document.getElementById("row1col1").value + document.getElementById("row1col2").value + document.getElementById("row1col3").value + document.getElementById("row1col4").value + document.getElementById("row1col5").value;
		if (document.getElementById("row1col1").style.backgroundColor == "") {
			word11 = 2;
		}
		if (document.getElementById("row1col1").style.backgroundColor == "rgb(122, 168, 103)") {
			word11 = 1;
		}
		if (document.getElementById("row1col1").style.backgroundColor == "rgb(197, 181, 95)") {
			word11 = 0;
		}
		if (document.getElementById("row1col2").style.backgroundColor == "") {
			word12 = 2;
		}
		if (document.getElementById("row1col2").style.backgroundColor == "rgb(122, 168, 103)") {
			word12 = 1;
		}
		if (document.getElementById("row1col2").style.backgroundColor == "rgb(197, 181, 95)") {
			word12 = 0;
		}
		if (document.getElementById("row1col3").style.backgroundColor == "") {
			word13 = 2;
		}
		if (document.getElementById("row1col3").style.backgroundColor == "rgb(122, 168, 103)") {
			word13 = 1;
		}
		if (document.getElementById("row1col3").style.backgroundColor == "rgb(197, 181, 95)") {
			word13 = 0;
		}
		if (document.getElementById("row1col4").style.backgroundColor == "") {
			word14 = 2;
		}
		if (document.getElementById("row1col4").style.backgroundColor == "rgb(122, 168, 103)") {
			word14 = 1;
		}
		if (document.getElementById("row1col4").style.backgroundColor == "rgb(197, 181, 95)") {
			word14 = 0;
		}
		if (document.getElementById("row1col5").style.backgroundColor == "") {
			word15 = 2;
		}
		if (document.getElementById("row1col5").style.backgroundColor == "rgb(122, 168, 103)") {
			word15 = 1;
		}
		if (document.getElementById("row1col5").style.backgroundColor == "rgb(197, 181, 95)") {
			word15 = 0;
		}
		wordy1 = [word1, word11, word12, word13, word14, word15]; /* test line */
		word_container = [wordy1]; /* useless :) */
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("cheatko_load").innerHTML = xmlhttp.responseText;
                var myDiv = document.getElementById("cheatko_load");
                var myscripts = myDiv.getElementsByTagName('script');
                for(var i=myscripts.length; i--;){
                    eval(myscripts[i].innerHTML);
                }
            }
        };
		if (arguments[0] == "en") {
        	xmlhttp.open("GET","cheatko-en.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "sr") {
			xmlhttp.open("GET","cheatko-sr.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "mk") {
			xmlhttp.open("GET","cheatko-mk.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "es") {
			xmlhttp.open("GET","cheatko-es.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "de") {
			xmlhttp.open("GET","cheatko-de.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&freqID="+freq_id,true);
		}
        xmlhttp.send();
	}

	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow3col6").innerHTML != "<span class=\"glyphicon glyphicon-ok\"></span>") {
		word1 = document.getElementById("row1col1").value + document.getElementById("row1col2").value + document.getElementById("row1col3").value + document.getElementById("row1col4").value + document.getElementById("row1col5").value;
		word2 = document.getElementById("row2col1").value + document.getElementById("row2col2").value + document.getElementById("row2col3").value + document.getElementById("row2col4").value + document.getElementById("row2col5").value;
		if (document.getElementById("row1col1").style.backgroundColor == "") {
			word11 = 2;
		}
		if (document.getElementById("row1col1").style.backgroundColor == "rgb(122, 168, 103)") {
			word11 = 1;
		}
		if (document.getElementById("row1col1").style.backgroundColor == "rgb(197, 181, 95)") {
			word11 = 0;
		}
		if (document.getElementById("row1col2").style.backgroundColor == "") {
			word12 = 2;
		}
		if (document.getElementById("row1col2").style.backgroundColor == "rgb(122, 168, 103)") {
			word12 = 1;
		}
		if (document.getElementById("row1col2").style.backgroundColor == "rgb(197, 181, 95)") {
			word12 = 0;
		}
		if (document.getElementById("row1col3").style.backgroundColor == "") {
			word13 = 2;
		}
		if (document.getElementById("row1col3").style.backgroundColor == "rgb(122, 168, 103)") {
			word13 = 1;
		}
		if (document.getElementById("row1col3").style.backgroundColor == "rgb(197, 181, 95)") {
			word13 = 0;
		}
		if (document.getElementById("row1col4").style.backgroundColor == "") {
			word14 = 2;
		}
		if (document.getElementById("row1col4").style.backgroundColor == "rgb(122, 168, 103)") {
			word14 = 1;
		}
		if (document.getElementById("row1col4").style.backgroundColor == "rgb(197, 181, 95)") {
			word14 = 0;
		}
		if (document.getElementById("row1col5").style.backgroundColor == "") {
			word15 = 2;
		}
		if (document.getElementById("row1col5").style.backgroundColor == "rgb(122, 168, 103)") {
			word15 = 1;
		}
		if (document.getElementById("row1col5").style.backgroundColor == "rgb(197, 181, 95)") {
			word15 = 0;
		}
		if (document.getElementById("row2col1").style.backgroundColor == "") {
			word21 = 2;
		}
		if (document.getElementById("row2col1").style.backgroundColor == "rgb(122, 168, 103)") {
			word21 = 1;
		}
		if (document.getElementById("row2col1").style.backgroundColor == "rgb(197, 181, 95)") {
			word21 = 0;
		}
		if (document.getElementById("row2col2").style.backgroundColor == "") {
			word22 = 2;
		}
		if (document.getElementById("row2col2").style.backgroundColor == "rgb(122, 168, 103)") {
			word22 = 1;
		}
		if (document.getElementById("row2col2").style.backgroundColor == "rgb(197, 181, 95)") {
			word22 = 0;
		}
		if (document.getElementById("row2col3").style.backgroundColor == "") {
			word23 = 2;
		}
		if (document.getElementById("row2col3").style.backgroundColor == "rgb(122, 168, 103)") {
			word23 = 1;
		}
		if (document.getElementById("row2col3").style.backgroundColor == "rgb(197, 181, 95)") {
			word23 = 0;
		}
		if (document.getElementById("row2col4").style.backgroundColor == "") {
			word24 = 2;
		}
		if (document.getElementById("row2col4").style.backgroundColor == "rgb(122, 168, 103)") {
			word24 = 1;
		}
		if (document.getElementById("row2col4").style.backgroundColor == "rgb(197, 181, 95)") {
			word24 = 0;
		}
		if (document.getElementById("row2col5").style.backgroundColor == "") {
			word25 = 2;
		}
		if (document.getElementById("row2col5").style.backgroundColor == "rgb(122, 168, 103)") {
			word25 = 1;
		}
		if (document.getElementById("row2col5").style.backgroundColor == "rgb(197, 181, 95)") {
			word25 = 0;
		}


        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("cheatko_load").innerHTML = xmlhttp.responseText;
                var myDiv2 = document.getElementById("cheatko_load");
                var myscripts2 = myDiv2.getElementsByTagName('script');
                for(var i=myscripts2.length; i--;){
                    eval(myscripts2[i].innerHTML);
                }
            }
        };
		if (arguments[0] == "en") {
        	xmlhttp.open("GET","cheatko-en.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "sr") {
        	xmlhttp.open("GET","cheatko-sr.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "mk") {
        	xmlhttp.open("GET","cheatko-mk.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "es") {
        	xmlhttp.open("GET","cheatko-es.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "de") {
        	xmlhttp.open("GET","cheatko-de.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&freqID="+freq_id,true);
		}
        xmlhttp.send();
	}

	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow3col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow4col6").innerHTML != "<span class=\"glyphicon glyphicon-ok\"></span>") {
		word1 = document.getElementById("row1col1").value + document.getElementById("row1col2").value + document.getElementById("row1col3").value + document.getElementById("row1col4").value + document.getElementById("row1col5").value;
		word2 = document.getElementById("row2col1").value + document.getElementById("row2col2").value + document.getElementById("row2col3").value + document.getElementById("row2col4").value + document.getElementById("row2col5").value;
		word3 = document.getElementById("row3col1").value + document.getElementById("row3col2").value + document.getElementById("row3col3").value + document.getElementById("row3col4").value + document.getElementById("row3col5").value;
		if (document.getElementById("row1col1").style.backgroundColor == "") {
			word11 = 2;
		}
		if (document.getElementById("row1col1").style.backgroundColor == "rgb(122, 168, 103)") {
			word11 = 1;
		}
		if (document.getElementById("row1col1").style.backgroundColor == "rgb(197, 181, 95)") {
			word11 = 0;
		}
		if (document.getElementById("row1col2").style.backgroundColor == "") {
			word12 = 2;
		}
		if (document.getElementById("row1col2").style.backgroundColor == "rgb(122, 168, 103)") {
			word12 = 1;
		}
		if (document.getElementById("row1col2").style.backgroundColor == "rgb(197, 181, 95)") {
			word12 = 0;
		}
		if (document.getElementById("row1col3").style.backgroundColor == "") {
			word13 = 2;
		}
		if (document.getElementById("row1col3").style.backgroundColor == "rgb(122, 168, 103)") {
			word13 = 1;
		}
		if (document.getElementById("row1col3").style.backgroundColor == "rgb(197, 181, 95)") {
			word13 = 0;
		}
		if (document.getElementById("row1col4").style.backgroundColor == "") {
			word14 = 2;
		}
		if (document.getElementById("row1col4").style.backgroundColor == "rgb(122, 168, 103)") {
			word14 = 1;
		}
		if (document.getElementById("row1col4").style.backgroundColor == "rgb(197, 181, 95)") {
			word14 = 0;
		}
		if (document.getElementById("row1col5").style.backgroundColor == "") {
			word15 = 2;
		}
		if (document.getElementById("row1col5").style.backgroundColor == "rgb(122, 168, 103)") {
			word15 = 1;
		}
		if (document.getElementById("row1col5").style.backgroundColor == "rgb(197, 181, 95)") {
			word15 = 0;
		}
		if (document.getElementById("row2col1").style.backgroundColor == "") {
			word21 = 2;
		}
		if (document.getElementById("row2col1").style.backgroundColor == "rgb(122, 168, 103)") {
			word21 = 1;
		}
		if (document.getElementById("row2col1").style.backgroundColor == "rgb(197, 181, 95)") {
			word21 = 0;
		}
		if (document.getElementById("row2col2").style.backgroundColor == "") {
			word22 = 2;
		}
		if (document.getElementById("row2col2").style.backgroundColor == "rgb(122, 168, 103)") {
			word22 = 1;
		}
		if (document.getElementById("row2col2").style.backgroundColor == "rgb(197, 181, 95)") {
			word22 = 0;
		}
		if (document.getElementById("row2col3").style.backgroundColor == "") {
			word23 = 2;
		}
		if (document.getElementById("row2col3").style.backgroundColor == "rgb(122, 168, 103)") {
			word23 = 1;
		}
		if (document.getElementById("row2col3").style.backgroundColor == "rgb(197, 181, 95)") {
			word23 = 0;
		}
		if (document.getElementById("row2col4").style.backgroundColor == "") {
			word24 = 2;
		}
		if (document.getElementById("row2col4").style.backgroundColor == "rgb(122, 168, 103)") {
			word24 = 1;
		}
		if (document.getElementById("row2col4").style.backgroundColor == "rgb(197, 181, 95)") {
			word24 = 0;
		}
		if (document.getElementById("row2col5").style.backgroundColor == "") {
			word25 = 2;
		}
		if (document.getElementById("row2col5").style.backgroundColor == "rgb(122, 168, 103)") {
			word25 = 1;
		}
		if (document.getElementById("row2col5").style.backgroundColor == "rgb(197, 181, 95)") {
			word25 = 0;
		}
		if (document.getElementById("row3col1").style.backgroundColor == "") {
			word31 = 2;
		}
		if (document.getElementById("row3col1").style.backgroundColor == "rgb(122, 168, 103)") {
			word31 = 1;
		}
		if (document.getElementById("row3col1").style.backgroundColor == "rgb(197, 181, 95)") {
			word31 = 0;
		}
		if (document.getElementById("row3col2").style.backgroundColor == "") {
			word32 = 2;
		}
		if (document.getElementById("row3col2").style.backgroundColor == "rgb(122, 168, 103)") {
			word32 = 1;
		}
		if (document.getElementById("row3col2").style.backgroundColor == "rgb(197, 181, 95)") {
			word32 = 0;
		}
		if (document.getElementById("row3col3").style.backgroundColor == "") {
			word33 = 2;
		}
		if (document.getElementById("row3col3").style.backgroundColor == "rgb(122, 168, 103)") {
			word33 = 1;
		}
		if (document.getElementById("row3col3").style.backgroundColor == "rgb(197, 181, 95)") {
			word33 = 0;
		}
		if (document.getElementById("row3col4").style.backgroundColor == "") {
			word34 = 2;
		}
		if (document.getElementById("row3col4").style.backgroundColor == "rgb(122, 168, 103)") {
			word34 = 1;
		}
		if (document.getElementById("row3col4").style.backgroundColor == "rgb(197, 181, 95)") {
			word34 = 0;
		}
		if (document.getElementById("row3col5").style.backgroundColor == "") {
			word35 = 2;
		}
		if (document.getElementById("row3col5").style.backgroundColor == "rgb(122, 168, 103)") {
			word35 = 1;
		}
		if (document.getElementById("row3col5").style.backgroundColor == "rgb(197, 181, 95)") {
			word35 = 0;
		}

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("cheatko_load").innerHTML = xmlhttp.responseText;
                var myDiv3 = document.getElementById("cheatko_load");
                var myscripts3 = myDiv3.getElementsByTagName('script');
                for(var i=myscripts3.length; i--;){
                    eval(myscripts3[i].innerHTML);
                }
            }
        };
		if (arguments[0] == "en") {
        	xmlhttp.open("GET","cheatko-en.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&word3="+word3+"&word31="+word31+"&word32="+word32+"&word33="+word33+"&word34="+word34+"&word35="+word35+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "sr") {
        	xmlhttp.open("GET","cheatko-sr.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&word3="+word3+"&word31="+word31+"&word32="+word32+"&word33="+word33+"&word34="+word34+"&word35="+word35+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "mk") {
        	xmlhttp.open("GET","cheatko-mk.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&word3="+word3+"&word31="+word31+"&word32="+word32+"&word33="+word33+"&word34="+word34+"&word35="+word35+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "es") {
        	xmlhttp.open("GET","cheatko-es.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&word3="+word3+"&word31="+word31+"&word32="+word32+"&word33="+word33+"&word34="+word34+"&word35="+word35+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "de") {
        	xmlhttp.open("GET","cheatko-de.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&word3="+word3+"&word31="+word31+"&word32="+word32+"&word33="+word33+"&word34="+word34+"&word35="+word35+"&freqID="+freq_id,true);
		}
        xmlhttp.send();
	}

	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow3col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow4col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow5col6").innerHTML != "<span class=\"glyphicon glyphicon-ok\"></span>") {
		word1 = document.getElementById("row1col1").value + document.getElementById("row1col2").value + document.getElementById("row1col3").value + document.getElementById("row1col4").value + document.getElementById("row1col5").value;
		word2 = document.getElementById("row2col1").value + document.getElementById("row2col2").value + document.getElementById("row2col3").value + document.getElementById("row2col4").value + document.getElementById("row2col5").value;
		word3 = document.getElementById("row3col1").value + document.getElementById("row3col2").value + document.getElementById("row3col3").value + document.getElementById("row3col4").value + document.getElementById("row3col5").value;
		word4 = document.getElementById("row4col1").value + document.getElementById("row4col2").value + document.getElementById("row4col3").value + document.getElementById("row4col4").value + document.getElementById("row4col5").value;
		if (document.getElementById("row1col1").style.backgroundColor == "") {
			word11 = 2;
		}
		if (document.getElementById("row1col1").style.backgroundColor == "rgb(122, 168, 103)") {
			word11 = 1;
		}
		if (document.getElementById("row1col1").style.backgroundColor == "rgb(197, 181, 95)") {
			word11 = 0;
		}
		if (document.getElementById("row1col2").style.backgroundColor == "") {
			word12 = 2;
		}
		if (document.getElementById("row1col2").style.backgroundColor == "rgb(122, 168, 103)") {
			word12 = 1;
		}
		if (document.getElementById("row1col2").style.backgroundColor == "rgb(197, 181, 95)") {
			word12 = 0;
		}
		if (document.getElementById("row1col3").style.backgroundColor == "") {
			word13 = 2;
		}
		if (document.getElementById("row1col3").style.backgroundColor == "rgb(122, 168, 103)") {
			word13 = 1;
		}
		if (document.getElementById("row1col3").style.backgroundColor == "rgb(197, 181, 95)") {
			word13 = 0;
		}
		if (document.getElementById("row1col4").style.backgroundColor == "") {
			word14 = 2;
		}
		if (document.getElementById("row1col4").style.backgroundColor == "rgb(122, 168, 103)") {
			word14 = 1;
		}
		if (document.getElementById("row1col4").style.backgroundColor == "rgb(197, 181, 95)") {
			word14 = 0;
		}
		if (document.getElementById("row1col5").style.backgroundColor == "") {
			word15 = 2;
		}
		if (document.getElementById("row1col5").style.backgroundColor == "rgb(122, 168, 103)") {
			word15 = 1;
		}
		if (document.getElementById("row1col5").style.backgroundColor == "rgb(197, 181, 95)") {
			word15 = 0;
		}
		if (document.getElementById("row2col1").style.backgroundColor == "") {
			word21 = 2;
		}
		if (document.getElementById("row2col1").style.backgroundColor == "rgb(122, 168, 103)") {
			word21 = 1;
		}
		if (document.getElementById("row2col1").style.backgroundColor == "rgb(197, 181, 95)") {
			word21 = 0;
		}
		if (document.getElementById("row2col2").style.backgroundColor == "") {
			word22 = 2;
		}
		if (document.getElementById("row2col2").style.backgroundColor == "rgb(122, 168, 103)") {
			word22 = 1;
		}
		if (document.getElementById("row2col2").style.backgroundColor == "rgb(197, 181, 95)") {
			word22 = 0;
		}
		if (document.getElementById("row2col3").style.backgroundColor == "") {
			word23 = 2;
		}
		if (document.getElementById("row2col3").style.backgroundColor == "rgb(122, 168, 103)") {
			word23 = 1;
		}
		if (document.getElementById("row2col3").style.backgroundColor == "rgb(197, 181, 95)") {
			word23 = 0;
		}
		if (document.getElementById("row2col4").style.backgroundColor == "") {
			word24 = 2;
		}
		if (document.getElementById("row2col4").style.backgroundColor == "rgb(122, 168, 103)") {
			word24 = 1;
		}
		if (document.getElementById("row2col4").style.backgroundColor == "rgb(197, 181, 95)") {
			word24 = 0;
		}
		if (document.getElementById("row2col5").style.backgroundColor == "") {
			word25 = 2;
		}
		if (document.getElementById("row2col5").style.backgroundColor == "rgb(122, 168, 103)") {
			word25 = 1;
		}
		if (document.getElementById("row2col5").style.backgroundColor == "rgb(197, 181, 95)") {
			word25 = 0;
		}
		if (document.getElementById("row3col1").style.backgroundColor == "") {
			word31 = 2;
		}
		if (document.getElementById("row3col1").style.backgroundColor == "rgb(122, 168, 103)") {
			word31 = 1;
		}
		if (document.getElementById("row3col1").style.backgroundColor == "rgb(197, 181, 95)") {
			word31 = 0;
		}
		if (document.getElementById("row3col2").style.backgroundColor == "") {
			word32 = 2;
		}
		if (document.getElementById("row3col2").style.backgroundColor == "rgb(122, 168, 103)") {
			word32 = 1;
		}
		if (document.getElementById("row3col2").style.backgroundColor == "rgb(197, 181, 95)") {
			word32 = 0;
		}
		if (document.getElementById("row3col3").style.backgroundColor == "") {
			word33 = 2;
		}
		if (document.getElementById("row3col3").style.backgroundColor == "rgb(122, 168, 103)") {
			word33 = 1;
		}
		if (document.getElementById("row3col3").style.backgroundColor == "rgb(197, 181, 95)") {
			word33 = 0;
		}
		if (document.getElementById("row3col4").style.backgroundColor == "") {
			word34 = 2;
		}
		if (document.getElementById("row3col4").style.backgroundColor == "rgb(122, 168, 103)") {
			word34 = 1;
		}
		if (document.getElementById("row3col4").style.backgroundColor == "rgb(197, 181, 95)") {
			word34 = 0;
		}
		if (document.getElementById("row3col5").style.backgroundColor == "") {
			word35 = 2;
		}
		if (document.getElementById("row3col5").style.backgroundColor == "rgb(122, 168, 103)") {
			word35 = 1;
		}
		if (document.getElementById("row3col5").style.backgroundColor == "rgb(197, 181, 95)") {
			word35 = 0;
		}
		if (document.getElementById("row4col1").style.backgroundColor == "") {
			word41 = 2;
		}
		if (document.getElementById("row4col1").style.backgroundColor == "rgb(122, 168, 103)") {
			word41 = 1;
		}
		if (document.getElementById("row4col1").style.backgroundColor == "rgb(197, 181, 95)") {
			word41 = 0;
		}
		if (document.getElementById("row4col2").style.backgroundColor == "") {
			word42 = 2;
		}
		if (document.getElementById("row4col2").style.backgroundColor == "rgb(122, 168, 103)") {
			word42 = 1;
		}
		if (document.getElementById("row4col2").style.backgroundColor == "rgb(197, 181, 95)") {
			word42 = 0;
		}
		if (document.getElementById("row4col3").style.backgroundColor == "") {
			word43 = 2;
		}
		if (document.getElementById("row4col3").style.backgroundColor == "rgb(122, 168, 103)") {
			word43 = 1;
		}
		if (document.getElementById("row4col3").style.backgroundColor == "rgb(197, 181, 95)") {
			word43 = 0;
		}
		if (document.getElementById("row4col4").style.backgroundColor == "") {
			word44 = 2;
		}
		if (document.getElementById("row4col4").style.backgroundColor == "rgb(122, 168, 103)") {
			word44 = 1;
		}
		if (document.getElementById("row4col4").style.backgroundColor == "rgb(197, 181, 95)") {
			word44 = 0;
		}
		if (document.getElementById("row4col5").style.backgroundColor == "") {
			word45 = 2;
		}
		if (document.getElementById("row4col5").style.backgroundColor == "rgb(122, 168, 103)") {
			word45 = 1;
		}
		if (document.getElementById("row4col5").style.backgroundColor == "rgb(197, 181, 95)") {
			word45 = 0;
		}
		
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("cheatko_load").innerHTML = xmlhttp.responseText;
                var myDiv = document.getElementById("cheatko_load");
                var myscripts = myDiv.getElementsByTagName('script');
                for(var i=myscripts.length; i--;){
                    eval(myscripts[i].innerHTML);
                }
            }
        };
		if (arguments[0] == "en") {
        	xmlhttp.open("GET","cheatko-en.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&word3="+word3+"&word31="+word31+"&word32="+word32+"&word33="+word33+"&word34="+word34+"&word35="+word35+"&word4="+word4+"&word41="+word41+"&word42="+word42+"&word43="+word43+"&word44="+word44+"&word45="+word45+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "sr") {
        	xmlhttp.open("GET","cheatko-sr.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&word3="+word3+"&word31="+word31+"&word32="+word32+"&word33="+word33+"&word34="+word34+"&word35="+word35+"&word4="+word4+"&word41="+word41+"&word42="+word42+"&word43="+word43+"&word44="+word44+"&word45="+word45+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "mk") {
        	xmlhttp.open("GET","cheatko-mk.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&word3="+word3+"&word31="+word31+"&word32="+word32+"&word33="+word33+"&word34="+word34+"&word35="+word35+"&word4="+word4+"&word41="+word41+"&word42="+word42+"&word43="+word43+"&word44="+word44+"&word45="+word45+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "es") {
        	xmlhttp.open("GET","cheatko-es.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&word3="+word3+"&word31="+word31+"&word32="+word32+"&word33="+word33+"&word34="+word34+"&word35="+word35+"&word4="+word4+"&word41="+word41+"&word42="+word42+"&word43="+word43+"&word44="+word44+"&word45="+word45+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "de") {
        	xmlhttp.open("GET","cheatko-de.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&word3="+word3+"&word31="+word31+"&word32="+word32+"&word33="+word33+"&word34="+word34+"&word35="+word35+"&word4="+word4+"&word41="+word41+"&word42="+word42+"&word43="+word43+"&word44="+word44+"&word45="+word45+"&freqID="+freq_id,true);
		}
        xmlhttp.send();
	}

	if (document.getElementById("Xrow1col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow2col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow3col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow4col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>" && document.getElementById("Xrow5col6").innerHTML == "<span class=\"glyphicon glyphicon-ok\"></span>") {
		word1 = document.getElementById("row1col1").value + document.getElementById("row1col2").value + document.getElementById("row1col3").value + document.getElementById("row1col4").value + document.getElementById("row1col5").value;
		word2 = document.getElementById("row2col1").value + document.getElementById("row2col2").value + document.getElementById("row2col3").value + document.getElementById("row2col4").value + document.getElementById("row2col5").value;
		word3 = document.getElementById("row3col1").value + document.getElementById("row3col2").value + document.getElementById("row3col3").value + document.getElementById("row3col4").value + document.getElementById("row3col5").value;
		word4 = document.getElementById("row4col1").value + document.getElementById("row4col2").value + document.getElementById("row4col3").value + document.getElementById("row4col4").value + document.getElementById("row4col5").value;
		word5 = document.getElementById("row5col1").value + document.getElementById("row5col2").value + document.getElementById("row5col3").value + document.getElementById("row5col4").value + document.getElementById("row5col5").value;
		if (document.getElementById("row1col1").style.backgroundColor == "") {
			word11 = 2;
		}
		if (document.getElementById("row1col1").style.backgroundColor == "rgb(122, 168, 103)") {
			word11 = 1;
		}
		if (document.getElementById("row1col1").style.backgroundColor == "rgb(197, 181, 95)") {
			word11 = 0;
		}
		if (document.getElementById("row1col2").style.backgroundColor == "") {
			word12 = 2;
		}
		if (document.getElementById("row1col2").style.backgroundColor == "rgb(122, 168, 103)") {
			word12 = 1;
		}
		if (document.getElementById("row1col2").style.backgroundColor == "rgb(197, 181, 95)") {
			word12 = 0;
		}
		if (document.getElementById("row1col3").style.backgroundColor == "") {
			word13 = 2;
		}
		if (document.getElementById("row1col3").style.backgroundColor == "rgb(122, 168, 103)") {
			word13 = 1;
		}
		if (document.getElementById("row1col3").style.backgroundColor == "rgb(197, 181, 95)") {
			word13 = 0;
		}
		if (document.getElementById("row1col4").style.backgroundColor == "") {
			word14 = 2;
		}
		if (document.getElementById("row1col4").style.backgroundColor == "rgb(122, 168, 103)") {
			word14 = 1;
		}
		if (document.getElementById("row1col4").style.backgroundColor == "rgb(197, 181, 95)") {
			word14 = 0;
		}
		if (document.getElementById("row1col5").style.backgroundColor == "") {
			word15 = 2;
		}
		if (document.getElementById("row1col5").style.backgroundColor == "rgb(122, 168, 103)") {
			word15 = 1;
		}
		if (document.getElementById("row1col5").style.backgroundColor == "rgb(197, 181, 95)") {
			word15 = 0;
		}
		if (document.getElementById("row2col1").style.backgroundColor == "") {
			word21 = 2;
		}
		if (document.getElementById("row2col1").style.backgroundColor == "rgb(122, 168, 103)") {
			word21 = 1;
		}
		if (document.getElementById("row2col1").style.backgroundColor == "rgb(197, 181, 95)") {
			word21 = 0;
		}
		if (document.getElementById("row2col2").style.backgroundColor == "") {
			word22 = 2;
		}
		if (document.getElementById("row2col2").style.backgroundColor == "rgb(122, 168, 103)") {
			word22 = 1;
		}
		if (document.getElementById("row2col2").style.backgroundColor == "rgb(197, 181, 95)") {
			word22 = 0;
		}
		if (document.getElementById("row2col3").style.backgroundColor == "") {
			word23 = 2;
		}
		if (document.getElementById("row2col3").style.backgroundColor == "rgb(122, 168, 103)") {
			word23 = 1;
		}
		if (document.getElementById("row2col3").style.backgroundColor == "rgb(197, 181, 95)") {
			word23 = 0;
		}
		if (document.getElementById("row2col4").style.backgroundColor == "") {
			word24 = 2;
		}
		if (document.getElementById("row2col4").style.backgroundColor == "rgb(122, 168, 103)") {
			word24 = 1;
		}
		if (document.getElementById("row2col4").style.backgroundColor == "rgb(197, 181, 95)") {
			word24 = 0;
		}
		if (document.getElementById("row2col5").style.backgroundColor == "") {
			word25 = 2;
		}
		if (document.getElementById("row2col5").style.backgroundColor == "rgb(122, 168, 103)") {
			word25 = 1;
		}
		if (document.getElementById("row2col5").style.backgroundColor == "rgb(197, 181, 95)") {
			word25 = 0;
		}
		if (document.getElementById("row3col1").style.backgroundColor == "") {
			word31 = 2;
		}
		if (document.getElementById("row3col1").style.backgroundColor == "rgb(122, 168, 103)") {
			word31 = 1;
		}
		if (document.getElementById("row3col1").style.backgroundColor == "rgb(197, 181, 95)") {
			word31 = 0;
		}
		if (document.getElementById("row3col2").style.backgroundColor == "") {
			word32 = 2;
		}
		if (document.getElementById("row3col2").style.backgroundColor == "rgb(122, 168, 103)") {
			word32 = 1;
		}
		if (document.getElementById("row3col2").style.backgroundColor == "rgb(197, 181, 95)") {
			word32 = 0;
		}
		if (document.getElementById("row3col3").style.backgroundColor == "") {
			word33 = 2;
		}
		if (document.getElementById("row3col3").style.backgroundColor == "rgb(122, 168, 103)") {
			word33 = 1;
		}
		if (document.getElementById("row3col3").style.backgroundColor == "rgb(197, 181, 95)") {
			word33 = 0;
		}
		if (document.getElementById("row3col4").style.backgroundColor == "") {
			word34 = 2;
		}
		if (document.getElementById("row3col4").style.backgroundColor == "rgb(122, 168, 103)") {
			word34 = 1;
		}
		if (document.getElementById("row3col4").style.backgroundColor == "rgb(197, 181, 95)") {
			word34 = 0;
		}
		if (document.getElementById("row3col5").style.backgroundColor == "") {
			word35 = 2;
		}
		if (document.getElementById("row3col5").style.backgroundColor == "rgb(122, 168, 103)") {
			word35 = 1;
		}
		if (document.getElementById("row3col5").style.backgroundColor == "rgb(197, 181, 95)") {
			word35 = 0;
		}
		if (document.getElementById("row4col1").style.backgroundColor == "") {
			word41 = 2;
		}
		if (document.getElementById("row4col1").style.backgroundColor == "rgb(122, 168, 103)") {
			word41 = 1;
		}
		if (document.getElementById("row4col1").style.backgroundColor == "rgb(197, 181, 95)") {
			word41 = 0;
		}
		if (document.getElementById("row4col2").style.backgroundColor == "") {
			word42 = 2;
		}
		if (document.getElementById("row4col2").style.backgroundColor == "rgb(122, 168, 103)") {
			word42 = 1;
		}
		if (document.getElementById("row4col2").style.backgroundColor == "rgb(197, 181, 95)") {
			word42 = 0;
		}
		if (document.getElementById("row4col3").style.backgroundColor == "") {
			word43 = 2;
		}
		if (document.getElementById("row4col3").style.backgroundColor == "rgb(122, 168, 103)") {
			word43 = 1;
		}
		if (document.getElementById("row4col3").style.backgroundColor == "rgb(197, 181, 95)") {
			word43 = 0;
		}
		if (document.getElementById("row4col4").style.backgroundColor == "") {
			word44 = 2;
		}
		if (document.getElementById("row4col4").style.backgroundColor == "rgb(122, 168, 103)") {
			word44 = 1;
		}
		if (document.getElementById("row4col4").style.backgroundColor == "rgb(197, 181, 95)") {
			word44 = 0;
		}
		if (document.getElementById("row4col5").style.backgroundColor == "") {
			word45 = 2;
		}
		if (document.getElementById("row4col5").style.backgroundColor == "rgb(122, 168, 103)") {
			word45 = 1;
		}
		if (document.getElementById("row4col5").style.backgroundColor == "rgb(197, 181, 95)") {
			word45 = 0;
		}
		if (document.getElementById("row5col1").style.backgroundColor == "") {
			word51 = 2;
		}
		if (document.getElementById("row5col1").style.backgroundColor == "rgb(122, 168, 103)") {
			word51 = 1;
		}
		if (document.getElementById("row5col1").style.backgroundColor == "rgb(197, 181, 95)") {
			word51 = 0;
		}
		if (document.getElementById("row5col2").style.backgroundColor == "") {
			word52 = 2;
		}
		if (document.getElementById("row5col2").style.backgroundColor == "rgb(122, 168, 103)") {
			word52 = 1;
		}
		if (document.getElementById("row5col2").style.backgroundColor == "rgb(197, 181, 95)") {
			word52 = 0;
		}
		if (document.getElementById("row5col3").style.backgroundColor == "") {
			word53 = 2;
		}
		if (document.getElementById("row5col3").style.backgroundColor == "rgb(122, 168, 103)") {
			word53 = 1;
		}
		if (document.getElementById("row5col3").style.backgroundColor == "rgb(197, 181, 95)") {
			word53 = 0;
		}
		if (document.getElementById("row5col4").style.backgroundColor == "") {
			word54 = 2;
		}
		if (document.getElementById("row5col4").style.backgroundColor == "rgb(122, 168, 103)") {
			word54 = 1;
		}
		if (document.getElementById("row5col4").style.backgroundColor == "rgb(197, 181, 95)") {
			word54 = 0;
		}
		if (document.getElementById("row5col5").style.backgroundColor == "") {
			word55 = 2;
		}
		if (document.getElementById("row5col5").style.backgroundColor == "rgb(122, 168, 103)") {
			word55 = 1;
		}
		if (document.getElementById("row5col5").style.backgroundColor == "rgb(197, 181, 95)") {
			word55 = 0;
		}

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("cheatko_load").innerHTML = xmlhttp.responseText;
                var myDiv = document.getElementById("cheatko_load");
                var myscripts = myDiv.getElementsByTagName('script');
                for(var i=myscripts.length; i--;){
                    eval(myscripts[i].innerHTML);
                }
            }
        };
		if (arguments[0] == "en") {
        	xmlhttp.open("GET","cheatko-en.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&word3="+word3+"&word31="+word31+"&word32="+word32+"&word33="+word33+"&word34="+word34+"&word35="+word35+"&word4="+word4+"&word41="+word41+"&word42="+word42+"&word43="+word43+"&word44="+word44+"&word45="+word45+"&word5="+word5+"&word51="+word51+"&word52="+word52+"&word53="+word53+"&word54="+word54+"&word55="+word55+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "sr") {
        	xmlhttp.open("GET","cheatko-sr.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&word3="+word3+"&word31="+word31+"&word32="+word32+"&word33="+word33+"&word34="+word34+"&word35="+word35+"&word4="+word4+"&word41="+word41+"&word42="+word42+"&word43="+word43+"&word44="+word44+"&word45="+word45+"&word5="+word5+"&word51="+word51+"&word52="+word52+"&word53="+word53+"&word54="+word54+"&word55="+word55+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "mk") {
        	xmlhttp.open("GET","cheatko-mk.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&word3="+word3+"&word31="+word31+"&word32="+word32+"&word33="+word33+"&word34="+word34+"&word35="+word35+"&word4="+word4+"&word41="+word41+"&word42="+word42+"&word43="+word43+"&word44="+word44+"&word45="+word45+"&word5="+word5+"&word51="+word51+"&word52="+word52+"&word53="+word53+"&word54="+word54+"&word55="+word55+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "es") {
        	xmlhttp.open("GET","cheatko-es.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&word3="+word3+"&word31="+word31+"&word32="+word32+"&word33="+word33+"&word34="+word34+"&word35="+word35+"&word4="+word4+"&word41="+word41+"&word42="+word42+"&word43="+word43+"&word44="+word44+"&word45="+word45+"&word5="+word5+"&word51="+word51+"&word52="+word52+"&word53="+word53+"&word54="+word54+"&word55="+word55+"&freqID="+freq_id,true);
		}
		if (arguments[0] == "de") {
        	xmlhttp.open("GET","cheatko-de.php?word1="+word1+"&word11="+word11+"&word12="+word12+"&word13="+word13+"&word14="+word14+"&word15="+word15+"&word2="+word2+"&word21="+word21+"&word22="+word22+"&word23="+word23+"&word24="+word24+"&word25="+word25+"&word3="+word3+"&word31="+word31+"&word32="+word32+"&word33="+word33+"&word34="+word34+"&word35="+word35+"&word4="+word4+"&word41="+word41+"&word42="+word42+"&word43="+word43+"&word44="+word44+"&word45="+word45+"&word5="+word5+"&word51="+word51+"&word52="+word52+"&word53="+word53+"&word54="+word54+"&word55="+word55+"&freqID="+freq_id,true);
		}
        xmlhttp.send();
	}
}