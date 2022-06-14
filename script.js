windows = document.getElementById("windows");
menu = document.getElementById("menu");
_date = document.getElementById("date");
_time = document.getElementById("time");

var menu_open = false;

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




setInterval(() => {
    var current = new Date().toString();
    var date = current.substring(4, 15);
    var time;
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