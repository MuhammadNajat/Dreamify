'use strict';

var React = require('react');
var Popover = require('../../Popover.scss.js');
var Box = require('../../../Box/Box.js');

function Section({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: Popover.default.Section
  }, /*#__PURE__*/React.createElement(Box.Box, {
    paddingInlineStart: "300",
    paddingInlineEnd: "300",
    paddingBlockStart: "200",
    paddingBlockEnd: "150"
  }, children));
}

exports.Section = Section;
