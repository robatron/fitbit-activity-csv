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

// I/O
// -----------------------------------------------------------------------------

const log = console.log.bind(null, `[${EXT_NAME}]`);

// Main
// -----------------------------------------------------------------------------
log(`Getting FitBit activity log from ${API_URL}...`);

const csrfToken = getCsrfToken();
log(`Aquired CSRF token: ${csrfToken}`);
