var page = require('webpage').create();
page.viewportSize = {
  width: 1920,
  height: 1080
};
// page.clipRect = { top: 0, left: 0, width: 1024, height: 768 };
page.open('http://192.168.1.10:55424/editor/?access_token=tXszFpKOSBG8k9KGW02vOlZll6pH6Wjb8hDZhM8P7cDPbCMIDKupFIkM3nyxKHCEH0RxsGtD0YvnZ5PdgsfNE78KS4RSOddeUv0hB2zUszR0ULj6ijgAopQx1YOfYBU5', function() {
  setTimeout(function() {
    var clipRect = page.evaluate(function(){
      return document.querySelector('#chart').getBoundingClientRect();
    });
    page.clipRect = {
        top:    clipRect.top,
        left:   clipRect.left,
        width:  clipRect.width,
        height: clipRect.height
    };
    page.render('editor.png');
    phantom.exit();
  }, 5000);
});
