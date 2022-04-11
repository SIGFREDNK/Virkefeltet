import NewTask from './NewTask';
import Intervals from './Intervals';

import FormLayout from 'layouts/form';
import { Form } from '@virkefeltet/ui';

import './styles.css';
import '../styles.css';

import { useState } from 'react';
import { task } from 'constants/form';

const categories = [
    { id: 1, value: 'Hjem' },
    { id: 2, value: 'Arbejde' }
];
const tasks = [
    { id: 1, value: 'Oprydning' },
    { id: 2, value: 'Spis slik' },
    { id: 3, value: 'Svøm' }
];

export default function CreateTask({ formType }) {
    const [data, setData] = useState(task.DEFAULT_VALUES);

    const changeData = (name, value) => {
        setData(prevData => {
            return { ...prevData, [name]: value };
        });
    };

    const handleSubmit = () => {};

    return (
        <FormLayout
            title={'Ny Opgave'}
            pageClass={'create-task'}
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
                    options={tasks}
                    setValue={changeData}
                    value={data.task}
                    label="Vælg opgave"
                    name="task"
                />
            )}
            {data.type === 'Opret ny' && (
                <NewTask
                    taskName={data.taskName}
                    description={data.description}
                    category={data.category}
                    categories={categories}
                    changeData={changeData}
                />
            )}
            <Form.Dropdown
                options={task.TIME_OPTIONS}
                setValue={changeData}
                value={data.time}
                name="time"
            />
            {data.time === 'Interval' && (
                <Intervals
                    interval={data.interval}
                    weekday={data.weekday}
                    monthDay={data.monthDay}
                    month={data.month}
                    changeData={changeData}
                />
            )}
            {data.time === 'Dato' && (
                <Form.DateSelector
                    listener={changeData}
                    value={data.date}
                    disablePast={true}
                    name="date"
                />
            )}
            {(data.time === 'Dato' || data.time === 'Interval') && (
                <Form.Clock
                    name="timeStamp"
                    setValue={changeData}
                    value={data.timeStamp}
                />
            )}
            {data.time === 'Periode' && (
                <Form.DateRangePicker
                    disablePast={true}
                    startDateName="startDate"
                    startDateValue={data.startDate}
                    endDateName="endDate"
                    endDateValue={data.endDate}
                    setValue={changeData}
                />
            )}
        </FormLayout>
    );
}
