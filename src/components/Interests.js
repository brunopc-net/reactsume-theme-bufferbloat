import React from 'react';
import { Keywords } from './Commons'

function getTitle(lang) {
  return lang === "fr" ? "Intérêts" : "Interests"
}

function getName(data, lang){
  return data.name[lang] ? data.name[lang] : data.name;
}

function InterestItem({ data, lang }) {
  return (
    <div className="item">
      {data.name && <h3 className="name">{getName(data, lang)}</h3>}
      <Keywords data={data} lang={lang} />
    </div>
  );
}

function Interests({ data, lang }) {
  return data && (
    <section className="section">
      <header>
        <h2 className='section-title'>{getTitle(lang)}</h2>
      </header>
      <section id="interests">
        {data.map(interest =>
          <InterestItem key={getName(interest, lang)} data={interest} lang={lang} />
        )}
      </section>
    </section>
  );
}

export default Interests;