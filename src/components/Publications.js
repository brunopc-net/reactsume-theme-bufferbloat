import React from 'react';
import labels from '../Labels';
import { Keywords } from './Commons'

function getTitle() {
  return labels.publications.title[lang];
}

function getFormattedDate(date) {
  return new Date(date).toLocaleDateString(
    'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
  );
}

function PublicationItem({ data, lang }) {
  return (
    <section className="publication-item">
      <header className="clear">
        {data.releaseDate && <span className="date">{getFormattedDate(data.releaseDate)}</span>}
        <div className="header-left">
          {data.name && <span className="name">
            {data.website ? <span className="website">
              <span className="fa-solid fa-up-right-from-square printHidden">&nbsp;</span>
              <a target="_blank" href={data.website}>{data.name}</a>
            </span> :
              <>{data.name}</>
            }
          </span>}
          {data.publisher && <span className="publisher">
            in {data.publisher}
          </span>}
        </div>
      </header>
      <Keywords data={data.skills.flatMap(skill => skill.keywords)} />
      <div className="item">
        {data.summary && <div className="summary">{summary[lang]}</div>}
      </div>
    </section>
  );
}

function Publications({ data, lang }) {
  return data && data.length && (
    <section className="section">
      <header>
        <h2 className='section-title'>{getTitle(lang)}</h2>
      </header>
      <section id="publications">
        {data.map(publication =>
          <PublicationItem key={publication.name} data={publication} />
        )}
      </section>
    </section>
  );
}

export default Publications;
