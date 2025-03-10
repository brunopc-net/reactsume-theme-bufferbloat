import React from 'react';
import labels from '../Labels';
import { Duration, Location, Highlights, Keywords } from './Commons'

function getTitle(lang){
  return labels.work.title[lang];
}

function getPosition(data, lang){

  console.log(data);

  const position = data.position[lang] ? 
    data.position[lang] :
    data.position;

  console.log(data.client);
  console.log(data.employer);
  console.log(getPlaceName(data.employer));

  return data.client
    ? `(${getPlaceName(data.employer)}) ${position}`
    : position;
}

function getPlace(data){
  return data.client ? data.client : data.employer;
}

function getPlaceName(place, lang){
  return place[lang] ? place[lang] : place.name
}

function Position({ data, lang }) {
  const place = getPlace(data);
  const name = getPlaceName(place, lang);
  return (
    <div>
      <span className="position">{getPosition(data, lang)}, </span>
      {place.url ?
        <span className="website">
          <span className="fa-solid fa-up-right-from-square printHidden">&nbsp;</span>
          <a target="_blank" href={place.url}>{name}</a>
        </span>:
        <div className="company">{name}</div>
      }
    </div>
  );
}

function WorkItem({ data, lang }) {
  return (
    <section className="work-item">
      <header className="clear">
        <Duration time={data.time} format="MY" lang={lang} />
        <Position data={data} lang={lang} />
      </header>
      <Location data={data.location} />
      {data?.skills?.length > 0 &&
        <Keywords data={data.skills.flatMap(skill => skill.keywords)} />
      }
      <div className="item" id="work-item">
        {data.summary && <div className="summary">{data.summary[lang]}</div>}
        <Highlights data={data} lang={lang} />
      </div>
    </section>
  );
}

function Work({ data, lang }) {
  return (
    <section className="section">
      <header>
        <h2 className='section-title'>
          {getTitle(lang)} <span className="item-count">({data.length})</span>
        </h2>
      </header>
      <section id="work">
        {data.map(workItem => {
          return <WorkItem 
            key={getPosition(workItem, lang) + getPlaceName(getPlace(workItem), lang)}
            data={workItem}
            lang={lang}
          />
        })}
      </section>
    </section>
  );
}

export default Work;