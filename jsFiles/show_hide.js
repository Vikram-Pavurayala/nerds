
var lockscreen = false;
var desktop = false;
function lockToPassword(){
  document.getElementById('lock_screen').style.display='none';

  document.getElementById('password').style.display='flex';
    gsap.from('.group_photo', {
      duration: 0.5,
      y: '100%',
    })
    gsap.from('.user_name', {
      duration: 0.5,
      y: '150%',
    })
    gsap.from('.input', {
      duration: 0.5,
      y: '200%',
    })
  document.getElementById('password').style.perspective=0;
  lockscreen = true;
}
var credits = true;


function showCreditsContent() {
  if (credits) {
    document.getElementById('credits_content').style.display = "flex";
    document.getElementById('credits').style.textDecoration = "underline";
    credits = false;
  } 
  else {
    document.getElementById('credits_content').style.display = "none";
    document.getElementById('credits').style.textDecoration = "none";
    credits = true;
  }
}
 function handleEnterKey(event) {
   // Check if the key pressed is Enter (key code 13)
   if (event.key === 'Enter') {
     // Call your function here
     myFunction();
   }
 }

 function myFunction() {
   const x = document.getElementById('input').value;
   if (x == 'AMSV' || x == 'amsv') {
     showDesktop();
   }
   else {
     alert("check credits")
   }
 }

function showDesktop(){
 document.getElementById('password').style.display='none';
 document.getElementById('desktop').style.display='flex';
 document.getElementById('footer').style.display="flex";
 document.getElementById('calender_time').style.display='block';
 document.getElementById('activities').style.display="block";
 desktop = true;
}


var windows = true;
function showWindow(element){
  var elementId = element.id;
  if(windows){
    document.getElementById('window').style.display = 'block';
    var image = document.createElement("img");
    
    // Set the source (you can replace 'image-source.jpg' with your image URL)
    image.src = '/assets/file-manager.svg';
    image.id = 'file-image';
    image.style.backgroundColor = 'grey';
    // Set any additional attributes or styles if needed
    // image.setAttribute('alt', 'Image Alt Text');
    // image.style.width = '100px';
    
    // Append the image to the image container
    document.getElementById('footer').appendChild(image);
    if(elementId === 'achyut'){
     document.getElementById('card__logo').innerHTML='Achyut Pradhan';
     document.getElementById('card__number').innerHTML='Gaming - 20% <br><br> Study - 60% <br><br> Chatting - 30%';
     document.getElementById('card__type').innerHTML='@Nerd 1';
     document.getElementById('cardImg').src='./assets/Achyut.jpeg'
    }
    else if(elementId === 'guru'){
      document.getElementById('card__logo').innerHTML = 'Guruva Reddy';
      document.getElementById('card__number').innerHTML = 'eves dropping - 30% <br><br> Study - 60% <br><br> Movies - 10%';
      document.getElementById('card__type').innerHTML = '@Nerd 2';
      document.getElementById('cardImg').src='./assets/Guru.jpeg';
    }
    else if (elementId === 'jithendra') {
      document.getElementById('card__logo').innerHTML = 'Jithendra Kumar';
      document.getElementById('card__number').innerHTML = 'Instagram - 70% <br><br> Study - 30% <br><br> Confused - 100%';
      document.getElementById('card__type').innerHTML = '@Nerd 3';
      document.getElementById('cardImg').src = './assets/Jithendra.jpeg'
    }
     else if (elementId === 'manikanta') {
       document.getElementById('card__logo').innerHTML = 'Manikanta';
       document.getElementById('card__number').innerHTML = 'Exercise - 10% <br><br> Study - 70% <br><br> Laughing - 20%';
       document.getElementById('card__type').innerHTML = '@Nerd 4';
       document.getElementById('cardImg').src = './assets/Manikanta.jpeg'
     }
     else if (elementId === 'nikhil') {
       document.getElementById('card__logo').innerHTML = 'Nikhil Teja';
       document.getElementById('card__number').innerHTML = 'Study : 100%';
       document.getElementById('card__type').innerHTML = '@Nerd 5';
       document.getElementById('cardImg').src = './assets/Nikhil.jpeg'
     }  
     else if (elementId === 'raja') {
       document.getElementById('card__logo').innerHTML = 'Raja';
       document.getElementById('card__number').innerHTML = 'Sports - 10% <br><br> Study - 70% <br><br> Social media - 20%';
       document.getElementById('card__type').innerHTML = '@Nerd 6';
       document.getElementById('cardImg').src = './assets/Raja.jpeg'
     }
     else if (elementId === 'srikanth') {
       document.getElementById('card__logo').innerHTML = 'Srikanth';
       document.getElementById('card__number').innerHTML = 'Phone Calls(girls) - 80% <br><br> Study - 70% <br><br> Sweaping - 20%';
       document.getElementById('card__type').innerHTML = '@Nerd 7';
       document.getElementById('cardImg').src = './assets/Srikanth.jpeg'
     }
     else if (elementId === 'vikram') {
       document.getElementById('card__logo').innerHTML = 'Vikram';
       document.getElementById('card__number').innerHTML = 'Anime - 50% <br><br> Gaming - 20% <br><br> Study - 30%';
       document.getElementById('card__type').innerHTML = '@Nerd 8';
       document.getElementById('cardImg').src='./assets/Vikram.jpeg';
     }
    windows = false;
    
   
    
  }
}
function closeWindow() {
    document.getElementById('window').style.display = 'none';
    windows=true;
    var image = document.getElementById('file-image');
    if (image) {
       image.parentNode.removeChild(image);
    }
}

var memory = true;
function showMemories(){
  document.getElementById('memories').style.display = 'block';
  memory=false;
}
function closeMemories() {
  document.getElementById('memories').style.display = 'none';
  memory=false;
}