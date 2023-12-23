'use strict';

var React = require('react');
var css = require('../../utilities/css.js');
var components = require('../../utilities/components.js');
var ButtonGroup$1 = require('./ButtonGroup.scss.js');
var Item = require('./components/Item/Item.js');

function ButtonGroup({
  children,
  gap,
  variant,
  fullWidth,
  connectedTop,
  noWrap
}) {
  const className = css.classNames(ButtonGroup$1.default.ButtonGroup, gap && ButtonGroup$1.default[gap], variant && ButtonGroup$1.default[css.variationName('variant', variant)], fullWidth && ButtonGroup$1.default.fullWidth, noWrap && ButtonGroup$1.default.noWrap);
  const contents = components.elementChildren(children).map((child, index) => /*#__PURE__*/React.createElement(Item.Item, {
    button: child,
    key: index
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    "data-buttongroup-variant": variant,
    "data-buttongroup-connected-top": connectedTop,
    "data-buttongroup-full-width": fullWidth,
    "data-buttongroup-no-wrap": noWrap
  }, contents);
}

exports.ButtonGroup = ButtonGroup;
