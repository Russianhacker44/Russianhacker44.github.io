window.addEventListener("load", todaysDate, false);
function todaysDate(){
var currentTime = new Date();
var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();
var year = currentTime.getFullYear();

var completeDate = document.getElementById("footerSection");
footerSection.innerHMTL = "Today's Date: " +completeDate;
alert(month + "/" + day + "/" + year);

}
window.addEventListener("load", todaysDate, false);
