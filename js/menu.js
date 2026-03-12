const menu=document.getElementById("menu");

for(let i = 1; i<=3;i++){

    let a=document.createElement("a");
    a.href="Pratical/practical"+i+".html";

    let button=document.createElement("button");
    button.innerText=i;

    a.appendChild(button)
    menu.appendChild(a)
}