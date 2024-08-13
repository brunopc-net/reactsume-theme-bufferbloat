import React from 'react';
import labels from '../Labels';
function getLocale(lang) {
  switch (lang) {
    case 'en':
      return 'en-US';
    case 'fr':
      return 'fr-FR';
    case 'es':
      return 'es-ES';
    case 'de':
      return 'de-DE';
    case 'it':
      return 'it-IT';
  }
}
function getFormattedDate(date, format, lang) {
  var dateOpt = {};
  switch (format) {
    case 'Y':
      dateOpt = {
        year: 'numeric'
      };
      break;
    case 'MY':
      dateOpt = {
        year: 'numeric',
        month: 'long'
      };
      break;
  }
  var formattedDate = new Date(date).toLocaleDateString(getLocale(lang), dateOpt);
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  ;
}
function getXpTime(xp, lang) {
  var time = xp.months < 12 ? xp.months + " " + labels.common.months[lang] : xp.years + " " + labels.common.years[lang];
  return "(".concat(time, ")");
}
function Duration(_ref) {
  var data = _ref.data,
    format = _ref.format,
    lang = _ref.lang;
  return data.startDate && /*#__PURE__*/React.createElement("div", {
    className: "date"
  }, /*#__PURE__*/React.createElement("span", {
    className: "startDate"
  }, getFormattedDate(data.startDate, format, lang)), data.endDate ? /*#__PURE__*/React.createElement("span", {
    className: "endDate"
  }, " - ", getFormattedDate(data.endDate, format, lang)) : /*#__PURE__*/React.createElement("span", {
    className: "endDate"
  }, " - Current"), data.experience && /*#__PURE__*/React.createElement("span", {
    className: "experience"
  }, " ", getXpTime(data.experience, lang)));
}
function Location(_ref2) {
  var data = _ref2.data;
  return data && /*#__PURE__*/React.createElement("span", {
    className: "location"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa-solid fa-location-dot"
  }), data.city && /*#__PURE__*/React.createElement("span", {
    className: "city"
  }, data.city), data.region && /*#__PURE__*/React.createElement("span", {
    className: "city"
  }, data.region), data.countryCode && /*#__PURE__*/React.createElement("span", {
    className: "city"
  }, data.countryCode));
}
function Highlights(_ref3) {
  var data = _ref3.data,
    lang = _ref3.lang;
  return data.highlights && /*#__PURE__*/React.createElement("ul", {
    className: "highlights"
  }, data.highlights.map(function (hl) {
    return /*#__PURE__*/React.createElement("li", {
      key: hl[lang]
    }, hl[lang]);
  }));
}
function Keywords(_ref4) {
  var data = _ref4.data,
    lang = _ref4.lang;
  return data.keywords && /*#__PURE__*/React.createElement("ul", {
    className: "keywords"
  }, data.keywords.map(function (kw) {
    var value = kw[lang] ? kw[lang] : kw;
    return /*#__PURE__*/React.createElement("li", {
      key: value
    }, value);
  }));
}
export { Duration, Location, Highlights, Keywords };