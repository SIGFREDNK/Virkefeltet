import { BsFlag, BsFlagFill, BsCalendar4Event } from 'react-icons/bs';
import { getScrollHeight } from 'helpers/utils';
import { useState } from 'react';
import api from 'helpers/api';

import './styles.css';

export default function AddStep({ sectionId, updateSteps }) {
    const [stepName, setStepName] = useState('');
    const [stepDescription, setStepDescription] = useState('');
    const [addStep, setAddStep] = useState(false);
    const [priority, setPriority] = useState(false);

    const updateDescription = element => {
        setStepDescription(element.value);
        var minRows = element.getAttribute('data-min-rows') | 0,
            rows;
        !element._baseScrollHeight && getScrollHeight(element);

        element.rows = minRows;
        rows = Math.ceil(
            (element.scrollHeight - element._baseScrollHeight) / 16
        );
        element.rows = minRows + rows;
    };

    const reset = () => {
        setStepName('');
        setStepDescription('');
        setAddStep(false);
        setPriority(false);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const result = await api.patch(`/api/projects/me/${sectionId}`, {
            stepName,
            stepDescription,
            priority
        });
        console.log(result);
        updateSteps({
            title: stepName,
            description: stepDescription,
            priority
        });
        reset();
    };

    const cancelStep = event => {
        event.preventDefault();
        setAddStep(false);
    };

    if (addStep)
        return (
            <form
                action="#"
                method="POST"
                onSubmit={event => handleSubmit(event)}
            >
                <div className="new-step-input">
                    <div>
                        <input
                            type="text"
                            placeholder="Opgavenavn"
                            onChange={event => setStepName(event.target.value)}
                            value={stepName}
                        />
                        <textarea
                            placeholder="Beskrivelse"
                            name="description"
                            className="textarea"
                            rows="1"
                            data-min-rows="1"
                            autoFocus
                            onChange={event => updateDescription(event.target)}
                            value={stepDescription}
                        />
                    </div>
                    <div className="toolbar">
                        <BsCalendar4Event />
                        {!priority && (
                            <BsFlag
                                onClick={() => setPriority(true)}
                                className="flag"
                            />
                        )}
                        {priority && (
                            <BsFlagFill
                                onClick={() => setPriority(false)}
                                className="flag"
                            />
                        )}
                    </div>
                </div>
                <div className="form-actions">
                    <input
                        type="submit"
                        className="add-new-step"
                        value="Tilføj opgave"
                    />
                    <button
                        className="cancel-step"
                        onClick={event => cancelStep(event)}
                    >
                        Annuller
                    </button>
                </div>
            </form>
        );

    return (
        <button className="add-step" onClick={() => setAddStep(true)}>
            Tilføj opgave
        </button>
    );
}
