const DEFAULTS = {
  validation: {
    rules: {
      messages: {
        required: ":field is required.",
        numeric: ":field must be a number.",
        min_length: ":field must be less than :min_length characters.",
        max_length: " :field must be more than :max_length characters.",
        email: "Invalid Email.",
        contact: "Contact must be a 10 digit number.",
        regex: ":field doesn't match the pattern.",
      },
    },
  },
  "error-class-name": "has-error",
  "error-message-class-name": "help-block",
  "key-up": true,
};

function BoomValidator(options) {
  this.options = options;
  this.option = {};
  this.invalidFormFields = [];

  // set DEFAULTS
  if (!this.options["error-class-name"]) {
    this.options["error-class-name"] = DEFAULTS["error-class-name"];
  }
  if (!this.options["error-message-class-name"]) {
    this.options["error-message-class-name"] =
      DEFAULTS["error-message-class-name"];
  }

  this.makeReadable = (text, delimiter) =>
    text.replace(delimiter, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  this.parseErrorMessage = (elem, errorMessage) =>
    this.makeReadable(
      errorMessage.replace(":field", elem.getAttribute("name")),
      "_"
    );

  this.showErrorMessage = (elem, errorMessage) => {
    // add class
    elem.parentNode.classList.add(this.options["error-class-name"]);

    // check if error message class name already exists inside parent

    let error_message = elem.parentNode.querySelectorAll(
      "." + this.options["error-message-class-name"]
    )[0];
    if (error_message) {
      if (error_message.innerHTML.length > 0) {
        error_message.innerHTML += "<br />";
      }
      error_message.innerHTML += this.parseErrorMessage(elem, errorMessage);
    } else {
      let helpBlock = document.createElement("div");

      helpBlock.className =
        this.option["custom-error-message-class-name"] ||
        this.options["error-message-class-name"];
      helpBlock.innerHTML = this.parseErrorMessage(elem, errorMessage);

      elem.parentNode.appendChild(helpBlock);
    }
  };

  this.hideErrorMessage = (elem) => {
    // remove class
    elem.parentNode.classList.remove(this.options["error-class-name"]);

    let errorDivSelector = this.options["error-message-class-name"];

    if (this.option["custom-error-message-class-name"]) {
      errorDivSelector = this.option["custom-error-message-class-name"];
    }

    let errorDiv = elem.parentNode
      .querySelectorAll("." + errorDivSelector)
      .forEach((ele) => {
        if (elem && ele) {
          ele.innerHTML = "";
        }
      });
  };

  // validate based on rules
  this.required = (
    elem,
    message = DEFAULTS.validation.rules.messages["required"]
  ) => {
    switch (elem.type) {
      case "select":
      case "textarea":
      case "number":
      case "email":
      case "text":
        if (elem.value === "" || elem.length === 0) {
          this.showErrorMessage(elem, message);
          return false;
        } else {
          this.hideErrorMessage(elem);
          return true;
        }
      case "checkbox":
      case "radio":
        if (!elem.checked) {
          this.showErrorMessage(elem, message);
          return false;
        } else {
          if (elem.checked === "false") {
            this.showErrorMessage(elem, message);
            return false;
          } else {
            this.hideErrorMessage(elem);
            return true;
          }
        }
      default:
        break;
    }
  };

  this.regex = (
    elem,
    message = DEFAULTS.validation.rules.messages["regex"],
    regex
  ) => {
    if (!regex.test(elem.value)) {
      this.showErrorMessage(elem, message);
      return false;
    } else {
      this.hideErrorMessage(elem);
      return true;
    }
  };

  this.numeric = (
    elem,
    message = DEFAULTS.validation.rules.messages["numeric"]
  ) => {
    if (!/^\d+$/.test(elem.value)) {
      this.showErrorMessage(elem, message);
      return false;
    } else {
      this.hideErrorMessage(elem);
      return true;
    }
  };

  this.max_length = (
    elem,
    message = DEFAULTS.validation.rules.messages["max_length"],
    max
  ) => {
    if (elem.value.length > parseInt(max, 10)) {
      this.showErrorMessage(elem, message);
      return false;
    } else {
      this.hideErrorMessage(elem);
      return true;
    }
  };

  this.min_length = (
    elem,
    message = DEFAULTS.validation.rules.messages["min_length"],
    min
  ) => {
    if (elem.value.length < parseInt(min, 10)) {
      this.showErrorMessage(elem, message);
      return false;
    } else {
      this.hideErrorMessage(elem);
      return true;
    }
  };

  this.email = () => {
    console.log("email");
  };

  this.contact = (
    elem,
    message = DEFAULTS.validation.rules.messages["contact"]
  ) => {
    if (!/^\d{10}$/.test(elem.value)) {
      this.showErrorMessage(elem, message);
    } else {
      this.hideErrorMessage(elem);
    }
  };

  this.isValid = () => this.invalidFormFields.length === 0;

  this.validate = (currentOption, elem) => {
    let errorDivSelector = this.options["error-message-class-name"];

    if (this.option["custom-error-message-class-name"]) {
      errorDivSelector = this.option["custom-error-message-class-name"];
    }

    let errorDiv = elem.parentNode.querySelectorAll("." + errorDivSelector)[0];
    if (errorDiv) {
      errorDiv.innerHTML = "";
    }
    // store the rules
    let { rules, messages } = currentOption;

    // split the string by | (get rules)
    rules = rules.split("|");

    let errors = [];

    // loop through each rule
    for (let j = 0; j < rules.length; j++) {
      // get the current rule
      let currentRule = rules[j];

      // split the string by = (get key/value pair)
      let splitted = currentRule.split("=");

      let defaultMessage =
        DEFAULTS["validation"]["rules"]["messages"][currentRule];

      // invoke the function with the validation logic
      let invoker = this[splitted[0]](
        elem,
        messages ? messages[splitted[0]] : defaultMessage,
        splitted[1]
      );

      errors.push({
        element: elem,
        rule: rules[j],
        isValid: invoker,
      });
    }

    return errors.every((entry) => entry.isValid === true);
  };

  // loop through every validation rule
  if (this.options.validation) {
    for (let i = 0; i < this.options.validation.length; i++) {
      let currentOption = this.options.validation[i];
      // select the selector
      let elem = document.querySelectorAll(currentOption.selector)[0];

      if (currentOption["custom-error-message-class-name"]) {
        this.option["custom-error-message-class-name"] =
          currentOption["custom-error-message-class-name"];
      }

      // handle for selects inputs
      if (elem.tagName == "SELECT") {
        elem.addEventListener("change", (e) => {
          if (!this.validate(currentOption, elem)) {
            this.invalidFormFields.push(currentOption);
            document
              .querySelectorAll(currentOption.selector)[0]
              .scrollIntoView();
          } else {
            this.invalidFormFields = [];
          }
        });
      }
      if (this.options["key-up"] || DEFAULTS["key-up"]) {
        elem.addEventListener("keyup", () => {
          if (!this.validate(currentOption, elem)) {
            this.invalidFormFields.push(currentOption);
            document
              .querySelectorAll(currentOption.selector)[0]
              .scrollIntoView();
          } else {
            this.invalidFormFields = [];
          }
        });
        elem.addEventListener("change", () => {
          if (!this.validate(currentOption, elem)) {
            this.invalidFormFields.push(currentOption);
            document
              .querySelectorAll(currentOption.selector)[0]
              .scrollIntoView();
          } else {
            this.invalidFormFields = [];
          }
        });
      }
      if (!this.validate(currentOption, elem)) {
        this.invalidFormFields.push(currentOption);
        document.querySelectorAll(currentOption.selector)[0].scrollIntoView();
      } else {
        this.invalidFormFields = [];
      }
    }
  }
}

if (typeof module !== "undefined") {
  module.exports = BoomValidator;
}
