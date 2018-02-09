var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/zee.jpg') {
      myImage.setAttribute ('src','images/zet.jpg');
    } else {
      myImage.setAttribute ('src','images/zee.jpg');
    }
}
  var myButton = document.getElementById('button');
  var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'JavaScript is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'JavaScript is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
