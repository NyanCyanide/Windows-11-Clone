windows = document.getElementById("windows");
menu = document.getElementById("menu");
_date = document.getElementById("date");
_time = document.getElementById("time");
appshow = document.getElementById("appshow");
app = document.getElementById("apps");
wvb = document.getElementById("wvb");
wvbmenu = document.getElementById("wvbmenu");
battery_ = document.getElementById("batteryper");

var menu_open = false;

// let startupsound = new Audio('./assets/Sounds/startup.mp3');

windows.addEventListener("click", function (e) {
  if (menu.classList.contains("bottom-[-40rem]")) {
    menu.classList.remove("bottom-[-40rem]");
    menu.classList.add("bottom-16");
    menu_open = true;
  } else if (menu.classList.contains("bottom-16")) {
    menu.classList.remove("bottom-16");
    menu.classList.add("bottom-[-40rem]");
    menu_open = false;
  }
});

wvb.addEventListener("click", function (e) {
  if (wvbmenu.classList.contains("-right-96")) {
    wvbmenu.classList.remove("-right-96");
    wvbmenu.classList.add("right-3");
  }
  else if (wvbmenu.classList.contains("right-3")) {
    wvbmenu.classList.remove("right-3");
    wvbmenu.classList.add("-right-96");
  }
})

function clickAction(_click, _window, action1, action2) {
  _window.addEventListener("click", function() {
    if(_window.classList.contains(action1))
    {
      _window.classList.remove(action1);
      _window.classList.add(action2)
    }
    else
    {
      _window.classList.remove(action2);
      _window.classList.add(action1)
    }
  })
}


appshow.addEventListener("click", function (e) {
  if (app.classList.contains("invisible")) {
    app.classList.remove("invisible");
  } else {
    app.classList.add("invisible");
  }
})

// startupsound.play()





setInterval(() => {
    var current = new Date().toString();
    var date = current.substring(4, 15);
    var time;

    navigator.getBattery().then(function(battery) {
      var level = battery.level;
      battery_.innerText = level * 100 + "%";
  });


    if(parseInt(current.substring(16, 18)) > 12 )
    {
        time = (parseInt(current.substring(16, 18)) - 12) + ":" + current.substring(19, 21) + " PM";
    }
    else
    {
        time = current.substring(16,21) + " AM";
    }
    _date.innerText = date;
    _time.innerText = time;
}, 1000);