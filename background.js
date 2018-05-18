chrome.omnibox.onInputEntered.addListener(function (text) {
    chrome.storage.sync.get('queryString', function (o) {
        var newURL = 'https://www.google.com/search?q=' + o.queryString + '%20' + encodeURIComponent(text);
        chrome.tabs.update({
            url: newURL
        });
    });
});