import React from 'react';

import Basics from './components/Basics';
import Skills from './components/Skills';
import Work from './components/Work';
import Volunteer from './components/Volunteer';
import Education from './components/Education';
import Awards from './components/Awards';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Languages from './components/Languages';
import Interests from './components/Interests';
import References from './components/References';

import '../src/style.css';

const DEFAULT_LANG = 'en';
const SUPPORTED_LANGS = ['en', 'fr', 'es', 'de', 'it'];

const Bufferbloat = ({ resumeData, lang, pdf }) => {
    lang ??= DEFAULT_LANG;

    if(SUPPORTED_LANGS.indexOf(lang) === -1) 
        return <div>Error: lang {lang} is not supported - Possible values: {SUPPORTED_LANGS.join(', ')}</div>;

    return (
        <div id="resume">
            <Basics data={resumeData.basics} lang={lang} pdf={pdf} />
            <Skills data={resumeData.skills} lang={lang} />
            <Work data={resumeData.work} lang={lang} />
            <Volunteer data={resumeData.volunteer} lang={lang} />
            <Education data={resumeData.education} lang={lang} />
            <Awards data={resumeData.awards} lang={lang} />
            <Certificates data={resumeData.certificates} lang={lang} />
            <Projects data={resumeData.projects} lang={lang} />
            <Publications data={resumeData.publications} lang={lang} />
            <Languages data={resumeData.languages} lang={lang} />
            <Interests data={resumeData.interests} lang={lang} />
            <References data={resumeData.references} lang={lang} />
        </div>
    );
}


export default Bufferbloat;
