// iPhone model checks.
function getiPhoneModel() {
	// Get renderer info from cavas.
	var canvas = document.createElement("canvas");
	if (canvas) {
		var context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
		if (context) {
			var info = context.getExtension("WEBGL_debug_renderer_info");
			if (info) {
				var renderer = context.getParameter(info.UNMASKED_RENDERER_WEBGL);
			}
		}
	}
	var ratio = window.devicePixelRatio;
	// iPhone XR, iPhone XS Max
	if (window.screen.height / window.screen.width == 896 / 414) {
		switch (ratio) {
		default:
			return "iPhone XR, iPhone XS Max";
		case 2:
			return "iPhone XR";
		case 3:
			return "iPhone XS Max";
		}
	}
	// iPhone X, iPhone XS
	else if (window.screen.height / window.screen.width == 812 / 375) {
		switch (renderer) {
		default:
			return "iPhone X, iPhone XS";
		case "Apple A11 GPU":
			return "iPhone X";
		case "Apple A12 GPU":
			return "iPhone XS";
		}
	}
	// iPhone 6+, iPhone 6s+, iPhone 7+, iPhone 8+
	else if (window.screen.height / window.screen.width == 736 / 414) {
		switch (renderer) {
		default:
			return "iPhone 6 Plus, 6s Plus, 7 Plus or 8 Plus";
		case "Apple A8 GPU":
			return "iPhone 6 Plus";
		case "Apple A9 GPU":
			return "iPhone 6s Plus";
		case "Apple A10 GPU":
			return "iPhone 7 Plus";
		case "Apple A11 GPU":
			return "iPhone 8 Plus";
		}
	}
	// iPhone 6, iPhone 6s, iPhone 7, iPhone 8
	else if (window.screen.height / window.screen.width == 667 / 375) {
		if (ratio == 2) {
			switch (renderer) {
			default:
				return "iPhone 6, 6s, 7 or 8";
			case "Apple A8 GPU":
				return "iPhone 6";
			case "Apple A9 GPU":
				return "iPhone 6s";
			case "Apple A10 GPU":
				return "iPhone 7";
			case "Apple A11 GPU":
				return "iPhone 8";
			}
		} else {
			// or in zoom mode: iPhone 6+, iPhone 6S+, iPhone 7+, iPhone 8+
			switch (renderer) {
			default:
				return "iPhone 6 Plus, 6s Plus , 7 Plus or 8 Plus (display zoom)";
			case "Apple A8 GPU":
				return "iPhone 6 Plus (display zoom)";
			case "Apple A9 GPU":
				return "iPhone 6s Plus (display zoom)";
			case "Apple A10 GPU":
				return "iPhone 7 Plus (display zoom)";
			case "Apple A11 GPU":
				return "iPhone 8 Plus (display zoom)";
			}
		}
	}
	// iPhone 5, iPhone 5C, iPhone 5S, iPhone SE
	// or in zoom mode: iPhone 5, iPhone 5C, iPhone 5S, iPhone SE, iPhone 6, iPhone 6S, iPhone 7 or iPhone 8
	else if (window.screen.height / window.screen.width == 1.775) {
		switch (renderer) {
		default:
			return "iPhone 5, 5C, 5S, SE or 6, 6s, 7 and 8 (display zoom)";
		case "PowerVR SGX 543":
			return "iPhone 5 or 5c";
		case "Apple A7 GPU":
			return "iPhone 5s";
		case "Apple A8 GPU":
			return "iPhone 6 (display zoom)"
		case "Apple A9 GPU":
			return "iPhone SE or 6s (display zoom)";
		case "Apple A10 GPU":
			return "iPhone 7 (display zoom)";
		case "Apple A11 GPU":
			return "iPhone 8 (display zoom)";
		}
	}
	// iPhone 4 or 4s
	else if ((window.screen.height / window.screen.width == 1.5) && (ratio == 2)) {
		switch (renderer) {
		default:
			return "iPhone 4 or 4s";
		case "PowerVR SGX 535":
			return "iPhone 4";
		case "PowerVR SGX 543":
			return "iPhone 4s";
		}
	}
	// iPhone 1, 3G or 3GS
	else if ((window.screen.height / window.screen.width == 1.5) && (ratio == 1)) {
		switch (renderer) {
		default:
			return "iPhone 1, 3G or 3GS";
		case "ALP0298C05":
			return "iPhone 3GS";
		case "S5L8900":
			return "iPhone 1, 3G";
		}
  // Not an iPhone.
	} else {
		return "Not an iPhone";
	}
}