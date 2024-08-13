import React from 'react';
import labels from '../Labels';
import { Keywords } from './Commons';
function getTitle() {
  return labels.publications.title[lang];
}
function getFormattedDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}
function PublicationItem(_ref) {
  var data = _ref.data,
    lang = _ref.lang;
  return /*#__PURE__*/React.createElement("section", {
    className: "publication-item"
  }, /*#__PURE__*/React.createElement("header", {
    className: "clear"
  }, data.releaseDate && /*#__PURE__*/React.createElement("span", {
    className: "date"
  }, getFormattedDate(data.releaseDate)), /*#__PURE__*/React.createElement("div", {
    className: "header-left"
  }, data.name && /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, data.website ? /*#__PURE__*/React.createElement("span", {
    className: "website"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa-solid fa-up-right-from-square"
  }), /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: data.website
  }, data.name)) : /*#__PURE__*/React.createElement(React.Fragment, null, data.name)), data.publisher && /*#__PURE__*/React.createElement("span", {
    className: "publisher"
  }, "in ", data.publisher))), /*#__PURE__*/React.createElement(Keywords, {
    data: data
  }), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, data.summary && /*#__PURE__*/React.createElement("div", {
    className: "summary"
  }, summary[lang])));
}
function Publications(_ref2) {
  var data = _ref2.data,
    lang = _ref2.lang;
  return data && data.length && /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, getTitle(lang))), /*#__PURE__*/React.createElement("section", {
    id: "publications"
  }, data.map(function (publication) {
    return /*#__PURE__*/React.createElement(PublicationItem, {
      key: publication.name,
      data: publication
    });
  })));
}
export default Publications;