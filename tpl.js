
window.onload = function () {
  /* window.setTimeout(chooseOrder,2000); */
  const btnR = document.querySelector('section.clearBtn>div:nth-child(2)');
  const btnL = document.querySelector('section.clearBtn>div:nth-child(1)');
  const container = document.querySelector('ul.container');
  /* an event for  leaf through */
  btnR.addEventListener('click', onClickR, false);
  btnL.addEventListener('click', onClickL, false);
  /* an event for animation */
  container.addEventListener('transitionend', onTransitionEnd, false);
  /* add listeners for a touchscreen */
  container.addEventListener('touchend', onTuchEnd, false);
  container.addEventListener('touchstart', onTuchStart, false);
  /* n1.style.webkitAnimationPlayState = "paused"; */
};

/* a global object for animation */
const flagsOfApp = {
  runAnimation: false,
  index: 0,
  startX: 0,
  startY: 0,
  endX: 0,
  endY: 0
};

function onTuchEnd (evt) {
  flagsOfApp.endX = evt.changedTouches[0].clientX;
  flagsOfApp.endY = evt.changedTouches[0].clientY;
  console.log(`startX ${flagsOfApp.startX},startY ${flagsOfApp.startY} \n`);
  console.log(`endX: ${flagsOfApp.endX},endY: ${flagsOfApp.endY}`);
  /* making a descision */
  let delta = flagsOfApp.endX - flagsOfApp.startX;
  const sign = Math.sign(delta);
  delta = Math.abs(flagsOfApp.endX - flagsOfApp.startX);
  if ((delta > 30) && (sign > 0)) {
    /* run mouse event handler */
    onClickR();
  } else if ((delta > 30) && (sign < 0)) {
    /* run mouse event handler */
    onClickL();
  }
}

function onTuchStart (evt) {
  /* save coords */
  flagsOfApp.startX = evt.changedTouches[0].clientX;
  flagsOfApp.startY = evt.changedTouches[0].clientY;
}

function onClickL () {
  /* checking - is an animation running */
  if (!flagsOfApp.runAnimation) {
    /* lock events */
    flagsOfApp.runAnimation = true;
    /* get a parent node */
    const root = document.querySelector('ul.container');
    /* swapping nodes */
    swapOrder(root);
    /* get a first and a last elemes */
    const first = root.querySelector('.first');
    /* pElem.appendChild(first); */
    first.style.transform = 'translateX(-95vw)';
    first.style.marginTop = '';
  }
}

function onClickR () {
  /* checking - is an animation running */
  if (!flagsOfApp.runAnimation) {
    /* lock events */
    flagsOfApp.runAnimation = true;
    /* get a parent node */
    const root = document.querySelector('ul.container');
    /* swapping nodes */
    swapOrder(root);
    /* get a first and a last elemes */
    const first = root.querySelector('.first');
    /* pElem.appendChild(first); */
    first.style.transform = 'translateX(95vw)';
  }
}

function swapOrder (pElem) {
  /** additional swap function */
  /* first - on the bottom */
  /* fourth - on the top */
  function swp (val) {
    switch (val.getAttribute('class')) {
      case 'first':
        val.setAttribute('class', 'second');
        break;
      case 'second':
        val.setAttribute('class', 'thrid');
        break;
      case 'thrid':
        val.setAttribute('class', 'forth');
        break;
      case 'forth':
        val.setAttribute('class', 'first');
        break;
      default:
    }
    /* clear inline style */
    val.style.transform = '';
  }

  /*********************/
  /* get children */
  const nodeList = pElem.children;
  const subArray = Array.prototype.slice.call(nodeList);
  subArray.forEach(swp);
}

function onTransitionEnd (evt) {
  const targetNode = evt.currentTarget;
  const topNode = targetNode.querySelector('.first');
  if (topNode.style.transform === '') {
    topNode.style.zIndex = '';
    topNode.style.marginTop = '';
    /* unlock click events */
    flagsOfApp.runAnimation = false;
    return;
  }
  topNode.style.transform = '';
  topNode.style.zIndex = '-10';
}
