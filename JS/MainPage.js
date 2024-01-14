document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("custom-cursor");
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

// function GameDevDesc(){
//   var x=document.getElementById("GameDevDescField").innerHTML="<p>I can make you a whole game about your product , so people can enjoy the product usage and see it's functionality</p>";
// document.getElementById("GameDevButton").innerHTML="show less";
// }
// function AnimationDesc(){
  
//   var x=document.getElementById("AnimationDescField").innerHTML="
//   document.getElementById("AnimationButton").innerHTML="show less"
  
// }
var state="less";
function GameDevDesc(){
  var text="<p>I can make you a whole game about your product/event which makes people can enjoy the thing and see it's functionality</p>";
  if(state =="less"){
    document.getElementById("GameDevDescField").innerHTML=text;
    document.getElementById("GameDevButton").innerHTML="show less";
    state="more";
}
else if(state=="more"){
  document.getElementById("GameDevDescField").innerHTML="";
  document.getElementById("GameDevButton").innerHTML="show more";
  state="less";
}
}
function AnimationDesc(){
  var text="<p>Animating your product is my field .<br>Do you have an event and worry about it's marketing ?<br><br><b> Don't worry i offer you the best 3d animation for your event.</b></p>";
  if(state =="less"){
    document.getElementById("AnimationDescField").innerHTML=text;
    document.getElementById("AnimationButton").innerHTML="show less";
    state="more";
}
  else if(state=="more"){
  document.getElementById("AnimationDescField").innerHTML="";
  document.getElementById("AnimationButton").innerHTML="show more";
  state="less";
}
}
function VideoEditDesc(){
  var text="<p>Do you have a problem for finding a video editor?<br><br><b> Don't worry I can provide you high quality video editing for your videos with cheap prices </b>.</p>";
  if(state =="less"){
    document.getElementById("VideoEditDescField").innerHTML=text;
    document.getElementById("VideoEditButton").innerHTML="show less";
    state="more";
}
  else if(state=="more"){
  document.getElementById("VideoEditDescField").innerHTML="";
  document.getElementById("VideoEditButton").innerHTML="show more";
  state="less";
}
}

function ImageEditDesc(){
  var text="<p>If you're in need of good quality images for your work or product, I'm here to deliver.</p>"
  if(state =="less"){
    document.getElementById("ImageEditDescField").innerHTML=text;
    document.getElementById("ImageEditButton").innerHTML="show less";
    state="more";
}
  else if(state=="more"){
  document.getElementById("ImageEditDescField").innerHTML="";
  document.getElementById("ImageEditButton").innerHTML="show more";
  state="less";
}
}
function ModelingDesc() {
  var text="<p>I can prepare a prototype model to your space,whether it's a company, university... .<br><br>I can create a program that allows users to navigate through these modeled environments on their computers.<br><br><b>Wanna try this new marketing method? </b></p>"
  if(state =="less"){
    document.getElementById("ModelingDescField").innerHTML=text;
    document.getElementById("ModelingButton").innerHTML="show less";
    state="more";
}
  else if(state=="more"){
  document.getElementById("ModelingDescField").innerHTML="";
  document.getElementById("ModelingButton").innerHTML="show more";
  state="less";
}}
