let rand = document.getElementById("dynamic-text-inner");
const attributes = ["Lat Pull-Downs", "Hip Abductions", "Seated Leg Curls", "Chest Presses"]
let index = 0;
let wordInd = 0;
let workOuts = document.getElementsByClassName("workOuts");
let submitButton = document.getElementById("submit");
let degChange = 120;
let isHovering = false;
let inputBox = document.getElementById("inputBox");
let closeButton = document.getElementById("close")

for( let workout of workOuts ){
  workout.addEventListener("mousemove", function(){
    workout.style.opacity = "100%"
    workout.style.height = "14%"
    workout.style.width = "92%"
    workout.style.left = "1%"
    //cursorStyling
    cursorDiv.style.height = "60px";
    cursorDiv.style.width = "60px";
    cursorDiv.style.backgroundColor= "rgba(255, 255, 255, 1)";
    cursorDiv.style.mixBlendMode = "difference";
    cursorDiv.style.border= "none";
  })
  workout.addEventListener("mouseout", function(){
    workout.style.opacity = "20%"
    workout.style.height = "12%"
    workout.style.width = "90%"
    workout.style.left = "2%"
    //cursorStyling
    cursorDiv.style.height = "40px";
    cursorDiv.style.width = "40px";
    cursorDiv.style.backgroundColor= "transparent";
    cursorDiv.style.border= "2px solid white";
    cursorDiv.style.mixBlendMode = "difference";
  })
}

let cursorDiv = document.getElementById("cursorBox");
const move = (e) => setTimeout(function(){
  let x  = e.pageX;
  let y = e.pageY;

  cursorDiv.style.left = (x) + "px";
  cursorDiv.style.top = (y) + "px";
}, 100)
document.addEventListener("mousemove", (e) => {
  move(e)
});

function printLetters(attribute){
  const letterNum = attribute.length;
  if(index===letterNum){
    index--;
    clearLetters();
  }
  else if(index < attribute.length){
    rand.textContent += attribute.charAt(index);
    index++;
    setTimeout(function(){printLetters(attribute)}, 300);
  }
}

function closeHover(){
  closeButton.style.backgroundColor = "#cccccc"
}
closeButton.addEventListener("mouseout", function(){
  closeButton.style.backgroundColor = "#222222"
})

submitButton.addEventListener("mousemove", function(e) {
  submitButton.style.top = 50 + "px";
  submitButton.style.boxShadow = "none";
  if (!isHovering) {
    isHovering = true;
    buttonAnimation();
  }
});

const buttonAnimation = () => {
  if (isHovering) {
    submitButton.style.backgroundImage = "linear-gradient(" + degChange + "deg, #e0c3fc 0%, #8ec5fc 100%)";
    degChange += 5;
    if(degChange >= 360) {
      degChange = 0;
    }
    setTimeout(buttonAnimation, 20);
  }
};
submitButton.addEventListener("mouseout", function(e) {
  isHovering = false;
  submitButton.style.top = 40 + "px";
  submitButton.style.boxShadow = "0px 10px rgba(80,80,80,1)";

  submitButton.style.backgroundImage = submitButton.style.backgroundImage = "linear-gradient(" + degChange + "deg, #e0c3fc 0%, #8ec5fc 100%)";
});

let links = document.getElementsByTagName("a");
for(let link of links){
  link.addEventListener("mousemove", function(){
    cursorDiv.style.height = "60px";
    cursorDiv.style.width = "60px";
    cursorDiv.style.backgroundColor= "rgba(255, 255, 255, 1)";
    cursorDiv.style.mixBlendMode = "difference";
    cursorDiv.style.border= "none";
  })
  link.addEventListener("mouseout", function(){
    cursorDiv.style.height = "40px";
    cursorDiv.style.width = "40px";
    cursorDiv.style.backgroundColor= "transparent";
    cursorDiv.style.border= "2px solid white";
    cursorDiv.style.mixBlendMode = "difference";
  })
}

function openBox(){
  inputBox.style.display = "block";
}

function closeBox(){
  inputBox.style.display = "none";
}

function clearLetters(){
  if (index === -1) {
    wordInd = (wordInd + 1) % attributes.length;
    index = 0;
    printLetters(attributes[wordInd])
  }
  else if(index > -1) {
    let empty = "";
    for(let i = 0; i < index; i++) {
      empty += attributes[wordInd].charAt(i);
    }
    index--;
    rand.textContent = empty;
    setTimeout(clearLetters, 100);
  }
}


printLetters(attributes[wordInd])

