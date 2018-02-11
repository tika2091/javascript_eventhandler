
function Click(){
var btn=document.getElementById('click');
btn.innerHTML='YOU CLICKED!';
    function showDate(){
      var time=document.getElementById("time");
      time.innerHTML=Date();
    }
    showDate();
}

function remove(){
  var btn=document.getElementById("time");
  btn.innerHTML="";
  function Click(){
    var reset=document.getElementById("click");
    reset.innerHTML="Show Time";
  }
  Click();
}
