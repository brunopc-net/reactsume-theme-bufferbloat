import React from 'react';
import labels from '../Labels';

function getTitle(lang){
  return labels.certificates.title[lang];
}

function getName(data, lang){
  return data.name[lang] ? data.name[lang] : data.name;
}

function getId(proof){
  // Split the URL by "/" and return the last part
  const parts = proof.split('/');
  return parts.pop() || parts.pop();  // Handles cases where URL ends with "/"
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
          <span className="name">{getName(data, lang)}</span><br/>
          <span>
            <span className="fa-solid fa-up-right-from-square printHiddeen">&nbsp;</span>
            <a target="_blank" href={data.proof} className="certificate-id">
              {getId(data.proof)}
            </a>
          </span>
        </div>
        <div>
          <span className="issuer">{data.issuer}</span>
        </div>
      </header>
    </section>
  );
}

function Certificates({data, lang }){
  if(data){
    const certificates = data.filter((cert) => cert.display != false);
    return (
      <section className="section">
        <header>
          <h2 className="section-title">
            {getTitle(lang)}
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