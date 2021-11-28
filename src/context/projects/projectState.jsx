import React, { useReducer } from "react";

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { FORM_PROJECT, GET_PROJECT } from '../../types/index';


const ProjectState = props => {

    const projects = [
        { id: 0, name: 'Tienda virtual' },
        { id: 1, name: 'Devops' },
        { id: 2, name: 'Diseño de sitio web' },
    ]

    const initialState = {
        projetcs: [],
        formulario: false
    }

    const [state, dispatch] = useReducer(projectReducer, initialState);

    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECT,
            payload: projects
        })
    }

    return (
        <projectContext.Provider
            value={{
                projetcs: state.projetcs,
                formulario: state.formulario,
                showForm,
                getProjects
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;