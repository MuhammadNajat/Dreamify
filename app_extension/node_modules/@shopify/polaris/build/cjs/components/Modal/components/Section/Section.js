'use strict';

var React = require('react');
var css = require('../../../../utilities/css.js');
var Section$1 = require('./Section.scss.js');
var Box = require('../../../Box/Box.js');

function Section({
  children,
  flush = false,
  subdued = false,
  titleHidden = false
}) {
  const className = css.classNames(Section$1.default.Section, titleHidden && Section$1.default.titleHidden);
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement(Box.Box, Object.assign({
    as: "section",
    padding: flush ? '0' : '400'
  }, titleHidden && {
    paddingInlineEnd: '0'
  }, subdued && {
    background: 'bg-surface-tertiary'
  }), children));
}

exports.Section = Section;
