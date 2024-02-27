  window.addEventListener('scroll', function() {
    var paragraphs = document.querySelectorAll('.content p');
    var scrollPosition = window.scrollY;

    paragraphs.forEach(function(paragraph, index) {
      var scaleFactor = index < 7 ? (index + 1) * 0.2 : (15 - index) * 2; 
      var fontSize = 20 + scaleFactor; 
      fontSize = Math.max(15, fontSize); 
      paragraph.style.fontSize = fontSize + 'px';

      var fontFamily = index < 7 ? 'monospace' : 'Helvetica, Arial, sans-serif'; 
      paragraph.style.fontFamily = fontFamily;

      var fontWeight = index < 7 ? 'normal' : 'bold'; 
      paragraph.style.fontWeight = fontWeight;
    });
  });