//javascript Diamond
<script>

      function printDiamond(n) {
        var space = n - 1;

        for (var i = 0; i < n; i++) {

          for (var j = 0; j < space; j++) document.write("&nbsp;&nbsp;");

          for (var j = 0; j <= i; j++) document.write("*" + "&nbsp;&nbsp;");

          document.write("<br>");
          space--;
        }

        space = 0;

        for (var i = n; i > 0; i--) 
        {
        
          for (var j = 0; j < space; j++) document.write("&nbsp;&nbsp;");

          for (var j = 0; j < i; j++) document.write("*" + "&nbsp;&nbsp;");

          document.write("<br>");
          space++;
        }
      }

      printDiamond(5);
      
    </script>


