<!DOCTYPE html>
<html>
<head>
	<title>Photo editor</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div id="input_div"></div>
<img id="image" />
<hr />

<div id="editor">
<ul>
	<li>Kontrast: <input type="range" min="0" max="200" default="100" id="contrast" onchange="editor.change_contrast()"></input></li>
	<li>Saturácia: <input type="range" min="0" max="200" default="100" id="saturation" onchange="editor.change_saturation()"></input></li>
	<li>Hue rotate: <input type="range" min="0" max="360" default="0" id="hue-rotate" onchange="editor.change_huerotate()"></input></li>
	<li>Blur: <input type="range" min="0" max="10" step="0.001" default="0" id="blur" onchange="editor.change_blur()"></input></li>
</ul>
</div>
<script type="text/javascript" src="script.js"></script>
</body>
</html>
