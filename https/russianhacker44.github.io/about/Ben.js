var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
document.getElementById("Date").style.color = "blue";
document.getElementById("Date").style.font.size = "20px";
document.getElementById("Date").style.border = "1px solid #006699";
document.getElementById("Date").style.padding = "4px";
document.getElementById("Date").style.z.index = "2";
document.getElementById("Date").style.text.align = "center";
document.getElementById("Date").style.color = "#006699";
document.getElementById("Date").style.font = "20px arial, sans-serif";
document.getElementById("Date").style.font.weight = "bold";
