import React from 'react';
import labels from '../Labels';
import { Duration, Location, Highlights, Keywords } from './Commons'

function getTitle(lang) {
  return labels.volunteer.title[lang];
}

function VolunteerItem({ data, lang }) {
  return (
    <section className="volunteer-item">
      <header className="clear">
        <Duration data={data} format="MY" lang={lang} />
        <div className="header-left">
          {data.position && <div className="position">{data.position}</div>}
          {data.organization && <div className="organization">{data.organization}</div>}
        </div>
      </header>
      {data.website && <div className="website">
        <span className="fa-solid fa-up-right-from-square printHidden">&nbsp;</span>
        <a target="_blank" href={data.website}>{data.website}</a>
      </div>}
      <Location data={data.location} />
      <Keywords data={data.skills.flatMap(skill => skill.keywords)} />
      <div className="item">
        {data.summary && <div className="summary">{data.summary[lang]}</div>}
        <Highlights data={data} />
      </div>
    </section>
  );
}

function Volunteer({ data, lang }) {
  return data && data.length && (
    <section className="section">
      <header>
        <h2 className='section-title'>{getTitle(lang)}</h2>
      </header>
      <section id="volunteer">
        {data.map(volunteerItem =>
          <VolunteerItem key={volunteerItem.position + volunteerItem.organization} data={volunteerItem} />
        )}
      </section>
    </section>
  );
}

export default Volunteer;
