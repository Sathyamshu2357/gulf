var deviceis;

function defineCss() {
    let h = window.outerHeight;
    let w = window.outerWidth;

    if ((w > 1000 && w < 2100) && (h > 700 && h < 1200)) { 
        if (deviceis != 0) { deviceis = 0; changeCss(0); }
    } else { if (deviceis != 1) { deviceis = 1; changeCss(1); } }
}

function changeCss(value) {
    if (value == 0) { document.getElementById('csssheet').href = "css/desktop.css"; }
    else if (value == 1) { document.getElementById('csssheet').href = "css/mobile.css"; }
}
