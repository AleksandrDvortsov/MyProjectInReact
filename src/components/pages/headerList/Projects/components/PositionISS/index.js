import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import GoogleMap from './GoogleMap'
import { getApiPosISS, getPeoplesOnISS } from './service'
import './style.scss';
import ItemPeople from './ItemPeople';

const TIME_UPDATE_POSITION_ISS = 5000;

function PositionISS(props) {
    const {
        position,
        setPositionISS,
        setPeopleOnISS,
        peoples
    } = props;

    useEffect(() => {
        updatePosition();

        getPeoplesOnISS().then(data => {
            setPeopleOnISS(data.people)
        });

        setInterval(() => {
            updatePosition();
        }, TIME_UPDATE_POSITION_ISS)

    }, []);

    function updatePosition() {
        getApiPosISS().then((data) => {
            setPositionISS({ lat: data.iss_position.latitude, lng: data.iss_position.longitude });
        });
    }

    return (
        <div id='conteinerISS'>
            <div id="map">
                <GoogleMap position={position} />
            </div>

            <div id='infoISS'>
                <h4>Update position ISS every 5s.</h4>
                <h3>People in ISS: {peoples.length}</h3>
                <ItemPeople peoples={peoples} />
            </div>
        </div>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        setPositionISS: position => {
            dispatch({ type: 'SET_POSITION', position });
        },
        setPeopleOnISS: peoples => {
            dispatch({ type: 'SET_PEOPLE_ON_ISS', peoples });
        },
    }
}

const mapStateToProps = state => {
    return {
        position: state.info_iss.position,
        peoples: state.info_iss.peoples,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionISS);
