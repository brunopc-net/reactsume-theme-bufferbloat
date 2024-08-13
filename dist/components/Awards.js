import React from 'react';
import labels from '../Labels';
function getYear(date) {
  return date.split("-")[0];
}
function Award(_ref) {
  var data = _ref.data,
    lang = _ref.lang;
  return /*#__PURE__*/React.createElement("section", {
    className: "award-item"
  }, data.summary && /*#__PURE__*/React.createElement("label", {
    "for": "award-item-{{@index}}"
  }), /*#__PURE__*/React.createElement("header", {
    className: "clear"
  }, data.date && /*#__PURE__*/React.createElement("div", {
    className: "date"
  }, getYear(data.date)), /*#__PURE__*/React.createElement("div", {
    className: "header-left"
  }, data.title && /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, data.title[lang]), data.awarder && /*#__PURE__*/React.createElement("div", {
    className: "awarder"
  }, data.awarder))), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, data.summary && /*#__PURE__*/React.createElement("div", {
    className: "summary"
  }, data.summary[lang])));
}
function Awards(_ref2) {
  var data = _ref2.data,
    lang = _ref2.lang;
  return data && /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, labels.awards.title[lang])), /*#__PURE__*/React.createElement("section", {
    id: "awards"
  }, data && data.forEach(function (award) {
    return /*#__PURE__*/React.createElement(Award, {
      data: award,
      lang: lang
    });
  })));
}
export default Awards;