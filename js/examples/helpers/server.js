
function includeHTML() {
 var z, i, elmnt, file, xhttp;

 // Step 1
 z = document.getElementsByTagName("*");
 for (i = 0; i < z.length; i++) {
   elmnt = z[i];

   // Step 2
   file = elmnt.getAttribute("templateX");
   if (file) {
     // Step 3
     xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function () {
       if (this.readyState == 4) {
         if (this.status == 200) {
           elmnt.innerHTML = this.responseText;
         }
         if (this.status == 400) {
           elmnt.innerHTML = "Sorry page was not found";
         }
         // Step 4
         elmnt.removeAttribute("templateX");
         includeHTML();
       }
     };
     xhttp.open("GET", file, true);
     xhttp.send();
     return;
   }
 }
}
includeHTML();
