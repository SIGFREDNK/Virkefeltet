import { useEffect } from 'react';
import useFetch from 'hooks/useFetch';

import Task from './Task';
import Habit from './Habit';
import Layout from 'layouts/app';

import './styles.css';

export default function Schedule({ pageNumber, setPageNumber, user }) {
    useEffect(() => {
        setPageNumber(1);
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
            setPageNumber={setPageNumber}
        >
            <div className="task-wrapper wrapper">
                <h2>Opgaver</h2>
                <div className="tasks responsive-grid">
                    {taskError && <div>{taskError}</div>}
                    {taskPending && <div>Indlæser...</div>}
                    {tasks &&
                        tasks.map(task => (
                            <Task
                                key={task.id}
                                title={task.name}
                                text={task.description}
                            />
                        ))}
                </div>
            </div>
            <div className="habits-wrapper wrapper">
                <h2>Vaner</h2>
                <div className="habits responsive-grid">
                    {habitError && <div>{habitError}</div>}
                    {habitPending && <div>Indlæser...</div>}
                    {habits &&
                        habits.map(habit => (
                            <Habit
                                key={habit.id}
                                title={habit.name}
                                text={habit.description}
                            />
                        ))}
                </div>
            </div>
        </Layout>
    );
}
