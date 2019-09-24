
var result = document.querySelector('.result');


var myCollection = document.getElementsByTagName('input');
var txt = " ";

for(var i = 0; i< myCollection.length ; i++) {
    myCollection[i].addEventListener('click',function(e) {
        if(e.target.defaultValue=="="){
            txt=txt
        } else if(e.target.defaultValue=="C"){
            txt="";
            result.innerHTML = txt;
        } else if(e.target.defaultValue=="Del"){
            txt="";
            result.innerHTML = txt;
        } else{
          txt += e.target.defaultValue;
          result.innerHTML = txt;  
        }
    });
}


document.getElementById("equal").addEventListener("click",()=>{
    // console.log(eval(document.getElementById("result").innerHTML));
    result.innerHTML = eval(document.getElementById("result").innerHTML); 
})



