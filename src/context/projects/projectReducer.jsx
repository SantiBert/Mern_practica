import {
    FORM_PROJECT, 
    GET_PROJECTS, 
    CREATE_PROJECTS, 
    VALID_FORM,
    ACTUAL_PROJECT,
    DELETE_PROJECT
} from '../../types';

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
        case CREATE_PROJECTS:
            return {
                ...state,
                projetcs:[...state.projetcs, action.payload],
                formulario:false,
                errorForm: false,
            }
        case VALID_FORM:
            return {
                ...state,
                errorForm: true,
            }
        case ACTUAL_PROJECT:
            return {
                ...state,
                project: state.projetcs.filter(project => project.id === action.payload)
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projetcs: state.projetcs.filter(project => project.id !== action.payload),
                project:null
            }
        default:
            return state;
    }
}