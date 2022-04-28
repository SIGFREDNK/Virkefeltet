import { useEffect, useState } from 'react';

export default function useFetch(url, options) {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, {
            method: 'GET',
            credentials: 'include',
            signal: abortController.signal
        })
            .then(response => {
                if (response.status.toString().startsWith('5')) {
                    throw Error('Vi kunne desværre ikke hente dine data');
                }
                return response.json();
            })
            .then(data => {
                if (data.status === 'failed') throw Error(data.message);
                setData(data.data.docs);
                setPending(false);
                setError(null);
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setPending(false);
                    setError(error.message);
                }
            });

        return () => abortController.abort();
    }, [url]);

    return { data, pending, error };
}
