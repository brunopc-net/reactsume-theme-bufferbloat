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

function getXpCurrent(time){
  const start = new Date(time.start);
  const end = new Date();

  const months = 1 +
    (end.getFullYear() - start.getFullYear()) * 12
    + end.getMonth() - start.getMonth()
  
    return months <= 0 ? 0 : months;
}

function getXp(time, lang) {
  const xpMonths = time.end
    ? time.months
    : getXpCurrent(time);

  const xp = xpMonths < 12 ? {
    qty: xpMonths,
    label: labels.common.months[lang]
  } : {
    qty: Math.round((xpMonths / 12) * 2) / 2,
    label: labels.common.years[lang]
  }

  return `(${xp.qty+" "+xp.label})`;
}

function Duration({ time, format, lang }) {
  return time?.start && (
    <div className="date">
      <span className="startDate">
        {getFormattedDate(time.start, format, lang)}
      </span>
      {time.end ?
        <span className="endDate"> - {getFormattedDate(time.end, format, lang)}</span> :
        <span className="endDate"> - Current</span>
      }
      {time && <span className="experience">
        &nbsp;{getXp(time, lang)}
      </span>}
    </div>
  );
}

function Location({ data }) {
  return data && (<span className="location">
    <span className="fa-solid fa-location-dot"></span>
    {data.city && <span className="city">
      {data.city}
    </span>}
    {data.region && <span className="region">
      {data.region}
    </span>}
    {data.countryCode && <span className="country">
      {data.countryCode}
    </span>}
  </span>
  );
}

function Highlights({ data, lang }) {
  return data && data.highlights && (
    <ul className="highlights">
      {data.highlights.map(hl =>
        <li key={hl[lang]}>{hl[lang]}</li>
      )}
    </ul>
  );
}

function Keywords({ data, lang }) {
  return data && (
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