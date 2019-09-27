import {
    API_ISS, API_PEOPLE_ON_ISS
} from '../../../../../../system/settings';

export const getApiPosISS = () => {

    const url = `${API_ISS}`;

    return fetch(url).then(response => {
        return response.json();
    }).catch(error => console.error(error));
}

export const getPeoplesOnISS = () => {
    const url = `${API_PEOPLE_ON_ISS}`;

    return fetch(url).then(response => {
        return response.json();
    }).catch(error => console.error(error));
}