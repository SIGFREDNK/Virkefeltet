const post = async (url, body) => {
    return await fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body
    })
        .then(response => {
            response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log(error);
        });
};

const api = { post };

export default api;
