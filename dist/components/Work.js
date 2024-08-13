import React from 'react';
import labels from '../Labels';
import { Duration, Location, Highlights, Keywords } from './Commons';
function getTitle(lang) {
  return labels.work.title[lang];
}
function getPosition(data, lang) {
  return data.position[lang] ? data.position[lang] : data.position;
}
function getPlace(data) {
  return data.client ? data.client : data.employer;
}
function getPlaceName(data, lang) {
  var place = getPlace(data, lang);
  return place[lang] ? place[lang] : place.name;
}
function Position(_ref) {
  var data = _ref.data,
    lang = _ref.lang;
  var place = getPlace(data);
  var name = getPlaceName(data, lang);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "position"
  }, getPosition(data, lang)), "\xA0", labels.common.at[lang], "\xA0", place.url ? /*#__PURE__*/React.createElement("span", {
    className: "website"
  }, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: place.url
  }, name)) : /*#__PURE__*/React.createElement("div", {
    className: "company"
  }, name));
}
function WorkItem(_ref2) {
  var data = _ref2.data,
    lang = _ref2.lang;
  return /*#__PURE__*/React.createElement("section", {
    className: "work-item"
  }, /*#__PURE__*/React.createElement("header", {
    className: "clear"
  }, /*#__PURE__*/React.createElement(Duration, {
    data: data,
    format: "MY",
    lang: lang
  }), /*#__PURE__*/React.createElement(Position, {
    data: data,
    lang: lang
  })), /*#__PURE__*/React.createElement(Location, {
    data: data.location
  }), data.url && /*#__PURE__*/React.createElement("span", {
    className: "url"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa-solid fa-up-right-from-square"
  }), /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: data.url
  }, data.url)), /*#__PURE__*/React.createElement(Keywords, {
    data: data
  }), /*#__PURE__*/React.createElement("div", {
    className: "item",
    id: "work-item"
  }, data.summary && /*#__PURE__*/React.createElement("div", {
    className: "summary"
  }, data.summary[lang]), /*#__PURE__*/React.createElement(Highlights, {
    data: data,
    lang: lang
  })));
}
function Work(_ref3) {
  var data = _ref3.data,
    lang = _ref3.lang;
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, getTitle(lang), " ", /*#__PURE__*/React.createElement("span", {
    className: "item-count"
  }, "(", data.length, ")"))), /*#__PURE__*/React.createElement("section", {
    id: "work"
  }, data.map(function (workItem) {
    return /*#__PURE__*/React.createElement(WorkItem, {
      key: getPosition(workItem, lang) + getPlaceName(workItem, lang),
      data: workItem,
      lang: lang
    });
  })));
}
export default Work;