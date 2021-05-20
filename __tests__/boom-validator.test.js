const BoomValidator = require('../src/boom-validator');

// setup scroll into view function
window.HTMLElement.prototype.scrollIntoView = function () { };

// Required

test('validates empty text input using the required rule', () => {
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

test('validates empty radio input using the required rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="radio" value="1" class="radio-input" />' +
        '  <input type="radio" value="2" class="radio-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": ".radio-input",
                "rules": "required",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(false);
});

test('validates checked radio input using the required rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="radio" value="1" class="radio-input" />' +
        '  <input type="radio" value="2" checked="true" class="radio-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": ".radio-input",
                "rules": "required",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(true);
});

// Regex
test('validates empty text input using the regex rule', () => {
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
                "rules": "regex=^[^\\s@]+@[^\\s@]+$",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(false);
});

test('validates filled text input using the regex rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="text" value="anystring@anystring.com" id="text-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#text-input",
                "rules": "regex=^[^\\s@]+@[^\\s@]+$",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(true);
});

// numeric
test('validates number input with string value using the numeric rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="number" value="some string value" id="number-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#number-input",
                "rules": "numeric",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(false);
});

test('validates number input with string value using the numeric rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="number" value="23" id="number-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#number-input",
                "rules": "numeric",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(true);
});

// max_length

test('validates text input with more characters than the max_length using the max_length rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="text" value="this is more than 5 characters" id="max_length-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#max_length-input",
                "rules": "max_length=5",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(false);
});

test('validates text input with less characters than the max_length using the max_length rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="text" value="less" id="max_length-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#max_length-input",
                "rules": "max_length=5",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(true);
});

// min_length

test('validates text input with invalid character length using the min_length rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="text" value="err" id="min_length-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#min_length-input",
                "rules": "min_length=5",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(false);
});

test('validates text input with valid character length using the min_length rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="text" value="satisfies the min length of 5" id="min_length-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#min_length-input",
                "rules": "min_length=5",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(true);
});

// min_length and max_length combined
test('validates text input with invalid min character length using the min_length rule and the max_length rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="text" value="err" id="min_length-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#min_length-input",
                "rules": "min_length=5|max_length=10",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(false);
});

test('validates text input with invalid max character length using the min_length rule and the max_length rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="text" value="this is longer than 10 characters" id="min_length-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#min_length-input",
                "rules": "min_length=5|max_length=10",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(false);
});

test('validates text input with valid character length using the min_length rule and the max_length rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="text" value="this is valid" id="min_length-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#min_length-input",
                "rules": "min_length=5|max_length=20",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(true);
});

// email

test('validates empty email input using the email rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="email" id="email-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#email-input",
                "rules": "email",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(false);
});

test('validates invalid email input using the email rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="email" value="invalid email address" id="email-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#email-input",
                "rules": "email",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(false);
});

test('validates valid email input using the email rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="email" value="subhamkharel12@gmail.com" id="email-input" />' +
        '</div>';

    // Set up the validator options

    let options = {
        "validation": [
            {
                "selector": "#email-input",
                "rules": "email",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(true);
});

// contact

test('validates empty number input using the contact rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="number" id="phone-number-input" />' +
        '</div>';

    // Set up the validator options
    let options = {
        "validation": [
            {
                "selector": "#phone-number-input",
                "rules": "contact",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(false);
});

test('validates invalid number input using the contact rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="number" value="this is not a valid number" id="phone-number-input" />' +
        '</div>';

    // Set up the validator options
    let options = {
        "validation": [
            {
                "selector": "#phone-number-input",
                "rules": "contact",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(false);
});

test('validates valid number input using the contact rule', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <input type="number" value="9812341234" id="phone-number-input" />' +
        '</div>';

    // Set up the validator options
    let options = {
        "validation": [
            {
                "selector": "#phone-number-input",
                "rules": "contact",
            }
        ],
    };

    // Initiate the validator

    let boomValidator = new BoomValidator(options);

    // Assert that the boomValidatior.isValid() returns false
    expect(boomValidator.isValid()).toEqual(true);
});