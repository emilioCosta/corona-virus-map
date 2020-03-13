import axios from 'axios';

const BASE_URL = 'http://api-coronavirus.herokuapp.com';

export const getAllBrazilStatus = () => {
    return axios.get(`${BASE_URL}/brazil/total`,  {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
};

export const getAllWorldStatus = () => {
    return axios.get(`${BASE_URL}/world/total`);
};

export const getLastBrazilStatus = () => {
    return axios.get(`${BASE_URL}/brazil/last`,  {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
};

export const getLastWorldStatus = () => {
    return axios.get(`${BASE_URL}/world/last`);
};
