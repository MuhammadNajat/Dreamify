import { createMetaTheme } from './utils.mjs';
import { themeNameDefault } from './constants.mjs';
import { metaThemeLight, metaThemeLightPartial } from './light.mjs';
import { metaThemeLightHighContrast, metaThemeLightHighContrastPartial } from './light-high-contrast.mjs';

var metaThemes = {
  light: metaThemeLight,
  'light-high-contrast-experimental': metaThemeLightHighContrast
};
var metaThemePartials = {
  light: metaThemeLightPartial,
  'light-high-contrast-experimental': metaThemeLightHighContrastPartial
};
var metaThemeDefaultPartial = metaThemePartials[themeNameDefault];
var metaThemeDefault = createMetaTheme(metaThemeDefaultPartial);

export { createMetaTheme, metaThemeDefault, metaThemeDefaultPartial, metaThemePartials, metaThemes };
