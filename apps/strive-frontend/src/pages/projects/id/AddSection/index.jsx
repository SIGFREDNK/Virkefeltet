import api from 'helpers/api';
import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';

import './styles.css';

export default function AddSection({ project, id }) {
    const [sectionName, setSectionName] = useState('');

    const createSection = async event => {
        event.preventDefault();
        const result = await api.post('/api/projects/me/section', {
            sectionName,
            column: project.sections.length ? project.sections.length : 0,
            id
        });
        console.log(result.message);
    };

    return (
        <div className="add-section">
            <input
                type="text"
                placeholder="Tilføj ny sektion..."
                onChange={event => setSectionName(event.target.value)}
                value={sectionName}
            />
            <button onClick={createSection}>
                <FaPlus />
            </button>
        </div>
    );
}
