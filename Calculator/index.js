
function sum(a,b){ 
    a = parseInt(a);
    b = parseInt(b);
    result = document.getElementById("res");
    result.innerHTML =  (a+b);
}
function sub(a,b){
    a = parseInt(a);
    b = parseInt(b);
    result = document.getElementById("res");
    result.innerHTML = (a-b);   
}
function mult(a,b){
    a = parseInt(a);
    b = parseInt(b);
    result = document.getElementById("res");
    result.innerHTML =  (a*b);
}
function divide(a,b){
    a = parseInt(a);
    b = parseInt(b);
    result = document.getElementById("res");
    result.innerHTML =  (a/b);
}