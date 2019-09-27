import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import { getApiWeatherFoCityName } from './service';
import img from './img/search.png'


function Weather(props) {

    const {
        isWeather,
        setWeather,
        weatherInfo,
        city_name
    } = props;

    const urlImg = 'https://www.weatherbit.io/static/img/icons/';
    const png = '.png';

    function poisk(e) {
        if (e.key === 'Enter' ) {

            getApiWeatherFoCityName(e.target.value).then(data => {
                if (data !== undefined) {
                    setWeather(data.data[0], true);
                }
                else {
                    alert('Error City Name!')
                }
            })
        }
        if(e.target.tagName === 'IMG'){
            console.dir(e.target);
            getApiWeatherFoCityName(e.target.parentElement.parentElement.children[0].value).then(data => {
                if (data !== undefined) {
                    setWeather(data.data[0], true);
                }
                else {
                    alert('Error City Name!')
                }
            })
        }

    }
    // console.log(urlImg + weatherInfo.weather.icon + png, " - 222222222222222222222")
    return (
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="поиск - через запятую можно уточнить страну(пример: город,страна)" onKeyDown={poisk}></input>
                <button type="submit" className="searchButton" onClick={poisk}>
                    <img src={img} />
                </button>
            </div>
            {
                isWeather ?
                    <div id='postWather'>
                        <div>
                            {isWeather ? <p>{weatherInfo.city_name}</p> : null}
                            {isWeather ? <p>{weatherInfo.ob_time}</p> : null}
                        </div>


                        <div>
                            {isWeather ? <p>{weatherInfo.temp}°C</p> : null}
                            {isWeather ? <img src={urlImg + weatherInfo.weather.icon + png} /> : null}
                        </div>

                        {isWeather ? <p>Ветер: {weatherInfo.wind_spd.toFixed(1)}м/с</p> : null}
                        {isWeather ? <p>Давление: {weatherInfo.pres.toFixed()}мм рт. ст.</p> : null}
                        {isWeather ? <p>Влажность: {weatherInfo.rh}%</p> : null}

                    </div>
                    : null
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setWeather: (weatherInfo, isWeather) => {
            dispatch({ type: 'SET_WEATHER', weatherInfo, isWeather });
        },

    }
}

const mapStateToProps = state => {
    return {
        weatherInfo: state.info_weather.weatherInfo,
        isWeather: state.info_weather.isWeather
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

