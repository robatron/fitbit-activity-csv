// Get a variable off the page's window, which can't be accessed directly
function getWindowVar(variable) {
    const dataAttrPrefix = 'fitbitCsvChromeExt';
    const dataAttrName = `${dataAttrPrefix}_${variable}`;

    // Inject temp script to fetch window var and store it in a data attribute
    // on the body
    const scriptContent =
        `document.getElementsByTagName('body')[0].dataset['${dataAttrName}'] = window.${variable};`;
    const script = document.createElement('script');
    script.id = `${dataAttrPrefix}_injectScript`;
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

function getCsrfToken2() {
    return getWindowVar('fitbitCsrfToken');
}

console.log('>>>', getCsrfToken2());
