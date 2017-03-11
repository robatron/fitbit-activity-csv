const BASE_URL = 'https://www.fitbit.com';
const API_URL = `${BASE_URL}/ajaxapi`;

function getActivityLog(apiUrl, callback, errorCallback) {
    var x = new XMLHttpRequest();
    x.open('POST', apiUrl);
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    x.onload = function() {
        callback(x.response);
    };

    x.onerror = function() {
        errorCallback('Network error.');
    };

    const requestData = new FormData();
    requestData.append('request', {
        "serviceCalls": [
            {
                "id": "GET \/api\/2\/user\/activities\/logs",
                "name": "user",
                "method": "getActivitiesLogs",
                "args": {
                    "fromDate": "2017-02-26",
                    "toDate": "2017-02-26",
                    "period": "day",
                    "offset": 0,
                    "limit": 10
                }
            }
        ],
        "template": "activities\/modules\/models\/ajax.response.json.jsp"
    });
    requestData.append('csrfToken', '67CBA974-6166-1EC7-C7AA-140633DAC75B');

    x.send(requestData);
}

function log(statusText) {
    const statusEl = document.getElementById('status');
    statusEl.innerHTML += `<li>${statusText}</li>`
}

document.addEventListener('DOMContentLoaded', function() {
    log(`Getting FitBit activity log from ${API_URL}...`);

    getActivityLog(API_URL, function(response) {
        log(response);
    }, function(errorMessage) {
        log(`Error getting activity log: ${errorMessage}`);
    });
});
