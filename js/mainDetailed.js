
let listSelected = [];
function addToList(heading){
  listSelected.push(heading);
}

document.addEventListener("DOMContentLoaded", function(){
  let rand = document.getElementById("dynamic-text-inner");
  let workOuts = document.getElementsByClassName("workOuts");
  const attributes = ["Lat Pull-Downs", "Hip Abductions", "Seated Leg Curls", "Chest Presses"]
  let alpha = [2, 7, 12, 17]
  let index = 0;
  let wordInd = 0;
  let listSelected = [];

  for(let i = 0; i < alpha.length; i++) {
    workOuts[i].style.left = alpha[i]*window.innerWidth/100 + "px";
  }



  document.addEventListener("scroll", function(){
    for(let i = 0; i < alpha.length; i++){
      // if(alpha[i]*window.innerWidth/100 > 1 * window.innerWidth/100) {
        workOuts[i].style.left = alpha[i] * window.innerWidth / 100 - window.scrollY*0.3 + "px"
      //   alpha[i] = alpha[i] * window.innerWidth / 100 - window.scrollY + "px";
      // }
    }
  })


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
// let repsCount = document.getElementsByClassName("containerA")

  for( let workout of workOuts ){
    workout.addEventListener("mousemove", function(){
      workout.style.opacity = "100%"
      workout.style.height = "17%"
      workout.style.width = "92%"
      workout.style.left = "1%";
      let repsCount = workout.getElementsByClassName("containerA")
      for(let container of repsCount){
        container.style.opacity = "1"
        let box = container.getElementsByClassName("checkmarkA")
        box[0].style.opacity = "1"
      }
      let button = workout.getElementsByTagName("button");
      //cursorStyling
      // cursorDiv.style.height = "60px";
      // cursorDiv.style.width = "60px";
      // cursorDiv.style.backgroundColor= "rgba(255, 255, 255, 1)";
      // cursorDiv.style.mixBlendMode = "difference";
      // cursorDiv.style.border= "none";
    })
    workout.addEventListener("mouseout", function(){
      workout.style.opacity = "20%"
      workout.style.height = "12%"
      workout.style.width = "90%"
      workout.style.left = "2%"
      let repsCount = workout.getElementsByClassName("containerA")
      for(let container of repsCount){
        container.style.opacity = "0"
        let box = container.getElementsByClassName("checkmarkA")
        box[0].style.opacity = "0"
      }
      //cursorStyling
      // cursorDiv.style.height = "40px";
      // cursorDiv.style.width = "40px";
      // cursorDiv.style.backgroundColor= "transparent";
      // cursorDiv.style.border= "2px solid white";
      // cursorDiv.style.mixBlendMode = "difference";
    })
  }
})
