// Functions for Musical Doots

// random number generator
const getRandInt = (max) => {
    return Math.floor(Math.random() * max+1);
}

//push new sounds
const moreDa = (arr) => {
    arr.push("da")
}
const moreBa = (arr) => {
    arr.push("ba")
}
const moreDoot = (arr) => {
    arr.push("doot")
}

// list of available "sounds"
let sounds = ["skippity", "ba", "baa", "baaa", "da", "daa", "daaa", "doot", "dooot", "doooot", "DOOOOT!"];

// I feel like this needs cleaning up, try catch is a lazy way to keep the console from getting polluted
    // should be added to the openApp function to start from then
const musiscalDoots = () => {
    let size = sounds.length
    let dootsRender = document.querySelector("#doots");
    let doots = new Array(10).fill("");
    for (let i=0; i <10; ++i){
        doots[i]=sounds[getRandInt(size)]
    }
    dootsRender.innerHTML = doots.join(" ");
    const ba = document.querySelector("#ba");
    ba.addEventListener("click", (event)=>moreBa(sounds))
    const da = document.querySelector("#da");
    da.addEventListener("click", (event)=>moreDa(sounds))
    const doot = document.querySelector("#doot2");
    doot.addEventListener("click", (event)=>moreDoot(sounds));
}

// World's Worst Notepad Functions

const reverse = () => {
    // get value of input
    let string = document.querySelector("#to-reverse").value;
    const newString = string.split("")
    .reverse()
    .join("")
    // .innerHTML to <div id="encryptions"> <p id="rev">
    document.querySelector("#rev").innerHTML = newString;
    // .innerHTML to <div id="saved-notes"> <p id="revnote">
    document.querySelector("#revnote").innerHTML = "Hmm that's not what you wanted";
}

const encrypt = () => {
    // get value of input
    let string = document.querySelector("#encr").value;
    const newString = string.split("")
    .reduce((acc, cur, i) => {acc[i%3].push(cur); return acc}, [[],[],[]])
    .flat()
    .join("");
    // .innerHTML to <div id="encryptions"> <p id="enc">
    document.querySelector("#enc").innerHTML = newString;
    // .innerHTML to <div id="saved-notes"> <p id="encnote">
    document.querySelector("#encnote").innerHTML = "You've seen this one before, a simple encryption.";
}

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const caesar = () => {
    // let endstring = ""
    // get shift, randomnum 1-9 * +or- 1?
    const shift = getRandInt(26);
    // get value of input
    let string = document.querySelector("#caesar").value;
    // .split()
    const newString = string.replace(" ", "")
    .split("")
    .map((char)=>alphabet[alphabet.indexOf(char)+shift])
    .join("");
    // .innerHTML to <div id="encryptions"> <p id="cae">
    document.querySelector("#cae").innerHTML = newString;
    // .innerHTML to <div id="saved-notes"> <p id="caenote">
    document.querySelector("#caenote").innerHTML = `This is a Caesar Cypher, it shifts each character a certain number of places in the alphabet. In this case, your letters were shifted ${shift} places.`;
}


// Recycle Bin Functions
var rotation = 0;
var translation = 0;
var direction = 1;

const rotate = () =>{
    weed = document.querySelector("#tumble");
    let xwidth = document.querySelector(".small").offsetWidth;
    if (translation>=xwidth-100){
        direction = -1;
    } else if (translation<=0){
        direction = 1;
    };
    translation += 5*direction;
    rotation += 5*direction;
    weed.style.transform = `translateX(${translation}px) rotate(${rotation}deg)`;    
    console.log(xwidth)
}