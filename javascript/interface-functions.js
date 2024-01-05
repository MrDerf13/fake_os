// Apps - what they can do generally
// Open on double click in desktop, single click from taskbar
// Have a minimise, maximise, and close button in the top right
// their name in the top left

// renders the window of the opened app to the screen
const openApp = (target) => {
  // find object index in array
  const currentApp = allAppsArr.findIndex((app) => app.name == target);
  // create options bar with name and function icons
  const windowOptions = `<span class='options'><p><img src=${allAppsArr[currentApp].taskbarImg}>${allAppsArr[currentApp].display}</p><p><img src='../images/maximize.png' alt='maximise'  id='maximise'><img src='../images/close.png' alt='close'  id='close'></p></span>`;
  // set variable to be the blank modal1 div
  let cont = document.querySelector("#modal1");
  // add class that will render the window
  cont.classList.add("modal");
  // add the app data from the object
  cont.innerHTML = `${windowOptions}${allAppsArr[currentApp].appToRender}`;

  openAppsArr.push(allAppsArr[currentApp].name);
  let intervalTracker;

  if (openAppsArr.includes("musical-doots")) {
    intervalTracker = setInterval(musiscalDoots, 3000);
  }
  if (openAppsArr.includes("recycle-bin")) {
    intervalTracker = setInterval(rotate, 100);
  }
  if (openAppsArr.includes("notepad")) {
    const revButt = document.querySelector("#reverse");
    revButt.addEventListener("click", (event) => reverse());
    const encButt = document.querySelector("#encrypt");
    encButt.addEventListener("click", (event) => encrypt());
    const caeButt = document.querySelector("#caesaria");
    caeButt.addEventListener("click", (event) => caesar());
  }

  // give icons their relevent event listeners
  let closeWindow = document.querySelector("#close");
  closeWindow.addEventListener("click", (event) =>
    closeApp(cont, intervalTracker)
  );
  let maximiseWindow = document.querySelector("#maximise");
  maximiseWindow.addEventListener("click", (event) => maximise(cont));
};
// hides the window from the screen but keeps it "open"
const minimise = (wind) => {
  wind.style.display = "none";
};

// sets the window to fill the screen size (without blocking the taskbar)
const maximise = (wind) => {
  wind.classList.toggle("large");
};

const closeApp = (wind, interval) => {
  wind.innerHTML = "";
  wind.classList.remove("modal");
  openAppsArr.pop();
  clearInterval(interval);
};

const loadDesktop = () => {
  let desktop = document.querySelector("#desktop");
  for (let i = desktopAppsArr.length - 1; i >= 0; --i) {
    desktop.insertAdjacentHTML(
      "afterbegin",
      `<div class="app"}><img src=${desktopAppsArr[i].desktopImg} alt=${desktopAppsArr[i].name} id=${desktopAppsArr[i].name}><label for=${desktopAppsArr[i].name} id=${desktopAppsArr[i].name}>${desktopAppsArr[i].display}</label></div>`
    );
  }
};

const loadTaskbar = () => {
  let desktop = document.querySelector("#taskbar-apps");
  for (let i = taskbarArr.length - 1; i >= 0; --i) {
    desktop.insertAdjacentHTML(
      "afterbegin",
      `<div class="app"><img src=${taskbarArr[i].taskbarImg} alt=${taskbarArr[i].name}  id=${taskbarArr[i].name}></div>`
    );
  }
};

const pinToTaskbar = (app, id) => {
  // check if the id of the element clicked equals ANY of the names of the objects in the taskbarArr
  // app is the whole object of clicked element, has nothing to do with this check
  // id is the id of the element clicked
  // push target to taskbarArr

  const taskbarArrNames = taskbarArr.map((arrApp) => arrApp.name);
  if (taskbarArrNames.indexOf(id) === -1) {
    const prompt = confirm(`Would you like to pin ${app.display} to task bar?`);
    if (prompt) {
      let tb = document.querySelector("#taskbar-apps");
      tb.innerHTML = "";
      taskbarArr.push(app);
      loadTaskbar();
    }
  }
};

const unpinFromTaskbar = (app, id) => {
  // splice out the selected app
  const taskbarArrNames = taskbarArr.map((arrApp) => arrApp.name);
  let appIndex = taskbarArrNames.indexOf(id);
  if (appIndex > -1) {
    const prompt = confirm(
      `Would you like to unpin ${app.display} from the task bar?`
    );
    if (prompt) {
      taskbarArr.splice(appIndex, 1);
    }
  }
  let tb = document.querySelector("#taskbar-apps");
  tb.innerHTML = "";
  loadTaskbar();
};

// const addToDesktop = () =>{

// }

// const removeFromDesktop = () =>{

// }

const displayTime = () => {
  let now = new Date();
  let currentTime = now.toLocaleTimeString();
  document.querySelector("#time").textContent = currentTime;
};

const displayDate = () => {
  let today = new Date();
  let cdj = today.toJSON().slice(0, 10).split("-").reverse();
  cdj[0] = parseInt(cdj[0]) + 1;
  cdj = cdj.join("/");
  document.querySelector("#date").textContent = cdj;
};

setInterval(displayTime, 1000);
setInterval(displayDate, 1000);

loadDesktop();
loadTaskbar();

let allDesktopApps = document.querySelectorAll("main > div.app");
for (i = 0; i < allDesktopApps.length; ++i) {
  allDesktopApps[i].addEventListener("dblclick", (event) => {
    let currentTarget = event.target.getAttribute("id");
    openApp(currentTarget);
  });
  allDesktopApps[i].addEventListener("contextmenu", (event) => {
    let currentTarget = event.target.getAttribute("id");
    const currentApp = desktopAppsArr.find((app) => app.name == currentTarget);
    event.preventDefault();
    pinToTaskbar(currentApp, currentTarget);
  });
}

let allTaskbarApps = document.querySelectorAll("#taskbar-apps");
for (i = 0; i < allTaskbarApps.length; ++i) {
  allTaskbarApps[i].addEventListener("click", (event) => {
    let currentTarget = event.target.getAttribute("id");
    openApp(currentTarget);
  });
  allTaskbarApps[i].addEventListener("contextmenu", (event) => {
    let currentTarget = event.target.getAttribute("id");
    const currentApp = taskbarArr.find((app) => app.name == currentTarget);
    event.preventDefault();
    unpinFromTaskbar(currentApp, currentTarget);
  });
}

let menu = document.querySelector("#menu");
let start = document.querySelector("#start-menu");
let desktopMain = document.querySelector("#desktop");

start.addEventListener("click", (event) => {
  menu.style.display = "flex";
});

desktopMain.addEventListener("click", (event) => {
  menu.style.display = "none";
});

power = document.querySelector("#power");
power.addEventListener("click", (event) => {
  const prompt = confirm("Would you like to shutdown? (Closes active tab)");
  if (prompt) {
    window.close();
  }
});

let allMenuApps = document.querySelectorAll("#menu-apps");
for (i = 0; i < allMenuApps.length; ++i) {
  allMenuApps[i].addEventListener("click", (event) => {
    let currentTarget = event.target.getAttribute("id");
    openApp(currentTarget);
  });
}

// DEPRIORITISED STUFF - TRY TO ADD

// const onRightClick = () => {
// Gives a dropdown of options which will in turn be functions
// open
// pin to taskbar/ desktop
// cut (and then paste)
// copy
// delete
// rename
// }
