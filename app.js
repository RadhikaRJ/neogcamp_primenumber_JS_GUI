var inputref= document.querySelector("#input");
var outputref = document.querySelector("#output");
var btnref = document.querySelector("#submit");

btnref.addEventListener("click",clickHandler);

function clickHandler(){
    var inputData=inputref.value;
    outputref.innerText=inputData;
}