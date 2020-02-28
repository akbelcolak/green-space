webpackHotUpdate("main",{

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/*! exports provided: ContactForm, MathForm, FruitForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactForm", function() { return ContactForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathForm", function() { return MathForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FruitForm", function() { return FruitForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _forms_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.css */ "./src/forms.css");
/* harmony import */ var _forms_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forms_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/akbel/Desktop/homeworks/React/week-2-project/src/forms.js";

 // Exercise: Contact Form
// We are looking to capture user feedback, for this we add a contact from
// Write a component in which the user can submit a question
// TODO: Thank the user after completing the form

const ContactForm = () => {
  // Create the state variables and functions to update them
  const [comment, setComment] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [submittedText, setSubmittedText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const onSubmit = event => {
    event.preventDefault(); // We disable the default behaviour of a form

    setSubmittedText(`Thanks for submitting ${name}`);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, !submittedText && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Your question or comment"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    id: "comment",
    name: "comment",
    onChange: event => {
      setComment(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Name"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "name",
    type: "text",
    name: "name",
    "aria-label": "contact-name",
    onChange: event => {
      setName(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Send it!")), submittedText && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, submittedText));
}; // Exercise: Math Form
// We are making a basic calculator that count up numbers
// TODO: when a user types in a value store this value in a state variable
// TODO: Fix the issue with the number not counting up correctly


const MathForm = () => {
  const [numberA, setNumberA] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [numberB, setNumberB] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); // numberA and numberB are strings how can we force them to be numbers ?
  // i guess parseInt() of Number()

  const sum = Number(numberA) + Number(numberB);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "name",
    type: "number",
    name: "numberA",
    "aria-label": "math-number-a"
    /* add an attribute with value here that causes numberA to update when the input changes */
    ,
    onChange: event => setNumberA(event.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), "\xA0 + \xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "name",
    type: "number",
    name: "numberA",
    "aria-label": "math-number-b"
    /* add an attribute with value here that causes numberA to update when the input changes */
    //value={setNumberB(numberB)}
    ,
    onChange: event => setNumberB(event.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "The sum of a and b is ", sum));
}; // Exercise: Fruit Form
// User can submit their favourite fruit in our form
// The form however only supports banana's and apples
// TODO: Make sure users can only submit "banana" or "apple"
// TODO: if an invalid fruit (not "banana" or "apple") is typed in an error message is displayed


const FruitForm = () => {
  // Create the state variables and functions to update them
  const [fruits, setFruits] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [fruit, setFruit] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let error = fruit === "banana" || fruit === "apple" ? true : false;
  /* Add an expression here that validates if fruit is a banana or apple */

  const onSubmit = event => {
    event.preventDefault(); // We disable the default behaviour of a form

    /* Only update the state of fruit if we have no errors */
    // error ? setFruits([...fruits, fruit]) : "nope!";

    !error && setFruits([...fruits, fruit]);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "Banana or Apple"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "name",
    type: "text",
    name: "name",
    "aria-label": "fruit-name",
    onChange: event => {
      setFruit(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  })), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, "I don't recognize this fruit please make a choice between \"banana\" or \"apple\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, "Add")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, fruits.map((fruit, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fruit, {
      name: fruit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: undefined
    }));
  })));
};

const Fruit = ({
  name
}) => {
  let fruitMoji;

  if (name === 'banana') {
    fruitMoji = '🍌';
  } else if (name === 'apple') {
    fruitMoji = '🍎';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-testid": "fruit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, fruitMoji);
};



/***/ })

})
//# sourceMappingURL=main.073c6a692564b632a3d5.hot-update.js.map