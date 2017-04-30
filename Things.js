





var d = new Date();
var day = d.getDate();
var month = d.getMonth()+1;

if(day < 10){
    day = "0"+d.getDate();
}

if(month < 10){
    month = "0"+eval(d.getMonth()+1);
}

var date = day+"."+month+"."+d.getFullYear();
document.getElementById('date').innerHTML = date;
