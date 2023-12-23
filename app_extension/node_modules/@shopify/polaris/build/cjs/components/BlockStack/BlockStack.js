'use strict';

var React = require('react');
var css = require('../../utilities/css.js');
var BlockStack$1 = require('./BlockStack.scss.js');

const BlockStack = ({
  as = 'div',
  children,
  align,
  inlineAlign,
  gap,
  id,
  reverseOrder = false,
  ...restProps
}) => {
  const className = css.classNames(BlockStack$1.default.BlockStack, (as === 'ul' || as === 'ol') && BlockStack$1.default.listReset, as === 'fieldset' && BlockStack$1.default.fieldsetReset);
  const style = {
    '--pc-block-stack-align': align ? `${align}` : null,
    '--pc-block-stack-inline-align': inlineAlign ? `${inlineAlign}` : null,
    '--pc-block-stack-order': reverseOrder ? 'column-reverse' : 'column',
    ...css.getResponsiveProps('block-stack', 'gap', 'space', gap)
  };
  return /*#__PURE__*/React.createElement(as, {
    className,
    style: css.sanitizeCustomProperties(style),
    ...restProps
  }, children);
};

exports.BlockStack = BlockStack;
