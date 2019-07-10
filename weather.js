http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=f7e06d6e1fd6515048b811d6bbcfdd23

$(document).ready(function(){
  $.getJSON('http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=f7e06d6e1fd6515048b811d6bbcfdd23', function(data) {
      var wind = data["wind"]
      var cloud = data[""];
      var speed = wind["speed"];
      var deg = wind["deg"];
      var cloudcvr = cloud[""];
      $("#speed").html("Wind Speed: "+speed);
      $("#degree").html("Wind degrees: "+deg);
      $("#clouds").html("Cloud cover: "+clouds);
  });
});
