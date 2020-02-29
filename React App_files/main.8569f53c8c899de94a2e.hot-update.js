webpackHotUpdate("main",{

/***/ "./src/communication.js":
/*!******************************!*\
  !*** ./src/communication.js ***!
  \******************************/
/*! exports provided: FruitApp, FruitAppWithBalance, InterActiveFruits, FruitsAndVegetables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FruitApp", function() { return FruitApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FruitAppWithBalance", function() { return FruitAppWithBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterActiveFruits", function() { return InterActiveFruits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FruitsAndVegetables", function() { return FruitsAndVegetables; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _communication_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./communication.css */ "./src/communication.css");
/* harmony import */ var _communication_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_communication_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/akbel/Desktop/homeworks/React/week-3-project/src/communication.js";

 // Exercise: InterActive Fruits
// Instruct the fruits in our grid to activate certain animations
// TODO: make sure to pass the intent to bounce and rotate to the child components

const InterActiveFruits = () => {
  const rows = 4;
  const columns = 5;
  const fruits = ['banana', 'apple'];
  const [grid, setGrid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [bounce, setBounce] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [rotate, setRotate] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // On click generate a grid of fruits

  const handleGenerateClick = () => {
    const grid = []; // Generate a matrix of rows x columns

    for (let row = 0; row < rows; row++) {
      grid[row] = [];

      for (let column = 0; column < columns; column++) {
        // Set the value to a random fruit
        const random = Math.floor(Math.random() * fruits.length);
        grid[row][column] = fruits[random];
      }
    } // Update the state


    setGrid(grid);
  };

  function handleBounce() {
    if (bounce === false) {
      setBounce(true);
    } else {
      setBounce(false);
    }
  }

  function handleRorate() {
    if (rotate === true) {
      setRotate(false);
    } else {
      setRotate(true);
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, grid.map((row, rowIndex) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: `${rowIndex}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: undefined
    }, row.map((fruit, columnIndex) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        key: `${rowIndex}_${columnIndex}_${fruit}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InterActiveFruit, {
        key: `${rowIndex}_${columnIndex}_${fruit}`,
        name: fruit,
        bounce: bounce,
        rotate: rotate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: undefined
      }));
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handleGenerateClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "Generate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handleBounce,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Bounce"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handleRorate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Rotate"));
};

const InterActiveFruit = ({
  name,
  bounce,
  rotate
}) => {
  const [position, setPosition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // Just some fun on click let the animation fly of screen

  const handleClick = () => {
    const angle = Math.floor(Math.random() * 360);
    const flipSwitch = Math.floor(Math.random() * 2);
    let x = 9000;

    if (flipSwitch === 1) {
      x = -x;
    }

    const y = x / Math.tan(angle);
    setPosition([x, y]);
  };

  let fruitMoji;

  if (name === 'banana') {
    fruitMoji = '🍌';
  } else if (name === 'apple') {
    fruitMoji = '🍎';
  }

  const style = {};

  if (position.length) {
    style.animation = 'unset';
    style.transform = `translate(${position[0]}px, ${position[1]}px)`;
  } // Given the props assign a class to containers below
  // The classes are named after the animation they perform


  let bouncingClass = '';

  if (bounce === true) {
    bouncingClass = 'BouncingContainer';
  }

  let rotatingClass = '';

  if (rotate === true) {
    rotatingClass = 'RotatingContainer';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style,
    className: "FruitContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: bouncingClass,
    "data-testid": bouncingClass ? 'bouncing' : false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: rotatingClass,
    "data-testid": rotatingClass ? 'rotating' : false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: handleClick,
    "aria-label": name,
    role: "img",
    className: "BouncingFruit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, fruitMoji))));
}; // Exercise: Fruit App
// User can submit their favourite fruit in our form
// The form however only supports banana's and apples
// TODO: finish connecting the FruitForm to our list
// TODO: add support for oranges, make sure we can add oranges to our list


const FruitApp = () => {
  const [fruits, setFruits] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const onSubmit = eachFruit => {
    /* update the fruits here */
    //fruits.push("orange")
    fruits.push(eachFruit);
    let copyFruits = [...fruits];
    setFruits(copyFruits);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: 'fruit',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FruitForm, {
    onSubmitHandler: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FruitList, {
    fruits: fruits,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }));
};

const FruitList = ({
  fruits
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, fruits.map((fruit, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fruit, {
      name: fruit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: undefined
    }));
  }));
};

const Fruit = ({
  name
}) => {
  let fruitMoji;

  if (name === 'banana') {
    fruitMoji = '🍌';
  } else if (name === 'apple') {
    fruitMoji = '🍎';
  } else if (name === 'orange') {
    //I have copy paste the moji. where should I take it?
    fruitMoji = '🍊';
  } else if (name === 'peach') {
    fruitMoji = '🍑';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-testid": "fruit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, fruitMoji);
};

const FruitForm = ({
  onSubmitHandler
}) => {
  const [fruit, setFruit] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const isValidFruit = fruitInput => {
    return fruitInput === 'apple' || fruitInput === 'banana' || fruitInput === 'orange' || fruitInput === 'peach';
  };

  const onSubmit = event => {
    event.preventDefault(); // We disable the default behaviour of a form

    if (isValidFruit(fruit)) {
      onSubmitHandler(fruit);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }, "Banana or Apple + bonus Orange"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
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
      lineNumber: 202
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }, "Add")));
}; // Exercise: Fruit App With Balance
// TODO: finish connecting the FruitForm to our list
// TODO: make sure FruitBalance is rendered
// TODO: todo support oranges
// TODO: todo support peaches


const FruitAppWithBalance = () => {
  const [fruits, setFruits] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const onSubmitHandler = fruit => {
    /* update the fruits here */
    fruits.push(fruit);
    setFruits([...fruits]);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: 'fruit',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FruitForm, {
    onSubmitHandler: onSubmitHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FruitList, {
    fruits: fruits,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FruitBalance, {
    fruits: fruits,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: undefined
  }));
};

const FruitBalance = ({
  fruits = []
}) => {
  const bananas = fruits.filter(fruit => fruit === 'banana');
  const apples = fruits.filter(fruit => fruit === 'apple');
  const oranges = fruits.filter(fruit => fruit === 'oranges');
  const peaches = fruits.filter(fruit => fruit === 'peaches');
  let message = 'Eat more bananas';

  if (bananas.length > apples.length) {
    message = 'Eat more apples';
  }

  if (peaches.length > oranges.length) {
    message = 'peaches taste good';
  }

  if (peaches.length < oranges.lengt) {
    message = 'prefer vitamin C ? take some A to balance it';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  }, message);
};

const FruitsAndVegetables = () => {
  const [produce, setActiveProduce] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('fruits');
  const list = [{
    produce: 'fruits',
    default: 'apple',
    selected: []
  }, {
    produce: 'vegetables',
    default: 'cabbage',
    selected: []
  }];
  const [activeConfiguration] = list.filter(produceConfiguration => produceConfiguration.produce === produce);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: undefined
  }, "Produces:", list.map(produceConfiguration => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    key: produceConfiguration.produce,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio",
    name: "produce",
    checked: produceConfiguration.produce === produce,
    onChange: () => setActiveProduce(produceConfiguration.produce),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: undefined
  }), " ", produceConfiguration.produce))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProduceInput, {
    defaultProduce: activeConfiguration.default,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: undefined
  }));
};

const ProduceInput = ({
  defaultProduce
}) => {
  const [produce, setProduce] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultProduce);

  const handleChange = event => {
    setProduce(event.target.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: undefined
  }, "Produce: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: handleChange,
    value: produce,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: undefined
  }));
};



/***/ })

})
//# sourceMappingURL=main.8569f53c8c899de94a2e.hot-update.js.map