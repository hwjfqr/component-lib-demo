'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

require('./index.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function RankList(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'rank-list',
    },
    data.length
      ? /*#__PURE__*/ _react.default.createElement(
          'ul',
          null,
          data
            .filter(function (_, index) {
              return index < 10;
            })
            .map(function (_ref2, index) {
              var label = _ref2.label,
                value = _ref2.value;
              return /*#__PURE__*/ _react.default.createElement(
                'li',
                {
                  key: label,
                },
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    className: 'rank',
                    style: {
                      backgroundColor: index + 1 < 4 ? '#27478d' : '#fafafa',
                      color: index + 1 < 4 ? '#fff' : 'rgba(0, 0, 0, 0.65)',
                    },
                  },
                  index + 1,
                ),
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    className: 'name',
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    'span',
                    {
                      title: label || '--',
                    },
                    label || '--',
                  ),
                ),
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    className: 'num',
                  },
                  value,
                ),
              );
            }),
        )
      : /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'empty',
          },
          '\u6682\u65E0\u6570\u636E',
        ),
  );
}

var _default = RankList;
exports.default = _default;
