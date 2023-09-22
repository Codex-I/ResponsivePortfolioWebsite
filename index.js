function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navlinks02") {
    x.className += " responsive";
  } else {
    x.className = "navlinks02";
  }
}