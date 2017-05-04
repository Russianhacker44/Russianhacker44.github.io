// START DATE SCRIPT

var showdate	= "yes"  	// SHOW THE DATE | yes | no |

   if (showdate == "yes") {
document.write('<div id="date-location">');
var d=new Date();
var weekday=new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
var monthname=new Array('January','February','March','April','May','June','July','August','September','October','November','December');
document.write('<span class="date-font">' + weekday[d.getDay()] + ' ');
document.write(monthname[d.getMonth()] + ' ');
document.write(d.getDate() + '. ');
document.write(d.getFullYear())
document.write('<br></span>')
document.write('</div>');
}
