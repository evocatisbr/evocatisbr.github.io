
"use strict";

(function() {
  window.addEventListener("load", init);

  function init() {
    const typingText = document.getElementById("typing-text");
    const text = typingText?.getAttribute("data-text") || ""; 

    let index = 0;

    function typeEffect() {
      if (typingText && index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
      }
    }

    typeEffect();
  }


})();







