import React, { useReducer } from "react";

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {FORM_PROJECT, GET_PROJECTS} from '../../types';

const ProjectState = props => {

    const projetcs = [
        { id:1, name: 'Tienda virtual' },
        { id:2, name: 'Devops' },
        { id:3, name: 'Diseño de sitio web' },
    ]
  
    const initialState = {
        projetcs: [],
        formulario: false
    }

    const [state, dispatch] = useReducer(projectReducer, initialState);

    const showForm = () =>{
        dispatch({
            type:FORM_PROJECT
        })
    }

    const getProjects = () =>{
        dispatch({
            type:GET_PROJECTS,
            payload:projetcs
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