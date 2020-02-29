(this["webpackJsonpreact-w3"] = this["webpackJsonpreact-w3"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/communication.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/communication.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".FruitContainer {\n    font-size: 40px;\n    cursor: pointer;\n    display: block;\n    transition: transform 10s ease;\n}\n\n.RotatingContainer {\n    animation-duration: 1s;\n    animation-fill-mode: both;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n    animation-name: rotate;\n}\n\n@keyframes rotate {\n    0%, 100% {\n        transform: rotateZ(0deg);\n    }\n    50% {\n        transform: rotateZ(360deg);\n    }\n}\n\n.BouncingContainer {\n    animation-duration: 1s;\n    animation-fill-mode: both;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n    animation-name: bounce;\n}\n\n@keyframes bounce {\n    0%, 100% {\n        transform: translateY(0);\n    }\n    50% {\n        transform: translateY(-10px);\n    }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".app section.app_goal {\n    margin: 10px;\n    padding: 10px;\n    border: 1px solid black;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: Pokedex, InteractivePokedex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pokedex", function() { return Pokedex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractivePokedex", function() { return InteractivePokedex; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/akbel/Desktop/homeworks/React/week-3-project/src/api.js";
 // Exercise Pokedex:
// A pokedex is a machine that displays all the known pokemon
// Render all the known pokemons for our user
// TODO: after fetching the pokemons from the api set it to our state
// TODO: render the names of the pokemons

const Pokedex = () => {
  const [pokemons, setPokemons] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // This use effect might be confusing
  // But is is an example of another type of hook
  // For now it is unimportant to know how it works exactly
  // Just know that it executes the function once on first render

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchPokemons = () => {
      return fetch('https://pokeapi.co/api/v2/pokedex/2/').then(response => response.json()).then(json => json.pokemon_entries);
    };
    /* Use the result of the fetchPokemons function */

    /* set the result using setPokemons, be sure to support the render below */

  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'pokedex',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Pokedex"), pokemons.map(pokemon => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Pokemon, Object.assign({
    key: pokemon.entry_number
  }, pokemon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }))));
};

const Pokemon = ({
  /* add the property we want to use in order to display the name */
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  });
}; // Exercise Pokedex:
// A pokedex is a machine that displays all the known pokemon
// Render all the known pokemons for our user
// TODO: after fetching the pokemons from the api set it to our state
// TODO: render the names of the pokemons


const InteractivePokedex = () => {
  const [pokemons, setPokemons] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [selectedPokemon, setSelectedPokemon] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // This use effect might be confusing
  // But is is an example of another type of hook
  // For now it is unimportant to know how it works exactly
  // Just know that it executes the function once on first render

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchPokemons = () => {
      return fetch('https://pokeapi.co/api/v2/pokedex/2/').then(response => response.json()).then(json => json.pokemon_entries);
    };
    /* Use the result of the fetchPokemons function */

    /* set the result using setPokemons, be sure to support the render below */

  }, []);

  const onSelectHandler = pokemon => {
    const fetchPokemon = () => {
      return fetch(pokemon.url).then(response => response.json());
    };
    /* Use the result of the fetchPokemon function */

    /* set the result using selectedPokemon, be sure to support the render below */

  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'pokedex',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "Interactive Pokedex"), selectedPokemon === false ? pokemons.map(pokemon => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InterActivePokemon, Object.assign({
    key: pokemon.entry_number
  }, pokemon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DetailedPokemon, Object.assign({}, selectedPokemon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  })));
};

const DetailedPokemon = ({
  flavor_text_entries
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, flavor_text_entries.map((entry, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, entry.flavor_text)));
};

const InterActivePokemon = ({
  pokemon_species,
  onSelectHandler
}) => {
  const onClick = () => {
    /* trigger the onSelectedHandler function with the pokemon_species */
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "Learn more"));
};



/***/ }),

/***/ "./src/communication.css":
/*!*******************************!*\
  !*** ./src/communication.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./communication.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/communication.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./communication.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/communication.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./communication.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/communication.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

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



/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
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
/* harmony import */ var _communication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./communication */ "./src/communication.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ "./src/api.js");
var _jsxFileName = "/Users/akbel/Desktop/homeworks/React/week-3-project/src/index.js";






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
  }, "React - Week 3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
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
  }, "Child-Parent and Parent-Child Communication"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Interactive Fruits"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_communication__WEBPACK_IMPORTED_MODULE_2__["InterActiveFruits"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Fruit App"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_communication__WEBPACK_IMPORTED_MODULE_2__["FruitApp"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Fruit App With Balance Indicator"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_communication__WEBPACK_IMPORTED_MODULE_2__["FruitAppWithBalance"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Fruits and Vegetables"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_communication__WEBPACK_IMPORTED_MODULE_2__["FruitsAndVegetables"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "app_goal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api__WEBPACK_IMPORTED_MODULE_4__["Pokedex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_api__WEBPACK_IMPORTED_MODULE_4__["InteractivePokedex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })));
};

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/akbel/Desktop/homeworks/React/week-3-project/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/akbel/Desktop/homeworks/React/week-3-project/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/akbel/Desktop/homeworks/React/week-3-project/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map