
var result = document.querySelector('.result');
var plus = document.querySelector('.plus');


var myCollection = document.getElementsByTagName('input');
var txt = " ";

for(var i = 0; i< myCollection.length ; i++) {
    myCollection[i].addEventListener('click',function(e) {
        if(e.target.defaultValue=="="){
            txt=txt;
            console.log("after = " +txt)
        } else if(e.target.defaultValue=="C"){
            txt="";
            result.innerHTML = txt;
            console.log("after c " +txt)
        } else if(e.target.defaultValue=="Del"){
            txt = txt.substring(0,txt.length-1);
             result.innerHTML = txt;
             console.log("after del " +txt)
        } else if(txt[1] == '+') {
            txt= " "
            result.innerHTML = txt;
            console.log("after + " +txt)
        }else{
          txt += e.target.defaultValue;
          result.innerHTML = txt;  
          console.log(" " +txt)
        }
    });
}


document.getElementById("equal").addEventListener("click",()=>{
    // console.log(eval(document.getElementById("result").innerHTML));
    // result.innerHTML = eval(document.getElementById("result").innerHTML); 
    txt = eval(document.getElementById("result").innerHTML);
    result.innerHTML = txt;
})

// var str = "helloworld";
// var last = str.substring(0,1);
// console.log(last); 



