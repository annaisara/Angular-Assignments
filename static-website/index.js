currentindex = 0
images=["first.jpg","second.jpg","third.jpg","fourth.jpg","fifth.jpg","sixth.jpg"]

setInterval(
    function() {
        currentindex =  Math.round(Math.random()*5 ) 
    //document.getElementById("img1").src = images[Math.round(Math.random())*5]
    document.getElementById("img1").src = images[currentindex]
}, 10000);

function changeImage(arrowType){
   // alert("fr")
  if (arrowType=="right"){
     currentindex = currentindex==5?0:++currentindex
  }
  else if (arrowType=="left") {
    currentindex = currentindex==0?5:--currentindex

  }
  document.getElementById("img1").src=images[currentindex]
}
