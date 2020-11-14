function reveal(){
    var x = document.getElementById("reveal");
    var b=  document.getElementById("timeline-head");
    var a= document.getElementById("timeline-text");
    var c = document.getElementById("timeline-icon");
    if(x.style.display ==='none'){
        x.style.display="block";
        b.style.backgroundColor="#274C77";
        a.style.color="#f8f8f8";
        c.style.color="#f8f8f8";

    }
    else{
        x.style.display='none';
        b.style.backgroundColor="#f8f8f8";
        a.style.color="#bdbdbd";
        c.style.color="#bdbdbd";
    }
}

function keyReveal(){
    var keyreveal = document.getElementById("complete-reveal");
    var objectiveColor=document.getElementById("objective");
    if(keyreveal.style.display==='none'){
        keyreveal.style.display="block";
        objectiveColor.style.backgroundColor="#274C77";
    }
    else{
        keyreveal.style.display='none';
        objectiveColor.style.backgroundColor="#f8f8f8";
    }
    
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("mybtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var openbtn = document.getElementById("menu");
var sidebardiv = document.getElementById("left");
var contentdiv = document.getElementById("content");
var cross = document.getElementById("cross");
openbtn.onclick = function(){
    sidebardiv.style.display="block";
}
cross.onclick = function(){
    sidebardiv.style.display="none";
}



