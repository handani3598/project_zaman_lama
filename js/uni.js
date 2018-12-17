var request = new XMLHttpRequest();
request.open('GET', 'https://handani3598.github.io/json/uni.json');
request.onload = function(){
  var uni = JSON.parse(request.responseText);
  University(uni);


  $(".btn").click(function() {
    var selected = $(this).attr("value");
    var request = new XMLHttpRequest();
    request.open('GET', 'https://handani3598.github.io/json/uni.json');
    request.onload = function(){
      var uni = JSON.parse(request.responseText);
      displaybystate(uni, selected);
      showMap(selected);
    };
    request.send();
  });
};
request.send();

function showMap(states){
  var map = document.getElementById('map');
  var src = "map/" + states + ".png";
  map.src = src;
}

function University(uni){
  var thumb = document.getElementsByClassName('thumb');
  var link = document.getElementsByClassName('link');
  var logo = document.getElementsByClassName('logo');
  var name = document.getElementsByClassName('name');
  var tagline = document.getElementsByClassName('tagline');
  var location = document.getElementsByClassName('location');

  for (var i = 0; i < uni.length; i++) {
    thumb[i].style.display = "block";
    link[i].href = uni[i].link;
    logo[i].src = uni[i].img;
    name[i].innerHTML = uni[i].name;
    tagline[i].innerHTML = uni[i].motto;
    location[i].innerHTML = uni[i].location;
  }
}


function displaybystate(uni, location){
  var thumb = document.getElementsByClassName('thumb');
  for (var i = 0; i < uni.length; i++){
    thumb[i].style.display = "none";
  }
  if(location=="malaysia"){
    University(uni);
  }
  else{
    var object = search(uni, location);
    University(object);
  }
}

function search(obj, val) {
  var objects = [];
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].location.includes(val)){
      objects.push(obj[i]);
    }
  }
    return objects;
}
