import fetch from 'isomorphic-fetch';
import {API, rapidAPI} from '../config'

export const getStatic = (lastName, firstName) => {
    return fetch(`${API}/players-stats/${lastName}/${firstName}`, {
        method: 'GET',      
    }).then(response => {
        return response.json();
    }).catch(error => console.log(error))
}

export const rapidStats = (lastName) => {
    return fetch(`${rapidAPI}/players/${lastName}/${firstName}`, {
        method: 'GET',      
    }).then(response => {
        return response.json();
    }).catch(error => console.log(error))
}