// assegno a ogni lettera un sound, quando avviene click, avviene il sound
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnitmation(buttonInnerHTML);

  });
}

// detect btn press
document.addEventListener("keydown", function() {
  playSound(event.key); // w
  buttonAnitmation(event.key);
});

// play sound switch
function playSound(key) {
  switch (key) {

    case "w": // perchè la classe è "w drum"
      var crash = new Audio("sounds/crash.mp3"); // new = nuovo oggetto e dice cosa fa e src
      crash.play();
      break; // finisce lo switch, inizia con case e finisce con break, è una funzione

    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default: // solitamente non viene mai chiamato ma può essere
      console.log(key)
  }
}

// animo il btn
function buttonAnitmation(key) {
  var activeBtn = document.querySelector("." + key);
  activeBtn.classList.add("pressed");
  setTimeout(function() {
    activeBtn.classList.remove("pressed");
  }, 100);

}
