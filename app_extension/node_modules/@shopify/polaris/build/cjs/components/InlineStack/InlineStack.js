'use strict';

var React = require('react');
var css = require('../../utilities/css.js');
var InlineStack$1 = require('./InlineStack.scss.js');

const InlineStack = function InlineStack({
  align,
  blockAlign,
  gap,
  wrap = true,
  children
}) {
  const style = {
    '--pc-inline-stack-align': align,
    '--pc-inline-stack-block-align': blockAlign,
    '--pc-inline-stack-wrap': wrap ? 'wrap' : 'nowrap',
    ...css.getResponsiveProps('inline-stack', 'gap', 'space', gap)
  };
  return /*#__PURE__*/React.createElement("div", {
    className: InlineStack$1.default.InlineStack,
    style: style
  }, children);
};

exports.InlineStack = InlineStack;
