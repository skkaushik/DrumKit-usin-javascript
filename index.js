
// document.querySelector('button').addEventListener('click',getClicked());

// function getClicked(){
//     alert("Yes! I have Clicked")
// }

// // using anoynomous function{
    var numofdrumb=document.querySelectorAll(".drum").length;
    for(var i=0;i<numofdrumb;i++){
        document.querySelectorAll('button')[i].addEventListener('click',function(){
            
            var innerhtmlbtn=this.innerHTML;
            sound(innerhtmlbtn)
            animation(innerhtmlbtn)
         }) ;
}   
// // }

document.addEventListener('keypress',function(event){
    sound(event.key)
    animation(event.key)
});


function sound(key){
    switch (key){
        case 'w':
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
             var audio=new Audio('sounds/tom-2.mp3');
             audio.play();
             break;
        case 's':
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            brreak;
         case 'd':
                var audio=new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
         case 'j':
            var audio=new Audio('sounds/kick-bass.mp3');
             audio.play();
             break;
         case 'k':
            var audio=new Audio('sounds/snare.mp3');
             audio.play();
             break;
         case 'l':
            var audio=new Audio('sounds/crash.mp3');
             audio.play();
             break;
    }

}
function animation(currentkey){
    var actiivebtn= document.querySelector("."+ currentkey)
    actiivebtn.classList.add("pressed")

    setTimeout(function(){
        actiivebtn.classList.remove("pressed");
    },30)

}
