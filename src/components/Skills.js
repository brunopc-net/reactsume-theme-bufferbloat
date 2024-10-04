import React from 'react';
import labels from '../Labels';

function getTitle(lang) {
	return labels.skills.title[lang];
}

function SkillItem({ data, lang }) {
	const skillLabel = labels.skills[data.name.toLowerCase()];
	const skillName = skillLabel ? skillLabel[lang] : data.name;
	return (
		<div className="item">
			{data.name && <h3 className="name">{skillName}</h3>}
			{data.level && <div className={"level " + data.level.toLowerCase()}>
				{data.levelDisplay ?
					<em>{data.levelDisplay}</em> :
					<em>{data.level}</em>
				}
				<div className="bar"></div>
			</div>}
		</div>
	);
}

function Skills({ data, lang }) {
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
