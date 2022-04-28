import AddStep from '../AddStep';
import { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdRemoveCircle } from 'react-icons/md';
import api from 'helpers/api';
import { useParams } from 'react-router-dom';

import './styles.css';

export default function Category({ section }) {
    const [steps, setSteps] = useState(section.steps);
    const { id } = useParams();

    const remove = async stepId => {
        const result = await api.patch(
            `/api/projects/me/section/${section._id}/step/${stepId}`,
            { stepId, id }
        );
        console.log(result);
    };

    const add = async stepId => {
        const result = await api.remove(
            `/api/projects/me/section/${section._id}/step/${stepId}`,
            { stepId, id }
        );
        console.log(result);
    };

    return (
        <div style={{ order: section.column }} className="category">
            <h2>{section.name}</h2>
            <div className="steps">
                {steps &&
                    steps.map((step, key) => (
                        <div key={key} className="step">
                            <div className="step-text">
                                <h4>{step.title}</h4>
                                <p>{step.description}</p>
                            </div>
                            <div className="step-actions">
                                <MdRemoveCircle
                                    className="remove"
                                    onClick={() => remove(step._id)}
                                />
                                <BsFillCheckCircleFill
                                    className="add"
                                    onClick={() => add(step._id)}
                                />
                            </div>
                        </div>
                    ))}
                <AddStep
                    sectionId={section._id}
                    updateSteps={newstep => setSteps([...steps, newstep])}
                />
            </div>
        </div>
    );
}
