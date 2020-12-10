/* with a help of w3schools tutorials - querySelectorAll & display text with checkbox */
function bookingFunction() {
    var checkBox = document.querySelector("#bookingCheckbox");
    var text = document.querySelectorAll("#booking-display");
    var hide = document.querySelectorAll("#booking-hide");
    var i;
    if (checkBox.checked === true){
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
  
/* Contact us submit alert */ 
function formSubmitAlert() {
    var checkBox = document.querySelector("#bookingCheckbox");
    if (checkBox.checked === false) {
    alert("Your message has been sent.");
  }
else {
    alert("Thank you for your booking. You will receive confirmation via email.");

    }
}