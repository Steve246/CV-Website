console.log("Its Working");

Let themeDots = document.getElementsByClassName("theme-dot");

for (var i=0; themeDots.length > i; i++) {
  themDots[i].addEventListener('click',function(){
    let mode = this.dataset.mode;
    console.log ('Option Clicked', mode);
  })
}