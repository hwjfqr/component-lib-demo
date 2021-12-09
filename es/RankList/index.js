import React from 'react';
import './index.css';

function RankList(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'rank-list',
    },
    data.length
      ? /*#__PURE__*/ React.createElement(
          'ul',
          null,
          data
            .filter(function (_, index) {
              return index < 10;
            })
            .map(function (_ref2, index) {
              var label = _ref2.label,
                value = _ref2.value;
              return /*#__PURE__*/ React.createElement(
                'li',
                {
                  key: label,
                },
                /*#__PURE__*/ React.createElement(
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
                /*#__PURE__*/ React.createElement(
                  'div',
                  {
                    className: 'name',
                  },
                  /*#__PURE__*/ React.createElement(
                    'span',
                    {
                      title: label || '--',
                    },
                    label || '--',
                  ),
                ),
                /*#__PURE__*/ React.createElement(
                  'div',
                  {
                    className: 'num',
                  },
                  value,
                ),
              );
            }),
        )
      : /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'empty',
          },
          '\u6682\u65E0\u6570\u636E',
        ),
  );
}

export default RankList;
