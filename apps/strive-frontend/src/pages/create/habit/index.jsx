import FormLayout from 'layouts/form';
import { Form } from '@virkefeltet/ui';

import './styles.css';
import '../styles.css';
import { useState } from 'react';

const habits = [
    { id: 1, value: 'Oprydning' },
    { id: 2, value: 'Spis slik' },
    { id: 3, value: 'Svøm' }
];

export default function CreateHabit({ formType }) {
    const [data, setData] = useState({ type: 'Opret ny', habit: '' });

    const changeData = (name, value) => {
        setData(prevData => {
            return { ...prevData, [name]: value };
        });
    };

    const handleSubmit = () => {};

    return (
        <FormLayout
            title={'Ny Vane'}
            pageClass={'create-habit'}
            submit={handleSubmit}
        >
            <Form.Dropdown
                options={[
                    { id: 1, value: 'Brug eksisterende' },
                    { id: 2, value: 'Opret ny' }
                ]}
                setValue={changeData}
                value={data.type}
                name="type"
            />
            {data.type === 'Brug eksisterende' && (
                <Form.Search
                    options={habits}
                    setValue={changeData}
                    value={data.habit}
                    label="Vælg vane"
                    name="habit"
                />
            )}
            {data.type === 'Opret ny' && <div>Hello</div>}
        </FormLayout>
    );
}
