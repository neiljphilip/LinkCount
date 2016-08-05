
document.addEventListener('DOMContentLoaded', function() { 
  chrome.tabs.executeScript(null, {code:"document.links.length" },
    function (results) {
      document.getElementById('number').innerHTML = results[0];
    });
});         
