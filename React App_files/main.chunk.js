(this["webpackJsonpreact-w2"] = this["webpackJsonpreact-w2"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/forms.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/forms.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "form div.field label {\n    font-weight: bold;\n}\n\nform .error {\n    color: red;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".app section.app_goal {\n    margin: 10px;\n    padding: 10px;\n    border: 1px solid black;\n}\n\n", ""]);


/***/ }),

/***/ "./src/forms.css":
/*!***********************!*\
  !*** ./src/forms.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./forms.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/forms.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./forms.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/forms.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./forms.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/forms.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

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



/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/akbel/Desktop/homeworks/React/week-2-project/src/index.js";






const App = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "React - Week 2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "app_goal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "State Hooks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Exercise 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_state__WEBPACK_IMPORTED_MODULE_2__["Ex1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Exercise 2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_state__WEBPACK_IMPORTED_MODULE_2__["Ex2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Exercise 3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_state__WEBPACK_IMPORTED_MODULE_2__["Ex3"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Exercise 4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_state__WEBPACK_IMPORTED_MODULE_2__["Ex4"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Exercise 5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_state__WEBPACK_IMPORTED_MODULE_2__["Ex5"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Exercise 6"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_state__WEBPACK_IMPORTED_MODULE_2__["Ex6"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Exercise 7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_state__WEBPACK_IMPORTED_MODULE_2__["Ex7"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Exercise 8"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_state__WEBPACK_IMPORTED_MODULE_2__["Ex8"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Exercise 9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_state__WEBPACK_IMPORTED_MODULE_2__["Ex9"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Exercise 10"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_state__WEBPACK_IMPORTED_MODULE_2__["Ex10"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Exercise 11"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_state__WEBPACK_IMPORTED_MODULE_2__["Ex11"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Exercise 12"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_state__WEBPACK_IMPORTED_MODULE_2__["Ex12"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Exercise 13"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_state__WEBPACK_IMPORTED_MODULE_2__["Ex13"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Exercise 14"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_state__WEBPACK_IMPORTED_MODULE_2__["Ex14"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "app_goal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Forms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Contact Form"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms__WEBPACK_IMPORTED_MODULE_3__["ContactForm"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Math Form"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms__WEBPACK_IMPORTED_MODULE_3__["MathForm"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Fruit Form"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms__WEBPACK_IMPORTED_MODULE_3__["FruitForm"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  })));
};

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/*! exports provided: Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8, Ex9, Ex10, Ex11, Ex12, Ex13, Ex14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ex1", function() { return Ex1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ex2", function() { return Ex2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ex3", function() { return Ex3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ex4", function() { return Ex4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ex5", function() { return Ex5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ex6", function() { return Ex6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ex7", function() { return Ex7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ex8", function() { return Ex8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ex9", function() { return Ex9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ex10", function() { return Ex10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ex11", function() { return Ex11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ex12", function() { return Ex12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ex13", function() { return Ex13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ex14", function() { return Ex14; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/akbel/Desktop/homeworks/React/week-2-project/src/state.js";
 // Exercise 1
// Since Japanese is not everyboy's forte,
// Write a component that changes the text to "Hello World"
// Note: The initial value should be what is set in the
// Base component

const Ex1 = function () {
  const [text, setText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Hello 世界");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      setText("Hello World");
      /* Fix something here */
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Translation please"));
}; // Exercise 2
// Now, your japanese friend is lost.. Make it so that
// By clicking on the button again the original text
// is displayed again


const Ex2 = function () {
  const text = ["Hello 世界", "Hello World"];
  const [idx, setIdx] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, text[idx]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      /* Write some logic here */
      setIdx(1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Translation please"));
}; // Exercise 3
// If you click a third time, can you read the text?
// If not, make it so that if we click on the button
// it always changes the text to the other language (the text toggles)


const Ex3 = function () {
  const text = ["Hello 世界", "Hello World", "Hallo Wereld", "Bonjour le monde", "Hallo Welt"];
  const [idx, setIdx] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, text[idx]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      /* Write some logic here */
      if (idx < 4) {
        setIdx(idx + 1);
      } else {
        setIdx(0);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Translation please"));
}; // Exercise 4
// Now, update the button's text so that it indicates
// which language it will translate to
// If Japanese is displayed, the button must say "Translation to english please"
// When English is diplayed, the button must say "Translation to japanese please"
// The toggle functionality should still be there.


const Ex4 = function () {
  const lang = ["english", "japanese"];
  const text = ["Hello 世界", "Hello World"];
  const [idx, setIdx] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, text[idx]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      /* Write some logic here */
      if (idx === 0) {
        setIdx(1);
      } else {
        setIdx(0);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Translation to ", lang[idx]
  /* Insert a variable here */
  , " please"));
}; // ------------------------------------
// Exercise 5
// Write a component that adds 1 to the p tag value on each click
// The p tag should start at 0


const Ex5 = function () {
  const [count, setCount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    /* Add something here */
    onClick: () => {
      setCount(count + 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Click me!"));
}; // Exercise 6
// Write a component that displays the next value
// in the fibonacci serie when we click on the button
// the fibonacci serie is as follows 0,1,1,2,3,5,8,13,21,...
// Got the logic?
// No? too bad...


const Ex6 = function () {
  const [fib, setFib] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([0, 1]
  /* Set the initial value of the state here */
  );
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, fib[0]
  /* The value you should put here is: `fib[0]`, but this will only work after you set the initial state */
  ), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      setFib([fib[1], fib[0] + fib[1]]);
      /* Write a function to update the state */
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Click me!"));
}; // Exercise 7
// Update the p tag to reflect how many times a button was clicked
// initial value should be 0


const Ex7 = function () {
  /* Init the state here */
  const [ref, setRef] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, ref
  /* Set a value here */
  ), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    /* Add something here */
    onClick: () => {
      setRef(ref + 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "click me"));
}; // Exercise 8
// Setup
// Add to button tags to the component (3 in total)
// first button text value is "fruit"
// first button text value is "meat"
// first button text value is "vegetables"
// Goal
// Set the p tag text to: "I like ..." where ... is the text value of the button


const Ex8 = function () {
  const [meal, setMeal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  /* init state and function to update it here */

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "I like ", meal
  /* Add something here */
  ), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      setMeal("fruit");
    }
    /* Add something here */
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "fruit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      setMeal("meat");
    }
    /* Add something here */
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "meat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      setMeal("vegetables");
    }
    /* Add something here */
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "vegetables"));
}; // Exercise 9
// Setup
// Still remove one button element (keep only two)
// The first button text value is "UPPER"
// The second button text value is "LOWER"
// initial value of the p tag is 'Last click:'
// Goal
// On clicking any of the buttons
// the p tag value should indicate which one of the buttons was clicked last
// Append it to the initial 'Last click'


const Ex9 = function () {
  /* init state and function to update it here */
  const [height, setHeight] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, "Last click: ", height
  /* Add something here */
  ), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      setHeight("Upper");
    }
    /* Add something here */
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, "UPPER"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      setHeight("Lower");
    }
    /* Add something here */
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, "LOWER"));
}; // Exercise 10
// Setup (start from the Base component)
// replace the p tag with an unordered list tag.
// add two lists elements within the unordered list. One that has "docker" as value the other "kubernetes".
// Set the text of the button element to "Add element"
// Goal
// On button click, a new list item should be appended in the unordered list. It should have as value "containerd"


const Ex10 = function () {
  const [items, setItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(["docker", "kubernetes"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  },
  /* render the items as an li here */
  items.map(a => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, a))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      /* Set the items here */
      const newItems = [...items];
      newItems.push("containerd");
      setItems(newItems);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, "Add element"));
}; // Exercise 11
// Setup (start from the Base component)
// replace the p tag with an unordered list tag.
// Keep the unordered list empty
// Set the text of the button element to "Add element"
// Goal
// On button click, a new item is added to the unordered list.
// The value of the item is taken from the following list (keep the order!) :
// ipsizzle
// nullizzle
// sapizzle
// velizzle
// crackalackin
// maurizzle
// rhoncizzle


const Ex11 = function () {
  const default_list = ["ipsizzle", "nullizzle", "sapizzle", "velizzle", "crackalackin", "maurizzle", "rhoncizzle"];
  const [items, setItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [idx, setIdx] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); // i changed it 1 to 0 to start with first item
  // look each item in the default-list

  const manual = () => {
    default_list.map((ite, inde) => {
      if (items[idx] === items[inde]) {
        items.push(ite); //setItems(items);

        setIdx(inde + 1);
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  },
  /* render the items as an li here */
  items.map((ite, inde) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: inde,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, ite))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick:
    /* update the state here */
    // setItems( i[ (setIdx(idx+1)) ] );
    manual,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, "Add element"));
}; // Exercise 12
// Setup (start from the Base component)
// replace the p tag with an unordered list tag.
// Keep the unordered list empty
// Set the text of the button element to "Add element"
// Goal
// Same as previous exercice, but this time the list is passed as a props

/* I dont know how to show the default_list as props-base_list
that is why when I use slice I got error*/


const Ex12 = function ({
  base_list
}) {
  const [items, setItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [idx, setIdx] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  },
  /* render the items as an li here */
  items.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }, item))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      //const manual = base_list.slice(0, idx)
      //setItems(manual);
      setIdx(idx + 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, "Add element"));
}; // Exercise 13
// Setup (start from the Ex11 component)
// Add an extra button element with the text "Remove element"
// Goal
// On "Add element" button click, a new item is added to the unordered list.
// On "Remove element" button click, a new item is added to the unordered list.
// Use the same list as in exercice 11


const Ex13 = function () {
  const default_list = ["ipsizzle", "nullizzle", "sapizzle", "velizzle", "crackalackin", "maurizzle", "rhoncizzle"];
  const [items, setItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [idx, setIdx] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }, items.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, item))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      setIdx(idx + 1);
      let manual = default_list.slice(0, idx + 1);
      setItems(manual);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: this
  }, "Add element"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      setIdx(idx - 1);
      let manual = default_list.slice(0, idx - 1);
      setItems(manual);
      /* update the state here */
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }, "Remove element"));
}; // Exercise 14
// Setup
// Same as Ex13
// Goal
// Same as previous ex, but this time the list is passed as a props
//the same problem wuth ex 12, I dont know how to define the list inside the props


const Ex14 = function ({
  base_list
}) {
  const [items, setItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [idx, setIdx] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  },
  /* render the items as an li here */
  items.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }, item))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      /* update the state here */
      setIdx(idx + 1);
      let manual = {
        base_list
      }.slice(0, idx + 1);
      setItems(manual);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: this
  }, "Add element"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => {
      /* update the state here */
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: this
  }, "Remove element"));
};



/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/akbel/Desktop/homeworks/React/week-2-project/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/akbel/Desktop/homeworks/React/week-2-project/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/akbel/Desktop/homeworks/React/week-2-project/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map