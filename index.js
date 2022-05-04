 var numberOfButtons = document.querySelectorAll(".drum").length;


// buttons pressed on desktop
 for(var i=0;i<numberOfButtons;i++){

   document.querySelectorAll(".drum")[i].addEventListener("click", function  ()
   {
     var buttonId = this.innerHTML; //will give w, s,d etc
// this will be which button on screen is presed
     makeSound(buttonId);
buttonAnimations(buttonId);
   }
   );}

   // put this inside the 1st function and check console and clear doubts
   //console.log(this);
   //console.log(this.innerHTML);





   // keys pressed in keyboard
document.addEventListener("keydown", function(event){

makeSound(event.key);

buttonAnimations(event.key);

});

// key is pressed or clicked button on screen/keyboard
function makeSound(key){

  switch (key) {


    case 'w':
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
      break;

      case 'a':
      var tom2= new Audio('sounds/tom-2.mp3');
      tom2.play();
        break;

        case 's':
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
          break;

          case 'd':
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
            break;

            case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
              break;


              case 'k':
              var crash = new Audio('sounds/crash.mp3');
              crash.play();
                break;


                case 'l':
                var kickBass = new Audio('sounds/kick-bass.mp3');
                kickBass.play();
                  break;


    default:

  }
}

function buttonAnimations(currentkey) {


 var activeButton = document.querySelector("."+currentkey);
activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);

}
