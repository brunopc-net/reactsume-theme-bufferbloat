import React from 'react';
import labels from '../Labels';
import { Duration, Location } from './Commons'

function getTitle(lang){
  return labels.education.title[lang];
}

function Studies({ data, lang }){
  const area = data.area[lang] ? data.area[lang] : data.area;
  const type = data.studyType[lang] ? data.studyType[lang] : data.studyType;
  return <div className="studyType">{type}</div>, <div className="area">{area}</div>;
}

function EducationItem({ data, lang }) {
  return (
    <section className="education-item">
      <header className="clear">
        <Duration data={data} format="Y" lang={lang} />
        <Studies data={data} lang={lang} />
        {data.institution && data.url ?
          <div className="institution"><a target="_blank" href={data.url}>{data.institution}</a></div> :
          <div className="area">{data.institution}</div>
        }
      </header>
      <Location data={data.location} />
      <div className="item">
        {data.gpa && <div className='gpa'>
          <span className="gradeLabel"> Grade:</span> <span className="grade">{ data.gpa }</span>
        </div>}
        {data.summary && <div className="summary">{data.summary[lang]}</div>}
      </div>
    </section>
  );
}

function Education({ data, lang }) {
  return data && (
    <section className="section">
      <header>
        <h2 className='section-title'>{getTitle(lang)}</h2>
      </header>
      <section id="education">
        {data.map(educationItem =>
          <EducationItem key={educationItem.area + educationItem.studyType} data={educationItem} lang={lang} />
        )}
      </section>
    </section>
  );
}

export default Education;
