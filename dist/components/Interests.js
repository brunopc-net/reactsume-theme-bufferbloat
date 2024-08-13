import React from 'react';
import labels from '../Labels';
import { Keywords } from './Commons';
function getTitle(lang) {
  return labels.interests.title[lang];
}
function getName(data, lang) {
  return data.name[lang] ? data.name[lang] : data.name;
}
function InterestItem(_ref) {
  var data = _ref.data,
    lang = _ref.lang;
  return /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, data.name && /*#__PURE__*/React.createElement("h3", {
    className: "name"
  }, getName(data, lang)), /*#__PURE__*/React.createElement(Keywords, {
    data: data,
    lang: lang
  }));
}
function Interests(_ref2) {
  var data = _ref2.data,
    lang = _ref2.lang;
  return data && /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, getTitle(lang))), /*#__PURE__*/React.createElement("section", {
    id: "interests"
  }, data.map(function (interest) {
    return /*#__PURE__*/React.createElement(InterestItem, {
      key: getName(interest, lang),
      data: interest,
      lang: lang
    });
  })));
}
export default Interests;