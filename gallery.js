var img = document.getElementsByClassName('img-fluid');

var array = [
  {
    name: "UM",
    item: 14
  },
  {
    name: "UKM",
    item: 12
  },
  {
    name: "UIA",
    item: 12
  },
  {
    name: "UMK",
    item: 17
  },
  {
    name: "UMP",
    item: 18
  },
  {
    name: "UNIMAP",
    item: 12
  },
  {
    name: "UMS",
    item: 22
  },
  {
    name: "UNIMAS",
    item: 22
  },
  {
    name: "UMT",
    item: 14
  },
  {
    name: "UPSI",
    item: 19
  },
  {
    name: "UPNM",
    item: 21
  },
  {
    name: "UPM",
    item: 31
  },
  {
    name: "USIM",
    item: 27
  },
  {
    name: "USM",
    item: 30
  },
  {
    name: "UNISZA",
    item: 26
  },
  {
    name: "UTEM",
    item: 28
  },
  {
    name: "UTM",
    item: 28
  },
  {
    name: "UITM",
    item: 44
  },
  {
    name: "UTHM",
    item: 25
  },
  {
    name: "UUM",
    item: 33
  }
];

var link = window.location.href;
link = link.split("?code=");
console.log(link[1]);

for (var i = 0; i < array.length; i++) {
  if(array[i].name==link[1]){
    var index = i;
    break;
  }
}

display(index)

function display(index){
  var newimg = document.getElementById('gallery');
  var string = "";

  for (var i = 0; i < array[index].item; i++) {
    string +='<div class="mb-3 pics animation all 2"><img class="img-fluid" src="" alt="Card image cap"></div>';
  }
  newimg.innerHTML = string;
  for (var j = 0; j < array[index].item; j++) {
    img[j].src = "Album/" + array[index].name + "/img" + (j+1) + ".jpg";
  }
}
