const w = function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
  new MutationObserver((e) => {
    for (const a of e)
      if (a.type === "childList")
        for (const c of a.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && n(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const a = {};
    return (
      e.integrity && (a.integrity = e.integrity),
      e.referrerpolicy && (a.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (a.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    const a = i(e);
    fetch(e.href, a);
  }
};
w();
_date = document.getElementById("date");
_time = document.getElementById("time");
battery_ = document.getElementById("batteryper");
const p = [
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
  ],
  d = [
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
      src: "./assets/Apps/paint2d.ico",
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
for (var r = 0; r < p.length; r++)
  taskele.innerHTML += `<div id="${p[r].id}" class="hover:bg-white-transparent duration-500 p-1.5 rounded hover:visible"><img src="${p[r].src}" alt="${p[r].alt}" class="scale-90 h-7 w-7 hover:scale-75 duration-500"></div>`;
pinnedele = document.getElementById("pinned-icons");
for (var r = 0; r < d.length; r++)
  pinnedele.innerHTML += `<div id="${d[r].id}" class="flex flex-col items-center px-0.5 py-3 hover:bg-black-dark-transparent rounded duration-500"><img class="h-8 w-8" src="${d[r].src}" alt="${d[r].alt}"><p class="text-[0.8rem] pt-1.5 font-semibold tracking-tight">${d[r].title}</p></div>`;
function s(t, o, i) {
  t.classList.contains(o)
    ? (t.classList.remove(o), t.classList.add(i))
    : (t.classList.remove(i), t.classList.add(o));
}
windows = document.getElementById("windows-icon");
menu = document.getElementById("menu");
windows.addEventListener("click", () =>
  s(menu, "bottom-16", "bottom-[-40rem]")
);
appshow = document.getElementById("appshow");
app = document.getElementById("apps");
appshow.addEventListener("click", () => s(app, "bottom-16", "-bottom-20"));
keyeng = document.getElementById("keyeng");
keylayout = document.getElementById("keylayout");
keyeng.addEventListener("click", () => s(keylayout, "bottom-14", "-bottom-52"));
notific = document.getElementById("notific");
notificationbar = document.getElementById("notificationbar");
notific.addEventListener("click", () =>
  s(notificationbar, "right-3", "-right-80")
);
wvb = document.getElementById("wvb");
wvbmenu = document.getElementById("wvbmenu");
wvb.addEventListener("click", () => s(wvbmenu, "right-3", "-right-96"));
leftapi = document.getElementById("leftapi");
weathericon = document.getElementById("weatherpress");
const h = document.getElementById("news-api"),
  g = [
    ["bg-blue-200", "hover:bg-blue-300"],
    ["bg-yellow-200", "hover:bg-yellow-300"],
    ["bg-green-200", "hover:bg-green-300"],
    ["bg-red-200", "hover:bg-red-300"],
  ],
  u = {
    method: "GET",
    headers: { "X-API-Key": "G8gMH0p4jU/sWPyKphGyoA==L95IZ87ymfL8tS4M" },
  };
fetch("https://api.api-ninjas.com/v1/facts?limit=10", u)
  .then((t) => t.json())
  .then((t) => {
    for (r = 0; r < t.length; r++)
      h.innerHTML += `<div class="flex flex-col items-center duration-500 justify-center text-center ${
        g[r % 4][0]
      } text-black font-semibold rounded ${g[r % 4][1]}">
      <p class="my-3 mx-2">${t[r].fact}</p>
    </div>`;
  })
  .catch((t) => console.error(t));
navigator.geolocation ? navigator.geolocation.getCurrentPosition(f, b) : b();
function f(t) {
  var o = t.coords.latitude,
    i = t.coords.longitude;
  weathericon.classList.add("pr-4"),
    m(o, i),
    setInterval(() => {
      m(o, i);
    }, 9e5);
}
function m(t, o) {
  const i = {
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
    `https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${o}&appid=5489fe73ac55f6173dcc595bb88ff20f`
  )
    .then((n) => n.json())
    .then((n) => {
      var e = parseInt(n.main.temp) - 273,
        a = n.weather[0].main.toString(),
        c = new Date().toString(),
        l = parseInt(c.substring(16, 18));
      l >= 18 || l < 6
        ? (weathericon.innerHTML = `<div class="pl-3 pr-2">
      <img src=${i[a][1]} alt="" class="h-6 w-6" />
    </div>
    <div class="flex flex-col pr-4">
      <p class="text-white text-[0.8rem]">${e}&#176;C</p>
      <p class="text-white text-[0.75rem]">${a}</p>
    </div>`)
        : (weathericon.innerHTML = `<div class="pl-3 pr-2">
      <img src=${i[a][0]} alt="" class="h-6 w-6" />
    </div>
    <div class="flex flex-col pr-4">
      <p class="text-white text-[0.8rem]">${e}&#176;C</p>
      <p class="text-white text-[0.75rem]">${a}</p>
    </div>`);
    });
}
function b() {
  weathericon.classList.add("px-2"),
    (weathericon.innerHTML =
      '<img class="h-6 w-6" src="./assets/Apps/widget.png" alt="">');
}
weathericon.addEventListener("click", () =>
  s(leftapi, "left-3", "left-[-60rem]")
);
_date = document.getElementById("date");
_time = document.getElementById("time");
setInterval(() => {
  var t = new Date().toString(),
    o = t.substring(8, 11) + t.substring(4, 8) + t.substring(11, 15);
  parseInt(t.substring(16, 18)) > 12
    ? (time =
        parseInt(t.substring(16, 18)) - 12 + ":" + t.substring(19, 21) + " PM")
    : t.substring(16, 18) == "00"
    ? (time = "12:" + t.substring(19, 21) + " AM")
    : (time = t.substring(16, 21) + " AM"),
    (_date.innerText = o),
    (_time.innerText = time),
    (time1.innerText = time),
    navigator.getBattery().then((i) => {
      var n = i.level;
      battery_.innerText = n * 100 + "%";
    });
}, 1e3);
