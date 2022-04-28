import useFetch from 'hooks/useFetch';
import Layout from 'layouts/app';
import AddSection from './AddSection';
import Category from './Category';
import { useParams } from 'react-router-dom';
import { FaShare, FaPlus, FaSlidersH, FaEllipsisH } from 'react-icons/fa';

import './styles.css';

export default function Project() {
    const { id } = useParams();

    const {
        data: project,
        pending,
        error
    } = useFetch(`/api/projects/me/${id}`);

    return (
        <Layout
            pageName={project ? project.name : 'Indlæser...'}
            pageClass={'project'}
            pageNumber={3}
        >
            <div className="">
                <div className="project-page">
                    <div className="options">
                        <FaPlus />
                        <FaShare />
                        <FaSlidersH />
                        <FaEllipsisH />
                    </div>
                    {error && <div>{error}</div>}
                    {pending && <div>Indlæser...</div>}
                    {project && (
                        <div className="categories">
                            {project.sections &&
                                project.sections.map((section, index) => (
                                    <Category key={index} section={section} />
                                ))}
                            <AddSection project={project} id={project._id} />
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
