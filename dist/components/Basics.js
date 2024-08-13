import React from 'react';
import labels from '../Labels';
function Location(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("span", {
    className: "location"
  }, data.address && /*#__PURE__*/React.createElement("span", {
    className: "address"
  }, data.address, ", "), data.postalCode && /*#__PURE__*/React.createElement("span", {
    className: "address"
  }, data.postalCode, ", "), data.city && /*#__PURE__*/React.createElement("span", {
    className: "address"
  }, data.city, ", "), data.region && /*#__PURE__*/React.createElement("span", {
    className: "address"
  }, data.region, ", "), data.countryCode && /*#__PURE__*/React.createElement("span", {
    className: "address"
  }, data.countryCode));
}
function Contact(_ref2) {
  var data = _ref2.data;
  return /*#__PURE__*/React.createElement("div", {
    id: "contact"
  }, data.website && /*#__PURE__*/React.createElement("div", {
    className: "website"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa-solid fa-up-right-from-square"
  }), "\xA0", /*#__PURE__*/React.createElement("a", {
    className: "hide-href-print",
    target: "_blank",
    href: data.website
  }, data.website)), data.email && /*#__PURE__*/React.createElement("div", {
    className: "email"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa-regular fa-envelope"
  }), "\xA0", /*#__PURE__*/React.createElement("a", {
    className: "hide-href-print",
    href: "mailto:" + data.email
  }, data.email)), data.phone && /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fa-solid fa-mobile-screen-button"
  }), "\xA0", /*#__PURE__*/React.createElement("a", {
    className: "hide-href-print",
    href: "tel:" + data.phone
  }, data.phone)));
}
function Profile(_ref3) {
  var data = _ref3.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, data.network && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "fa-brands fa-" + data.network + " " + data.network + " social"
  }), data.url ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "username"
  }, "\xA0", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: data.url
  }, data.username)), /*#__PURE__*/React.createElement("span", {
    className: "url-full"
  }, "\xA0", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: data.url
  }, data.url))) : /*#__PURE__*/React.createElement("span", null, data.username)));
}
function Headline(_ref4) {
  var data = _ref4.data,
    lang = _ref4.lang;
  var name = "".concat(data.name, ", ").concat(data.title[lang]);
  var xpLabel = labels.basics.xp[lang];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "name"
  }, name), /*#__PURE__*/React.createElement("h2", {
    className: "label"
  }, data.label[lang], " | ", data.experience, " ", xpLabel));
}
function Basics(_ref5) {
  var data = _ref5.data,
    lang = _ref5.lang,
    pdf = _ref5.pdf;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    id: "header",
    className: "clear"
  }, data.image ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: "image",
    src: data.image,
    alt: data.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "middle"
  }, /*#__PURE__*/React.createElement(Headline, {
    data: data,
    lang: lang
  }))) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Headline, {
    data: data,
    lang: lang
  })), /*#__PURE__*/React.createElement(Location, {
    data: data.location
  }), /*#__PURE__*/React.createElement(Contact, {
    data: data.contact
  }), data.profiles && /*#__PURE__*/React.createElement("div", {
    id: "profiles"
  }, data.profiles.map(function (profile) {
    return /*#__PURE__*/React.createElement(Profile, {
      key: profile.url,
      data: profile
    });
  })), pdf && /*#__PURE__*/React.createElement("div", {
    id: "download-link"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-download"
  }), "\xA0", /*#__PURE__*/React.createElement("a", {
    href: pdf.fileUrl,
    download: pdf.fileName
  }, labels.basics.download[lang]))), data.summary && /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("section", {
    className: "main-summary"
  }, /*#__PURE__*/React.createElement("div", null, data.summary[lang]))));
}
export default Basics;