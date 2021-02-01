
window.onload = function () {
  /* window.setTimeout(chooseOrder,2000);*/
var n1 = document.querySelector("ul.container");
    
    n1.addEventListener('click',onClick,false);
    n1.addEventListener('transitionend',onTransitionEnd,false);
    /*n1.style.webkitAnimationPlayState = "paused";*/
}

var flagsOfApp = {
    runAnimation: false,
    index:0 
};

function onClick (evt) {
    /*checking - is an animation running*/
  if (!flagsOfApp['runAnimation']) {
      /*lock events*/
    flagsOfApp['runAnimation'] = true;
      /*get a parent node*/
    var root = document.querySelector("ul.container");
    
    var anotherNode = document.querySelector("ul.container>li:nth-child(3)");
    var n2 = document.querySelector("ul.container>li:nth-child(4)");
    /*swapping nodes*/
    swapOrder(root);
  }
}

function swapOrder (pElem) {
    /**additional swap function*/
    /*first - on the bottom*/
    /*fourth - on the top*/
    function swp (val) {
        switch(val.getAttribute('class')){
            case "first":
             val.setAttribute('class',"second");
                break;
            case "second":
             val.setAttribute('class','thrid');
                break;
            case "thrid":
             val.setAttribute('class','forth');
                break;
            case 'forth':
              val.setAttribute('class','first');
                break;
                default:
        }
        /*clear inline style*/
        val.style.transform = '';
    }
    
    /*********************/
    /*get children*/
    var nodeList = pElem.children;
    var subArray = Array.prototype.slice.call(nodeList);
    subArray.forEach(swp);
    /*get a first and a last elemes*/
    var first = pElem.querySelector('.first');
    /*pElem.appendChild(first);*/
   first.style.transform = "translateX(95vw)";   
     
}


function onTransitionEnd (evt) {
    
    var targetNode = evt.currentTarget;
    var topNode = targetNode.querySelector(".first");
    if( topNode.style.transform === '') {
         topNode.style.zIndex = '';
        /*unlock click events*/
         flagsOfApp['runAnimation'] = false;
         return;
    }
    topNode.style.transform = '';
    topNode.style.zIndex = '-10';
}


