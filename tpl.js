
window.onload = function () {
  /* window.setTimeout(chooseOrder,2000);*/
var n1 = document.querySelector("ul.container>li:nth-child(4)");
    
    n1.addEventListener('click',onClick,false);
    /*n1.style.webkitAnimationPlayState = "paused";*/
}

function onClick (evt) {
    var root = document.querySelector("ul.container");
    
    var anotherNode = document.querySelector("ul.container>li:nth-child(3)");
    var n2 = document.querySelector("ul.container>li:nth-child(4)");
  /*  root.removeChild(anotherNode);
    root.removeChild(n2);
    root.appendChild(n2);
    root.appendChild(anotherNode);
    
    n2.style.webkitAnimationPlayState = "running";*/
   /* n2.style.transform = "translateX(80vw)";
    n2.setAttribute('data-animation-process',"run");*/
    swapOrder(root);
}

function swapOrder (pElem) {
    /*get children*/
    var nodeList = pElem.children;
    /*get a first and a last elemes*/
    var first = nodeList[0];
    var last = nodeList[3];
    /*remove last - on the top of a stack*/
     pElem.removeChild(last);
    /*insert before first*/
    pElem.insertBefore(last, nodeList[0]);  
}


function chooseOrder () {
    var pList = document.querySelector(".container");
    pList = pList.children;
    pList = Array.prototype.slice.call(pList);
    for (var t=0; t < pList.length; t++) {
        pList[t].style.order = (4-t).toString();
    }
}