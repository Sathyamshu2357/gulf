var deviceis=2;

function defineCss() {
    let h = window.outerHeight;
    let w = window.outerWidth;

    if ((w > 1000 && w < 2100) && (h > 700 && h < 1200)) { 
        if (deviceis != 0) { deviceis = 0; changeCss(0); }
    } else { if (deviceis != 1) { deviceis = 1; changeCss(1); } }
}

function changeCss(value) {
    if (value == 0) { document.getElementById('csssheet').href = "css/desktop.css"; console.log("desktop view"); }
    else if (value == 1) { document.getElementById('csssheet').href = "css/mobile.css"; console.log("mobile view"); }
}

var pics = ["assets/slider1.jpg","assets/slider2.jpg","assets/slider3.jpg"]
var idx  = 0;

var intervals = function slideshow() {
    console.log("came here..");
    setInterval(function () {
    console.log(pics[idx]);
    document.getElementById("sliderid").src = pics[idx];
    idx += 1;
    idx %= 3;   
},3000)
}

function changeSlide(val) {
    clearInterval(intervals);
    idx = val;
    intervals;    
}
