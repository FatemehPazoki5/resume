function check(){
    let textR=document.querySelector("#inputRight").value;
    let textL=document.querySelector("#inputLeft").value; 
    textR == textL ? document.querySelector(".showR").innerHTML="این دو متن با هم مساوی هستند." :hiliter();
}

function hiliter(){
    let textR =document.querySelector("#inputRight").value;
    let textL=document.querySelector("#inputLeft").value; 
    let showR=document.querySelector(".showR"); 
    let showL=document.querySelector(".showL"); 
    let charR=" ";
    let charL=" ";
    let strR=" ";
    let strL=" ";
    let wordR=" ";
    let wordL=" ";
    let splitR=textR.split(" ");
    let splitL=textL.split(" ");
    for(let j=0;j<splitR.length;j++){
        console.log(splitR);
        wordR=splitR[j];
        wordL=splitL[j];
        for(let i=0;i<wordR.length ;i++){
            charR=wordR.charAt(i);
            charL=wordL.charAt(i);
            charR==charL ? strR+=charR: strR +=charR.fontcolor("red");
        }
        strR+= ` `;
    }
    showR.innerHTML= strR;
    for(let j=0;j<splitL.length;j++){
        wordR=splitR[j];
        wordL=splitL[j];
        for(let i=0;i<wordL.length ;i++){
            charR=wordR.charAt(i);
            charL=wordL.charAt(i);
            charR==charL ? strL+=charL: strL +=charL.fontcolor("red");
        }
        strL+= ` `;
    }
    showL.innerHTML= strL;
}