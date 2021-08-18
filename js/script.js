let count=0

function increment(){
    let a=document.getElementById("num").innerHTML;
    let n=Number(a)+1;
    document.getElementById("num").innerHTML=n;
}

function decrement(){
    let a=document.getElementById("num").innerHTML;
    let n=Number(a)-1;
    document.getElementById("num").innerHTML=n;
}