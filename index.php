<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>Siniša Šešlak's Cheatko for Wordle game</title>
	<meta name="author" content="Siniša Šešlak">
    <meta content="Simple solving algorithm for Wordl game" name="description">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700|Abril+Fatface">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <!-- <link href="../../assets/css/style.css" rel="stylesheet"> -->
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet">
	<link rel="stylesheet" href="css/cheatko.css">
	<script src="cheatko.js"></script>
</head>
<body>
    <main id="main">
        <section>
            <div class="container" style="width:100%">
                <p>
                    <div class="usables_head">
                    	<usables-title><b>Cheatko:</b></usables-title><br><br>
                    	Simple python cheating algorithm for Wordle game (there are several languages available).<br>
						Use virtual keyboard on the bottom to type the word. Click or tap on fonts to change their color to yellow or green. Press <span class="glyphicon glyphicon-ok"></span> on keyboard on the bottom once again to send the word to computer for evaluation.<br><br>

						<i>Hint: progress bar next to the word suggests computer's preference for the next word (not always the best choice).</i><br>
						<i>Hint 2: check out the letters distribution matrix below the keyboard.</i><br><br>
						<div class="dropdown-select">
						<label for="versions">Choose version:</label>
							<select name="versions" id="versions" onchange="changeKeys(this.value)">
  								<option value="en">English (Wordle)</option>
  								<option value="de">German</option>
  								<option value="mk">Macedonian (Zborle)</option>
  								<option value="sr">Serbian (Rechko)</option>
  								<option value="es">Spanish</option>
							</select>
						</div><br><br>
                    </div>
					<div class="container" style="text-align:left;">
						<div class="loan_row">
							<div class="cheatko_column" style="width: 50%">
								<div id="gameBoard">
      								<!-- ROW 1-->
      								<input class="letterSquare" readonly maxlength="1" id="row1col1" onclick="colorThis('row1col1')" value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row1col2" onclick="colorThis('row1col2')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row1col3" onclick="colorThis('row1col3')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row1col4" onclick="colorThis('row1col4')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row1col5" onclick="colorThis('row1col5')"  value="" style="cursor: pointer;">
									</input>
      								<!-- ROW 2-->
      								<input class="letterSquare" readonly maxlength="1" id="row2col1" onclick="colorThis('row2col1')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row2col2" onclick="colorThis('row2col2')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row2col3" onclick="colorThis('row2col3')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row2col4" onclick="colorThis('row2col4')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row2col5" onclick="colorThis('row2col5')"  value="" style="cursor: pointer;">
									</input>

      								<!-- ROW 3-->
									<input class="letterSquare" readonly maxlength="1" id="row3col1" onclick="colorThis('row3col1')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row3col2" onclick="colorThis('row3col2')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row3col3" onclick="colorThis('row3col3')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row3col4" onclick="colorThis('row3col4')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row3col5" onclick="colorThis('row3col5')"  value="" style="cursor: pointer;">
									</input>
      								<!-- ROW 4-->
									<input class="letterSquare" readonly maxlength="1" id="row4col1" onclick="colorThis('row4col1')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row4col2" onclick="colorThis('row4col2')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row4col3" onclick="colorThis('row4col3')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row4col4" onclick="colorThis('row4col4')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row4col5" onclick="colorThis('row4col5')"  value="" style="cursor: pointer;">
									</input>
      								<!-- ROW 5-->
									<input class="letterSquare" readonly maxlength="1" id="row5col1" onclick="colorThis('row5col1')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row5col2" onclick="colorThis('row5col2')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row5col3" onclick="colorThis('row5col3')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row5col4" onclick="colorThis('row5col4')"  value="" style="cursor: pointer;">
									</input>
									<input class="letterSquare" readonly maxlength="1" id="row5col5" onclick="colorThis('row5col5')"  value="" style="cursor: pointer;">
									</input>
   								</div>
							</div>
							<div class="cheatko_column" style="width: 10%; text-align: left;">
								<div id="answBoard">
      								<!-- ROW 1-->
      								<div class="letterSquare" id="Xrow1col6">
									</div>
									<div class="letterSquare" id="Xrow2col6">
									</div>
									<div class="letterSquare" id="Xrow3col6">
									</div>
									<div class="letterSquare" id="Xrow4col6">
									</div>
									<div class="letterSquare" id="Xrow5col6">
									</div>
   								</div>
							</div>
							<div id="cheatko_load" class="cheatko_column results">
								<div id="loader" class="lds-facebook" style="display: none"><div></div><div></div><div></div>
								</div>
							</div>
						</div></br></br></br></br></br></br></br>
						<div id="keyboard" class="loan_row" style="vertical-align: top">
						<div class="resetboard">
						<p>
        					<button type="button" class="cheatko_resetbutton" onclick="resetBoard()">
          						<span class="glyphicon glyphicon-refresh"></span> Reset board
        					</button>
      					</p>
						</div>
							<div id="keys-sr" style="display: none">
								<div class="cheatko-keyboard-container">
									<div class="cheatko-keyboard-row">
										<button class="btn btn-default" value="Љ" onclick="typeWord(this.value)">Љ</button>
										<button class="btn btn-default" value="Њ" onclick="typeWord(this.value)">Њ</button>
										<button class="btn btn-default" value="Е" onclick="typeWord(this.value)">Е</button>
										<button class="btn btn-default" value="Р" onclick="typeWord(this.value)">Р</button>
										<button class="btn btn-default" value="Т" onclick="typeWord(this.value)">Т</button>
										<button class="btn btn-default" value="З" onclick="typeWord(this.value)">З</button>
										<button class="btn btn-default" value="У" onclick="typeWord(this.value)">У</button>
										<button class="btn btn-default" value="И" onclick="typeWord(this.value)">И</button>
										<button class="btn btn-default" value="О" onclick="typeWord(this.value)">О</button>
										<button class="btn btn-default" value="П" onclick="typeWord(this.value)">П</button>
										<button class="btn btn-default" value="Ш" onclick="typeWord(this.value)">Ш</button>
										<button class="btn btn-default" value="Ђ" onclick="typeWord(this.value)">Ђ</button>
									</div>
									<div class="cheatko-keyboard-row">
										<button class="btn btn-default" value="А" onclick="typeWord(this.value)">А</button>
										<button class="btn btn-default" value="С" onclick="typeWord(this.value)">С</button>
										<button class="btn btn-default" value="Д" onclick="typeWord(this.value)">Д</button>
										<button class="btn btn-default" value="Ф" onclick="typeWord(this.value)">Ф</button>
										<button class="btn btn-default" value="Г" onclick="typeWord(this.value)">Г</button>
										<button class="btn btn-default" value="Х" onclick="typeWord(this.value)">Х</button>
										<button class="btn btn-default" value="Ј" onclick="typeWord(this.value)">Ј</button>
										<button class="btn btn-default" value="К" onclick="typeWord(this.value)">К</button>
										<button class="btn btn-default" value="Л" onclick="typeWord(this.value)">Л</button>
										<button class="btn btn-default" value="Ч" onclick="typeWord(this.value)">Ч</button>
										<button class="btn btn-default" value="Ћ" onclick="typeWord(this.value)">Ћ</button>
										<button class="btn btn-default" value="Ж" onclick="typeWord(this.value)">Ж</button>
									</div>
									<div class="cheatko-keyboard-row">
										<button class="btn btn-default cheatko-keyboard-shift" onclick="loader.style.display = 'block'; getSolution(versions.value);"><span class="glyphicon glyphicon-ok"></span></button>
										<button class="btn btn-default" value="Џ" onclick="typeWord(this.value)">Џ</button>
										<button class="btn btn-default" value="Ц" onclick="typeWord(this.value)">Ц</button>
										<button class="btn btn-default" value="В" onclick="typeWord(this.value)">В</button>
										<button class="btn btn-default" value="Б" onclick="typeWord(this.value)">Б</button>
										<button class="btn btn-default" value="Н" onclick="typeWord(this.value)">Н</button>
										<button class="btn btn-default" value="М" onclick="typeWord(this.value)">М</button>
										<button class="btn btn-default cheatko-keyboard-del" value="del" onclick="delWord(this.value)"><span class="glyphicon glyphicon-arrow-left"></span></button>
									</div>
								</div>
							</div>
						   <div id="keys-en" style="display: block">
								<div class="cheatko-keyboard-container">
									<div class="cheatko-keyboard-row">
										<button class="btn btn-default" value="Q" onclick="typeWord(this.value)">Q</button>
										<button class="btn btn-default" value="W" onclick="typeWord(this.value)">W</button>
										<button class="btn btn-default" value="E" onclick="typeWord(this.value)">E</button>
										<button class="btn btn-default" value="R" onclick="typeWord(this.value)">R</button>
										<button class="btn btn-default" value="T" onclick="typeWord(this.value)">T</button>
										<button class="btn btn-default" value="Y" onclick="typeWord(this.value)">Y</button>
										<button class="btn btn-default" value="U" onclick="typeWord(this.value)">U</button>
										<button class="btn btn-default" value="I" onclick="typeWord(this.value)">I</button>
										<button class="btn btn-default" value="O" onclick="typeWord(this.value)">O</button>
										<button class="btn btn-default" value="P" onclick="typeWord(this.value)">P</button>
									</div>
									<div class="cheatko-keyboard-row">
										<button class="btn btn-default" value="A" onclick="typeWord(this.value)">A</button>
										<button class="btn btn-default" value="S" onclick="typeWord(this.value)">S</button>
										<button class="btn btn-default" value="D" onclick="typeWord(this.value)">D</button>
										<button class="btn btn-default" value="F" onclick="typeWord(this.value)">F</button>
										<button class="btn btn-default" value="G" onclick="typeWord(this.value)">G</button>
										<button class="btn btn-default" value="H" onclick="typeWord(this.value)">H</button>
										<button class="btn btn-default" value="J" onclick="typeWord(this.value)">J</button>
										<button class="btn btn-default" value="K" onclick="typeWord(this.value)">K</button>
										<button class="btn btn-default" value="L" onclick="typeWord(this.value)">L</button>
									</div>
									<div class="cheatko-keyboard-row">
										<button class="btn btn-default cheatko-keyboard-shift" onclick="loader.style.display = 'block'; getSolution(versions.value);"><span class="glyphicon glyphicon-ok"></span></button>
										<button class="btn btn-default" value="Z" onclick="typeWord(this.value)">Z</button>
										<button class="btn btn-default" value="X" onclick="typeWord(this.value)">X</button>
										<button class="btn btn-default" value="C" onclick="typeWord(this.value)">C</button>
										<button class="btn btn-default" value="V" onclick="typeWord(this.value)">V</button>
										<button class="btn btn-default" value="B" onclick="typeWord(this.value)">B</button>
										<button class="btn btn-default" value="N" onclick="typeWord(this.value)">N</button>
										<button class="btn btn-default" value="M" onclick="typeWord(this.value)">M</button>
										<button class="btn btn-default cheatko-keyboard-del" value="del" onclick="delWord(this.value)"><span class="glyphicon glyphicon-arrow-left"></span></button>
									</div>
								</div>
							</div>
						   <div id="keys-mk" style="display: none">
								<div class="cheatko-keyboard-container">
									<div class="cheatko-keyboard-row">
										<button class="btn btn-default" value="Љ" onclick="typeWord(this.value)">Љ</button>
										<button class="btn btn-default" value="Њ" onclick="typeWord(this.value)">Њ</button>
										<button class="btn btn-default" value="Е" onclick="typeWord(this.value)">Е</button>
										<button class="btn btn-default" value="Р" onclick="typeWord(this.value)">Р</button>
										<button class="btn btn-default" value="Т" onclick="typeWord(this.value)">Т</button>
										<button class="btn btn-default" value="Ѕ" onclick="typeWord(this.value)">Ѕ</button>
										<button class="btn btn-default" value="У" onclick="typeWord(this.value)">У</button>
										<button class="btn btn-default" value="И" onclick="typeWord(this.value)">И</button>
										<button class="btn btn-default" value="О" onclick="typeWord(this.value)">О</button>
										<button class="btn btn-default" value="П" onclick="typeWord(this.value)">П</button>
										<button class="btn btn-default" value="Ш" onclick="typeWord(this.value)">Ш</button>
										<button class="btn btn-default" value="Ѓ" onclick="typeWord(this.value)">Ѓ</button>
									</div>
									<div class="cheatko-keyboard-row">
										<button class="btn btn-default" value="А" onclick="typeWord(this.value)">А</button>
										<button class="btn btn-default" value="С" onclick="typeWord(this.value)">С</button>
										<button class="btn btn-default" value="Д" onclick="typeWord(this.value)">Д</button>
										<button class="btn btn-default" value="Ф" onclick="typeWord(this.value)">Ф</button>
										<button class="btn btn-default" value="Г" onclick="typeWord(this.value)">Г</button>
										<button class="btn btn-default" value="Х" onclick="typeWord(this.value)">Х</button>
										<button class="btn btn-default" value="Ј" onclick="typeWord(this.value)">Ј</button>
										<button class="btn btn-default" value="К" onclick="typeWord(this.value)">К</button>
										<button class="btn btn-default" value="Л" onclick="typeWord(this.value)">Л</button>
										<button class="btn btn-default" value="Ч" onclick="typeWord(this.value)">Ч</button>
										<button class="btn btn-default" value="Ќ" onclick="typeWord(this.value)">Ќ</button>
										<button class="btn btn-default" value="Ж" onclick="typeWord(this.value)">Ж</button>
									</div>
									<div class="cheatko-keyboard-row">
										<button class="btn btn-default cheatko-keyboard-shift" onclick="loader.style.display = 'block'; getSolution(versions.value);"><span class="glyphicon glyphicon-ok"></span></button>
										<button class="btn btn-default" value="З" onclick="typeWord(this.value)">З</button>
										<button class="btn btn-default" value="Џ" onclick="typeWord(this.value)">Џ</button>
										<button class="btn btn-default" value="Ц" onclick="typeWord(this.value)">Ц</button>
										<button class="btn btn-default" value="В" onclick="typeWord(this.value)">В</button>
										<button class="btn btn-default" value="Б" onclick="typeWord(this.value)">Б</button>
										<button class="btn btn-default" value="Н" onclick="typeWord(this.value)">Н</button>
										<button class="btn btn-default" value="М" onclick="typeWord(this.value)">М</button>
										<button class="btn btn-default cheatko-keyboard-del" value="del" onclick="delWord(this.value)"><span class="glyphicon glyphicon-arrow-left"></span></button>
									</div>
								</div>
							</div>
							<div id="keys-es" style="display: none">
								<div class="cheatko-keyboard-container">
									<div class="cheatko-keyboard-row">
										<button class="btn btn-default" value="Q" onclick="typeWord(this.value)">Q</button>
										<button class="btn btn-default" value="W" onclick="typeWord(this.value)">W</button>
										<button class="btn btn-default" value="E" onclick="typeWord(this.value)">E</button>
										<button class="btn btn-default" value="É" onclick="typeWord(this.value)">É</button>
										<button class="btn btn-default" value="R" onclick="typeWord(this.value)">R</button>
										<button class="btn btn-default" value="T" onclick="typeWord(this.value)">T</button>
										<button class="btn btn-default" value="Y" onclick="typeWord(this.value)">Y</button>
										<button class="btn btn-default" value="U" onclick="typeWord(this.value)">U</button>
										<button class="btn btn-default" value="Ú" onclick="typeWord(this.value)">Ú</button>
										<button class="btn btn-default" value="I" onclick="typeWord(this.value)">I</button>
										<button class="btn btn-default" value="O" onclick="typeWord(this.value)">O</button>
										<button class="btn btn-default" value="P" onclick="typeWord(this.value)">P</button>
									</div>
									<div class="cheatko-keyboard-row">
										<button class="btn btn-default" value="A" onclick="typeWord(this.value)">A</button>
										<button class="btn btn-default" value="Á" onclick="typeWord(this.value)">Á</button>
										<button class="btn btn-default" value="S" onclick="typeWord(this.value)">S</button>
										<button class="btn btn-default" value="D" onclick="typeWord(this.value)">D</button>
										<button class="btn btn-default" value="F" onclick="typeWord(this.value)">F</button>
										<button class="btn btn-default" value="G" onclick="typeWord(this.value)">G</button>
										<button class="btn btn-default" value="H" onclick="typeWord(this.value)">H</button>
										<button class="btn btn-default" value="J" onclick="typeWord(this.value)">J</button>
										<button class="btn btn-default" value="Ü" onclick="typeWord(this.value)">Ü</button>
										<button class="btn btn-default" value="K" onclick="typeWord(this.value)">K</button>
										<button class="btn btn-default" value="L" onclick="typeWord(this.value)">L</button>
										<button class="btn btn-default" value="Ñ" onclick="typeWord(this.value)">Ñ</button>
									</div>
									<div class="cheatko-keyboard-row">
										<button class="btn btn-default cheatko-keyboard-shift" onclick="loader.style.display = 'block'; getSolution(versions.value);"><span class="glyphicon glyphicon-ok"></span></button>
										<button class="btn btn-default" value="Z" onclick="typeWord(this.value)">Z</button>
										<button class="btn btn-default" value="X" onclick="typeWord(this.value)">X</button>
										<button class="btn btn-default" value="C" onclick="typeWord(this.value)">C</button>
										<button class="btn btn-default" value="V" onclick="typeWord(this.value)">V</button>
										<button class="btn btn-default" value="B" onclick="typeWord(this.value)">B</button>
										<button class="btn btn-default" value="N" onclick="typeWord(this.value)">N</button>
										<button class="btn btn-default" value="M" onclick="typeWord(this.value)">M</button>
										<button class="btn btn-default" value="Í" onclick="typeWord(this.value)">Í</button>
										<button class="btn btn-default" value="Ó" onclick="typeWord(this.value)">Ó</button>
										<button class="btn btn-default cheatko-keyboard-del" value="del" onclick="delWord(this.value)"><span class="glyphicon glyphicon-arrow-left"></span></button>
									</div>
								</div>
							</div>
							<div id="keys-de" style="display: none">
								<div class="cheatko-keyboard-container">
									<div class="cheatko-keyboard-row">
										<button class="btn btn-default" value="Q" onclick="typeWord(this.value)">Q</button>
										<button class="btn btn-default" value="W" onclick="typeWord(this.value)">W</button>
										<button class="btn btn-default" value="E" onclick="typeWord(this.value)">E</button>
										<button class="btn btn-default" value="R" onclick="typeWord(this.value)">R</button>
										<button class="btn btn-default" value="T" onclick="typeWord(this.value)">T</button>
										<button class="btn btn-default" value="Z" onclick="typeWord(this.value)">Z</button>
										<button class="btn btn-default" value="U" onclick="typeWord(this.value)">U</button>
										<button class="btn btn-default" value="I" onclick="typeWord(this.value)">I</button>
										<button class="btn btn-default" value="O" onclick="typeWord(this.value)">O</button>
										<button class="btn btn-default" value="P" onclick="typeWord(this.value)">P</button>
										<button class="btn btn-default" value="Ü" onclick="typeWord(this.value)">Ü</button>
									</div>
									<div class="cheatko-keyboard-row">
										<button class="btn btn-default" value="A" onclick="typeWord(this.value)">A</button>
										<button class="btn btn-default" value="S" onclick="typeWord(this.value)">S</button>
										<button class="btn btn-default" value="D" onclick="typeWord(this.value)">D</button>
										<button class="btn btn-default" value="F" onclick="typeWord(this.value)">F</button>
										<button class="btn btn-default" value="G" onclick="typeWord(this.value)">G</button>
										<button class="btn btn-default" value="H" onclick="typeWord(this.value)">H</button>
										<button class="btn btn-default" value="J" onclick="typeWord(this.value)">J</button>
										<button class="btn btn-default" value="K" onclick="typeWord(this.value)">K</button>
										<button class="btn btn-default" value="L" onclick="typeWord(this.value)">L</button>
										<button class="btn btn-default" value="Ö" onclick="typeWord(this.value)">Ö</button>
										<button class="btn btn-default" value="Ä" onclick="typeWord(this.value)">Ä</button>
									</div>
									<div class="cheatko-keyboard-row">
										<button class="btn btn-default cheatko-keyboard-shift" onclick="loader.style.display = 'block'; getSolution(versions.value);"><span class="glyphicon glyphicon-ok"></span></button>
										<button class="btn btn-default" value="Y" onclick="typeWord(this.value)">Y</button>
										<button class="btn btn-default" value="X" onclick="typeWord(this.value)">X</button>
										<button class="btn btn-default" value="C" onclick="typeWord(this.value)">C</button>
										<button class="btn btn-default" value="V" onclick="typeWord(this.value)">V</button>
										<button class="btn btn-default" value="B" onclick="typeWord(this.value)">B</button>
										<button class="btn btn-default" value="N" onclick="typeWord(this.value)">N</button>
										<button class="btn btn-default" value="M" onclick="typeWord(this.value)">M</button>
										<button class="btn btn-default" value="ß" onclick="typeWord(this.value)">ß</button>
										<button class="btn btn-default cheatko-keyboard-del" value="del" onclick="delWord(this.value)"><span class="glyphicon glyphicon-arrow-left"></span></button>
									</div>
								</div>
							</div>
							<br>
							<br>
							<div id="freq" style="display: block">
							<div id="freqHead" class="freqHead">
								<span onclick="showFreq()" style="cursor: pointer; font-size: 16px;">For geeks: frequency matrix <i class="glyphicon glyphicon-th"></i> [CLICK]</span>
							</div>
								<div id="freqMatrix" class="freq matrix" style="display: none; width: 100%">
								<!-- <div id="loader" class="lds-facebook" style="display: block"><div></div><div></div><div></div> -->
								</div>
								</div>
							</div>
	   					</div>
					</div>                            
				</p>                                
			</div>
        </section>
                        </main>
                        <div id="ID_input">
	                        <script src="//code.jquery.com/jquery-1.10.2.js"></script>
	                        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
							<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
							<script>
								$(window).load(function() {
     								freqLoad(versions.value);
								});
							</script>
                    </body>
                </html>


