import { useEffect, useState } from 'react';

export default function useFetch(url, options) {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    if (!options) options = { method: 'GET', credentials: 'include' };

    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, { ...options, signal: abortController.signal })
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
    }, [url, options]);

    return { data, pending, error };
}
