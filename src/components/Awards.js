import React from 'react';
import labels from '../Labels';

function getYear(date){
  return date.split("-")[0];
}

function Award({ data, lang }) {
  return (
    <section className="award-item">
      {data.summary && <label for="award-item-{{@index}}"></label>}
      <header className="clear">
        {data.date && <div className="date">
          {getYear(data.date)}
        </div>}
        <div className="header-left">
          {data.title && <div className="title">
            {data.title[lang]}
          </div>}
          {data.awarder && <div className="awarder">
            {data.awarder}
          </div>}
        </div>
      </header>
      <div className="item">
        {data.summary && <div className="summary">
          {data.summary[lang]}
        </div>}
      </div>
    </section>
  );
}

function Awards({data, lang }) {
  return data && (
    <section className="section">
      <header>
        <h2 className="section-title">{labels.awards.title[lang]}</h2>
      </header>
      <section id="awards">
        {data && data.forEach(award =>
          <Award data={award} lang={lang} />
        )}
      </section>
    </section>
  );
}

export default Awards;