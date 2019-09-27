import {
    UrlWeather, Key
} from '../../../../../../system/settings';

export const getApiWeatherFoCityName = (city) => {


    const url = `${UrlWeather}${city}${Key}`;

    return fetch(url).then(response => {
        return response.json();
    }).catch(error => console.error(error));
}
