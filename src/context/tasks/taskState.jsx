import React, { useReducer } from "react";
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { v4 as uuidv4 } from 'uuid';

import {
    TASKS_PROJECT,
    CREATE_TASK,
    VALID_TASK,
    DELETE_TASK,
    TASK_STATE,
    ACTUAL_TASK,
    UPDATE_TASK,
    CLEAR_TASK
} 
from '../../types';

const TaskState = props =>{
    const initialState = {
        task: [
            { id:1, name: 'ELegir plataforma', status: true, proyectID:1 },
            { id:2, name: 'Elegir colores', status: false, proyectID:2 },
            { id:3, name: 'Elegir plataforma de pago', status: true, proyectID: 3},
            { id:4, name: 'Elegir hosting', status: false, proyectID:4 },
            { id:5, name: 'ELegir plataforma', status: true, proyectID:1 },
            { id:6, name: 'Elegir colores', status: false, proyectID:2 },
            { id:7, name: 'Elegir plataforma de pago', status: true, proyectID: 3},
            { id:8, name: 'Elegir hosting', status: false, proyectID:4 },
            { id:9, name: 'ELegir plataforma', status: true, proyectID:1 },
            { id:10, name: 'Elegir colores', status: false, proyectID:2 },
            { id:11, name: 'Elegir plataforma de pago', status: true, proyectID: 3},
            { id:12, name: 'Elegir hosting', status: false, proyectID:4 },
        ],
        tasksprojects:null,
        errortask:false, 
        selectedTask:null
    }

    const [state, dispatch] = useReducer(TaskReducer,initialState);

    const getTask = proyectID =>{
        dispatch({
            type:TASKS_PROJECT,
            payload:proyectID
        })
    }

    const createTask = task =>{
        task.id = uuidv4();
        dispatch({
            type:CREATE_TASK,
            payload:task
        })
    }

    const validateTask = task =>{
        dispatch({
            type:VALID_TASK
        })
    }

    const deleteTask = id =>{
        dispatch({
            type:DELETE_TASK,
            payload:id
        })
    }

    const changeStateTask = task =>{
        dispatch({
             type: TASK_STATE,
             payload: task
        })
    }

    const setActualTask = task =>{
        dispatch({
             type: ACTUAL_TASK,
             payload: task
        })
    }

    const updateTask = task =>{
        dispatch({
             type: UPDATE_TASK,
             payload: task
        })
    }

    const clearnerTaskSelected = () =>{
        dispatch({
             type: CLEAR_TASK,
        })
    }

    return (
        <TaskContext.Provider
            value={{
                task:state.task,
                tasksprojects: state.tasksprojects,
                errortask:state.errortask,
                selectedTask:state.selectedTask,
                getTask,
                createTask,
                validateTask,
                deleteTask,
                changeStateTask,
                setActualTask,
                updateTask,
                clearnerTaskSelected
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;