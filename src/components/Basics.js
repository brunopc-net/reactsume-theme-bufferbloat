import React from 'react';
import labels from '../Labels';

function Location({ data }) {
	return (<span className="location">
		{data.address && <span className="address">{data.address}, </span>}
		{data.postalCode && <span className="address">{data.postalCode}, </span>}
		{data.city && <span className="address">{data.city}, </span>}
		{data.region && <span className="address">{data.region}, </span>}
		{data.countryCode && <span className="address">{data.countryCode}</span>}
	</span>);
}

function Contact({ data }) {
	return (<div id="contact">
		{data.website && <div className="website">
			<span className="fa-solid fa-up-right-from-square printHidden">&nbsp;</span>
			<a className="hide-href-print" target="_blank" href={data.website}>{data.website}</a>
		</div>}
		{data.email && <div className="email">
			<span className="fa-regular fa-envelope"></span>
			&nbsp;<a className="hide-href-print" href={"mailto:" + data.email}>{data.email}</a>
		</div>}
		{data.phone && <div className="phone">
			<span className="fa-solid fa-mobile-screen-button"></span>
			&nbsp;<a className="hide-href-print" href={"tel:" + data.phone}>{data.phone}</a>
		</div>}
	</div>);
}

function Profile({ data }) {
	const pdfUrl = data.url.replace('https://','').replace('www.','');
	return (
		<div className="item">
			{data.network &&
				<div>
					<span className={"fa-brands fa-" + data.network + " " + data.network + " social"}></span>
					{data.url ? <>
						<span className="username printHidden">
							&nbsp;<a target="_blank" href={data.url}>{data.username}</a>
						</span>
						<span className="url-full">
							&nbsp;<a target="_blank" href={data.url}>{pdfUrl}</a>
						</span>
					</> :
						<span>{data.username}</span>
					}
				</div>
			}
		</div>
	);
}

function Headline({ data, lang }) {
	const name = `${data.name}, ${data.title[lang]}`;
	const xpLabel = labels.basics.xp[lang];
	return <>
		<h1 className="name">{name}</h1>
		<h2 className="label">{data.label[lang]} | {data.experience} {xpLabel}</h2>
	</>
}

function Basics({ data, lang, pdf}) {
	return (<>
		<header id="header" className="clear">
			{data.image ? <>
				<img className="headshot printHidden" src={data.image} alt={data.name} />
				<div className="middle"><Headline data={data} lang={lang} /></div>
			</> :
				<div><Headline data={data} lang={lang} /></div>
			}
			<Location data={data.location} />
			<Contact data={data.contact} />
			{data.profiles && <div id="profiles">
				{data.profiles.map(profile =>
					<Profile key={profile.url} data={profile} />
				)}
			</div>}
			{pdf && <div class="printHidden">
				<i className="fa-solid fa-download" />&nbsp;
				<a href={pdf.fileUrl} download={pdf.fileName}>
					{labels.basics.download[lang]}
				</a>
			</div>}
		</header>
		{data.summary && <section className="section">
			<section className="main-summary">
				<div>{data.summary[lang]}</div>
			</section>
		</section>}
	</>);
}

export default Basics;
