
document.querySelector(".btn").addEventListener("click", darkMode);
document.querySelector(".btn").addEventListener("click", texttoggle);
var but = document.querySelector(".btn");
var c = but.style.backgroundColor;
but.addEventListener('click', function(){
c = but.style.backgroundColor = c === 'black'? '#ffe5b9' : 'black';
});

function darkMode(){
    document.querySelector("body").classList.toggle("newmode");
   document.querySelector(".links").classList.toggle("link");
}

function texttoggle(){
    var x = document.querySelector(".btn");
    if(x.textContent==="Dark Mode"){
        x.textContent="Light Mode";
        x.style.color = '#f5f5f5';
    }
    else{
        x.textContent = "Dark Mode";
        x.style.color='#41584b';
    }
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "links") {
      x.className += " responsive";
    } else {
      x.className = "links";
    }
  }