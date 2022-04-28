import useFetch from 'hooks/useFetch';
import { useEffect, useState } from 'react';
import { FaSun, FaCalendar, FaUserFriends } from 'react-icons/fa';
import { BsFilterCircleFill } from 'react-icons/bs';

import Task from './Task';
import Habit from './Habit';
import Layout from 'layouts/app';

import './styles.css';

export default function Schedule({ pageNumber, setPageNumber }) {
    const [daily, setDaily] = useState(true);
    const [social, setSocial] = useState(false);
    const [filter, setFilter] = useState(false);

    useEffect(() => {
        setPageNumber(2);
    }, [setPageNumber]);

    const {
        data: tasks,
        pending: taskPending,
        error: taskError
    } = useFetch('/api/tasks/me');

    const {
        data: habits,
        pending: habitPending,
        error: habitError
    } = useFetch('/api/habits/me');

    return (
        <Layout
            pageName={'Dagsplan'}
            pageClass={'schedule'}
            pageNumber={pageNumber}
        >
            <div className="toolbar">
                <button
                    className="social"
                    onClick={() => setSocial(social ? false : true)}
                    style={{
                        backgroundColor: social ? '#03a9f4' : '#ebf7fc'
                    }}
                >
                    <FaUserFriends
                        style={{ color: social ? '#ffffff' : '#000000' }}
                    />
                </button>
                <div className="subpage">
                    <button
                        className={`${daily && 'selected'}`}
                        onClick={() => setDaily(true)}
                    >
                        <FaSun />
                    </button>
                    <button
                        className={`${!daily && 'selected'}`}
                        onClick={() => setDaily(false)}
                    >
                        <FaCalendar />
                    </button>
                </div>
                <button
                    className="filter"
                    onClick={() => setFilter(filter ? false : true)}
                    style={{
                        backgroundColor: filter ? '#03a9f4' : '#ebf7fc'
                    }}
                >
                    <BsFilterCircleFill
                        style={{ color: filter ? '#ffffff' : '#000000' }}
                    />
                </button>
            </div>
            <div className="task-wrapper wrapper">
                <h2 className="subtitle">Opgaver</h2>
                <div className="tasks responsive-grid">
                    {taskError && <div>{taskError}</div>}
                    {taskPending && <div>Indlæser...</div>}
                    {tasks &&
                        tasks.map(task => (
                            <Task
                                key={task.id}
                                title={task.name}
                                text={task.description}
                                category={task.category}
                                date={task.date}
                            />
                        ))}
                </div>
            </div>
            <div className="habits-wrapper wrapper">
                <h2 className="subtitle">Vaner</h2>
                <div className="habits responsive-grid">
                    {habitError && <div>{habitError}</div>}
                    {habitPending && <div>Indlæser...</div>}
                    {habits &&
                        habits.map(habit => (
                            <Habit
                                key={habit.id}
                                id={habit.id}
                                title={habit.name}
                                text={habit.description}
                                category={habit.category}
                                interval={habit.interval}
                                numberOfTimes={habit.numberOfTimes}
                            />
                        ))}
                </div>
            </div>
        </Layout>
    );
}
