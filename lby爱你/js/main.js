var tempFontSize = 200,
	tempDotRadius = 4,
	tempDotDistance = 10;
function getProperFont(length) {
	var windowWidth = getWindowWidth();
	var windowHeight = getWindowHeight();
	tempFontSize = (windowWidth) / (length - 6) >= 200 ? 200 : (windowWidth) / (length - 6);
	if (tempFontSize < 80) {
		tempDotRadius = 1;
	} else if (tempFontSize < 100) {
		tempDotRadius = 2;
	} else if (tempFontSize < 150) {
		tempDotRadius = 3;
	} else {
		tempDotRadius = 4;
	}
	tempDotDistance = tempDotRadius * 2 + 2;

}
function getWindowWidth() {
	return document.body.clientWidth;
}
function getWindowHeight() {
	return document.body.clientHeight;
}
getProperFont(16);
var pc = new particleChar({ fontColor: "#76A4D4", fontSize: tempFontSize, dotRadius: tempDotRadius, dotDistance: tempDotDistance });
pc.queueCreate({
	text: "亲爱的冰冰阳阳💖",
	showTypeAfter: "top",
	showTime: 1800,
	v1: 0.15,
	waitTime: 0,
	callbackBefore: function () {
		document.body.scrollTop = 0;
	},
}, {
	text: "恭喜你！🥳",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#FF0000",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "开启了人生的2.0版本",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#0000FF",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
},
	{
		text: "20岁有着无限可能",
		showTypeBefore: "top",
		showOpen: false,
		fontColor: "#00FF00",
		showTime: 1200,
		callbackAfter: function () {
			document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
		}
	}, {
	text: "一切才刚刚开始😉",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#FFA500",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "精彩才刚刚开始",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#0000FF",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "生日快乐！",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#00FF00",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "爱你！❤️",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#FF0000",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
},
	// , {
	// 	text: "",
	// 	showOpen: false,
	// 	fontColor: "#ff6268",
	// 	yOffset: -0.5,
	// 	showNext: false,
	// 	showTypeBefore: "nearby",
	// 	callbackBefore: function () {
	// 		document.body.style.overflow = "auto";
	// 	}
	// }
);
window.onresize = function () {
	getProperFont(pc.getText().length);
	pc.setOption({ fontSize: tempFontSize, dotRadius: tempDotRadius, dotDistance: tempDotDistance });
	pc.repaint();
	if (document.body.style.overflow == "auto") {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
};
