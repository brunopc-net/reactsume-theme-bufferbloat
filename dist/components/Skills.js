import React from 'react';
import labels from '../Labels';
import { Keywords } from './Commons';
function getTitle(lang) {
  return labels.skills.title[lang];
}
function SkillItem(_ref) {
  var data = _ref.data,
    lang = _ref.lang;
  var skillLabel = labels.skills[data.name.toLowerCase()];
  var skillName = skillLabel ? skillLabel[lang] : data.name;
  return /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, data.name && /*#__PURE__*/React.createElement("h3", {
    className: "name"
  }, skillName), data.level && /*#__PURE__*/React.createElement("div", {
    className: "level " + level.toLowerCase()
  }, data.levelDisplay ? /*#__PURE__*/React.createElement("em", null, data.levelDisplay) : /*#__PURE__*/React.createElement("em", null, data.level), /*#__PURE__*/React.createElement("div", {
    className: "bar"
  })), /*#__PURE__*/React.createElement(Keywords, {
    data: data,
    lang: lang
  }));
}
function Skills(_ref2) {
  var data = _ref2.data,
    lang = _ref2.lang;
  return data && data.length && /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, getTitle(lang))), /*#__PURE__*/React.createElement("section", {
    id: "skills"
  }, data.map(function (skillItem) {
    return /*#__PURE__*/React.createElement(SkillItem, {
      key: skillItem.name,
      data: skillItem,
      lang: lang
    });
  })));
}
export default Skills;