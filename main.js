




const revealElements = document.querySelectorAll("[data-reveal]");

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

function scrollReveal(){
  for(let i = 0; i < revealElements.length; i++){
    
    const isElementsOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight;
    
    if(isElementsOnScreen){
      revealElements[i].classList.add("revealed")
    } else {
      revealElements[i].classList.remove("revealed")
    }
  }
}

