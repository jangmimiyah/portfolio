var side = document.getElementById("navbar");

function toggleMenu() {
  if (side.style.right === "0px" || side.style.right === "") {
    side.style.right = "-260px";
  } else {
    side.style.right = "0";
  }
}
  const navigateButton = document.getElementById('navigateButton');

  navigateButton.addEventListener('click', function(){
    window.location.href = 'damn1.html';
  })
   
  const navbutton = document.getElementById('navbutton');

  navbutton.addEventListener('click', function(){
    window.location.href = 'damn2.html';
  })

  const naviBot = document.getElementById('naviBot');

  naviBot.addEventListener('click', function(){
    window.location.href = 'bbmmii.html';
  })
  
  const aviBut = document.getElementById('aviBut');

  aviBut.addEventListener('click', function(){
    window.location.href = 'login.html';
  })

  const vanibor = document.getElementById('vanibor');

  vanibor.addEventListener('click', function(){
    window.location.href = 'pupp.html';
  });
  
  
 

