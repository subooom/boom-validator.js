const BoomValidator = require('../src/boom-validator');

test('validates empty text input using the required rule', () => {
    // set up scrollIntoView
    window.HTMLElement.prototype.scrollIntoView = function () { };

    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="text" id="text-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#text-input",
                "rules": "required",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(false);
});

test('validates filled text input using the required rule', () => {
    // set up scrollIntoView
    window.HTMLElement.prototype.scrollIntoView = function () { };

    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="text" value="jest test" id="text-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#text-input",
                "rules": "required",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(true);
});

test('validates empty number input using the required rule', () => {
    // set up scrollIntoView
    window.HTMLElement.prototype.scrollIntoView = function () { };

    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="number" id="number-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#number-input",
                "rules": "required",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(false);
});

test('validates filled number input using the required rule', () => {
    // set up scrollIntoView
    window.HTMLElement.prototype.scrollIntoView = function () { };

    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="number" value="2" id="number-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#number-input",
                "rules": "required",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(true);
});

test('validates empty checkbox input using the required rule', () => {
    // set up scrollIntoView
    window.HTMLElement.prototype.scrollIntoView = function () { };

    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="checkbox" value="1" id="checkbox-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#checkbox-input",
                "rules": "required",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(false);
});

test('validates checked checkbox input using the required rule', () => {
    // set up scrollIntoView
    window.HTMLElement.prototype.scrollIntoView = function () { };

    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="checkbox" value="2" checked="true" id="checkbox-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#checkbox-input",
                "rules": "required",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(true);
});

// test('validates empty radio input using the required rule', () => {
//     // set up scrollIntoView
//     window.HTMLElement.prototype.scrollIntoView = function () { };

//     // Set up our document body
//     document.body.innerHTML =
//         '<div>' +
//         '  <input type="radio" value="1" class="radio-input" />' +
//         '  <input type="radio" value="2" class="radio-input" />' +
//         '</div>';

//     // Set up the validator options

//     let options = {
//         "validation": [
//             {
//                 "selector": ".radio-input",
//                 "rules": "required",
//             }
//         ],
//     };

//     // Initiate the validator

//     let boomValidator = new BoomValidator(options);

//     // Assert that the boomValidatior.isValid() returns false
//     expect(boomValidator.isValid()).toEqual(false);
// });

// test('validates checked radio input using the required rule', () => {
//     // set up scrollIntoView
//     window.HTMLElement.prototype.scrollIntoView = function () { };

//     // Set up our document body
//     document.body.innerHTML =
//         '<div>' +
//         '  <input type="radio" value="1" checked="true" class="radio-input" />' +
//         '  <input type="radio" value="2" class="radio-input" />' +
//         '</div>';

//     // Set up the validator options

//     let options = {
//         "validation": [
//             {
//                 "selector": ".radio-input",
//                 "rules": "required",
//             }
//         ],
//     };

//     // Initiate the validator

//     let boomValidator = new BoomValidator(options);

//     // Assert that the boomValidatior.isValid() returns false
//     expect(boomValidator.isValid()).toEqual(true);
// });