document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('submit');
    var queryInput = document.getElementById('query');
    submitButton.addEventListener('click', function () {
        chrome.storage.sync.set({
            "queryString": queryInput.value
        }, function () {
            submitButton.innerHTML = 'Query prefix saved';
        });
    }, false);

    queryInput.addEventListener('keyup', function () {
        if (this.value !== '') {
            submitButton.removeAttribute('disabled');
        }
    });
}, false);