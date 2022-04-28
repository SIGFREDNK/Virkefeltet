import useFetch from 'hooks/useFetch';
import { useEffect } from 'react';

import Project from './Project';
import Layout from 'layouts/app';

import './styles.css';

export default function Projects({ pageNumber, setPageNumber }) {
    useEffect(() => {
        setPageNumber(3);
    }, [setPageNumber]);

    const { data: projects, pending, error } = useFetch('/api/projects/me');

    return (
        <Layout
            pageName={'Projekter'}
            pageClass={'projects'}
            pageNumber={pageNumber}
        >
            <div className="project-wrapper responsive-grid">
                {error && <div>{error}</div>}
                {pending && <div>Indlæser...</div>}
                {projects &&
                    projects.map(project => (
                        <Project
                            key={project.id}
                            name={project.name}
                            link={`/projects/${project._id}`}
                        />
                    ))}
            </div>
        </Layout>
    );
}
