import { FORM_PROJECT, GET_PROJECT } from '../../types/index';

export default (state, action) => {
    switch (action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                formulario: true
            }
        case GET_PROJECT:
            return {
                ...state,
                projects: action.payload
            }
        default:
            return state;
    }
}