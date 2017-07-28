chrome.runtime.onConnect.addListener(function (port) {
    port.onMessage.addListener(portOnMessageHanlder);
    function portOnMessageHanlder() {
        chrome.desktopCapture.chooseDesktopMedia(['screen', 'window'], port.sender.tab, onAccessApproved);
    }
    function onAccessApproved(sourceId) {
        if(!sourceId || !sourceId.length)
            return port.postMessage({result:'err',reason:'Permission denied'});
        port.postMessage({result: 'ok',sourceId: sourceId});
    }
});