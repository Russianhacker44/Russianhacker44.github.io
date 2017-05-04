// START DATE SCRIPT

var showdate	= "yes"  	// SHOW THE DATE | yes | no |

   if (showdate === "yes") {
document.write('<div id="date-location">');
var d=new Date();
var weekday=new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
var monthname=new Array('January','February','March','April','May','June','July','August','September','October','November','December');
  var hourname=new Array('1', '2', '3','4','5','6','7','8','9','10','11','12');  
       var minutename=new Array('1', '2', '3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60');
      
document.write('<span class="date-font">' + weekday[d.getDay()] + ' ');
document.write(monthname[d.getMonth()] + ' ');
      
document.write(d.getDate() + '. ');
      document.write(hourname[d.getHours()] + ' ');
document.write(minutename[d.getminutes()] + ' ');
      
     
      
document.write(d.getFullYear())
document.write('<br></span>')
document.write('</div>');
}
