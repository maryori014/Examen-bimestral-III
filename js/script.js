var num = document.querySelectorAll(".drum").length;

for(var i=0; i<num;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);
    
});
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    makeAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "A":
            var drum = new Audio("Audio/Clap.wav");
            drum.play();
            break;
        case "S": 
             var drum = new Audio("Audio/Hihat.wav");
             drum.play();
             break;
        case "D": 
             var drum = new Audio("Audio/Kick.wav");
             drum.play();
        break;
        case "F": 
             var drum = new Audio("Audio/Openhat.wav");
             drum.play();
        break;
        case "G": 
             var drum = new Audio("Audio/Boom.wav");
             drum.play();
            break;
         case "H": 
             var drum = new Audio("Audio/Ride.wav");
             drum.play();
            break;  
    
        case "J":
            var drum = new Audio("Audio/Snare.wav");
            drum.play();
        break;

        case "K": 
        var drum = new Audio("Audio/Tom.wav");
        drum.play();
        break;

        case "L": 
        var drum = new Audio("Audio/Tink.wav");
        drum.play();
        break;
        default: console.log(buttonInnerHTMl);
    }
}
function makeAnimation(currentKey){
     var activeButton = document.querySelector("."+currentKey);
     activeButton.classList.add("pressed");
     setTimeout(function(){
        activeButton.classList.remove("pressed");
     }, 100 );
}