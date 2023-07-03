// // rem.js
// (function (doc, win) {
//  var doc = win.document;
//  var docEl = doc.documentElement;
//  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
//  recalc = function () {
// //在以下横线中填写，如何宽度大于720那就按720执行，否则按实际宽
// var clientWidth = docEl.clientWidth;
//  // var clientWidth = ______(10)________;
//  var clientWidth = docEl.clientWidth;
//  if (!clientWidth) return;
//  docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
//  };

//  if (!doc.addEventListener) return;
//  win.addEventListener(resizeEvt, recalc, false);
//  doc.addEventListener('DOMContentLoaded', recalc, false);
// })(750, 750);

// rem.js
// (function(win) {
//     var doc = win.document;
//     var docEl = doc.documentElement;
//     var tid;
//     function refreshRem() {
//         var width = docEl.getBoundingClientRect().width; //注释1
//         var rem = width / 16; //注释2
//         docEl.style.fontSize = rem + 'px';
//         document.getElementsByTagName("html")[0].style.cssText = 'font-size: ' + rem +"px";
//         if(parseInt(rem) != parseInt(getComputedStyle(document.getElementsByTagName("html")[0]).fontSize)){ //注释3     
//             var remtrue = rem*(rem/parseInt(getComputedStyle(document.getElementsByTagName("html")[0]).fontSize));
//             docEl.style.fontSize = remtrue + 'px';
//             document.getElementsByTagName("html")[0].style.cssText = 'font-size: ' + remtrue +"px";
//         }
//     }
//     win.addEventListener('resize', function() { //注释4
//         clearTimeout(tid);
//         tid = setTimeout(refreshRem, 300);
//     }, false);
//     win.addEventListener('pageshow', function(e) { //注释5
//         if (e.persisted) {
//             clearTimeout(tid);
//             tid = setTimeout(refreshRem, 300);
//         }
//     }, false);
//     refreshRem();
//     document.addEventListener('DOMContentLoaded', refreshRem, false); //注释6
// })(window);

//designWidth:设计稿的实际宽度值，需要根据实际设置
//maxWidth:制作稿的最大宽度值，需要根据实际设置
//这段js的最后面有两个参数记得要设置，一个为设计稿实际宽度，一个为制作稿最大宽度，例如设计稿为750，最大宽度为750，则为(750,750)
// (function(designWidth, maxWidth) {
// 	var doc = document,
// 	win = window,
// 	docEl = doc.documentElement,
// 	remStyle = document.createElement("style"),
// 	tid;

// 	function refreshRem() {
// 		var width = docEl.getBoundingClientRect().width;
// 		maxWidth = maxWidth = 540;
// 		width>maxWidth && (width=maxWidth);
// 		var rem = width * 100 / designWidth;
// 		remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
// 	}

// 	if (docEl.firstElementChild) {
// 		docEl.firstElementChild.appendChild(remStyle);
// 	} else {
// 		var wrap = doc.createElement("div");
// 		wrap.appendChild(remStyle);
// 		doc.write(wrap.innerHTML);
// 		wrap = null;
// 	}
// 	//要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
// 	refreshRem();

// 	win.addEventListener("resize", function() {
// 		clearTimeout(tid); //防止执行两次
// 		tid = setTimeout(refreshRem, 300);
// 	}, false);

// 	win.addEventListener("pageshow", function(e) {
// 		if (e.persisted) { // 浏览器后退的时候重新计算
// 			clearTimeout(tid);
// 			tid = setTimeout(refreshRem, 300);
// 		}
// 	}, false);

// 	if (doc.readyState === "complete") {
// 		doc.body.style.fontSize = "16px";
// 	} else {
// 		doc.addEventListener("DOMContentLoaded", function(e) {
// 			doc.body.style.fontSize = "16px";
// 		}, false);
// 	}
// })(750, 750);


!(function() {
		var ie = !!(window.attachEvent && !window.opera);
		var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
		var fn = [];
		var run = function() {
			for (var i = 0; i < fn.length; i++) fn[i]();
		};
		var d = document;
		d.ready = function(f) {
			if (!ie && !wk && d.addEventListener)
				return d.addEventListener('DOMContentLoaded', f, false);
			if (fn.push(f) > 1) return;
			if (ie)
				(function() {
					try {
						d.documentElement.doScroll('left');
						run();
					} catch (err) {
						setTimeout(arguments.callee, 0);
					}
				})();
			else if (wk)
				var t = setInterval(function() {
					if (/^(loaded|complete)$/.test(d.readyState))
						clearInterval(t), run();
				}, 0);
		};
	})();
	//
	 document.ready(function(){
			// window.innerWidth
			var whei = document.body.clientWidth;
			document.querySelector('html').style.fontSize = (whei / 90) + "px"
			window.addEventListener('resize', function() {
				var whei = document.body.clientWidth;
				document.querySelector('html').style.fontSize = (whei / 90) + "px"
			})
		})