import React from 'react';
import labels from '../Labels';

function getFormattedDate(date, format, lang) {
  const origDate = new Date(date)
  // Dates in Javascript are zero-indexed
  // Adjusting the date by adding 1 to the month, making sure it's valid
  const nextMonthDate = new Date(origDate.getFullYear(), origDate.getMonth() + 1);

  const locale = {
    'en': 'en-US',
    'fr': 'fr-FR',
    'es': 'es-ES',
    'de': 'de-DE',
    'it': 'it-IT'
  }[lang];

  const dateOpt = {
    'Y': { year: 'numeric' },
    'MY': { year: 'numeric', month: 'long' }
  }[format];

  const formattedDate = new Date(nextMonthDate).toLocaleDateString(locale, dateOpt);

  //Making the first letter of the month Uppercase
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

function getXpTime(xp, lang) {
  const time = xp.months < 12 ?
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
  return (
    <ul className="keywords">
      {data.map(kw => {
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