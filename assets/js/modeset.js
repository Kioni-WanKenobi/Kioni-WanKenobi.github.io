var checkbox = document.getElementById("mode");
var theme = "dark";
var storedMode = localStorage.getItem('theme')


if (storedMode)
document.documentElement.setAttribute('data-theme', storedMode);

checkbox.addEventListener('change', function() {
    
    if (checkbox.checked) {
    theme = "dark";
  
    } 

    else {
        theme = "light";
    }

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme',theme);
});