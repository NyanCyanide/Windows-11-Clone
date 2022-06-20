// 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
// lat, loc ;

// 'https://api.openweathermap.org/data/2.5/weather?lat=12.971599&lon=77.594566&appid=5489fe73ac55f6173dcc595bb88ff20f'

// function getWeatherData() {
// 	navigator.geolocation.getCurrentPosition((success) => {
// 	  let {latitude, longitude} = success.coords;

// 	  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`)
// 	  .then((res) => res.json())
// 	  .then((data) => showWeatherData(data))
// 	})
//   }

//   function showWeatherData(data)
//   {

//   }

// https://newsapi.org/v2/everything?q=technology&apiKey=204442a3cef44840a6c6fde34c7070eb

// fetch('https://newsapi.org/v2/everything?q=apple&from=2022-06-19&to=2022-06-19&sortBy=popularity&apiKey=204442a3cef44840a6c6fde34c7070eb').then((a) => a.json()).then(response => {console.log(response['articles'])})

_date = document.getElementById("date");
_time = document.getElementById("time");

const APIKeyweather = "5489fe73ac55f6173dcc595bb88ff20f";
const APIKeyNews = "204442a3cef44840a6c6fde34c7070eb";

const taskbaricons = [
  {
    id: "windows-icon",
    src: "./assets/Apps/windows11.png",
    alt: "Windows Icon",
  },
  {
    id: "stickynotes-icon",
    src: "./assets/Apps/stickynotes.png",
    alt: "Sticky Notes",
  },
  {
    id: "fileexplorer-icon",
    src: "./assets/Apps/fileexplorer.png",
    alt: "File Explorer",
  },
  { id: "mail-icon", src: "./assets/Apps/mail.png", alt: "Mail" },
  { id: "todo-icon", src: "./assets/Apps/todo.png", alt: "Todo" },
  { id: "vscode-icon", src: "./assets/Apps/vscode.ico", alt: "VS Code" },
  { id: "edge-icon", src: "./assets/Apps/edge.png", alt: "Edge" },
  { id: "spotify-icon", src: "./assets/Apps/spotify.png", alt: "Spotify" },
];

const pinnedicons = [
  {
    id: "edge-icon",
    src: "./assets/Apps/edge.png",
    alt: "app-icons",
    title: "Edge",
  },
  {
    id: "office-icon",
    src: "./assets/Apps/msoffice.ico",
    alt: "app-icons",
    title: "Office",
  },
  {
    id: "word-icon",
    src: "./assets/Apps/msword.png",
    alt: "app-icons",
    title: "Word",
  },
  {
    id: "excel-icon",
    src: "./assets/Apps/excel.png",
    alt: "app-icons",
    title: "Excel",
  },
  {
    id: "powerpoint-icon",
    src: "./assets/Apps/mspowerpoint.png",
    alt: "app-icons",
    title: "Powerpoint",
  },
  {
    id: "mail-icon",
    src: "./assets/Apps/mail.png",
    alt: "app-icons",
    title: "Mail",
  },
  {
    id: "calendar-icon",
    src: "./assets/Apps/calendar.png",
    alt: "app-icons",
    title: "Calendar",
  },
  {
    id: "msstore-icon",
    src: "./assets/Apps/msstore.png",
    alt: "app-icons",
    title: "Microsoft Store",
  },
  {
    id: "photos-icon",
    src: "./assets/Apps/Photos.png",
    alt: "app-icons",
    title: "Photos",
  },
  {
    id: "settings-icon",
    src: "./assets/Apps/settings.ico",
    alt: "app-icons",
    title: "Settings",
  },
  {
    id: "paint2d-icon",
    src: "./assets/Apps/paint2D.ico",
    alt: "app-icons",
    title: "Paint 2D",
  },
  {
    id: "xbox-icon",
    src: "./assets/Apps/Xbox.png",
    alt: "app-icons",
    title: "Xbox",
  },
  {
    id: "spotify-icon",
    src: "./assets/Apps/spotify.png",
    alt: "app-icons",
    title: "Spotify",
  },
  {
    id: "todo-icon",
    src: "./assets/Apps/todo.png",
    alt: "app-icons",
    title: "To Do",
  },
  {
    id: "calculator-icon",
    src: "./assets/Apps/calculator.png",
    alt: "app-icons",
    title: "Calculator",
  },
  {
    id: "stickynotes-icon",
    src: "./assets/Apps/stickynotes.png",
    alt: "app-icons",
    title: "Sticky Notes",
  },
  {
    id: "clock-icon",
    src: "./assets/Apps/alarm.png",
    alt: "app-icons",
    title: "Clock",
  },
  {
    id: "paint3d-icon",
    src: "./assets/Apps/paint3d.ico",
    alt: "app-icons",
    title: "Paint 3D",
  },
];

taskele = document.getElementById("taskbar-icons");
for (var i = 0; i < taskbaricons.length; i++) {
  taskele.innerHTML += `<div id="${taskbaricons[i].id}" class="hover:bg-white-transparent duration-500 p-1.5 rounded hover:visible"><img src="${taskbaricons[i].src}" alt="${taskbaricons[i].alt}" class="scale-90 h-7 w-7 hover:scale-75 duration-500"></div>`;
}

pinnedele = document.getElementById("pinned-icons");
for (var i = 0; i < pinnedicons.length; i++) {
  pinnedele.innerHTML += `<div id="${pinnedicons[i].id}" class="flex flex-col items-center px-0.5 py-3 hover:bg-black-dark-transparent rounded duration-500"><img class="h-8 w-8" src="${pinnedicons[i].src}" alt="${pinnedicons[i].alt}"><p class="text-[0.8rem] pt-1.5 font-semibold tracking-tight">${pinnedicons[i].title}</p></div>`;
}

/*
 * Function the adds and removes classes to ation to the window
 * (<window_display>, <class 1>, <class 2>)
 */
function clickAction(_window, action1, action2) {
  if (_window.classList.contains(action1)) {
    _window.classList.remove(action1);
    _window.classList.add(action2);
  } else {
    _window.classList.remove(action2);
    _window.classList.add(action1);
  }
}

windows = document.getElementById("windows-icon");
menu = document.getElementById("menu");
windows.addEventListener("click", () =>
  clickAction(menu, "bottom-16", "bottom-[-40rem]")
);

appshow = document.getElementById("appshow");
app = document.getElementById("apps");
appshow.addEventListener("click", () =>
  clickAction(app, "bottom-16", "-bottom-20")
);

wvb = document.getElementById("wvb");
wvbmenu = document.getElementById("wvbmenu");
wvb.addEventListener("click", () =>
  clickAction(wvbmenu, "right-3", "-right-96")
);

leftapi = document.getElementById("leftapi");
weathericon = document.getElementById("weatherpress");


const newsdata = document.getElementById("news-api");
const colors = [
  ["bg-blue-200", "hover:bg-blue-300"],
  ["bg-yellow-200", "hover:bg-yellow-300"],
  ["bg-green-200", "hover:bg-green-300"],
  ["bg-red-200", "hover:bg-red-300"],
];

fetch(
  "https://newsapi.org/v2/everything?q=technology&apiKey=204442a3cef44840a6c6fde34c7070eb"
)
  .then((a) => a.json())
  .then((response) => {
    var newscontent = response.articles;
    for (i = 0; i < newscontent.length; i++) {
      if (newscontent[i].description.includes("</a>") == false) {
        newsdata.innerHTML += `<a href=${newscontent[i].url} target="_blank">
  <div class="${colors[i % 4][0]} duration-500 text-black ${
          colors[i % 4][1]
        } rounded-lg p-3 items-center flex flex-col">
      <img class="h-32 w-64 rounded" src=${
        newscontent[i].urlToImage
      } alt="news" />
      <p class="text-xl p-1 w-full truncate font-bold">${
        newscontent[i].title
      }</p>
    <p class="pt-2 h-24 overflow-y-auto">${newscontent[i].description}</p>
  </div>
</a>`;
      }
    }
  });

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
} else {
  geoError();
}

function geoSuccess(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  // alert("lat:" + lat + " lng:" + lng);
  
  weathericon.classList.add("pr-4");
  weatherdatacatch(lat, lng);
  setInterval(() => {
    weatherdatacatch(lat, lng);
  }, 900000);
}

function weatherdatacatch(lat, lng)
{
  const weatherchange = {
    Rain: ["./assets/Weather/Rainday.png", "./assets/Weather/Rainnight.png"],
    Clouds: [
      "./assets/Weather/Cloudday.png",
      "./assets/Weather/Cloudnight.png",
    ],
    Mist: ["./assets/Weather/mist.png", "./assets/Weather/mist.png"],
    Clear: ["./assets/Weather/ClearDay.png", "./assets/Weather/ClearNight.png"],
    Haze: ["./assets/Weather/haze.png", "./assets/Weather/haze.png"],
    Snow: ["./assets/Weather/Snowday.png", "./assets/Weather/Snownight.png"],
    Thunderstorm: [
      "./assets/Weather/Thunderday.png",
      "./assets/Weather/Thundernight.png",
    ],
  };
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5489fe73ac55f6173dcc595bb88ff20f`
  )
    .then((a) => a.json())
    .then((response) => {
      var temp = parseInt(response.main.temp) - 273;
      var curweather = response.weather[0].main.toString();
      var current = new Date().toString();
      var num = parseInt(current.substring(16, 18));
      if (num >= 18 || num < 6) {
        weathericon.innerHTML = `<div class="pl-3 pr-2">
      <img src=${weatherchange[curweather][1]} alt="" class="h-6 w-6" />
    </div>
    <div class="flex flex-col pr-4">
      <p class="text-white text-[0.8rem]">${temp}&#176;C</p>
      <p class="text-white text-[0.75rem]">${curweather}</p>
    </div>`;
      } else {
        weathericon.innerHTML = `<div class="pl-3 pr-2">
      <img src=${weatherchange[curweather][0]} alt="" class="h-6 w-6" />
    </div>
    <div class="flex flex-col pr-4">
      <p class="text-white text-[0.8rem]">${temp}&#176;C</p>
      <p class="text-white text-[0.75rem]">${curweather}</p>
    </div>`;
      }
    });
}

function geoError() {
  weathericon.innerHTML =
    '<img class="h-6 w-6" src="./assets/Apps/widget.png" alt="">';
}

weathericon.addEventListener("click", () =>
  clickAction(leftapi, "left-3", "left-[-40rem]")
);


_date = document.getElementById("date");
_time = document.getElementById("time");
setInterval(() => {
  var current = new Date().toString();
  var date =
    current.substring(8, 11) +
    current.substring(4, 8) +
    current.substring(11, 15);
  // Function that takes of updating the date and time
  if (parseInt(current.substring(16, 18)) > 12) {
    time =
      parseInt(current.substring(16, 18)) -
      12 +
      ":" +
      current.substring(19, 21) +
      " PM";
  } else {
    if (current.substring(16, 18) == "00") {
      time = "12:" + current.substring(19, 21) + " AM";
    } else {
      time = current.substring(16, 21) + " AM";
    }
  }

  // Update the date and time
  _date.innerText = date;
  _time.innerText = time;
  time1.innerText = time;

  // Function that Updates the Battery Percentage
  // navigator.getBattery()
  // .then((battery) => {
  //     var level = battery.level;
  //     // Update the Battery Percentage
  //     battery_.innerText = level * 100 + "%";
  // });
}, 1000);
