
var target = document.getElementById("secondary");

var toggle = false;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        toggle = ! toggle;
        target.hidden = toggle;
      }
      
    }

  );