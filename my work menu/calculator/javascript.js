let show=document.querySelector("#show");
document.querySelector(".result").addEventListener("click",result);
document.querySelector(".clear").addEventListener("click",clear);
document.querySelector(".clearAll").addEventListener("click",clearAll);
let input=document.querySelectorAll(".number");
let value="";
input.forEach(function(item){
    item.addEventListener("click",number)
    
})

function number(event){
    value=event.target.value;console.log(value);console.log(show);
    show.innerHTML==0 ? show.innerHTML=value : show.innerHTML +=value;
     
}
function result(event){
    show.innerHTML=eval(show.innerHTML);
    console.log(event.target);
}
function clear(){
    let text = show.innerHTML;
    if (text.length === 1) {
        show.innerHTML = 0;
    } else { 
        show.innerText = text.substring(0, text.length - 1)
    }}
function clearAll(){
    show.innerHTML=0;
}