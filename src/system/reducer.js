import { combineReducers } from 'redux';
import info_iss from '../components/pages/headerList/Projects/components/PositionISS/reducer';
import info_weather from '../components/pages/headerList/Projects/components/Weather/reducer'

export default combineReducers({
    info_iss,
    info_weather
});
