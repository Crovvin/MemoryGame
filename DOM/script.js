document.getElementById("container");

document.querySelector("#container");

document.querySelectorAll(".second");

document.querySelector("ol .third");

var section = document.querySelector("#container");
section.innerText = "Hello!";

var footer = document.querySelector(".footer");
footer.classList.add("main");

footer = document.querySelector(".footer");
footer.classList.remove("main");

var li1 = document.createElement("li");

li1.innerText = "four";

var list = document.querySelector("ul");
list.appendChild(li1);

var lis = document.querySelectorAll("ol li");
var i = 0;
for(i = 0; i < lis.length; i++){
    lis[i].style.backgroundcolor = "green";
}

footer = document.querySelector(".footer");
footer.remove();