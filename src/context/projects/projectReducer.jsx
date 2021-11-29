import {FORM_PROJECT, GET_PROJECTS} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                formulario:true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projetcs:action.payload
            }
        default:
            return state;
    }
}