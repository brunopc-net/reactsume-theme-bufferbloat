import React from 'react';
import Basics from './components/Basics';
import Skills from './components/Skills';
import Work from './components/Work';
import Volunteer from './components/Volunteer';
import Education from './components/Education';
import Awards from './components/Awards';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Languages from './components/Languages';
import Interests from './components/Interests';
import References from './components/References';
import '../src/style.css';
var DEFAULT_LANG = 'en';
var SUPPORTED_LANGS = ['en', 'fr', 'es', 'de', 'it'];
var Bufferbloat = function Bufferbloat(_ref) {
  var _lang;
  var resumeData = _ref.resumeData,
    lang = _ref.lang,
    pdf = _ref.pdf;
  (_lang = lang) !== null && _lang !== void 0 ? _lang : lang = DEFAULT_LANG;
  if (SUPPORTED_LANGS.indexOf(lang) === -1) return /*#__PURE__*/React.createElement("div", null, "Error: lang ", lang, " is not supported - Possible values: ", SUPPORTED_LANGS.join(', '));
  return /*#__PURE__*/React.createElement("div", {
    id: "resume"
  }, /*#__PURE__*/React.createElement(Basics, {
    data: resumeData.basics,
    lang: lang,
    pdf: pdf
  }), /*#__PURE__*/React.createElement(Skills, {
    data: resumeData.skills,
    lang: lang
  }), /*#__PURE__*/React.createElement(Work, {
    data: resumeData.work,
    lang: lang
  }), /*#__PURE__*/React.createElement(Volunteer, {
    data: resumeData.volunteer,
    lang: lang
  }), /*#__PURE__*/React.createElement(Education, {
    data: resumeData.education,
    lang: lang
  }), /*#__PURE__*/React.createElement(Awards, {
    data: resumeData.awards,
    lang: lang
  }), /*#__PURE__*/React.createElement(Certificates, {
    data: resumeData.certificates,
    lang: lang
  }), /*#__PURE__*/React.createElement(Projects, {
    data: resumeData.projects,
    lang: lang
  }), /*#__PURE__*/React.createElement(Publications, {
    data: resumeData.publications,
    lang: lang
  }), /*#__PURE__*/React.createElement(Languages, {
    data: resumeData.languages,
    lang: lang
  }), /*#__PURE__*/React.createElement(Interests, {
    data: resumeData.interests,
    lang: lang
  }), /*#__PURE__*/React.createElement(References, {
    data: resumeData.references,
    lang: lang
  }));
};
export default Bufferbloat;