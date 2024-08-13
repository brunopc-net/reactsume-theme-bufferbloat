import React from 'react';
import labels from '../Labels';
import { Duration, Location, Highlights, Keywords } from './Commons';
function getTitle(lang) {
  return labels.projects.title[lang];
}
function ProjectItem(_ref) {
  var data = _ref.data,
    lang = _ref.lang;
  return /*#__PURE__*/React.createElement("section", {
    className: "project-item"
  }, data.name && /*#__PURE__*/React.createElement("header", {
    className: "clear"
  }, /*#__PURE__*/React.createElement("div", {
    className: "position"
  }, data.name), /*#__PURE__*/React.createElement(Duration, {
    data: data,
    format: "MY",
    lang: lang
  })), /*#__PURE__*/React.createElement(Location, {
    data: data.location
  }), data.url && /*#__PURE__*/React.createElement("span", {
    className: "website"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa-solid fa-up-right-from-square"
  }), "\xA0", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: data.url
  }, data.url)), /*#__PURE__*/React.createElement(Keywords, {
    data: data
  }), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, data.summary && /*#__PURE__*/React.createElement("div", {
    className: "summary"
  }, data.summary[lang]), /*#__PURE__*/React.createElement(Highlights, {
    data: data
  })));
}
function Projects(_ref2) {
  var data = _ref2.data,
    lang = _ref2.lang;
  return data && data.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, getTitle(lang), " ", /*#__PURE__*/React.createElement("span", {
    className: "item-count"
  }, "(", data.length, ")"))), /*#__PURE__*/React.createElement("section", {
    id: "projects"
  }, data.map(function (project) {
    return /*#__PURE__*/React.createElement(ProjectItem, {
      key: project.name,
      data: project,
      lang: lang
    });
  })));
}
export default Projects;