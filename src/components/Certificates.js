import React from 'react';

function getTitle(lang){
  return lang === "fr" ? "Certifications" : "Certificates";
}

function getName(data, lang){
  return data.name[lang] ? data.name[lang] : data.name;
}

function getFormattedDate(date, lang) {
  const locale = lang.includes('fr') ? 'fr-CA' : 'en-US';
  return new Date(date).toLocaleDateString(
    locale, { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }
  );
}

function CertificateItem({data, lang}){
  return (
    <section className="certificate-item">
      <header className="clear">
        <div className="date">
          {getFormattedDate(data.date, lang)}
        </div>
        <div>
          <span className="name">{getName(data, lang)}</span>
        </div>
        {data.url ? 
          <div>
            <span className="issuer">
              <a target="_blank" href={data.url}>{data.issuer}</a>
            </span>
          </div> :
          <div>
            <span className="issuer">{data.issuer}</span>
          </div>
        }
      </header>
    </section>
  );
}

function Certificates({data, lang }){
  if(data){
    const certificates = data.filter((cert) => cert.hasOwnProperty('date'));
    return (
      <section className="section">
        <header>
          <h2 className="section-title">
            {getTitle(lang)} <span className="item-count">({certificates.length})</span>
          </h2>
        </header>
        <section id="certificates">
          {certificates.map((certificate) => {
            return <CertificateItem key={getName(certificate, lang)} data={certificate} lang={lang} />;
          })}
        </section>
      </section>
    );
  }
}

export default Certificates;