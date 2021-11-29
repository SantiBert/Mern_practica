import React, { useReducer } from "react";

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {FORM_PROJECT} from '../../types';

const ProjectState = props => {
  
    const initialState = {
        projetcs: [
            { id:1, name: 'Tienda virtual' },
            { id:2, name: 'Devops' },
            { id:3, name: 'Diseño de sitio web' },
        ],
        formulario: false
    }

    const [state, dispatch] = useReducer(projectReducer, initialState);

    const showForm = () =>{
        dispatch({
            type:FORM_PROJECT
        })
    }

    return (
        <projectContext.Provider
            value={{
                projetcs: state.projetcs,
                formulario: state.formulario,
                showForm
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;