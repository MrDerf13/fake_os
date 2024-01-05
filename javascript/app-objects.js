// Track their state with arrays

var allAppsArr = [
  {
    name: "recycle-bin",
    display: "Recycle Bin",
    desktopImg: "./images/recycle-bin-96.png",
    taskbarImg: "./images/recycle-bin-48.png",
    appToRender: `<div class="rbin">
    <div class="small">...The recycling bin is empty...</div>
    <div class="small"><img src="./images/tumbleweeds-96.png" alt="tumbleweeds" id="tumble"></div>
    <div class="pkmimg"><img src="./images/trash.jpg" alt="pkmtrash" id="pkmtrash"></div>
    </div>`,
  },
  {
    name: "notepad",
    display: "World's Worst Notepad",
    desktopImg: "./images/notepad-96.png",
    taskbarImg: "./images/notepad-48.png",
    appToRender: `<div class="wwnotepad">
    <h2>Inputs</h2><h2>Saved... notes?</h2>
    </div><div id="wwn">
    <div id="reversal" class="wwnotepad">
    <input id="to-reverse"></input><button id="reverse">Click to Save</button><p id="rev"></p><p id="revnote"></p>
    </div>
    <div id="encrypter" class="wwnotepad">
    <input id="encr"></input><button id="encrypt">Click to Save</button><p id="enc"></p><p id="encnote"></p>
    </div>
    <div id="caesarer" class="wwnotepad">
    <input id="caesar"></input><button id="caesaria">Click to Save</button><p id="cae"></p><p id="caenote"></p>
    </div>
    </div>`,
  },
  {
    name: "musical-doots",
    display: "Musical Doots",
    desktopImg: "./images/trumpet-96.png",
    taskbarImg: "./images/trumpet-48.png",
    appToRender: `<div class="dooting">
    <p id="doots">Skippity ba doo do</p>
    <div id="gifs">
    <iframe src="https://giphy.com/embed/NXM5qF6Qe4yWI" width="388" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><iframe src="https://giphy.com/embed/5MxvgLxp5p732" width="388" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>
    <div id="doot-buttons">
    <p id="ba"><button>More ba</button></p>
    <p id="da"><button>More da</button></p>
    <p id="doot2"><button>More doot</button></p>
    </div>
    </div>`,
  },
  //     {
  //     name: "another-app",
  //     display: "Another App",
  //     desktopImg: "./images/trumpet-96.png",
  //     taskbarImg: "./images/trumpet-48.png",
  //     appToRender: "<p><textarea>Skippity ba doo do</textarea></p>"
  // }
];

var desktopAppsArr = [
  {
    name: "recycle-bin",
    display: "Recycle Bin",
    desktopImg: "./images/recycle-bin-96.png",
    taskbarImg: "./images/recycle-bin-48.png",
    appToRender: `<div id="tumdiv"><div>Here's a bunch of trash</div><div><img src="./images/tumbleweeds-96.png" alt="tumbleweeds" id="tumble"></div></div>`,
  },
  {
    name: "notepad",
    display: "World's Worst Notepad",
    desktopImg: "./images/notepad-96.png",
    taskbarImg: "./images/notepad-48.png",
    appToRender: `<div id="wwn">
    <div id="inputs"><input id="to-reverse"></input><button id="reverse">Click to... well</button><input id="encr"></input><button id="encrypt">Maybe this one?</button><input id="caesar"></input><button id="caesaria">Must be this one</button></div>
    <div id="encryptions"><p id="rev"></p><p id="enc"></p><p id="cae"></p></div>
    <div id="saved-notes"><p id="revnote"></p><p id="encnote"></p><p id="caenote"></p></div>
    </div>`,
  },
  {
    name: "musical-doots",
    display: "Musical Doots",
    desktopImg: "./images/trumpet-96.png",
    taskbarImg: "./images/trumpet-48.png",
    appToRender: `<div class="dooting">
    <p id="doots">Skippity ba doo do</p>
    <div id="gifs">
    <iframe src="https://giphy.com/embed/NXM5qF6Qe4yWI" width="388" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><iframe src="https://giphy.com/embed/5MxvgLxp5p732" width="388" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>
    <div id="doot-buttons">
    <p id="ba"><button>More ba</button></p>
    <p id="da"><button>More da</button></p>
    <p id="doot2"><button>More doot</button></p>
    </div>
    </div>`,
  },
];

var taskbarArr = [
  {
    name: "notepad",
    display: "World's Worst Notepad",
    desktopImg: "./images/notepad-96.png",
    taskbarImg: "./images/notepad-48.png",
    appToRender: `<div id="wwn">
    <div id="inputs"><input id="to-reverse"></input><button id="reverse">Click to... well</button><input id="encr"></input><button id="encrypt">Maybe this one?</button><input id="caesar"></input><button id="caesaria">Must be this one</button></div>
    <div id="encryptions"><p id="rev"></p><p id="enc"></p><p id="cae"></p></div>
    <div id="saved-notes"><p id="revnote"></p><p id="encnote"></p><p id="caenote"></p></div>
    </div>`,
  },
];
var openAppsArr = [];
