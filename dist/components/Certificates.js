import React from 'react';
import labels from '../Labels';
function getTitle(lang) {
  return labels.certificates.title[lang];
}
function getName(data, lang) {
  return data.name[lang] ? data.name[lang] : data.name;
}
function getFormattedDate(date, lang) {
  var locale = lang.includes('fr') ? 'fr-CA' : 'en-US';
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}
function CertificateItem(_ref) {
  var data = _ref.data,
    lang = _ref.lang;
  return /*#__PURE__*/React.createElement("section", {
    className: "certificate-item"
  }, /*#__PURE__*/React.createElement("header", {
    className: "clear"
  }, /*#__PURE__*/React.createElement("div", {
    className: "date"
  }, getFormattedDate(data.date, lang)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, getName(data, lang))), data.url ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "issuer"
  }, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: data.url
  }, data.issuer))) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "issuer"
  }, data.issuer))));
}
function Certificates(_ref2) {
  var data = _ref2.data,
    lang = _ref2.lang;
  if (data) {
    var certificates = data.filter(function (cert) {
      return cert.hasOwnProperty('date');
    });
    return /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", {
      className: "section-title"
    }, getTitle(lang), " ", /*#__PURE__*/React.createElement("span", {
      className: "item-count"
    }, "(", certificates.length, ")"))), /*#__PURE__*/React.createElement("section", {
      id: "certificates"
    }, certificates.map(function (certificate) {
      return /*#__PURE__*/React.createElement(CertificateItem, {
        key: getName(certificate, lang),
        data: certificate,
        lang: lang
      });
    })));
  }
}
export default Certificates;