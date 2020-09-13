<html>
 <body>
 
  <p id = "myid1">_</p>
  <p id = "myid2">_</p>
  <input type="button"_id="myid1" value="Click" onclick="myfunc()">
  <input type="button"_id="myid2" value="Click2" onclick="myfunc2()">
 
  <script>
   var myfunc = function(){
   var myp = document.getElementById("myid1");
   myp.innerHTML = "♥";
 
   myp.style = "color:red;font-size:60px;";
   }
   var myfunc2 = function(){
   var myp2 = document.getElementById("myid2");
   myp2.innerHTML = "♥";
 
   myp2.style = "color:red;font-size:60px;";
   }
   
  </script>
 
 </body>
</html>
