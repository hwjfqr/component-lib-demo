'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

var _react = _interopRequireWildcard(require('react'));

var _excluded = ['maxSecondNum', 'txt', 'loadingTxt', 'disabledTxt', 'onClick'];

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop,
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var MAX_SECOND_NUM = 60;

function CountdownButton(_ref) {
  var _ref$maxSecondNum = _ref.maxSecondNum,
    maxSecondNum =
      _ref$maxSecondNum === void 0 ? MAX_SECOND_NUM : _ref$maxSecondNum,
    _ref$txt = _ref.txt,
    txt = _ref$txt === void 0 ? '获取验证码' : _ref$txt,
    _ref$loadingTxt = _ref.loadingTxt,
    loadingTxt = _ref$loadingTxt === void 0 ? '发送中' : _ref$loadingTxt,
    _ref$disabledTxt = _ref.disabledTxt,
    disabledTxt =
      _ref$disabledTxt === void 0
        ? function (s) {
            return ''.concat(s, ' \u79D2\u540E\u91CD\u8BD5');
          }
        : _ref$disabledTxt,
    _ref$onClick = _ref.onClick,
    _onClick =
      _ref$onClick === void 0
        ? function (completeCallback) {
            completeCallback();
          }
        : _ref$onClick,
    rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)({
      timing: false,
      count: maxSecondNum,
    }),
    _useState2 = _slicedToArray(_useState, 2),
    authCodeArgs = _useState2[0],
    setAuthCodeArgs = _useState2[1];

  (0, _react.useEffect)(
    function () {
      var timer = undefined;

      if (authCodeArgs.timing) {
        timer = window.setInterval(function () {
          setAuthCodeArgs(function (pre) {
            var count = pre.count,
              timing = pre.timing;

            if (count === 1) {
              window.clearInterval(timer);
              return {
                timing: false,
                count: maxSecondNum,
              };
            }

            return {
              timing: timing,
              count: count - 1,
            };
          });
        }, 1000);
      }

      return function () {
        return window.clearInterval(timer);
      };
    },
    [authCodeArgs.timing],
  );

  var completeCallback = function completeCallback() {
    setAuthCodeArgs(
      _objectSpread(
        _objectSpread({}, authCodeArgs),
        {},
        {
          timing: true,
        },
      ),
    );
  };

  var buttonText;

  if (rest.loading) {
    buttonText = loadingTxt;
  } else if (authCodeArgs.timing) {
    buttonText = disabledTxt(authCodeArgs.count);
  } else {
    buttonText = txt;
  }

  return /*#__PURE__*/ _react.default.createElement(
    _button.default,
    _objectSpread(
      {
        disabled: authCodeArgs.timing,
        style: _objectSpread(
          {
            minWidth: 100,
          },
          rest.style || {},
        ),
        onClick: function onClick() {
          _onClick && _onClick(completeCallback);
        },
      },
      rest,
    ),
    buttonText,
  );
}

var _default = CountdownButton;
exports.default = _default;
