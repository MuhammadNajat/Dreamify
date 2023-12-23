'use strict';

var React = require('react');
var css = require('../../utilities/css.js');
var Icon$1 = require('./Icon.scss.js');
var Text = require('../Text/Text.js');

function Icon({
  source,
  tone,
  accessibilityLabel
}) {
  let sourceType;
  if (typeof source === 'function') {
    sourceType = 'function';
  } else if (source === 'placeholder') {
    sourceType = 'placeholder';
  } else {
    sourceType = 'external';
  }
  if (tone && sourceType === 'external' && process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn('Recoloring external SVGs is not supported. Set the intended color on your SVG instead.');
  }
  const className = css.classNames(Icon$1.default.Icon, tone && Icon$1.default[css.variationName('tone', tone)], tone && Icon$1.default.applyColor);
  const SourceComponent = source;
  const contentMarkup = {
    function: /*#__PURE__*/React.createElement(SourceComponent, {
      className: Icon$1.default.Svg,
      focusable: "false",
      "aria-hidden": "true"
    }),
    placeholder: /*#__PURE__*/React.createElement("div", {
      className: Icon$1.default.Placeholder
    }),
    external: /*#__PURE__*/React.createElement("img", {
      className: Icon$1.default.Img,
      src: `data:image/svg+xml;utf8,${source}`,
      alt: "",
      "aria-hidden": "true"
    })
  };
  return /*#__PURE__*/React.createElement("span", {
    className: className
  }, /*#__PURE__*/React.createElement(Text.Text, {
    as: "span",
    visuallyHidden: true
  }, accessibilityLabel), contentMarkup[sourceType]);
}

exports.Icon = Icon;
