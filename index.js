
var noOfbuttons = document.querySelectorAll(".drum").length;
for (i = 0 ; i < noOfbuttons ; i++)
{
  document.querySelectorAll('.drum')[i].addEventListener('click',function(){sound(this.innerHTML)});
}
document.addEventListener('keypress',function(event){sound(event.key)})
function sound(letter)
{
  var audio;
  if(letter == 'w')
  {
     audio = new Audio('sounds/tom_1.mp3');
  }
  else if (letter == 'a')
  {
     audio = new Audio('sounds/tom_2.mp3');
  }
  else if (letter == 's')
  {
     audio = new Audio('sounds/tom_3.mp3');
  }
  else if (letter == 'd')
  {
     audio = new Audio('sounds/tom_4.mp3');
  }
  else if (letter == 'j')
  {
     audio = new Audio('sounds/snare.mp3');
  }
  else if (letter == 'k')
  {
     audio = new Audio('sounds/crash.mp3');
  }
  else if (letter == 'l')
  {
     audio = new Audio('sounds/kick-bass.mp3');
  }
  audio.play();
}
