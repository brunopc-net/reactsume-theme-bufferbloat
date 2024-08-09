import React from 'react';
import {Duration, Location, Highlights, Keywords} from './Commons'

function getTitle(lang){
	return lang === "fr" ? "Projets" : "Projects"
}

function ProjectItem({data, lang}){
  return (
    <section className="project-item">
      {data.name && <header className="clear">
        <div className="position">{data.name}</div>
        <Duration data={data} format="MY" lang={lang} />
      </header>}
      <Location data={data.location} />
      {data.url && <span className="website">
        <span className="fa-solid fa-up-right-from-square"></span>
        &nbsp;<a target="_blank" href={data.url}>{data.url}</a>
      </span>}
      <Keywords data={data} />
      <div className="item">
        {data.summary && <div className="summary">{data.summary[lang]}</div>}
        <Highlights data={data} />
      </div>
    </section>
  );
}

function Projects({data, lang }){
  return data && data.length > 0 && (
    <section className="section">
      <header>
        <h2 className='section-title'>
          {getTitle(lang)} <span className="item-count">({data.length})</span>
        </h2>
      </header>
      <section id="projects">
        {data.map(project => 
          <ProjectItem key={project.name} data={project} lang={lang}/>
        )}
      </section>
    </section>
  );
}

export default Projects;