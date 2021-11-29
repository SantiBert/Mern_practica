import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
        FORM_PROJECT, 
        GET_PROJECTS, 
        CREATE_PROJECTS,
        VALID_FORM,
        ACTUAL_PROJECT,
        DELETE_PROJECT
    } 
from '../../types';

const ProjectState = props => {

    const projetcs = [
        { id:1, name: 'Tienda virtual' },
        { id:2, name: 'Devops' },
        { id:3, name: 'Diseño de sitio web' },
    ]
  
    const initialState = {
        projetcs: [],
        formulario: false,
        errorForm: false,
        project: null
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

    const createProject = project =>{
        project.id = uuidv4();

        dispatch({
            type:CREATE_PROJECTS,
            playload:project
        })
    }

    const showError = () =>{
        dispatch({
            type:VALID_FORM,

        })
    }

    const actualProject = projetcId =>{
        dispatch({
            type:ACTUAL_PROJECT,
            payload:projetcId
        })
    }

    const deleteProject = projetcId =>{
        dispatch({
            type:DELETE_PROJECT,
            payload:projetcId
        })
    }


    return (
        <projectContext.Provider
            value={{
                projetcs: state.projetcs,
                formulario: state.formulario,
                errorForm:state.errorForm,
                project:state.project,
                showForm,
                actualProject,
                getProjects,
                createProject,
                deleteProject,
                showError
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;