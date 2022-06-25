var checkbox = document.getElementById("mode");
var theme = "dark";
var storedMode = local.Storage.getItem('theme')


if (storedMode)
document.documentElement.setAttribute('data-theme', storedMode);

theme = "dark"
checkbox.addEventListener('change', function() {
    
    if (checkbox.checked) {
    theme = "light";
  
    } 

    else {
        theme = "dark";
    }

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme',targetTheme);
});