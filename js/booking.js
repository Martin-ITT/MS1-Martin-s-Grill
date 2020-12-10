function bookingFunction() {
    var checkBox = document.querySelector("#bookingCheckbox");
    var text = document.querySelectorAll("#booking-display");
    var hide = document.querySelectorAll("#booking-hide")
    if (checkBox.checked == true){
        for (i = 0; i < text.length; i++) {
        text[i].style.display = "block";
        }
        for (i = 0; i < hide.length; i++) {
            hide[i].style.display = "none";
            }
    }
    else {
        for (i = 0; i < text.length; i++) {
            text[i].style.display = "none";
        }
        for (i = 0; i < hide.length; i++) {
            hide[i].style.display = "block";
            }
    }
  }