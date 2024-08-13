import React from 'react';
import labels from '../Labels';
import { Duration, Location, Highlights, Keywords } from './Commons';
function getTitle(lang) {
  return labels.volunteer.title[lang];
}
function VolunteerItem(_ref) {
  var data = _ref.data,
    lang = _ref.lang;
  return /*#__PURE__*/React.createElement("section", {
    className: "volunteer-item"
  }, /*#__PURE__*/React.createElement("header", {
    className: "clear"
  }, /*#__PURE__*/React.createElement(Duration, {
    data: data,
    format: "MY",
    lang: lang
  }), /*#__PURE__*/React.createElement("div", {
    className: "header-left"
  }, data.position && /*#__PURE__*/React.createElement("div", {
    className: "position"
  }, data.position), data.organization && /*#__PURE__*/React.createElement("div", {
    className: "organization"
  }, data.organization))), data.website && /*#__PURE__*/React.createElement("div", {
    className: "website"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa-solid fa-up-right-from-square"
  }), /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: data.website
  }, data.website)), /*#__PURE__*/React.createElement(Location, {
    data: data.location
  }), /*#__PURE__*/React.createElement(Keywords, {
    data: data
  }), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, data.summary && /*#__PURE__*/React.createElement("div", {
    className: "summary"
  }, data.summary[lang]), /*#__PURE__*/React.createElement(Highlights, {
    data: data
  })));
}
function Volunteer(_ref2) {
  var data = _ref2.data,
    lang = _ref2.lang;
  return data && data.length && /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, getTitle(lang))), /*#__PURE__*/React.createElement("section", {
    id: "volunteer"
  }, data.map(function (volunteerItem) {
    return /*#__PURE__*/React.createElement(VolunteerItem, {
      key: volunteerItem.position + volunteerItem.organization,
      data: volunteerItem
    });
  })));
}
export default Volunteer;