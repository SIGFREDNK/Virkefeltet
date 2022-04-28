import useFetch from 'hooks/useFetch';

import Skill from './Skill';
import Layout from 'layouts/app';

import './styles.css';
import { useEffect } from 'react';

export default function Skills({ pageNumber, setPageNumber }) {
    useEffect(() => {
        setPageNumber(4);
    }, [setPageNumber]);

    const { data: skills, pending, error } = useFetch('/api/skills/me');

    return (
        <Layout pageName={'Evner'} pageClass={'skills'} pageNumber={pageNumber}>
            <h2>Evner</h2>
            <div className="skills-wrapper responsive-grid">
                {error && <div>{error}</div>}
                {pending && <div>Indlæser...</div>}
                {skills &&
                    skills.map(skill => (
                        <Skill key={skill.id} name={skill.name} />
                    ))}
            </div>
        </Layout>
    );
}
