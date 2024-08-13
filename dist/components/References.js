import React from 'react';
import labels from '../Labels';
function getTitle(lang) {
  return labels.references.title[lang];
}
function Author(_ref) {
  var data = _ref.data,
    lang = _ref.lang;
  return data.link ? /*#__PURE__*/React.createElement("div", {
    className: "author"
  }, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: data.link
  }, data.name), ", ", data.position[lang], ", ", data.place) : /*#__PURE__*/React.createElement("div", {
    className: "author"
  }, data.name, ", ", data.position[lang], ", ", data.place);
}
function ReferenceItem(_ref2) {
  var data = _ref2.data,
    lang = _ref2.lang;
  return /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, data.value && /*#__PURE__*/React.createElement("blockquote", {
    className: "reference"
  }, "\u201C ", data.value[lang], " \u201D"), data.name && /*#__PURE__*/React.createElement(Author, {
    data: data,
    lang: lang
  }));
}
function References(_ref3) {
  var data = _ref3.data,
    lang = _ref3.lang;
  return data && data.length && /*#__PURE__*/React.createElement("section", {
    id: "references",
    className: "section"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, getTitle(lang))), /*#__PURE__*/React.createElement("section", null, data.map(function (reference) {
    return /*#__PURE__*/React.createElement(ReferenceItem, {
      key: reference.name,
      data: reference,
      lang: lang
    });
  })));
}
export default References;