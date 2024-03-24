// const host = 'http://localhost:3030/' ;
const host = 'https://acupunktura.onrender.com/' ;

const request = async (method,url, data) => {
    const options = {
        method,
        headers: {}
    };

    if (data != undefined) {
        options.headers['Content-type'] = 'application/json' ;
        options.body = JSON.stringify(data);

    };

    try {
        const responce = await fetch(host + url, options);
        if (!responce.ok) {
            console.log(responce);
            const err = await responce.json();
            throw new Error(err.message)
        }
        return responce.json()
    } catch (error) {
        throw error;

    }
};
export const get = request.bind(null,'GET');
export const post = request.bind(null,'POST');
export const put = request.bind(null,'PUT');
export const del = request.bind(null,'DELETE');
