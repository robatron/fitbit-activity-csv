// Config
// -----------------------------------------------------------------------------

const EXT_NAME = `fitbitCsvChromeExt`;
const BASE_URL = 'https://www.fitbit.com';
const API_URL = `${BASE_URL}/ajaxapi`;

// Util
// -----------------------------------------------------------------------------

// Get a variable off the page's window, which can't be accessed directly
function getWindowVar(variable) {
    const dataAttrName = `${EXT_NAME}_${variable}`;

    // Inject temp script to fetch window var and store it in a data attribute
    // on the body
    const scriptContent =
        `document.getElementsByTagName('body')[0].dataset['${dataAttrName}'] = window.${variable};`;
    const script = document.createElement('script');
    script.id = `${EXT_NAME}_injectScript`;
    script.appendChild(document.createTextNode(scriptContent));
    document.body.appendChild(script);

    // Get the var value
    const varVal = document.body.dataset[dataAttrName];

    // Clean up
    document.body.removeAttribute(`data-${dataAttrName}`);
    document.getElementById(script.id);

    // Return var value
    return varVal;
}

// Get Fitbit's CSRF token
function getCsrfToken() {
    return getWindowVar('fitbitCsrfToken');
}

// Network
// -----------------------------------------------------------------------------

function getActivityLog(apiUrl, csrfToken, callback, errorCallback) {
    const x = new XMLHttpRequest();

    x.onload = () => { callback(x.response) };
    x.onerror = () => { errorCallback('Network error.') };

    x.open('POST', apiUrl);
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    const requestObj = {
        serviceCalls: [
            {
                id: 'GET /api/2/user/activities/logs',
                name: 'user',
                method: 'getActivitiesLogs',
                args: {
                    fromDate: '2017-03-11',
                    toDate: '2017-02-26',
                    period: 'day',
                    offset: 0,
                    limit: 10
                }
            }
        ],
        template: 'activities/modules/models/ajax.response.json.jsp'
    };
    const requestData =
        `request=${encodeURIComponent(JSON.stringify(requestObj))}&` +
        `csrfToken=${encodeURIComponent(csrfToken)}`;

    x.send(requestData);
}

// I/O
// -----------------------------------------------------------------------------

const logPrefix = `[${EXT_NAME}]`;
const log = console.log.bind(null, logPrefix);
const error = console.error.bind(null, logPrefix);
const warn = console.warn.bind(null, logPrefix);

// Main
// -----------------------------------------------------------------------------
log(`Getting FitBit activity log from ${API_URL}...`);

const csrfToken = getCsrfToken();
log(`Aquired CSRF token: ${csrfToken}`);

getActivityLog(API_URL, csrfToken, (response) => {
    log(response);
}, (errorMessage) => {
    error(`Error getting activity log: ${errorMessage}`);
});
