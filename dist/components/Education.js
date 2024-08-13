import React from 'react';
import labels from '../Labels';
import { Duration, Location } from './Commons';
function getTitle(lang) {
  return labels.education.title[lang];
}
function Studies(_ref) {
  var data = _ref.data,
    lang = _ref.lang;
  var area = data.area[lang] ? data.area[lang] : data.area;
  var type = data.studyType[lang] ? data.studyType[lang] : data.studyType;
  return /*#__PURE__*/React.createElement("div", {
    className: "studyType"
  }, type), /*#__PURE__*/React.createElement("div", {
    className: "area"
  }, area);
}
function EducationItem(_ref2) {
  var data = _ref2.data,
    lang = _ref2.lang;
  return /*#__PURE__*/React.createElement("section", {
    className: "education-item"
  }, /*#__PURE__*/React.createElement("header", {
    className: "clear"
  }, /*#__PURE__*/React.createElement(Duration, {
    data: data,
    format: "Y",
    lang: lang
  }), /*#__PURE__*/React.createElement(Studies, {
    data: data,
    lang: lang
  }), data.institution && data.url ? /*#__PURE__*/React.createElement("div", {
    className: "institution"
  }, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: data.url
  }, data.institution)) : /*#__PURE__*/React.createElement("div", {
    className: "area"
  }, data.institution)), /*#__PURE__*/React.createElement(Location, {
    data: data.location
  }), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, data.gpa && /*#__PURE__*/React.createElement("div", {
    className: "gpa"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gradeLabel"
  }, " Grade:"), " ", /*#__PURE__*/React.createElement("span", {
    className: "grade"
  }, data.gpa)), data.summary && /*#__PURE__*/React.createElement("div", {
    className: "summary"
  }, data.summary[lang])));
}
function Education(_ref3) {
  var data = _ref3.data,
    lang = _ref3.lang;
  return data && /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, getTitle(lang), " ", /*#__PURE__*/React.createElement("span", {
    className: "item-count"
  }, "(", data.length, ")"))), /*#__PURE__*/React.createElement("section", {
    id: "education"
  }, data.map(function (educationItem) {
    return /*#__PURE__*/React.createElement(EducationItem, {
      key: educationItem.area + educationItem.studyType,
      data: educationItem,
      lang: lang
    });
  })));
}
export default Education;