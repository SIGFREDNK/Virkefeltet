import FormLayout from 'layouts/form';
import { Form } from '@virkefeltet/ui';
import { habit } from 'constants/form';
import api from 'helpers/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NewItem from '../NewItem';

import './styles.css';
import '../styles.css';

const habits = [
    { id: 1, value: 'Oprydning' },
    { id: 2, value: 'Spis slik' },
    { id: 3, value: 'Svøm' }
];

const categories = [
    { id: 1, value: 'Hjem' },
    { id: 2, value: 'Arbejde' }
];

export default function CreateHabit({ formType }) {
    const [data, setData] = useState(habit.DEFAULT_VALUES);
    const navigate = useNavigate();

    const changeData = (name, value) => {
        setData(prevData => {
            return { ...prevData, [name]: value };
        });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const result = await api.post('/api/habits/me', data);
        if (result.status === 'success') return navigate(-1);
        console.log(result.message);
    };

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
            {data.type === 'Opret ny' && (
                <NewItem
                    name={data.name}
                    description={data.description}
                    category={data.category}
                    categories={categories}
                    changeData={changeData}
                />
            )}
            <Form.Dropdown
                setValue={changeData}
                value={data.interval}
                name="interval"
                options={habit.DAY_PICKER}
            />
            <Form.Input
                type="number"
                placeholder="Antal gange"
                value={data.numberOfTimes}
                setValue={changeData}
                name="numberOfTimes"
            />
            <div className="form-group active">
                <span>Aktiver med det samme: </span>
                <Form.Switch
                    name="active"
                    setValue={changeData}
                    value={data.active}
                />
            </div>
        </FormLayout>
    );
}
