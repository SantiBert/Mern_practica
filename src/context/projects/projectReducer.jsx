import {FORM_PROJECT} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                formulario:true
            }
        default:
            return state;
    }
}