import React from 'react';
import labels from '../Labels';
function getTitle(lang) {
  return labels.languages.title[lang];
}
function LanguageItem(_ref) {
  var data = _ref.data,
    lang = _ref.lang;
  var fluencyCssClass = "level fluency " + data.fluency['en'].toLowerCase();
  return /*#__PURE__*/React.createElement("div", {
    className: "display"
  }, data.language && /*#__PURE__*/React.createElement("h3", {
    className: "language"
  }, data.language), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, data.fluency && /*#__PURE__*/React.createElement("div", {
    className: fluencyCssClass
  }, data.fluencyDisplay ? /*#__PURE__*/React.createElement("em", null, data.fluencyDisplay) : /*#__PURE__*/React.createElement("em", null, data.fluency[lang]), /*#__PURE__*/React.createElement("div", {
    className: "bar"
  }))));
}
function Languages(_ref2) {
  var data = _ref2.data,
    lang = _ref2.lang;
  return data && /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, getTitle(lang))), /*#__PURE__*/React.createElement("section", {
    id: "languages"
  }, data.map(function (languageItem) {
    return /*#__PURE__*/React.createElement(LanguageItem, {
      key: languageItem.language,
      data: languageItem,
      lang: lang
    });
  })));
}
export default Languages;