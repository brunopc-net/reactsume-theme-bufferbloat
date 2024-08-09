import React from 'react';

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

  const locale = lang.includes('fr') ? 'fr-CA' : 'en-US';
  const formattedDate = new Date(date).toLocaleDateString(locale, dateOpt);
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);;
}

function getXpTime(xp, lang){
  var time = xp.months < 12 ? xp.months+" months" : xp.years+" years";
  if(lang === "fr"){
    time = time.replace("months", "mois").replace("years", "ans");
  }
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