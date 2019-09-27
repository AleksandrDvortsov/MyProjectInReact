const initialState = {
    weatherInfo: null,
    isWeather: false,
}

export default function (state = initialState, action) {
    console.log(action)
    if(action.type === 'SET_WEATHER') {
        return {
            ...state,
            weatherInfo: action.weatherInfo,
            isWeather: action.isWeather
        }
    }
   
    return state;
}