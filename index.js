function listPalindrome(){
    
    for(var i =99; i>10; i--){
        for(var j = 99; j>10; j--){
          var multiply = (j*i);
          var n = multiply.toString().split("").reverse().join("");

            if(multiply == n){
              document.write(" " + multiply);
            }
         }   
     }
 }
listPalindrome();