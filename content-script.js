var availableMessages = {
  'VoximplantWebsdkCheckExtension': function(event){
    window.postMessage('VoximplantWebsdkExtensionLoaded', '*');
  },
  'voximplantWebsdkGetSourceId':  function (event) {
    port.postMessage(event.data);
  }
};
var port = chrome.runtime.connect();
port.onMessage.addListener(function (message) {
    window.postMessage(message, '*');
});
window.addEventListener('message', function (event) {
    if(event.source !== window||typeof availableMessages[event.data]=="undefined")
        return;
    availableMessages[event.data](event);
});
window.postMessage('VoximplantWebsdkExtensionLoaded', '*');
