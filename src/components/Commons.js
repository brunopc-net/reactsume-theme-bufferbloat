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
      return 'de-DE'
    case 'it':
      return 'it-IT';
  }
}

function getFormattedDate(date, format, lang) {
  var dateOpt = {};
  switch (format) {
    case 'Y':
      dateOpt = { year: 'numeric' };
      break;
    case 'MY':
      dateOpt = { year: 'numeric', month: 'long' };
      break;
  }
  
  let origDate = new Date(date)
  origDate.setMonth(origDate.getMonth()+1); //Adjust month as it's zero indexed

  const formattedDate = new Date(origDate).toLocaleDateString(getLocale(lang), dateOpt);
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

function getXpTime(xp, lang) {
  var time = xp.months < 12 ?
    xp.months + " " + labels.common.months[lang] :
    xp.years + " " + labels.common.years[lang];

  return `(${time})`;
}

function Duration({ data, format, lang }) {
  return data.startDate && (
    <div className="date">
      <span className="startDate">
        {getFormattedDate(data.startDate, format, lang)}
      </span>
      {data.endDate ?
        <span className="endDate"> - {getFormattedDate(data.endDate, format, lang)}</span> :
        <span className="endDate"> - Current</span>
      }{data.experience && <span className="experience"> {getXpTime(data.experience, lang)}</span>}
    </div>
  );
}

function Location({ data }) {
  return data && (<span className="location">
    <span className="fa-solid fa-location-dot"></span>
    {data.city && <span className="city">{data.city}</span>}
    {data.region && <span className="city">{data.region}</span>}
    {data.countryCode && <span className="city">{data.countryCode}</span>}
  </span>
  );
}

function Highlights({ data, lang }) {
  return data.highlights && (
    <ul className="highlights">
      {data.highlights.map(hl =>
        <li key={hl[lang]}>{hl[lang]}</li>
      )}
    </ul>
  );
}

function Keywords({ data, lang }) {
  return data.keywords && (
    <ul className="keywords">
      {data.keywords.map(kw => {
        const value = kw[lang] ? kw[lang] : kw;
        return <li key={value}>{value}</li>
      })}
    </ul>
  );
}

export {
  Duration,
  Location,
  Highlights,
  Keywords
};