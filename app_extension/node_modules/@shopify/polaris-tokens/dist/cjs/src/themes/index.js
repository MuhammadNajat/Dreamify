'use strict';

var utils = require('./utils.js');
var constants = require('./constants.js');
var light = require('./light.js');
var lightHighContrast = require('./light-high-contrast.js');

var metaThemes = {
  light: light.metaThemeLight,
  'light-high-contrast-experimental': lightHighContrast.metaThemeLightHighContrast
};
var metaThemePartials = {
  light: light.metaThemeLightPartial,
  'light-high-contrast-experimental': lightHighContrast.metaThemeLightHighContrastPartial
};
var metaThemeDefaultPartial = metaThemePartials[constants.themeNameDefault];
var metaThemeDefault = utils.createMetaTheme(metaThemeDefaultPartial);

exports.createMetaTheme = utils.createMetaTheme;
exports.metaThemeDefault = metaThemeDefault;
exports.metaThemeDefaultPartial = metaThemeDefaultPartial;
exports.metaThemePartials = metaThemePartials;
exports.metaThemes = metaThemes;
