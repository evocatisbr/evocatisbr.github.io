"use strict";

(function() {
  window.addEventListener("load", init);

  function init() {
    window.addEventListener("scroll", handleScroll);
  }

  function handleScroll() {
    var navbar = document.getElementById("navbar");
    var target = document.getElementById("matahari");
    var rect = target.getBoundingClientRect();
  
    if (rect.top <= 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

})();
