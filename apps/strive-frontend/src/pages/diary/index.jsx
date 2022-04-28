import useFetch from 'hooks/useFetch';
import { useEffect } from 'react';

import DiaryEntry from './DiaryEntry';
import Layout from 'layouts/app';

import './styles.css';

export default function Diary({ pageNumber, setPageNumber }) {
    useEffect(() => {
        setPageNumber(5);
    }, [setPageNumber]);

    const { data: diary, pending, error } = useFetch('/api/diary/me');

    return (
        <Layout pageName={'Dagbog'} pageClass={'diary'} pageNumber={pageNumber}>
            {error && <div>{error}</div>}
            {pending && <div>Indlæser...</div>}
            {diary &&
                diary.map(entry => (
                    <DiaryEntry
                        date={entry.date}
                        key={entry._id}
                        title="Titel"
                        content={entry.content}
                    />
                ))}
        </Layout>
    );
}
