(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{252:function(module,exports,__webpack_require__){__webpack_require__(253),__webpack_require__(355),module.exports=__webpack_require__(356)},356:function(module,exports,__webpack_require__){"use strict";(function(module){var _react=__webpack_require__(182),_storybookReadme=__webpack_require__(530);(0,_react.addDecorator)(_storybookReadme.addReadme);(0,_react.configure)(function(){__webpack_require__(596)},module)}).call(this,__webpack_require__(47)(module))},596:function(module,exports,__webpack_require__){"use strict";(function(module){var _interopRequireWildcard=__webpack_require__(148),_interopRequireDefault=__webpack_require__(1);__webpack_require__(0),Object.defineProperty(exports,"__esModule",{value:!0}),exports.__ADDS_MAP__=exports.__STORY__=exports.withStorySource=void 0;var _objectSpread2=_interopRequireDefault(__webpack_require__(81)),_taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(10)),_bundle=_interopRequireWildcard(__webpack_require__(597)),_styledComponents=_interopRequireWildcard(__webpack_require__(245)),_react=_interopRequireDefault(__webpack_require__(2)),_react2=__webpack_require__(182);function _templateObject9(){var data=(0,_taggedTemplateLiteral2.default)(["\n      "," ","};\n    "]);return _templateObject9=function(){return data},data}function _templateObject8(){var data=(0,_taggedTemplateLiteral2.default)(["\n      "," ",";\n    "]);return _templateObject8=function(){return data},data}function _templateObject7(){var data=(0,_taggedTemplateLiteral2.default)(["\n      ",";\n    "]);return _templateObject7=function(){return data},data}function _templateObject6(){var data=(0,_taggedTemplateLiteral2.default)(["\n      ","\n    "]);return _templateObject6=function(){return data},data}function _templateObject5(){var data=(0,_taggedTemplateLiteral2.default)(["\n      height: 50px;\n      background-color: yellow;\n      margin-top: 1rem;\n      ","\n      ","\n    "]);return _templateObject5=function(){return data},data}function _templateObject4(){var data=(0,_taggedTemplateLiteral2.default)(["\n      "," ",";\n    "]);return _templateObject4=function(){return data},data}function _templateObject3(){var data=(0,_taggedTemplateLiteral2.default)(["\n      ",";\n    "]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=(0,_taggedTemplateLiteral2.default)(["\n      "," ",";\n    "]);return _templateObject2=function(){return data},data}function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n      ",";\n    "]);return _templateObject=function(){return data},data}var withStorySource=__webpack_require__(606).withStorySource;exports.withStorySource=withStorySource;exports.__STORY__="import Neat, { gridColumn, gridContainer, gridMedia } from '../bundle';\r\nimport styled, { ThemeProvider } from 'styled-components';\r\nimport React from 'react';\r\nimport { storiesOf } from '@storybook/react';\r\n\r\nstoriesOf('Neat Components', module)\r\n  .addParameters({\r\n    readme: {\r\n      sidebar: require('../README.md').default,\r\n    },\r\n  })\r\n  .add('12 Column Grid', () => {\r\n    let constants = () => {\r\n      return `\r\n        background-color: #00d4ff;\r\n        height: 300px;\r\n        margin-top: 1em;\r\n      `;\r\n    };\r\n\r\n    let Container = styled.div`\r\n      ${gridContainer()};\r\n    `;\r\n    let Column = styled.div`\r\n      ${constants()} ${props => gridColumn(props.theme, 1)};\r\n    `;\r\n    return (\r\n      <ThemeProvider theme={Neat()}>\r\n        <div>\r\n          <Container>\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n          </Container>\r\n        </div>\r\n      </ThemeProvider>\r\n    );\r\n  })\r\n  .add('3 Column Grid', () => {\r\n    let constants = () => {\r\n      return `\r\n        background-color: #00d4ff;\r\n        height: 300px;\r\n        margin-top: 1em;\r\n      `;\r\n    };\r\n\r\n    let Container = styled.div`\r\n      ${gridContainer()};\r\n    `;\r\n    let Column = styled.div`\r\n      ${constants()} ${props => gridColumn(props.theme, 4)};\r\n    `;\r\n    return (\r\n      <ThemeProvider theme={Neat()}>\r\n        <div>\r\n          <Container>\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n          </Container>\r\n        </div>\r\n      </ThemeProvider>\r\n    );\r\n  })\r\n  .add('A Responsive Grid', () => {\r\n    const mobileGrid = Neat({\r\n      columns: 12,\r\n      gutter: '10px',\r\n      media: 'only screen and (max-width: 600px)',\r\n    });\r\n\r\n    const desktopGrid = Neat({\r\n      columns: 12,\r\n      gutter: '20px',\r\n      media: 'only screen and (min-width: 601px)',\r\n    });\r\n\r\n    const desktopMediaQuery = gridMedia(desktopGrid, [\r\n      {\r\n        ...gridColumn(desktopGrid, 1),\r\n        'background-color': 'red',\r\n      },\r\n    ]);\r\n\r\n    const Column = styled.div`\r\n      height: 50px;\r\n      background-color: yellow;\r\n      margin-top: 1rem;\r\n      ${gridColumn(mobileGrid, 2)}\r\n      ${desktopMediaQuery}\r\n    `;\r\n\r\n    const Container = styled.div`\r\n      ${gridContainer()}\r\n    `;\r\n    return (\r\n      <ThemeProvider key={'provider'} theme={Neat()}>\r\n        <Container>\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n        </Container>\r\n      </ThemeProvider>\r\n    );\r\n  })\r\n  .add('9/3 Column Grid', () => {\r\n    let constants = () => {\r\n      return `\r\n        background-color: #00d4ff;\r\n        height: 300px;\r\n        margin-top: 1em;\r\n      `;\r\n    };\r\n\r\n    let Container = styled.div`\r\n      ${gridContainer()};\r\n    `;\r\n    let ContentArea = styled.div`\r\n      ${constants()} ${props => gridColumn(props.theme, 9)};\r\n    `;\r\n    let Sidebar = styled.div`\r\n      ${constants()} ${props => gridColumn(props.theme, 3)}};\r\n    `;\r\n    return (\r\n      <div>\r\n        <ThemeProvider theme={Neat()}>\r\n          <div>\r\n            <Container>\r\n              <ContentArea />\r\n              <Sidebar />\r\n            </Container>\r\n          </div>\r\n        </ThemeProvider>\r\n        <ThemeProvider theme={Neat()}>\r\n          <div>\r\n            <Container>\r\n              <Sidebar />\r\n              <ContentArea />\r\n            </Container>\r\n          </div>\r\n        </ThemeProvider>\r\n      </div>\r\n    );\r\n  });\r\n";var __ADDS_MAP__={"neat-components--9-3-column-grid":{startLoc:{col:7,line:125},endLoc:{col:3,line:163}},"neat-components--a-responsive-grid":{startLoc:{col:7,line:75},endLoc:{col:3,line:124}},"neat-components--3-column-grid":{startLoc:{col:7,line:48},endLoc:{col:3,line:74}},"neat-components--12-column-grid":{startLoc:{col:7,line:12},endLoc:{col:3,line:47}}};exports.__ADDS_MAP__=__ADDS_MAP__,(0,_react2.storiesOf)("Neat Components",module).addDecorator(withStorySource("import Neat, { gridColumn, gridContainer, gridMedia } from '../bundle';\r\nimport styled, { ThemeProvider } from 'styled-components';\r\nimport React from 'react';\r\nimport { storiesOf } from '@storybook/react';\r\n\r\nstoriesOf('Neat Components', module)\r\n  .addParameters({\r\n    readme: {\r\n      sidebar: require('../README.md').default,\r\n    },\r\n  })\r\n  .add('12 Column Grid', () => {\r\n    let constants = () => {\r\n      return `\r\n        background-color: #00d4ff;\r\n        height: 300px;\r\n        margin-top: 1em;\r\n      `;\r\n    };\r\n\r\n    let Container = styled.div`\r\n      ${gridContainer()};\r\n    `;\r\n    let Column = styled.div`\r\n      ${constants()} ${props => gridColumn(props.theme, 1)};\r\n    `;\r\n    return (\r\n      <ThemeProvider theme={Neat()}>\r\n        <div>\r\n          <Container>\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n          </Container>\r\n        </div>\r\n      </ThemeProvider>\r\n    );\r\n  })\r\n  .add('3 Column Grid', () => {\r\n    let constants = () => {\r\n      return `\r\n        background-color: #00d4ff;\r\n        height: 300px;\r\n        margin-top: 1em;\r\n      `;\r\n    };\r\n\r\n    let Container = styled.div`\r\n      ${gridContainer()};\r\n    `;\r\n    let Column = styled.div`\r\n      ${constants()} ${props => gridColumn(props.theme, 4)};\r\n    `;\r\n    return (\r\n      <ThemeProvider theme={Neat()}>\r\n        <div>\r\n          <Container>\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n          </Container>\r\n        </div>\r\n      </ThemeProvider>\r\n    );\r\n  })\r\n  .add('A Responsive Grid', () => {\r\n    const mobileGrid = Neat({\r\n      columns: 12,\r\n      gutter: '10px',\r\n      media: 'only screen and (max-width: 600px)',\r\n    });\r\n\r\n    const desktopGrid = Neat({\r\n      columns: 12,\r\n      gutter: '20px',\r\n      media: 'only screen and (min-width: 601px)',\r\n    });\r\n\r\n    const desktopMediaQuery = gridMedia(desktopGrid, [\r\n      {\r\n        ...gridColumn(desktopGrid, 1),\r\n        'background-color': 'red',\r\n      },\r\n    ]);\r\n\r\n    const Column = styled.div`\r\n      height: 50px;\r\n      background-color: yellow;\r\n      margin-top: 1rem;\r\n      ${gridColumn(mobileGrid, 2)}\r\n      ${desktopMediaQuery}\r\n    `;\r\n\r\n    const Container = styled.div`\r\n      ${gridContainer()}\r\n    `;\r\n    return (\r\n      <ThemeProvider key={'provider'} theme={Neat()}>\r\n        <Container>\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n        </Container>\r\n      </ThemeProvider>\r\n    );\r\n  })\r\n  .add('9/3 Column Grid', () => {\r\n    let constants = () => {\r\n      return `\r\n        background-color: #00d4ff;\r\n        height: 300px;\r\n        margin-top: 1em;\r\n      `;\r\n    };\r\n\r\n    let Container = styled.div`\r\n      ${gridContainer()};\r\n    `;\r\n    let ContentArea = styled.div`\r\n      ${constants()} ${props => gridColumn(props.theme, 9)};\r\n    `;\r\n    let Sidebar = styled.div`\r\n      ${constants()} ${props => gridColumn(props.theme, 3)}};\r\n    `;\r\n    return (\r\n      <div>\r\n        <ThemeProvider theme={Neat()}>\r\n          <div>\r\n            <Container>\r\n              <ContentArea />\r\n              <Sidebar />\r\n            </Container>\r\n          </div>\r\n        </ThemeProvider>\r\n        <ThemeProvider theme={Neat()}>\r\n          <div>\r\n            <Container>\r\n              <Sidebar />\r\n              <ContentArea />\r\n            </Container>\r\n          </div>\r\n        </ThemeProvider>\r\n      </div>\r\n    );\r\n  });\r\n",__ADDS_MAP__)).addParameters({readme:{sidebar:__webpack_require__(615).default}}).add("12 Column Grid",function(){var Container=_styledComponents.default.div(_templateObject(),(0,_bundle.gridContainer)()),Column=_styledComponents.default.div(_templateObject2(),"\n        background-color: #00d4ff;\n        height: 300px;\n        margin-top: 1em;\n      ",function(props){return(0,_bundle.gridColumn)(props.theme,1)});return _react.default.createElement(_styledComponents.ThemeProvider,{theme:(0,_bundle.default)()},_react.default.createElement("div",null,_react.default.createElement(Container,null,_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null))))}).add("3 Column Grid",function(){var Container=_styledComponents.default.div(_templateObject3(),(0,_bundle.gridContainer)()),Column=_styledComponents.default.div(_templateObject4(),"\n        background-color: #00d4ff;\n        height: 300px;\n        margin-top: 1em;\n      ",function(props){return(0,_bundle.gridColumn)(props.theme,4)});return _react.default.createElement(_styledComponents.ThemeProvider,{theme:(0,_bundle.default)()},_react.default.createElement("div",null,_react.default.createElement(Container,null,_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null))))}).add("A Responsive Grid",function(){var mobileGrid=(0,_bundle.default)({columns:12,gutter:"10px",media:"only screen and (max-width: 600px)"}),desktopGrid=(0,_bundle.default)({columns:12,gutter:"20px",media:"only screen and (min-width: 601px)"}),desktopMediaQuery=(0,_bundle.gridMedia)(desktopGrid,[(0,_objectSpread2.default)({},(0,_bundle.gridColumn)(desktopGrid,1),{"background-color":"red"})]),Column=_styledComponents.default.div(_templateObject5(),(0,_bundle.gridColumn)(mobileGrid,2),desktopMediaQuery),Container=_styledComponents.default.div(_templateObject6(),(0,_bundle.gridContainer)());return _react.default.createElement(_styledComponents.ThemeProvider,{key:"provider",theme:(0,_bundle.default)()},_react.default.createElement(Container,null,_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null),_react.default.createElement(Column,null)))}).add("9/3 Column Grid",function(){var Container=_styledComponents.default.div(_templateObject7(),(0,_bundle.gridContainer)()),ContentArea=_styledComponents.default.div(_templateObject8(),"\n        background-color: #00d4ff;\n        height: 300px;\n        margin-top: 1em;\n      ",function(props){return(0,_bundle.gridColumn)(props.theme,9)}),Sidebar=_styledComponents.default.div(_templateObject9(),"\n        background-color: #00d4ff;\n        height: 300px;\n        margin-top: 1em;\n      ",function(props){return(0,_bundle.gridColumn)(props.theme,3)});return _react.default.createElement("div",null,_react.default.createElement(_styledComponents.ThemeProvider,{theme:(0,_bundle.default)()},_react.default.createElement("div",null,_react.default.createElement(Container,null,_react.default.createElement(ContentArea,null),_react.default.createElement(Sidebar,null)))),_react.default.createElement(_styledComponents.ThemeProvider,{theme:(0,_bundle.default)()},_react.default.createElement("div",null,_react.default.createElement(Container,null,_react.default.createElement(Sidebar,null),_react.default.createElement(ContentArea,null)))))})}).call(this,__webpack_require__(47)(module))},597:function(module,exports,__webpack_require__){"use strict";__webpack_require__(15),__webpack_require__(52),__webpack_require__(49),__webpack_require__(143),__webpack_require__(0),__webpack_require__(144),__webpack_require__(20),__webpack_require__(598),__webpack_require__(53),__webpack_require__(50),__webpack_require__(100),__webpack_require__(600),Object.defineProperty(exports,"__esModule",{value:!0});var styledComponents=__webpack_require__(245),Directions_LTR="LTR",Directions_RTL="RTL",NeatTheme={color:null,columns:12,direction:Directions_LTR,gutter:"20px",media:null};function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var parseUnit=function(t){var e=parseFloat(t);if(e){var r=t.split(e.toString(10));return r[r.length-1].trim()}return""},stripUnit=function(t){var e=parseFloat(t);return isNaN(e)?t:e},columnWidth=function(t,e){var r=t.columns,n=t.gutter;if(!r||void 0===n)return"0";var i=e/r,o=stripUnit(n),a=parseUnit(n);if(0===o)return"".concat(100*i,"%");var c="".concat(o+o*i).concat(a);return"".concat(100*i,"% - ").concat(c)},floatDirection=function(){return"rtl"===(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"ltr")?"right":"left"};function _templateObject(){var t=function _taggedTemplateLiteral(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n    @media "," {\n      ","\n    }\n  "]);return _templateObject=function(){return t},t}exports.default=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:NeatTheme;return{color:t.color||NeatTheme.color,columns:t.columns||NeatTheme.columns,direction:t.direction===Directions_LTR||t.direction===Directions_RTL?t.direction:NeatTheme.direction,gutter:t.gutter||NeatTheme.gutter,media:t.media||NeatTheme.media}},exports.gridCollapse=function(t){var e,r=t.direction,n=t.gutter;if(!r||!n)return{};var i=parseUnit(n);if("%"===i)return{};var o=stripUnit(n);return _defineProperty(e={},"margin-".concat(floatDirection(r)),"-".concat(n)),_defineProperty(e,"margin-".concat(function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"ltr";return"ltr"===t?"right":"rtl"===t?"left":void 0}(r)),"-".concat(n)),_defineProperty(e,"width","calc(100% + ".concat(2*o).concat(i,")")),e},exports.gridColumn=function(t,e){var r=t.columns,n=t.direction,i=t.gutter;return(e=Math.floor(e))>r&&(e=r),_defineProperty({width:"calc(".concat(columnWidth(t,e),")"),float:"".concat(floatDirection(n))},"margin-".concat(floatDirection(n)),i)},exports.gridContainer=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"&";return _defineProperty({},"".concat(t,"::after"),{clear:"both",content:'""',display:"block"})},exports.gridMedia=function(t){var e=t.media;if(!e)return[];for(var r=arguments.length,n=Array(1<r?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return styledComponents.css(_templateObject(),function(t){return"number"==typeof t?"only screen and (min-width: ".concat(t,"px)"):"string"==typeof t&&t}(e),styledComponents.css.apply(void 0,n))},exports.gridPush=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,r=t.direction,n=t.gutter;if(0<e){var i=stripUnit(n),o=parseUnit(n),a="".concat(2*i).concat(o);return _defineProperty({},"margin-".concat(floatDirection(r)),"\n        calc(".concat(columnWidth(t,e)," + ").concat(a,")\n      "))}return _defineProperty({},"margin-".concat(floatDirection(r)),n)},exports.gridShift=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,r=t.direction,n=t.gutter;if(!r||void 0===n)return{};if(0<e){var i,o=columnWidth(t,e);return _defineProperty(i={},"".concat(floatDirection(r)),"\n        calc(".concat(o," + ").concat(n,")\n      ")),_defineProperty(i,"position","relative"),i}return _defineProperty({},"".concat(floatDirection(r)),n)},exports.gridVisual=function(t){var e=t.color,r=t.gutter;return r?{"background-image":"\n      repeating-linear-gradient(\n        to right, transparent, transparent,\n        ".concat(e=e||""," ").concat(r,",\n        ").concat(e," calc(").concat(columnWidth(t,1)," + ").concat(r,")\n      )\n    ")}:{}}},615:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default="[![Build Status](https://travis-ci.org/magicink/neat-components.svg?branch=develop)](https://travis-ci.org/magicink/neat-components)\r\n\r\n# Neat Components\r\n\r\nA Styled Components implementation of Thoughtbot's Neat 2.0.\r\n\r\nView Storybook examples here: https://magicink.github.io/neat-components/\r\n\r\n### Usage\r\n\r\n```javascript\r\nimport React, { Component } from \"react\";\r\nimport styled, { ThemeProvider } from \"styled-components\";\r\nimport Neat, { gridContainer, gridColumn, gridShift } from \"neat-components\";\r\n\r\nlet constants = () => {\r\n  return `\r\n    background-color: blue;\r\n    height: 50px;\r\n    margin-top: 1em;\r\n  `;\r\n};\r\n\r\nlet Container = styled.div`\r\n  ${gridContainer()};\r\n`;\r\nlet Column = styled.div`\r\n  ${constants()} ${props => gridColumn(props.theme, 1)};\r\n`;\r\n\r\nclass App extends Component {\r\n  render() {\r\n    return (\r\n      <ThemeProvider theme={Neat()}>\r\n        <div>\r\n          <Container>\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n          </Container>\r\n        </div>\r\n      </ThemeProvider>\r\n    );\r\n  }\r\n}\r\n\r\nexport default App;\r\n```\r\n\r\n## API\r\n\r\n### Neat([settings])\r\n\r\nReturns a theme object. You can pass this theme to a `ThemeProvider` component. For example\r\n\r\n```javascript\r\n<ThemeProvider theme={Neat()}>...</ThemeProvider>\r\n```\r\n\r\nYou can pass in a `settings` object to create a custom grid. The `settings` object has the following properties:\r\n\r\n**`color`**: Used by `gridVisual()` to determine the color the grid (default: `null`).\r\n\r\n**`columns`**: The number of columns the grid supports (default: `12`).\r\n\r\n**`direction`**: The direction columns float. Accepts `ltr` (default) or `rtl`.\r\n\r\n**`gutter`**: The spacing between columns (default: `20px`)\r\n\r\n**`media`**: Used by `gridMedia()` to specify the media the grid should be applied. It can accept a string (i.e. `only screen and (max-width: 800px)`) or a number (i.e `800`). The later would produce `only screen and (min-width: 800px)`. Defaults to `null`.\r\n\r\n```javascript\r\nconst CustomGrid = Neat({ columns: 3, gutter: \"60px\" });\r\nconst Container = styled.div`\r\n  margin-top: 1rem;\r\n  ${gridContainer()};\r\n`;\r\nconst WideColumn = styled.div`\r\n  background-image: linear-gradient(to bottom right, #21e9f4, #00d4ff);\r\n  border-radius: 5px;\r\n  height: 20rem;\r\n  ${props => gridColumn(props.theme, 1)};\r\n`;\r\n\r\nclass App extends Component {\r\n  render() {\r\n    return (\r\n      <ThemeProvider theme={Neat()}>\r\n        <Container>\r\n          <WideColumn theme={CustomGrid} />\r\n          <WideColumn theme={CustomGrid} />\r\n          <WideColumn theme={CustomGrid} />\r\n        </Container>\r\n      </ThemeProvider>\r\n    );\r\n  }\r\n}\r\n```\r\n\r\n### gridCollapse(theme)\r\n\r\nUsed to create grids within grids.\r\n\r\n```javascript\r\nconst SidebarGrid = Neat({\r\n  columns: 3,\r\n  gutter: \"40px\"\r\n});\r\n\r\nconst GalleryGrid = Neat({\r\n  columns: 4,\r\n  gutter: \"40px\"\r\n});\r\n\r\nconst Container = styled.div`\r\n  ${gridContainer()};\r\n`;\r\n\r\nconst SideBar = styled.div`\r\n  height: 19rem;\r\n  ${props => gridColumn(SidebarGrid, 1)};\r\n`;\r\n\r\nconst Gallery = styled.div`\r\n  ${props => gridColumn(GalleryGrid, 2)};\r\n`;\r\n\r\nconst GalleryContainer = styled.div`\r\n  ${gridCollapse(GalleryGrid)} ${gridContainer()};\r\n`;\r\n\r\nconst GalleryItem = styled.div`\r\n  background-color: #496278;\r\n  height: 4rem;\r\n  margin-bottom: 1rem;\r\n  ${gridColumn(GalleryGrid, 1)};\r\n`;\r\n\r\nclass App extends Component {\r\n  render() {\r\n    return (\r\n      <ThemeProvider theme={Neat()}>\r\n        <Container>\r\n          <SideBar />\r\n          <Gallery>\r\n            <GalleryContainer>\r\n              <GalleryItem />\r\n              ...\r\n            </GalleryContainer>\r\n          </Gallery>\r\n        </Container>\r\n      </ThemeProvider>\r\n    );\r\n  }\r\n}\r\n```\r\n\r\n### gridColumn(theme, span)\r\n\r\nCreates a component that occupies `span` number of a given theme's columns\r\n\r\n```javascript\r\nlet Column = styled.div`\r\n  ${props => gridColumn(props.theme, 1)};\r\n`;\r\n\r\nclass App extends Component {\r\n  render() {\r\n    return (\r\n      <ThemeProvider theme={Neat()}>\r\n        <div>\r\n          <Container>\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n            <Column />\r\n          </Container>\r\n        </div>\r\n      </ThemeProvider>\r\n    );\r\n  }\r\n}\r\n```\r\n\r\n### gridContainer()\r\n\r\nInjects a clearfix solution into the component.\r\n\r\n```javascript\r\nconst Container = styled.div`\r\n  ${gridContainer()};\r\n`;\r\n\r\nclass App extends Component {\r\n  render() {\r\n    return (\r\n      <ThemeProvider theme={Neat()}>\r\n        <Container>...</Container>\r\n      </ThemeProvider>\r\n    );\r\n  }\r\n}\r\n```\r\n\r\n### gridMedia(theme)\r\n\r\nUsed to inject media queries into the component.\r\n\r\n```javascript\r\nconst mobileGrid = Neat({\r\n  columns: 12,\r\n  gutter: '10px',\r\n  media: 'only screen and (max-width: 600px)'\r\n})\r\n\r\nconst desktopGrid = Neat({\r\n  columns: 12,\r\n  gutter: '20px',\r\n  media: 'only screen and (min-width: 601px)'\r\n})\r\n\r\nconst Column = styled.div`\r\n  height: 50px;\r\n  background-color: yellow;\r\n  margin-top: 1rem;\r\n  ${gridColumn(mobileGrid, 2)}\r\n  ${gridMedia(desktopGrid, [{\r\n    ...gridColumn(desktopGrid, 1),\r\n    'background-color': 'red'\r\n  }])}\r\n`\r\n\r\nconst Container = styled.div`\r\n  ${gridContainer()}\r\n`\r\n\r\nexport class GridMedia extends React.Component {\r\n  render () {\r\n    return [\r\n      <h1 key={'header'}><code>gridMedia</code></h1>,\r\n      <ThemeProvider key={'provider'} theme={Neat()}>\r\n        <Container>\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n          <Column />\r\n        </Container>\r\n      </ThemeProvider>\r\n    ]\r\n  }\r\n}\r\n\r\n```\r\n\r\n### gridShift(theme, shift)\r\n\r\nShifts a component `shift` number of columns. This reorganizes the components..\r\n\r\n```javascript\r\nlet constants = () => {\r\n  return `\r\n    background-color: blue;\r\n    height: 50px;\r\n    margin-top: 1em;\r\n  `;\r\n};\r\n\r\nlet Container = styled.div`\r\n  ${gridContainer()};\r\n`;\r\nlet Column = styled.div`\r\n  ${constants()} ${props => gridColumn(props.theme, 1)};\r\n`;\r\n\r\nlet Shifted = styled.div`\r\n  ${constants()}\r\n  ${props => gridColumn(props.theme, 1)}\r\n  ${props => gridShift(props.theme, 2)}\r\n`;\r\n\r\nclass App extends Component {\r\n  render() {\r\n    return (\r\n      <ThemeProvider theme={Neat()}>\r\n        <div>\r\n          <Container>\r\n            <Column />\r\n            <Shifted /> // Shifted one column to the right.\r\n          </Container>\r\n        </div>\r\n      </ThemeProvider>\r\n    );\r\n  }\r\n}\r\n```\r\n\r\n### gridPush(theme, push)\r\n\r\nPushes the component `push` number of columns. It's similar to `gridShift()` but does not rearrange the components.\r\n\r\n```javascript\r\nlet constants = () => {\r\n  return `\r\n    background-color: blue;\r\n    height: 50px;\r\n    margin-top: 1em;\r\n  `;\r\n};\r\n\r\nlet Container = styled.div`\r\n  ${gridContainer()};\r\n`;\r\nlet Column = styled.div`\r\n  ${constants()} ${props => gridColumn(props.theme, 1)};\r\n`;\r\n\r\nlet Pushed = styled.div`\r\n  ${constants()}\r\n  ${props => gridColumn(props.theme, 1)}\r\n  ${props => gridPush(props.theme, 2)}\r\n`;\r\n\r\nclass App extends Component {\r\n  render() {\r\n    return (\r\n      <ThemeProvider theme={Neat()}>\r\n        <div>\r\n          <Container>\r\n            <Column />\r\n            <Pushed /> // Pushed one column to the right.\r\n          </Container>\r\n        </div>\r\n      </ThemeProvider>\r\n    );\r\n  }\r\n}\r\n```\r\n\r\n### gridVisual(theme)\r\n\r\nCreates series of visual guidelines based on the grid system.\r\n\r\n## References\r\n\r\n* [Neat 2.x](http://neat.bourbon.io)\r\n* [styled-components](https://www.styled-components.com/)\r\n"}},[[252,1,2]]]);
//# sourceMappingURL=main.c0e5c0e6cf57b327e4df.bundle.js.map