$(document).ready(function(){
  var sub = window.open("","voteWindow")

  setInterval(function(){
    $("#1").submit();
  },10980000)
  setInterval(function(){
    $("#2").submit();
  },7380000)
  setInterval(function(){
    $("#3").submit();
  },3380000)
  setInterval(function(){
    $("#4").submit();
  },7380000)
  var i = 1;
  setInterval(function(){
    if(i==5) clearInterval();
    $("#"+i).submit();
    i++;
  },10000)
});
