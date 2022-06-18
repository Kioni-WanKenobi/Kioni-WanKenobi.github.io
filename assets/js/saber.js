
var hilt = document.createElement('div');
hilt.style.width = '150px';
hilt.style.height = '25px';
hilt.style.borderRadius = '10px';
hilt.style.backgroundColor = 'gray';
hilt.style.position = 'absolute';
hilt.style.left = '50%';
hilt.style.top = '50%';
hilt.style.marginLeft = '-75px';
hilt.style.marginTop = '0px';
hilt.style.borderTopRightRadius = '5px';
hilt.style.borderBottomRightRadius = '5px';
document.body.appendChild(hilt);


var triangle = document.createElement('div');
triangle.style.width = '20px';
triangle.style.height = '0';
triangle.style.borderBottom = '25px solid black';
triangle.style.borderLeft = '35px solid transparent';
triangle.style.position = 'absolute';
triangle.style.left = '50%';
triangle.style.top = '50%';
triangle.style.marginLeft = '-120px';
triangle.style.marginTop = '0px';
document.body.appendChild(triangle);

var blade = document.createElement('div');
blade.style.width = '500px';
blade.style.height = '15px';
blade.style.borderRadius = '10px';
blade.style.backgroundColor = 'salmon';
blade.style.position = 'absolute';
blade.style.left = '50%';
blade.style.top = '50%';
blade.style.marginLeft = '-580px';
blade.style.marginTop = '2.5px';
blade.style.zIndex = '-1';
document.body.appendChild(blade);


var button = document.createElement('button');
button.innerHTML = '🔆';
button.style.position = 'absolute';
button.style.left = '50%';
button.style.top = '50%';
button.style.marginLeft = '-20px';
button.style.marginTop = '0px';
button.style.fontSize = '20px';
button.style.backgroundColor = 'transparent';
button.style.border = 'none';
button.style.color = 'white';
button.style.cursor = 'pointer';
button.addEventListener('click', function() {
  if (blade.style.backgroundColor == 'salmon') {
    blade.style.backgroundColor = 'lightgreen';
  } else {
    blade.style.backgroundColor = 'salmon';
  }
});
document.body.appendChild(button);
var pulse = function() {
  if (blade.style.backgroundColor == 'salmon') {
      blade.style.boxShadow = '-5px 0 5px 5px #660000';
      setTimeout(function() {
      blade.style.boxShadow = '-5px 0 5px 5px #b30000';
  }, 500);
  } 
else {
      blade.style.boxShadow = '-5px 0 5px 5px #06c258';
      setTimeout(function() {
      blade.style.boxShadow = '-5px 0 5px 5px #059142';
  }, 500);
  }
};
setInterval(pulse, 1000);