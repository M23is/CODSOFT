inputype=document.querySelector("#type");
buttons=document.querySelectorAll('button');
let resultstring="";
let arr=Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click",function(e) {

if(e.target.innerHTML == '='){
    resultstring=eval(resultstring);
    inputype.value=resultstring;
}
else if(e.target.innerHTML == 'AC'){
    resultstring="";
    inputype.value='';
}
else if(e.target.innerHTML == 'DEL'){
    resultstring=resultstring.substring(0,resultstring.length-1);
    inputype.value=resultstring;
}
else if(e.target.innerHTML=='%'){
    let numb = parseInt(inputype.value);
    resultstring += '%';
    inputype.value=numb/100;   
}
else if(e.target.innerHTML=='.'){
    let numb = parseInt(inputype.value);
    resultstring += '.';
    inputype.value=numb+'.'; 
}
else{
    resultstring+=e.target.innerHTML;
    inputype.value=resultstring;
}
    });

    
  
});



