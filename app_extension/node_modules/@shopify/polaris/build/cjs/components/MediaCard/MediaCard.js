'use strict';

var React = require('react');
var polarisIcons = require('@shopify/polaris-icons');
var useToggle = require('../../utilities/use-toggle.js');
var css = require('../../utilities/css.js');
var MediaCard$1 = require('./MediaCard.scss.js');
var hooks = require('../../utilities/i18n/hooks.js');
var Button = require('../Button/Button.js');
var InlineStack = require('../InlineStack/InlineStack.js');
var Popover = require('../Popover/Popover.js');
var ActionList = require('../ActionList/ActionList.js');
var utils = require('../Button/utils.js');
var LegacyCard = require('../LegacyCard/LegacyCard.js');
var Box = require('../Box/Box.js');
var BlockStack = require('../BlockStack/BlockStack.js');
var ButtonGroup = require('../ButtonGroup/ButtonGroup.js');
var Text = require('../Text/Text.js');

function MediaCard({
  title,
  children,
  primaryAction,
  secondaryAction,
  description,
  popoverActions = [],
  portrait = false,
  size = 'medium',
  onDismiss
}) {
  const i18n = hooks.useI18n();
  const {
    value: popoverActive,
    toggle: togglePopoverActive
  } = useToggle.useToggle(false);
  let headerMarkup = null;
  if (title) {
    const headerContent = typeof title === 'string' ? /*#__PURE__*/React.createElement(Text.Text, {
      variant: "headingSm",
      as: "h2"
    }, title) : title;
    headerMarkup = /*#__PURE__*/React.createElement("div", null, headerContent);
  }
  const dismissButtonMarkup = onDismiss ? /*#__PURE__*/React.createElement(Button.Button, {
    icon: polarisIcons.CancelMinor,
    onClick: onDismiss,
    size: "slim",
    accessibilityLabel: i18n.translate('Polaris.MediaCard.dismissButton'),
    variant: "tertiary"
  }) : null;
  const popoverActivator = /*#__PURE__*/React.createElement(InlineStack.InlineStack, {
    blockAlign: "center"
  }, /*#__PURE__*/React.createElement(Button.Button, {
    icon: polarisIcons.HorizontalDotsMinor,
    onClick: togglePopoverActive,
    size: "slim",
    accessibilityLabel: i18n.translate('Polaris.MediaCard.popoverButton'),
    variant: "tertiary"
  }));
  const popoverActionsMarkup = popoverActions.length > 0 ? /*#__PURE__*/React.createElement(Popover.Popover, {
    active: popoverActive,
    activator: popoverActivator,
    onClose: togglePopoverActive,
    preferredAlignment: "left",
    preferredPosition: "below"
  }, /*#__PURE__*/React.createElement(ActionList.ActionList, {
    items: popoverActions,
    onActionAnyItem: togglePopoverActive
  })) : null;
  const primaryActionMarkup = primaryAction ? /*#__PURE__*/React.createElement("div", null, utils.buttonFrom(primaryAction)) : null;
  const secondaryActionMarkup = secondaryAction ? /*#__PURE__*/React.createElement("div", null, utils.buttonFrom(secondaryAction)) : null;
  const actionClassName = css.classNames(MediaCard$1.default.ActionContainer, portrait && MediaCard$1.default.portrait);
  const actionMarkup = primaryActionMarkup || secondaryActionMarkup ? /*#__PURE__*/React.createElement("div", {
    className: actionClassName
  }, /*#__PURE__*/React.createElement(ButtonGroup.ButtonGroup, null, primaryActionMarkup, secondaryActionMarkup)) : null;
  const mediaCardClassName = css.classNames(MediaCard$1.default.MediaCard, portrait && MediaCard$1.default.portrait);
  const mediaContainerClassName = css.classNames(MediaCard$1.default.MediaContainer, portrait && MediaCard$1.default.portrait, size === 'small' && MediaCard$1.default.sizeSmall);
  const infoContainerClassName = css.classNames(MediaCard$1.default.InfoContainer, portrait && MediaCard$1.default.portrait, size === 'small' && MediaCard$1.default.sizeSmall);
  const popoverOrDismissMarkup = popoverActionsMarkup || dismissButtonMarkup ? /*#__PURE__*/React.createElement(Box.Box, {
    position: "absolute",
    insetInlineEnd: "500",
    zIndex: "var(--p-z-index-2)"
  }, /*#__PURE__*/React.createElement(InlineStack.InlineStack, {
    gap: "100",
    wrap: false
  }, popoverActionsMarkup, dismissButtonMarkup)) : null;
  return /*#__PURE__*/React.createElement(LegacyCard.LegacyCard, null, /*#__PURE__*/React.createElement("div", {
    className: mediaCardClassName
  }, /*#__PURE__*/React.createElement("div", {
    className: mediaContainerClassName
  }, children), /*#__PURE__*/React.createElement("div", {
    className: infoContainerClassName
  }, /*#__PURE__*/React.createElement(Box.Box, {
    padding: "500"
  }, /*#__PURE__*/React.createElement(BlockStack.BlockStack, {
    gap: "200"
  }, /*#__PURE__*/React.createElement(InlineStack.InlineStack, {
    wrap: false,
    align: "space-between",
    gap: "200"
  }, headerMarkup, popoverOrDismissMarkup), /*#__PURE__*/React.createElement("p", {
    className: MediaCard$1.default.Description
  }, description), actionMarkup)))));
}

exports.MediaCard = MediaCard;
