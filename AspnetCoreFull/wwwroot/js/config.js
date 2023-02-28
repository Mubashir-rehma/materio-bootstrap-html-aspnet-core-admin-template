/**
 * Config
 * -------------------------------------------------------------------------------------
 * ! IMPORTANT: Make sure you clear the browser local storage In order to see the config changes in the template.
 * ! To clear local storage: (https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/).
 */

'use strict';

// JS global variables
let config = {
  colors: {
    primary: '#666ee8',
    secondary: '#8897aa',
    success: '#28d094',
    info: '#1e9ff2',
    warning: '#ff9149',
    danger: '#ff4961',
    dark: '#000000e6',
    black: '#000',
    white: '#fff',
    cardColor: '#fff',
    bodyBg: '#f4f5fb',
    bodyColor: '#4e5155',
    headingColor: '#46494d',
    textMuted: '#a3a4a6',
    borderColor: '#181c211a'
  },
  colors_label: {
    primary: '#666ee81a',
    secondary: '#8897aa1a',
    success: '#28d0941a',
    info: '#1e9ff21a',
    warning: '#ff91491a',
    danger: '#ff49611a',
    dark: '#181c211a'
  },
  colors_dark: {
    cardColor: '#32353b',
    bodyBg: '#25282e',
    bodyColor: '#d0d2d6',
    headingColor: '#d3d4d5',
    textMuted: '#a8a9ab',
    borderColor: '#ffffff17'
  },
  enableMenuLocalStorage: true // Enable menu state with local storage support
};

let assetsPath = document.documentElement.getAttribute('data-assets-path'),
  templateName = document.documentElement.getAttribute('data-template'),
  rtlSupport = true; // set true for rtl support (rtl + ltr), false for ltr only.

/**
 * TemplateCustomizer
 * ! You must use(include) template-customizer.js to use TemplateCustomizer settings
 * -----------------------------------------------------------------------------------------------
 */

// To use more themes, just push it to THEMES object.

/* TemplateCustomizer.THEMES.push({
  name: 'theme-raspberry',
  title: 'Raspberry'
}); */

// To add more languages, just push it to LANGUAGES object.
/*
TemplateCustomizer.LANGUAGES.fr = { ... };
*/

/**
 * TemplateCustomizer settings
 * -------------------------------------------------------------------------------------
 * cssPath: Core CSS file path
 * themesPath: Theme CSS file path
 * displayCustomizer: true(Show customizer), false(Hide customizer)
 * lang: To set default language, Add more langues and set default. Fallback language is 'en'
 * controls: [ 'rtl','style','layoutType','showDropdownOnHover','layoutNavbarFixed','layoutFooterFixed','themes'] | Show/Hide customizer controls
 * defaultTheme: 0(Default), 1(Semi Dark), 2(Bordered)
 * defaultStyle: 'light', 'dark' (Mode)
 * defaultTextDir: 'ltr', 'rtl' (rtlSupport must be true for rtl mode)
 * defaultLayoutType: 'static', 'fixed'
 * defaultMenuCollapsed: true, false
 * defaultNavbarFixed: true, false
 * defaultFooterFixed: true, false
 * defaultShowDropdownOnHover : true, false (for horizontal layout only)
 */

if (typeof TemplateCustomizer !== 'undefined') {
  window.templateCustomizer = new TemplateCustomizer({
    cssPath: assetsPath + 'vendor/css' + (rtlSupport ? '/rtl' : '') + '/',
    themesPath: assetsPath + 'vendor/css' + (rtlSupport ? '/rtl' : '') + '/',
    displayCustomizer: true,
    // lang: 'fr',
    // defaultTheme: 2,
    // defaultStyle: 'light',
    // defaultTextDir: 'ltr',
    // defaultLayoutType: 'fixed',
    // defaultMenuCollapsed: true,
    // defaultNavbarFixed: true,
    // defaultFooterFixed: false
    defaultShowDropdownOnHover: true
    // controls: [
    //   'rtl',
    //   'style',
    //   'layoutType',
    //   'showDropdownOnHover',
    //   'layoutNavbarFixed',
    //   'layoutFooterFixed',
    //   'themes'
    // ],
  });
}
