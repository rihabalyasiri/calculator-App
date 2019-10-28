// when someone press on (-) should works
//when someone press (3.5.6) this  is wrong

// declaring the variables of the HTML elements
var result = document.querySelector('.result');


// making HTML Collection for the inputs to avoid making event for each one
var myCollection = document.getElementsByTagName('input');
console.log(myCollection)

var txt = " ";

// for loop to search through the buttons and find the right one that it clicked
for(var i = 0; i< myCollection.length ; i++) {

    // adding event for each one
    myCollection[i].addEventListener('click',function(e) {
        console.log(e)
   
        // function for showing the elements on the display
        function showing() {
            txt += e.target.defaultValue;
            result.innerHTML = txt;  
        }



        // making clear when the user press on C
        if(e.target.value == 'C') {
            txt = "";
            result.innerHTML = txt;
        }



        // showing the numbers when all the buttons pressed except (=)
        else if(e.target.value != '=') {

            // from here writing all the code to avoids errors
           
            // avoiding more than one dot pressing
            if(result.innerHTML.substr(result.innerHTML.length-1,1) == ".") {
                if(e.target.value != '.') {
                    showing();
                }else {
                    // not showing (.)
                }
                
                // checking if the result is empty or last index is one of the operators(+,-,*,/,..etc)
            }else if(result.innerHTML == "" || 
                result.innerHTML.substr(result.innerHTML.length-1,1) == '+' ||
                result.innerHTML.substr(result.innerHTML.length-1,1) == '-' ||
                result.innerHTML.substr(result.innerHTML.length-1,1) == '/' ||
                result.innerHTML.substr(result.innerHTML.length-1,1) == '*' ||
                result.innerHTML.substr(result.innerHTML.length-1,1) == 'ln' ||
                result.innerHTML.substr(result.innerHTML.length-1,1) == 'x²' || 
                result.innerHTML.substr(result.innerHTML.length-1,1) == '√' ) {

// when the above if true is and user pressed on the following operators will not show the vlue on result display
                if(e.target.defaultValue == '+' ||
                e.target.defaultValue == '-' ||
                e.target.defaultValue == '/'  ||
                e.target.defaultValue == '*'  ||
                e.target.defaultValue == 'ln' ||
                e.target.defaultValue == 'x²' ||
                e.target.defaultValue == '√' ||
                e.target.defaultValue == '=') {
                    // not showing +
                } else {
                    showing();
                }
            }
            

            // calculating the square
            else if(e.target.defaultValue == '√') {
                txt = result.innerHTML ** 0.5;
                result.innerHTML = txt;
            }
            
            // calculating hoch
            else if(e.target.defaultValue == 'x²') {
                txt = result.innerHTML ** 2;
                result.innerHTML = txt;
            }

           // calculating ln 
            else if(e.target.defaultValue == "ln") {
                txt = Math.log(result.innerHTML);
                result.innerHTML = txt;
            }
             
            else {
                showing();
            }
        }

         // (=) button pressing and getting the result from the operations
        else if(e.target.defaultValue == '=') {

            if(result.innerHTML == "") {
                if(result.innerHTML.substr(result.innerHTML.length-1,1) == '=') {
                    // not showing
                }
            }else {
                txt = eval(result.innerHTML);
                result.innerHTML = txt;
            }
        } 

    });
         
};



        




