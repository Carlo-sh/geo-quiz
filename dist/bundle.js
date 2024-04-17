/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _node_modules_world_countries_lists_data_countries_en_world_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/world_countries_lists/data/countries/en/world.json */ \"./node_modules/world_countries_lists/data/countries/en/world.json\");\n\n\nconst flagBtn = document.getElementById(\"flag-mode\");\nconst centralDiv = document.getElementById(\"btn-container\");\nlet playerLives = 3;\nlet playerScore = 0;\nconst generateFlagGrid = () => {\n  console.log(_node_modules_world_countries_lists_data_countries_en_world_json__WEBPACK_IMPORTED_MODULE_1__);\n  centralDiv.classList.add(\"flags-container\");\n  centralDiv.innerHTML = '<h2 id=\"guess-title\">guess the flag</h2>';\n  const roundCountries = roundFlags();\n  const flagsDiv = document.createElement(\"div\");\n  flagsDiv.setAttribute(\"id\", \"round-flags\");\n  const guessFlag = document.createElement(\"h2\");\n  guessFlag.setAttribute(\"id\", \"guess-flag\");\n  guessFlag.textContent = `${roundCountries[Math.floor(Math.random() * roundCountries.length)]}`;\n  const guessName = guessFlag.textContent;\n  roundCountries.forEach(c => {\n    const flagImg = new Image();\n    const flagIndex = _node_modules_world_countries_lists_data_countries_en_world_json__WEBPACK_IMPORTED_MODULE_1__.findIndex(f => f.name === c);\n    flagImg.src = `../node_modules/world_countries_lists/data/flags/128x128/${_node_modules_world_countries_lists_data_countries_en_world_json__WEBPACK_IMPORTED_MODULE_1__[flagIndex].alpha2}.png`;\n    flagImg.setAttribute(\"name\", `${_node_modules_world_countries_lists_data_countries_en_world_json__WEBPACK_IMPORTED_MODULE_1__[flagIndex].name}`);\n    flagsDiv.appendChild(flagImg);\n  });\n  const timeBarContainer = document.createElement(\"div\");\n  timeBarContainer.classList.add(\"time-bar\");\n  timeBarContainer.innerHTML = '<div id=\"inner-bar\"></div>';\n  centralDiv.append(flagsDiv, timeBarContainer, guessFlag);\n  generateScoreGrid();\n  const rightAudio = new Audio(\"../src/sounds/264981__renatalmar__sfx-magic.wav\");\n  const wrongAudio = new Audio(\"../src/sounds/587253__beetlemuse__dats-wrong.wav\");\n  const gridFlags = document.querySelectorAll(\"#round-flags img\");\n  gridFlags.forEach(f => {\n    f.addEventListener(\"click\", () => {\n      gridFlags.forEach(g => {\n        g.style.pointerEvents = \"none\";\n      });\n      if (f.name === guessName) {\n        rightAudio.play();\n        f.style.backgroundColor = \"green\";\n        playerScore++;\n        const bar = document.querySelector(\"#inner-bar\");\n        bar.style.animationPlayState = \"paused\";\n        _node_modules_world_countries_lists_data_countries_en_world_json__WEBPACK_IMPORTED_MODULE_1__.splice(_node_modules_world_countries_lists_data_countries_en_world_json__WEBPACK_IMPORTED_MODULE_1__.findIndex(c => c.name === f.name), 1);\n        generateScoreGrid();\n        setTimeout(generateFlagGrid, 800);\n      } else {\n        wrongAudio.play();\n        f.style.backgroundColor = \"red\";\n        playerLives--;\n        if (checkLives(playerLives)) return;\n        generateScoreGrid();\n        setTimeout(generateFlagGrid, 800);\n      }\n    });\n  });\n  const innerBar = document.getElementById(\"inner-bar\");\n  innerBar.addEventListener(\"animationend\", () => {\n    wrongAudio.play();\n    playerLives--;\n    gridFlags.forEach(f => {\n      f.style.pointerEvents = \"none\";\n      f.style.backgroundColor = \"red\";\n    });\n    if (checkLives(playerLives)) return;\n    setTimeout(generateFlagGrid, 800);\n  });\n};\nconst roundFlags = () => {\n  const countriesArr = [];\n  while (countriesArr.length < 4) {\n    const countryIndex = Math.floor(Math.random() * _node_modules_world_countries_lists_data_countries_en_world_json__WEBPACK_IMPORTED_MODULE_1__.length);\n    if (!countriesArr.includes(_node_modules_world_countries_lists_data_countries_en_world_json__WEBPACK_IMPORTED_MODULE_1__[countryIndex].name)) {\n      countriesArr.push(_node_modules_world_countries_lists_data_countries_en_world_json__WEBPACK_IMPORTED_MODULE_1__[countryIndex].name);\n    }\n  }\n  return countriesArr;\n};\nflagBtn.addEventListener(\"click\", () => {\n  generateFlagGrid();\n});\nconst generateScoreGrid = () => {\n  if (centralDiv.lastElementChild.id === \"score-container\") {\n    centralDiv.lastElementChild.innerHTML = \"\";\n  }\n  const scoreDiv = document.createElement(\"div\");\n  scoreDiv.setAttribute(\"id\", \"score-container\");\n  const livesContainer = document.createElement(\"div\");\n  livesContainer.setAttribute(\"id\", \"lives-container\");\n  const lives = document.createElement(\"h2\");\n  lives.setAttribute(\"id\", \"lives\");\n  lives.textContent = \"Lives: \";\n  const livesWrapper = document.createElement(\"div\");\n  livesWrapper.setAttribute(\"id\", \"lives-wrapper\");\n  for (let i = 0; i < playerLives; i++) {\n    const life = new Image();\n    life.src = \"../src/images/globe-2-svgrepo-com.svg\";\n    livesWrapper.appendChild(life);\n  }\n  livesContainer.append(lives, livesWrapper);\n  const score = document.createElement(\"h2\");\n  score.setAttribute(\"id\", \"score\");\n  score.textContent = `Score: ${playerScore}`;\n  scoreDiv.append(livesContainer, score);\n  centralDiv.appendChild(scoreDiv);\n};\nconst checkLives = lives => {\n  if (lives === 0) {\n    setTimeout(() => {\n      centralDiv.innerHTML = \"\";\n      const guessTitle = document.createElement(\"h2\");\n      guessTitle.setAttribute(\"id\", \"guess-title\");\n      guessTitle.textContent = \"guess the flag\";\n      const gameOver = document.createElement(\"h2\");\n      gameOver.textContent = `Game Over! Your final score is ${playerScore}`;\n      centralDiv.append(guessTitle, gameOver);\n    }, 800);\n    return true;\n  }\n  return false;\n};\n\n//# sourceURL=webpack://geo-quiz/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/fonarto.regular.ttf */ \"./src/fonts/fonarto.regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/roboto.regular.ttf */ \"./src/fonts/roboto.regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --bg-primary: #121e30;\n  --bg-hover: #dfeb88;\n  --text-color: #e3e5e8;\n  --duration: 10;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: var(--bg-primary);\n  color: var(--text-color);\n  text-transform: capitalize;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  font-family: Roboto, sans-serif;\n}\n\n@font-face {\n  font-family: Fonarto;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n#title {\n  font-family: Fonarto, sans-serif;\n  font-size: 48px;\n  padding: 1rem;\n}\n\n#btn-container {\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n}\n\n.fade-in {\n  animation: fadeIn 3s forwards;\n}\n\n.flags-container {\n  align-items: center;\n}\n\n#guess-title {\n  padding-bottom: 2rem;\n  font-style: italic;\n}\n\n.mode-btn {\n  height: 70px;\n  background-color: var(--bg-primary);\n  color: var(--text-color);\n  border: 1px solid var(--text-color);\n  text-transform: capitalize;\n  font-size: 1.7rem;\n  padding: 1rem;\n}\n\n.mode-btn:hover {\n  cursor: pointer;\n  background-color: var(--text-color);\n  color: var(--bg-primary);\n}\n\nfooter p {\n  padding: 1rem;\n}\n\n/* - */\n\n#round-flags {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n#round-flags img {\n  padding: 0 1rem;\n}\n\n#round-flags img:hover {\n  background-color: var(--bg-hover);\n}\n\n#score-container {\n  position: absolute;\n  top: 50%;\n  left: calc(50% + 250px);\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n  transform: translateY(-50%);\n}\n\n#lives-container {\n  display: flex;\n  align-items: center;\n  column-gap: 12px;\n  height: 50px;\n}\n\n#lives-wrapper {\n  display: flex;\n  column-gap: 12px;\n}\n\n#guess-flag {\n  padding: 1rem;\n  margin-top: 1rem;\n  border: 1px solid var(--text-color);\n  border-radius: 5px;\n}\n\n.time-bar {\n  overflow: hidden;\n  height: 16px;\n  width: 320px;\n}\n\n.time-bar div {\n  height: 16px;\n  animation: roundtime calc(var(--duration) * 1s) linear forwards;\n  transform-origin: left center;\n  background: linear-gradient(to bottom, #238c3f, #095c1f);\n}\n\n@keyframes roundtime {\n  to {\n    transform: scaleX(0);\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://geo-quiz/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://geo-quiz/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://geo-quiz/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://geo-quiz/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://geo-quiz/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://geo-quiz/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://geo-quiz/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://geo-quiz/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://geo-quiz/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://geo-quiz/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://geo-quiz/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/fonts/fonarto.regular.ttf":
/*!***************************************!*\
  !*** ./src/fonts/fonarto.regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bec137c055a88d2b7013.ttf\";\n\n//# sourceURL=webpack://geo-quiz/./src/fonts/fonarto.regular.ttf?");

/***/ }),

/***/ "./src/fonts/roboto.regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/roboto.regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04b605aa85f24816e3e6.ttf\";\n\n//# sourceURL=webpack://geo-quiz/./src/fonts/roboto.regular.ttf?");

/***/ }),

/***/ "./node_modules/world_countries_lists/data/countries/en/world.json":
/*!*************************************************************************!*\
  !*** ./node_modules/world_countries_lists/data/countries/en/world.json ***!
  \*************************************************************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"id\":4,\"alpha2\":\"af\",\"alpha3\":\"afg\",\"name\":\"Afghanistan\"},{\"id\":248,\"alpha2\":\"ax\",\"alpha3\":\"ala\",\"name\":\"Åland Islands\"},{\"id\":8,\"alpha2\":\"al\",\"alpha3\":\"alb\",\"name\":\"Albania\"},{\"id\":12,\"alpha2\":\"dz\",\"alpha3\":\"dza\",\"name\":\"Algeria\"},{\"id\":16,\"alpha2\":\"as\",\"alpha3\":\"asm\",\"name\":\"American Samoa\"},{\"id\":20,\"alpha2\":\"ad\",\"alpha3\":\"and\",\"name\":\"Andorra\"},{\"id\":24,\"alpha2\":\"ao\",\"alpha3\":\"ago\",\"name\":\"Angola\"},{\"id\":660,\"alpha2\":\"ai\",\"alpha3\":\"aia\",\"name\":\"Anguilla\"},{\"id\":10,\"alpha2\":\"aq\",\"alpha3\":\"ata\",\"name\":\"Antarctica\"},{\"id\":28,\"alpha2\":\"ag\",\"alpha3\":\"atg\",\"name\":\"Antigua and Barbuda\"},{\"id\":32,\"alpha2\":\"ar\",\"alpha3\":\"arg\",\"name\":\"Argentina\"},{\"id\":51,\"alpha2\":\"am\",\"alpha3\":\"arm\",\"name\":\"Armenia\"},{\"id\":533,\"alpha2\":\"aw\",\"alpha3\":\"abw\",\"name\":\"Aruba\"},{\"id\":36,\"alpha2\":\"au\",\"alpha3\":\"aus\",\"name\":\"Australia\"},{\"id\":40,\"alpha2\":\"at\",\"alpha3\":\"aut\",\"name\":\"Austria\"},{\"id\":31,\"alpha2\":\"az\",\"alpha3\":\"aze\",\"name\":\"Azerbaijan\"},{\"id\":44,\"alpha2\":\"bs\",\"alpha3\":\"bhs\",\"name\":\"Bahamas\"},{\"id\":48,\"alpha2\":\"bh\",\"alpha3\":\"bhr\",\"name\":\"Bahrain\"},{\"id\":50,\"alpha2\":\"bd\",\"alpha3\":\"bgd\",\"name\":\"Bangladesh\"},{\"id\":52,\"alpha2\":\"bb\",\"alpha3\":\"brb\",\"name\":\"Barbados\"},{\"id\":112,\"alpha2\":\"by\",\"alpha3\":\"blr\",\"name\":\"Belarus\"},{\"id\":56,\"alpha2\":\"be\",\"alpha3\":\"bel\",\"name\":\"Belgium\"},{\"id\":84,\"alpha2\":\"bz\",\"alpha3\":\"blz\",\"name\":\"Belize\"},{\"id\":204,\"alpha2\":\"bj\",\"alpha3\":\"ben\",\"name\":\"Benin\"},{\"id\":60,\"alpha2\":\"bm\",\"alpha3\":\"bmu\",\"name\":\"Bermuda\"},{\"id\":64,\"alpha2\":\"bt\",\"alpha3\":\"btn\",\"name\":\"Bhutan\"},{\"id\":68,\"alpha2\":\"bo\",\"alpha3\":\"bol\",\"name\":\"Bolivia (Plurinational State of)\"},{\"id\":535,\"alpha2\":\"bq\",\"alpha3\":\"bes\",\"name\":\"Bonaire, Sint Eustatius and Saba\"},{\"id\":70,\"alpha2\":\"ba\",\"alpha3\":\"bih\",\"name\":\"Bosnia and Herzegovina\"},{\"id\":72,\"alpha2\":\"bw\",\"alpha3\":\"bwa\",\"name\":\"Botswana\"},{\"id\":74,\"alpha2\":\"bv\",\"alpha3\":\"bvt\",\"name\":\"Bouvet Island\"},{\"id\":76,\"alpha2\":\"br\",\"alpha3\":\"bra\",\"name\":\"Brazil\"},{\"id\":86,\"alpha2\":\"io\",\"alpha3\":\"iot\",\"name\":\"British Indian Ocean Territory\"},{\"id\":96,\"alpha2\":\"bn\",\"alpha3\":\"brn\",\"name\":\"Brunei Darussalam\"},{\"id\":100,\"alpha2\":\"bg\",\"alpha3\":\"bgr\",\"name\":\"Bulgaria\"},{\"id\":854,\"alpha2\":\"bf\",\"alpha3\":\"bfa\",\"name\":\"Burkina Faso\"},{\"id\":108,\"alpha2\":\"bi\",\"alpha3\":\"bdi\",\"name\":\"Burundi\"},{\"id\":132,\"alpha2\":\"cv\",\"alpha3\":\"cpv\",\"name\":\"Cabo Verde\"},{\"id\":116,\"alpha2\":\"kh\",\"alpha3\":\"khm\",\"name\":\"Cambodia\"},{\"id\":120,\"alpha2\":\"cm\",\"alpha3\":\"cmr\",\"name\":\"Cameroon\"},{\"id\":124,\"alpha2\":\"ca\",\"alpha3\":\"can\",\"name\":\"Canada\"},{\"id\":136,\"alpha2\":\"ky\",\"alpha3\":\"cym\",\"name\":\"Cayman Islands\"},{\"id\":140,\"alpha2\":\"cf\",\"alpha3\":\"caf\",\"name\":\"Central African Republic\"},{\"id\":148,\"alpha2\":\"td\",\"alpha3\":\"tcd\",\"name\":\"Chad\"},{\"id\":152,\"alpha2\":\"cl\",\"alpha3\":\"chl\",\"name\":\"Chile\"},{\"id\":156,\"alpha2\":\"cn\",\"alpha3\":\"chn\",\"name\":\"China\"},{\"id\":162,\"alpha2\":\"cx\",\"alpha3\":\"cxr\",\"name\":\"Christmas Island\"},{\"id\":166,\"alpha2\":\"cc\",\"alpha3\":\"cck\",\"name\":\"Cocos (Keeling) Islands\"},{\"id\":170,\"alpha2\":\"co\",\"alpha3\":\"col\",\"name\":\"Colombia\"},{\"id\":174,\"alpha2\":\"km\",\"alpha3\":\"com\",\"name\":\"Comoros\"},{\"id\":178,\"alpha2\":\"cg\",\"alpha3\":\"cog\",\"name\":\"Congo\"},{\"id\":180,\"alpha2\":\"cd\",\"alpha3\":\"cod\",\"name\":\"Congo, Democratic Republic of the\"},{\"id\":184,\"alpha2\":\"ck\",\"alpha3\":\"cok\",\"name\":\"Cook Islands\"},{\"id\":188,\"alpha2\":\"cr\",\"alpha3\":\"cri\",\"name\":\"Costa Rica\"},{\"id\":384,\"alpha2\":\"ci\",\"alpha3\":\"civ\",\"name\":\"Côte d\\'Ivoire\"},{\"id\":191,\"alpha2\":\"hr\",\"alpha3\":\"hrv\",\"name\":\"Croatia\"},{\"id\":192,\"alpha2\":\"cu\",\"alpha3\":\"cub\",\"name\":\"Cuba\"},{\"id\":531,\"alpha2\":\"cw\",\"alpha3\":\"cuw\",\"name\":\"Curaçao\"},{\"id\":196,\"alpha2\":\"cy\",\"alpha3\":\"cyp\",\"name\":\"Cyprus\"},{\"id\":203,\"alpha2\":\"cz\",\"alpha3\":\"cze\",\"name\":\"Czechia\"},{\"id\":208,\"alpha2\":\"dk\",\"alpha3\":\"dnk\",\"name\":\"Denmark\"},{\"id\":262,\"alpha2\":\"dj\",\"alpha3\":\"dji\",\"name\":\"Djibouti\"},{\"id\":212,\"alpha2\":\"dm\",\"alpha3\":\"dma\",\"name\":\"Dominica\"},{\"id\":214,\"alpha2\":\"do\",\"alpha3\":\"dom\",\"name\":\"Dominican Republic\"},{\"id\":218,\"alpha2\":\"ec\",\"alpha3\":\"ecu\",\"name\":\"Ecuador\"},{\"id\":818,\"alpha2\":\"eg\",\"alpha3\":\"egy\",\"name\":\"Egypt\"},{\"id\":222,\"alpha2\":\"sv\",\"alpha3\":\"slv\",\"name\":\"El Salvador\"},{\"id\":226,\"alpha2\":\"gq\",\"alpha3\":\"gnq\",\"name\":\"Equatorial Guinea\"},{\"id\":232,\"alpha2\":\"er\",\"alpha3\":\"eri\",\"name\":\"Eritrea\"},{\"id\":233,\"alpha2\":\"ee\",\"alpha3\":\"est\",\"name\":\"Estonia\"},{\"id\":748,\"alpha2\":\"sz\",\"alpha3\":\"swz\",\"name\":\"Eswatini\"},{\"id\":231,\"alpha2\":\"et\",\"alpha3\":\"eth\",\"name\":\"Ethiopia\"},{\"id\":238,\"alpha2\":\"fk\",\"alpha3\":\"flk\",\"name\":\"Falkland Islands (Malvinas)\"},{\"id\":234,\"alpha2\":\"fo\",\"alpha3\":\"fro\",\"name\":\"Faroe Islands\"},{\"id\":242,\"alpha2\":\"fj\",\"alpha3\":\"fji\",\"name\":\"Fiji\"},{\"id\":246,\"alpha2\":\"fi\",\"alpha3\":\"fin\",\"name\":\"Finland\"},{\"id\":250,\"alpha2\":\"fr\",\"alpha3\":\"fra\",\"name\":\"France\"},{\"id\":254,\"alpha2\":\"gf\",\"alpha3\":\"guf\",\"name\":\"French Guiana\"},{\"id\":258,\"alpha2\":\"pf\",\"alpha3\":\"pyf\",\"name\":\"French Polynesia\"},{\"id\":260,\"alpha2\":\"tf\",\"alpha3\":\"atf\",\"name\":\"French Southern Territories\"},{\"id\":266,\"alpha2\":\"ga\",\"alpha3\":\"gab\",\"name\":\"Gabon\"},{\"id\":270,\"alpha2\":\"gm\",\"alpha3\":\"gmb\",\"name\":\"Gambia\"},{\"id\":268,\"alpha2\":\"ge\",\"alpha3\":\"geo\",\"name\":\"Georgia\"},{\"id\":276,\"alpha2\":\"de\",\"alpha3\":\"deu\",\"name\":\"Germany\"},{\"id\":288,\"alpha2\":\"gh\",\"alpha3\":\"gha\",\"name\":\"Ghana\"},{\"id\":292,\"alpha2\":\"gi\",\"alpha3\":\"gib\",\"name\":\"Gibraltar\"},{\"id\":300,\"alpha2\":\"gr\",\"alpha3\":\"grc\",\"name\":\"Greece\"},{\"id\":304,\"alpha2\":\"gl\",\"alpha3\":\"grl\",\"name\":\"Greenland\"},{\"id\":308,\"alpha2\":\"gd\",\"alpha3\":\"grd\",\"name\":\"Grenada\"},{\"id\":312,\"alpha2\":\"gp\",\"alpha3\":\"glp\",\"name\":\"Guadeloupe\"},{\"id\":316,\"alpha2\":\"gu\",\"alpha3\":\"gum\",\"name\":\"Guam\"},{\"id\":320,\"alpha2\":\"gt\",\"alpha3\":\"gtm\",\"name\":\"Guatemala\"},{\"id\":831,\"alpha2\":\"gg\",\"alpha3\":\"ggy\",\"name\":\"Guernsey\"},{\"id\":324,\"alpha2\":\"gn\",\"alpha3\":\"gin\",\"name\":\"Guinea\"},{\"id\":624,\"alpha2\":\"gw\",\"alpha3\":\"gnb\",\"name\":\"Guinea-Bissau\"},{\"id\":328,\"alpha2\":\"gy\",\"alpha3\":\"guy\",\"name\":\"Guyana\"},{\"id\":332,\"alpha2\":\"ht\",\"alpha3\":\"hti\",\"name\":\"Haiti\"},{\"id\":334,\"alpha2\":\"hm\",\"alpha3\":\"hmd\",\"name\":\"Heard Island and McDonald Islands\"},{\"id\":336,\"alpha2\":\"va\",\"alpha3\":\"vat\",\"name\":\"Holy See\"},{\"id\":340,\"alpha2\":\"hn\",\"alpha3\":\"hnd\",\"name\":\"Honduras\"},{\"id\":344,\"alpha2\":\"hk\",\"alpha3\":\"hkg\",\"name\":\"Hong Kong\"},{\"id\":348,\"alpha2\":\"hu\",\"alpha3\":\"hun\",\"name\":\"Hungary\"},{\"id\":352,\"alpha2\":\"is\",\"alpha3\":\"isl\",\"name\":\"Iceland\"},{\"id\":356,\"alpha2\":\"in\",\"alpha3\":\"ind\",\"name\":\"India\"},{\"id\":360,\"alpha2\":\"id\",\"alpha3\":\"idn\",\"name\":\"Indonesia\"},{\"id\":364,\"alpha2\":\"ir\",\"alpha3\":\"irn\",\"name\":\"Iran (Islamic Republic of)\"},{\"id\":368,\"alpha2\":\"iq\",\"alpha3\":\"irq\",\"name\":\"Iraq\"},{\"id\":372,\"alpha2\":\"ie\",\"alpha3\":\"irl\",\"name\":\"Ireland\"},{\"id\":833,\"alpha2\":\"im\",\"alpha3\":\"imn\",\"name\":\"Isle of Man\"},{\"id\":376,\"alpha2\":\"il\",\"alpha3\":\"isr\",\"name\":\"Israel\"},{\"id\":380,\"alpha2\":\"it\",\"alpha3\":\"ita\",\"name\":\"Italy\"},{\"id\":388,\"alpha2\":\"jm\",\"alpha3\":\"jam\",\"name\":\"Jamaica\"},{\"id\":392,\"alpha2\":\"jp\",\"alpha3\":\"jpn\",\"name\":\"Japan\"},{\"id\":832,\"alpha2\":\"je\",\"alpha3\":\"jey\",\"name\":\"Jersey\"},{\"id\":400,\"alpha2\":\"jo\",\"alpha3\":\"jor\",\"name\":\"Jordan\"},{\"id\":398,\"alpha2\":\"kz\",\"alpha3\":\"kaz\",\"name\":\"Kazakhstan\"},{\"id\":404,\"alpha2\":\"ke\",\"alpha3\":\"ken\",\"name\":\"Kenya\"},{\"id\":296,\"alpha2\":\"ki\",\"alpha3\":\"kir\",\"name\":\"Kiribati\"},{\"id\":408,\"alpha2\":\"kp\",\"alpha3\":\"prk\",\"name\":\"Korea (Democratic People\\'s Republic of)\"},{\"id\":410,\"alpha2\":\"kr\",\"alpha3\":\"kor\",\"name\":\"Korea, Republic of\"},{\"id\":414,\"alpha2\":\"kw\",\"alpha3\":\"kwt\",\"name\":\"Kuwait\"},{\"id\":417,\"alpha2\":\"kg\",\"alpha3\":\"kgz\",\"name\":\"Kyrgyzstan\"},{\"id\":418,\"alpha2\":\"la\",\"alpha3\":\"lao\",\"name\":\"Lao People\\'s Democratic Republic\"},{\"id\":428,\"alpha2\":\"lv\",\"alpha3\":\"lva\",\"name\":\"Latvia\"},{\"id\":422,\"alpha2\":\"lb\",\"alpha3\":\"lbn\",\"name\":\"Lebanon\"},{\"id\":426,\"alpha2\":\"ls\",\"alpha3\":\"lso\",\"name\":\"Lesotho\"},{\"id\":430,\"alpha2\":\"lr\",\"alpha3\":\"lbr\",\"name\":\"Liberia\"},{\"id\":434,\"alpha2\":\"ly\",\"alpha3\":\"lby\",\"name\":\"Libya\"},{\"id\":438,\"alpha2\":\"li\",\"alpha3\":\"lie\",\"name\":\"Liechtenstein\"},{\"id\":440,\"alpha2\":\"lt\",\"alpha3\":\"ltu\",\"name\":\"Lithuania\"},{\"id\":442,\"alpha2\":\"lu\",\"alpha3\":\"lux\",\"name\":\"Luxembourg\"},{\"id\":446,\"alpha2\":\"mo\",\"alpha3\":\"mac\",\"name\":\"Macao\"},{\"id\":450,\"alpha2\":\"mg\",\"alpha3\":\"mdg\",\"name\":\"Madagascar\"},{\"id\":454,\"alpha2\":\"mw\",\"alpha3\":\"mwi\",\"name\":\"Malawi\"},{\"id\":458,\"alpha2\":\"my\",\"alpha3\":\"mys\",\"name\":\"Malaysia\"},{\"id\":462,\"alpha2\":\"mv\",\"alpha3\":\"mdv\",\"name\":\"Maldives\"},{\"id\":466,\"alpha2\":\"ml\",\"alpha3\":\"mli\",\"name\":\"Mali\"},{\"id\":470,\"alpha2\":\"mt\",\"alpha3\":\"mlt\",\"name\":\"Malta\"},{\"id\":584,\"alpha2\":\"mh\",\"alpha3\":\"mhl\",\"name\":\"Marshall Islands\"},{\"id\":474,\"alpha2\":\"mq\",\"alpha3\":\"mtq\",\"name\":\"Martinique\"},{\"id\":478,\"alpha2\":\"mr\",\"alpha3\":\"mrt\",\"name\":\"Mauritania\"},{\"id\":480,\"alpha2\":\"mu\",\"alpha3\":\"mus\",\"name\":\"Mauritius\"},{\"id\":175,\"alpha2\":\"yt\",\"alpha3\":\"myt\",\"name\":\"Mayotte\"},{\"id\":484,\"alpha2\":\"mx\",\"alpha3\":\"mex\",\"name\":\"Mexico\"},{\"id\":583,\"alpha2\":\"fm\",\"alpha3\":\"fsm\",\"name\":\"Micronesia (Federated States of)\"},{\"id\":498,\"alpha2\":\"md\",\"alpha3\":\"mda\",\"name\":\"Moldova, Republic of\"},{\"id\":492,\"alpha2\":\"mc\",\"alpha3\":\"mco\",\"name\":\"Monaco\"},{\"id\":496,\"alpha2\":\"mn\",\"alpha3\":\"mng\",\"name\":\"Mongolia\"},{\"id\":499,\"alpha2\":\"me\",\"alpha3\":\"mne\",\"name\":\"Montenegro\"},{\"id\":500,\"alpha2\":\"ms\",\"alpha3\":\"msr\",\"name\":\"Montserrat\"},{\"id\":504,\"alpha2\":\"ma\",\"alpha3\":\"mar\",\"name\":\"Morocco\"},{\"id\":508,\"alpha2\":\"mz\",\"alpha3\":\"moz\",\"name\":\"Mozambique\"},{\"id\":104,\"alpha2\":\"mm\",\"alpha3\":\"mmr\",\"name\":\"Myanmar\"},{\"id\":516,\"alpha2\":\"na\",\"alpha3\":\"nam\",\"name\":\"Namibia\"},{\"id\":520,\"alpha2\":\"nr\",\"alpha3\":\"nru\",\"name\":\"Nauru\"},{\"id\":524,\"alpha2\":\"np\",\"alpha3\":\"npl\",\"name\":\"Nepal\"},{\"id\":528,\"alpha2\":\"nl\",\"alpha3\":\"nld\",\"name\":\"Netherlands\"},{\"id\":540,\"alpha2\":\"nc\",\"alpha3\":\"ncl\",\"name\":\"New Caledonia\"},{\"id\":554,\"alpha2\":\"nz\",\"alpha3\":\"nzl\",\"name\":\"New Zealand\"},{\"id\":558,\"alpha2\":\"ni\",\"alpha3\":\"nic\",\"name\":\"Nicaragua\"},{\"id\":562,\"alpha2\":\"ne\",\"alpha3\":\"ner\",\"name\":\"Niger\"},{\"id\":566,\"alpha2\":\"ng\",\"alpha3\":\"nga\",\"name\":\"Nigeria\"},{\"id\":570,\"alpha2\":\"nu\",\"alpha3\":\"niu\",\"name\":\"Niue\"},{\"id\":574,\"alpha2\":\"nf\",\"alpha3\":\"nfk\",\"name\":\"Norfolk Island\"},{\"id\":807,\"alpha2\":\"mk\",\"alpha3\":\"mkd\",\"name\":\"North Macedonia\"},{\"id\":580,\"alpha2\":\"mp\",\"alpha3\":\"mnp\",\"name\":\"Northern Mariana Islands\"},{\"id\":578,\"alpha2\":\"no\",\"alpha3\":\"nor\",\"name\":\"Norway\"},{\"id\":512,\"alpha2\":\"om\",\"alpha3\":\"omn\",\"name\":\"Oman\"},{\"id\":586,\"alpha2\":\"pk\",\"alpha3\":\"pak\",\"name\":\"Pakistan\"},{\"id\":585,\"alpha2\":\"pw\",\"alpha3\":\"plw\",\"name\":\"Palau\"},{\"id\":275,\"alpha2\":\"ps\",\"alpha3\":\"pse\",\"name\":\"Palestine, State of\"},{\"id\":591,\"alpha2\":\"pa\",\"alpha3\":\"pan\",\"name\":\"Panama\"},{\"id\":598,\"alpha2\":\"pg\",\"alpha3\":\"png\",\"name\":\"Papua New Guinea\"},{\"id\":600,\"alpha2\":\"py\",\"alpha3\":\"pry\",\"name\":\"Paraguay\"},{\"id\":604,\"alpha2\":\"pe\",\"alpha3\":\"per\",\"name\":\"Peru\"},{\"id\":608,\"alpha2\":\"ph\",\"alpha3\":\"phl\",\"name\":\"Philippines\"},{\"id\":612,\"alpha2\":\"pn\",\"alpha3\":\"pcn\",\"name\":\"Pitcairn\"},{\"id\":616,\"alpha2\":\"pl\",\"alpha3\":\"pol\",\"name\":\"Poland\"},{\"id\":620,\"alpha2\":\"pt\",\"alpha3\":\"prt\",\"name\":\"Portugal\"},{\"id\":630,\"alpha2\":\"pr\",\"alpha3\":\"pri\",\"name\":\"Puerto Rico\"},{\"id\":634,\"alpha2\":\"qa\",\"alpha3\":\"qat\",\"name\":\"Qatar\"},{\"id\":638,\"alpha2\":\"re\",\"alpha3\":\"reu\",\"name\":\"Réunion\"},{\"id\":642,\"alpha2\":\"ro\",\"alpha3\":\"rou\",\"name\":\"Romania\"},{\"id\":643,\"alpha2\":\"ru\",\"alpha3\":\"rus\",\"name\":\"Russian Federation\"},{\"id\":646,\"alpha2\":\"rw\",\"alpha3\":\"rwa\",\"name\":\"Rwanda\"},{\"id\":652,\"alpha2\":\"bl\",\"alpha3\":\"blm\",\"name\":\"Saint Barthélemy\"},{\"id\":654,\"alpha2\":\"sh\",\"alpha3\":\"shn\",\"name\":\"Saint Helena, Ascension and Tristan da Cunha\"},{\"id\":659,\"alpha2\":\"kn\",\"alpha3\":\"kna\",\"name\":\"Saint Kitts and Nevis\"},{\"id\":662,\"alpha2\":\"lc\",\"alpha3\":\"lca\",\"name\":\"Saint Lucia\"},{\"id\":663,\"alpha2\":\"mf\",\"alpha3\":\"maf\",\"name\":\"Saint Martin (French part)\"},{\"id\":666,\"alpha2\":\"pm\",\"alpha3\":\"spm\",\"name\":\"Saint Pierre and Miquelon\"},{\"id\":670,\"alpha2\":\"vc\",\"alpha3\":\"vct\",\"name\":\"Saint Vincent and the Grenadines\"},{\"id\":882,\"alpha2\":\"ws\",\"alpha3\":\"wsm\",\"name\":\"Samoa\"},{\"id\":674,\"alpha2\":\"sm\",\"alpha3\":\"smr\",\"name\":\"San Marino\"},{\"id\":678,\"alpha2\":\"st\",\"alpha3\":\"stp\",\"name\":\"Sao Tome and Principe\"},{\"id\":682,\"alpha2\":\"sa\",\"alpha3\":\"sau\",\"name\":\"Saudi Arabia\"},{\"id\":686,\"alpha2\":\"sn\",\"alpha3\":\"sen\",\"name\":\"Senegal\"},{\"id\":688,\"alpha2\":\"rs\",\"alpha3\":\"srb\",\"name\":\"Serbia\"},{\"id\":690,\"alpha2\":\"sc\",\"alpha3\":\"syc\",\"name\":\"Seychelles\"},{\"id\":694,\"alpha2\":\"sl\",\"alpha3\":\"sle\",\"name\":\"Sierra Leone\"},{\"id\":702,\"alpha2\":\"sg\",\"alpha3\":\"sgp\",\"name\":\"Singapore\"},{\"id\":534,\"alpha2\":\"sx\",\"alpha3\":\"sxm\",\"name\":\"Sint Maarten (Dutch part)\"},{\"id\":703,\"alpha2\":\"sk\",\"alpha3\":\"svk\",\"name\":\"Slovakia\"},{\"id\":705,\"alpha2\":\"si\",\"alpha3\":\"svn\",\"name\":\"Slovenia\"},{\"id\":90,\"alpha2\":\"sb\",\"alpha3\":\"slb\",\"name\":\"Solomon Islands\"},{\"id\":706,\"alpha2\":\"so\",\"alpha3\":\"som\",\"name\":\"Somalia\"},{\"id\":710,\"alpha2\":\"za\",\"alpha3\":\"zaf\",\"name\":\"South Africa\"},{\"id\":239,\"alpha2\":\"gs\",\"alpha3\":\"sgs\",\"name\":\"South Georgia and the South Sandwich Islands\"},{\"id\":728,\"alpha2\":\"ss\",\"alpha3\":\"ssd\",\"name\":\"South Sudan\"},{\"id\":724,\"alpha2\":\"es\",\"alpha3\":\"esp\",\"name\":\"Spain\"},{\"id\":144,\"alpha2\":\"lk\",\"alpha3\":\"lka\",\"name\":\"Sri Lanka\"},{\"id\":729,\"alpha2\":\"sd\",\"alpha3\":\"sdn\",\"name\":\"Sudan\"},{\"id\":740,\"alpha2\":\"sr\",\"alpha3\":\"sur\",\"name\":\"Suriname\"},{\"id\":744,\"alpha2\":\"sj\",\"alpha3\":\"sjm\",\"name\":\"Svalbard and Jan Mayen\"},{\"id\":752,\"alpha2\":\"se\",\"alpha3\":\"swe\",\"name\":\"Sweden\"},{\"id\":756,\"alpha2\":\"ch\",\"alpha3\":\"che\",\"name\":\"Switzerland\"},{\"id\":760,\"alpha2\":\"sy\",\"alpha3\":\"syr\",\"name\":\"Syrian Arab Republic\"},{\"id\":158,\"alpha2\":\"tw\",\"alpha3\":\"twn\",\"name\":\"Taiwan, Province of China\"},{\"id\":762,\"alpha2\":\"tj\",\"alpha3\":\"tjk\",\"name\":\"Tajikistan\"},{\"id\":834,\"alpha2\":\"tz\",\"alpha3\":\"tza\",\"name\":\"Tanzania, United Republic of\"},{\"id\":764,\"alpha2\":\"th\",\"alpha3\":\"tha\",\"name\":\"Thailand\"},{\"id\":626,\"alpha2\":\"tl\",\"alpha3\":\"tls\",\"name\":\"Timor-Leste\"},{\"id\":768,\"alpha2\":\"tg\",\"alpha3\":\"tgo\",\"name\":\"Togo\"},{\"id\":772,\"alpha2\":\"tk\",\"alpha3\":\"tkl\",\"name\":\"Tokelau\"},{\"id\":776,\"alpha2\":\"to\",\"alpha3\":\"ton\",\"name\":\"Tonga\"},{\"id\":780,\"alpha2\":\"tt\",\"alpha3\":\"tto\",\"name\":\"Trinidad and Tobago\"},{\"id\":788,\"alpha2\":\"tn\",\"alpha3\":\"tun\",\"name\":\"Tunisia\"},{\"id\":792,\"alpha2\":\"tr\",\"alpha3\":\"tur\",\"name\":\"Türkiye\"},{\"id\":795,\"alpha2\":\"tm\",\"alpha3\":\"tkm\",\"name\":\"Turkmenistan\"},{\"id\":796,\"alpha2\":\"tc\",\"alpha3\":\"tca\",\"name\":\"Turks and Caicos Islands\"},{\"id\":798,\"alpha2\":\"tv\",\"alpha3\":\"tuv\",\"name\":\"Tuvalu\"},{\"id\":800,\"alpha2\":\"ug\",\"alpha3\":\"uga\",\"name\":\"Uganda\"},{\"id\":804,\"alpha2\":\"ua\",\"alpha3\":\"ukr\",\"name\":\"Ukraine\"},{\"id\":784,\"alpha2\":\"ae\",\"alpha3\":\"are\",\"name\":\"United Arab Emirates\"},{\"id\":826,\"alpha2\":\"gb\",\"alpha3\":\"gbr\",\"name\":\"United Kingdom of Great Britain and Northern Ireland\"},{\"id\":840,\"alpha2\":\"us\",\"alpha3\":\"usa\",\"name\":\"United States of America\"},{\"id\":581,\"alpha2\":\"um\",\"alpha3\":\"umi\",\"name\":\"United States Minor Outlying Islands\"},{\"id\":858,\"alpha2\":\"uy\",\"alpha3\":\"ury\",\"name\":\"Uruguay\"},{\"id\":860,\"alpha2\":\"uz\",\"alpha3\":\"uzb\",\"name\":\"Uzbekistan\"},{\"id\":548,\"alpha2\":\"vu\",\"alpha3\":\"vut\",\"name\":\"Vanuatu\"},{\"id\":862,\"alpha2\":\"ve\",\"alpha3\":\"ven\",\"name\":\"Venezuela (Bolivarian Republic of)\"},{\"id\":704,\"alpha2\":\"vn\",\"alpha3\":\"vnm\",\"name\":\"Viet Nam\"},{\"id\":92,\"alpha2\":\"vg\",\"alpha3\":\"vgb\",\"name\":\"Virgin Islands (British)\"},{\"id\":850,\"alpha2\":\"vi\",\"alpha3\":\"vir\",\"name\":\"Virgin Islands (U.S.)\"},{\"id\":876,\"alpha2\":\"wf\",\"alpha3\":\"wlf\",\"name\":\"Wallis and Futuna\"},{\"id\":732,\"alpha2\":\"eh\",\"alpha3\":\"esh\",\"name\":\"Western Sahara\"},{\"id\":887,\"alpha2\":\"ye\",\"alpha3\":\"yem\",\"name\":\"Yemen\"},{\"id\":894,\"alpha2\":\"zm\",\"alpha3\":\"zmb\",\"name\":\"Zambia\"},{\"id\":716,\"alpha2\":\"zw\",\"alpha3\":\"zwe\",\"name\":\"Zimbabwe\"}]');\n\n//# sourceURL=webpack://geo-quiz/./node_modules/world_countries_lists/data/countries/en/world.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;