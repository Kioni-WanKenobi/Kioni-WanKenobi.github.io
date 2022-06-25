var checkbox = document.getElementById("mode");

var theme = "dark"
checkbox.addEventListener('change', function() {
    
    if (checkbox.checked) {
    theme = "light";
  
    } 

    document.documentElement.setAttribute('data-theme', theme);
});