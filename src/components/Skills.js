import React from 'react';
import {Keywords} from './Commons'

function getTitle(lang){
	return lang === "fr" ? "Compétences" : "Skills"
}  

function SkillItem({data, lang}){
	return (
		<div className="item">
			{data.name && <h3 className="name">{data.name[lang] ? data.name[lang] : data.name}</h3>}
			{data.level && <div className={"level "+level.toLowerCase()}>
				{data.levelDisplay ? 
					<em>{data.levelDisplay}</em>:
					<em>{data.level}</em>
				}
				<div className="bar"></div>
			</div>}
			<Keywords data={data} lang={lang} />
		</div>
	);
}

function Skills({data, lang }){
	return data && data.length && (
		<section className="section">
		<header>
			<h2 className='section-title'>{getTitle(lang)}</h2>
		</header>
		<section id="skills">
			{data.map(skillItem =>
				<SkillItem key={skillItem.name} data={skillItem} lang={lang} />
			)}
		</section>
	</section>
	);
}

export default Skills;
