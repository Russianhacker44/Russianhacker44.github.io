var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
document.getElementById("d").style.color = "blue";
document.getElementById("d").style.font.size = "20px";
document.getElementById("d").style.border = "1px solid #006699";
document.getElementById("d").style.padding = "4px";
document.getElementById("d").style.z.index = "2";
document.getElementById("d").style.text.align = "center";
document.getElementById("d").style.color = "#006699";
document.getElementById("d").style.font = "20px arial, sans-serif";
document.getElementById("d").style.font.weight = "bold";
