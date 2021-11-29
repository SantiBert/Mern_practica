import React, { useReducer } from "react";

import projectContext from './projectContext';
import projectReducer from './projectReducer';



const ProjectState = props => {

  
    const initialState = {
        formulario: false
    }

    const [state, dispatch] = useReducer(projectReducer, initialState);


    return (
        <projectContext.Provider
            value={{
                formulario: state.formulario,
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;