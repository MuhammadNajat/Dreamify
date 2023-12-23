'use strict';

var React = require('react');
var css = require('../../../../utilities/css.js');
var Layout = require('../../Layout.scss.js');

function Section({
  children,
  variant
}) {
  const className = css.classNames(Layout.default.Section, Layout.default[`Section-${variant}`]);
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, children);
}

exports.Section = Section;
