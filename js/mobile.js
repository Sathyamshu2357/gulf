function menuBar() {
    var buttons = document.getElementsByClassName("mobile-page-button");

    console.log(buttons[2].style.display);
    if(buttons[2].style.display != "block") {
        for(var each=0; each<6; each++) {
            buttons[each].style.display = "block";
        }
    } else {
        for(var each=0; each<6; each++) {
            buttons[each].style.display = "none";
        }
    }

}