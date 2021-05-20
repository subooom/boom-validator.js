# boom-validator.js

Easy and efficient validation library built with Vanilla JavaScript.
## Installation

Clone the repository and import it in your project. Currently, the package doesn't exists on npm.
## Usage

### 1. Define the options for validation:

```javascript
    let options = {
        "validation": [
            {
                "selector": ".age-input",
                "rules": "required|numeric",
                "custom-error-message-class-name": "has-error",
                "messages": {
                    "required": "Age is required",
                    "numeric": "Age must be numeric",
                },
            },
            {
                "selector": ".phone-number-input",
                "rules": "required|contact",
            },
        ],
    };
```

### 2. Initiate the bool-validator by passing the options as parameter:

```javascript
    let boomValidator = new BoomValidation(options);
```

### 3. Check if the form is valid by:

```javascript
   if(boomValidator.isValid()) {
       // submit the form
   }
```

## Supported Rules

- required
- regex
- numeric
- max_length
- min_length
- email
- contact

## Examples

Examples are located inside the `/examples` directory.

## Support

For support start an issue on the repository


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)