import React from 'react';
import labels from '../Labels';

function getTitle(lang){
  return labels.languages.title[lang];
}

function LanguageItem({data, lang}){
  const fluencyCssClass = "level fluency "+data.fluency['en'].toLowerCase();
  return (
    <div className="display">
      {data.language && <h3 className="language">{data.language}</h3>}
      <div className="item">
        {data.fluency && <div className={fluencyCssClass}>
          {data.fluencyDisplay ?
            <em>{data.fluencyDisplay}</em>:
            <em>{data.fluency[lang]}</em>
          }
          <div className="bar"></div>
        </div>}
      </div>
    </div>
  );
}

function Languages({data, lang }){
  return data && (
    <section className="section">
      <header>
        <h2 className='section-title'>{getTitle(lang)}</h2>
      </header>
      <section id="languages">
        {data.map(languageItem => 
          <LanguageItem key={languageItem.language} data={languageItem} lang={lang}/>
        )}
      </section>
    </section>
  );
}

export default Languages;
