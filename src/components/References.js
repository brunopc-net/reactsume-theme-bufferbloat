import React from 'react';
import labels from '../Labels';

function getTitle(lang) {
  return labels.references.title[lang];
}

function Author({ data, lang }) {
  return data.link ? (
    <div className="author">
      <a target="_blank" href={data.link}>{data.name}</a>, {data.position[lang]}, {data.place}
    </div>
  ) : (
    <div className="author">
      {data.name}, {data.position[lang]}, {data.place}
    </div>
  );
}

function ReferenceItem({ data, lang }) {
  return (
    <div className="item">
      {data.value && <blockquote className="reference">
        &#8220;&#32;{data.value[lang]}&#32;&#8221;
      </blockquote>}
      {data.name && <Author data={data} lang={lang} />}
    </div>
  );
}

function References({ data, lang }) {
  return data && data.length && (
    <section id="references" className="section printHidden">
      <header>
        <h2 className='section-title'>{getTitle(lang)}</h2>
      </header>
      <section>
        {data.map(reference =>
          <ReferenceItem key={reference.name} data={reference} lang={lang} />
        )}
      </section>
    </section>
  );
}

export default References;
