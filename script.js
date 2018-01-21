window.onload = function() {
	document.getElementById("contrast").value = 100;
	document.getElementById("saturation").value = 100;
	document.getElementById("hue-rotate").value = 0;
	document.getElementById("blur").value = 0;
}

class Editor {
	constructor() {
		this.contrast = 0;
		this.saturation = 0;
		this.huerotate = 0;
		this.blur = 0;
		this.image = document.getElementById("image");
		this.input_div = document.getElementById("input_div");

		if (this.image.src == "") {
			this.display_form();
		}
	}

	init() {
		this.change_contrast();
		this.change_saturation();
		this.change_huerotate();
		this.change_blur();
	}

	display_form() {
		this.input_div.innerHTML = "<input id='input' type='file'></input>";
	}


	change_contrast() {
		this.contrast = document.getElementById("contrast").value;
		this.change();
	}

	change_saturation() {
		this.saturation = document.getElementById("saturation").value;
		this.change();
	}

	change_huerotate() {
		this.huerotate = document.getElementById("hue-rotate").value;
		this.change();
	}

	change_blur() {
		this.blur = document.getElementById("blur").value;
		this.change();
	}

	change() {
		this.image.style.filter = 
		"contrast(" + this.contrast + "%)" +
		"saturate(" + this.saturation + "%)" +
		"hue-rotate(" + this.huerotate + "deg)" +
		"blur(" + this.blur + "px)";
	}
}

let editor = new Editor();

//Show image
document.getElementById('input').onchange = function (evt) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById("image").src = fr.result;
            editor.init();
            editor.change();
        }
        fr.readAsDataURL(files[0]);
    }
}

/*let before_style;

function contrast() {
	before_style = document.getElementById("image").style.filter;
	console.log(before_style);
	let contrast_value = document.getElementById("contrast").value;
	document.getElementById("image").style.filter += "contrast(" + contrast_value + "%)";
}

function saturation() {
	before_style = document.getElementById("image").style.filter;
	console.log(before_style);
	let saturation_value = document.getElementById("saturation").value;
	document.getElementById("image").style.filter += "saturate(" + saturation_value + "%)";	
}

function hue_rotate() {
	before_style = document.getElementById("image").style.filter;
	console.log(before_style);
	let hue_rotate_value = document.getElementById("hue-rotate").value;
	document.getElementById("image").style.filter += "hue-rotate(" + hue_rotate_value + "deg)";
}*/