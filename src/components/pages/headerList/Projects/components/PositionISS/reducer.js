const initialState = {
    position: { lat: 0, lng: 0 },
    peoples:{},
}

export default function (state = initialState, action) {
    if(action.type === 'SET_POSITION') {
        return {
            ...state,
            position: action.position
        }
    }
    if(action.type === 'SET_PEOPLE_ON_ISS') {
        return {
            ...state,
            peoples: action.peoples
        }
    }
    return state;
}