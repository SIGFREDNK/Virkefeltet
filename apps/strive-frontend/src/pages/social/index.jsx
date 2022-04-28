import Layout from 'layouts/app';
import { useEffect } from 'react';

import './styles.css';

export default function Social({ pageNumber, setPageNumber }) {
    useEffect(() => {
        setPageNumber(6);
    }, [setPageNumber]);
    return (
        <Layout
            pageName={'Social'}
            pageClass={'social'}
            pageNumber={pageNumber}
        >
            Hello world
        </Layout>
    );
}
