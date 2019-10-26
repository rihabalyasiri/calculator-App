// declaring the variables of the HTML elements
var result = document.querySelector('.result');
var plus = document.querySelector('.plus');
var square = document.getElementById("square");
var dot = document.getElementById("dot");
var plus = document.getElementById("plus");
var equal = document.getElementById("equal");


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
           
            // avoiding more than one dot pressing
            if(result.innerHTML.substr(result.innerHTML.length-1,1) == ".") {
                if(e.target.value != '.') {
                    showing();
                }

            }else {
                showing();
            }
        }



         // (=) buttons pressing and getting the result from the operations
        else if(e.target.value == '=') {
            txt = eval(result.innerHTML);
            result.innerHTML = txt;
        }

    });
         
};



        




