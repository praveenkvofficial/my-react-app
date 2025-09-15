import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        setData(null);
        fetch(url)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('HTTP error! status: ' + response.status);
                }
                return response.json();
            })
            .then(function(result) {
                setData(result);
                setError(null);
            })
            .catch(function(err) {
                setError(err.message);
                setData(null);
            })
            .finally(function() {
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
